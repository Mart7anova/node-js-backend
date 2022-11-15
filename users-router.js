const {addUsers, getUsers} = require("./repository");

const express = require('express')
const router = express.Router()

router.use((req,res,next)=>{
    console.log('Time: ', Date.now())
    next()
})

router.get('/', async (req, res) => {
    const users = await getUsers()
    res.send(users);
})

router.post('/', async (req, res) => {
    await addUsers(3, 'Andey')
    res.send({success: true});
})

module.exports = router