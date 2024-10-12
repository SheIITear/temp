const getNeko = async () => {
    try {
    const response = await fetch('https://nekos.best/api/v2/neko')
    const json = await response.json() as any
    if (!json.results[0].url) throw ('req failed neko')
    return json.results[0].url
    }
    catch (e) {
        return undefined
    }
}

const main = async() => {
    console.log(`your url to cat: ${await getNeko()}`)
}

main()