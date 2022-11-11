const {addUsers, getUsers} = require("./repository");

exports.usersController = (req, res) => {
    if (req.method === 'POST') {
        addUsers(3, 'Andey')
        res.write(JSON.stringify({success: true}));
    } else {
        res.write(JSON.stringify(getUsers()));
    }
}
