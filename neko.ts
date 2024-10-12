const getNeko = async () => {
    try {
    const response = await fetch('https://api.thecatapi.com/v1/images/search?format=json')
    const json = await response.json() as any
    if (!json[0].url) throw ('req failed neko')
    return json[0].url
    }
    catch (e) {
        return undefined
    }
}

const main = async() => {
    console.log(`your url to cat: ${await getNeko()}`)
}

main()
