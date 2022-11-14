const fs = require("fs");

exports.readJsonFromFile = (filePath) =>{
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, function (err, buf) {
            if(err) reject(err)
            resolve(JSON.parse(buf.toString()))
        })
    })
}

exports.writeJsonFromFile = (filePath, data) =>{
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, JSON.stringify(data), (err) => {
            if (err) reject(err)
            resolve()
        })
    })
}