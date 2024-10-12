const http = require('http');
const { exec } = require('child_process');
const port = 8000;

const server = http.createServer((req, res) => {
    exec('ts-node neko.ts', (error, stdout, stderr) => {
        if (error) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end(`Stderr: ${stderr}`);
            return;
        }
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(stdout);
    });
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});