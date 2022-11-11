const {addUsers, getUsers} = require("./repository");

exports.usersController = (req, res) => {
    switch (req.method) {
        case 'POST':
            addUsers(3, 'Andey')
            res.write(JSON.stringify({success: true}));
            break;
        default :
            res.write(JSON.stringify(getUsers()));
            break;
    }
}
