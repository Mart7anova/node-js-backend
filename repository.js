const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String
})

const User = mongoose.model('Users', userSchema)

exports.getUsers = getUsers = () => {
    return User.find()
}

exports.deleteUsers = (id) => {
    return User.deleteOne({_id: id})
}

exports.addUsers = (name) => {
    const user = new User({name})
    return user.save()
}