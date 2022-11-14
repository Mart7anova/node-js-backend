const {readJsonFromFile, writeJsonFromFile} = require("./fs-utils");

exports.getUsers = getUsers = async () => {
    await readJsonFromFile('db')
}

exports.addUsers = async (id, name) => {
    let users = await getUsers()
    users.push({id, name})

    await writeJsonFromFile('db', users)
}