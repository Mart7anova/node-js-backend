const fs = require('fs')

exports.getUsers = getUsers = async () => {
    return new Promise((resolve, reject) => {
        fs.readFile('db', function (err, buf) {
            if(err) reject(err)
            resolve(JSON.parse(buf.toString()))
        })
    })
}

exports.addUsers = async (id, name) => {
    let users = await getUsers()
    users.push({id, name})

    return new Promise((resolve, reject) => {
        fs.writeFile('db', JSON.stringify(users), (err) => {
            if (err) reject(err)
            resolve()
        })
    })
}