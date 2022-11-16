const {addUsers, getUsers, deleteUser, getUser, updateUser} = require("./repository");

const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

router.get('/', async (req, res) => {
    const users = await getUsers(req.query.search)
    res.send(users);
})

router.get('/:id', async (req, res) => {
    const userId = req.params.id
    const user = await getUser(userId)
    if (user) {
        res.send(user)
    } else {
        res.send(404)
    }
})

router.delete('/:id', async (req, res) => {
    const userId = req.params.id
    await deleteUser(userId)
    res.send(204)
})

router.post('/', async (req, res) => {
    const name = req.body.name
    await addUsers(name)
    res.send({success: true});
})

router.put('/:id', async (req, res) => {
    const userId = req.params.id
    const name = req.body.name
    await updateUser(userId, name)
    res.send({success: true});
})

module.exports = router