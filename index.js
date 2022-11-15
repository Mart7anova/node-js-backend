const users = require('./users-router')
const express = require('express')

const app = express()

app.use('/users', users)

app.use((req, res) => {
    res.send(404)
})

app.listen(7542, () => {
    console.log('App listening on port 7542!')
})
