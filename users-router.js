const {addUsers, getUsers} = require("./repository");

const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

router.get('/', async (req, res) => {
    let users = await getUsers()
    if(req.query.search){
        const searchParam = req.query.search.toLowerCase()
        users = users.filter(user=>user.name.toLowerCase().indexOf(searchParam) > -1)
    }
    res.send(users);
})

router.get('/:id', async (req, res) => {
    const users = await getUsers()
    const userId = req.params.id
    const user = users.find(user => user.id === userId)
    if (user) {
        res.send(user)
    } else {
        res.send(404)
    }
})

router.post('/', async (req, res) => {
    const name = req.body.name
    await addUsers(name)
    res.send({success: true});
})

module.exports = router