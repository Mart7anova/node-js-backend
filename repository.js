
const fs = require('fs')

exports.getUsers = () => {
    return new Promise((resolve, reject)=>{
        fs.readFile('bd', function (err, buf) {
            resolve(JSON.parse(buf.toString()))
        })
    })
}

exports.addUsers = (id, name) =>{
    users.push({id, name})
}
