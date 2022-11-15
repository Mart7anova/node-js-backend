const users = require('./users-router')
const express = require('express')
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/users', users)

app.use((req, res) => {
    res.send(404)
})

app.listen(7542, () => {
    console.log('App listening on port 7542!')
})
