const {addUsers, getUsers} = require("./repository");

exports.usersController = async (req, res) => {
    switch (req.method) {
        case 'POST':
            addUsers(3, 'Andey')
            res.write(JSON.stringify({success: true}));
            res.end()
            break;
        default :
            const users = await getUsers()
            res.write(JSON.stringify(users));
            res.end()
            break;
    }
}
