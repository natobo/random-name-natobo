const messages = [
    "Oscar",
    "Nicolay",
    "Yesica",
    "Diego",
    "Laura",
    "Catalina",
    "Daniel"
]

const randomMsg = ()=> {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = { randomMsg };