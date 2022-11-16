const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String
})

const User = mongoose.model('Users', userSchema)

exports.getUsers = (search) => {
    if (!search) {
        return User.find()
    } else {
        return User.find({name: new RegExp(search, 'i')})
    }
}

exports.getUser = getUser = (id) => {
    return User.find({_id: id})
}

exports.deleteUser = (id) => {
    return User.deleteOne({_id: id})
}

exports.addUsers = (name) => {
    const user = new User({name})
    return user.save()
}

exports.updateUser = async (id, name) => {
    return User.update({_id: id}, {name})
}