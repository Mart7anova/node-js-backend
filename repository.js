const users = [
    {"id": 1, "name": "Anastasia"},
    {"id": 2, "name": "Sasha"},
]

exports.getUsers = () =>{
    return users
}

exports.addUsers = (id, name) =>{
    users.push({id, name})
}
