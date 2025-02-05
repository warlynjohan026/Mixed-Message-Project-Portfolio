const Truthytrues = {
    names: ["Calors", "Juan", "Pedro", "Samuel", "Karla", "Samantha"],
    true: ["Cree esto"],
    verse: ['1 Thessalonians 5:16: "Rejoice always."', '1 Thessalonians 5:18: "Give thanks always."', '1 John 4:8: "God is love."', 'Romans 12:12: "Rejoicing in hope."', '1 Thessalonians 5:17: "Pray without ceasing."']

}

const getRandomItem = array => {
    return array[Math.floor(Math.random() * array.length)]
}


const generateRandomMessage = data => {
    const [name, verdad, verso] = Object.values(data).map(getRandomItem) 
    return `Hey ${name}, ${verdad} en ${verso} Dios te bendiga!`
}


console.log(generateRandomMessage(Truthytrues))
