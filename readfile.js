const fs = require("fs")

fs.readFile("./names.txt", 'utf-8', (err, data) => {
    console.log(data)
})