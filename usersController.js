const {addUsers, getUsers} = require("./repository");

const POST = 'POST'
const GET = 'GET'
const PUT = 'PUT'
const DELETE = 'DELETE'

exports.usersController = async (req, res) => {
    switch (req.method) {
        case POST:
            await addUsers(3, 'Andey')
            res.write(JSON.stringify({success: true}));
            res.end()
            break;
        case GET:
            const users = await getUsers()
            res.write(JSON.stringify(users));
            res.end()
            break;
        default :
    }
}
