const http = require('http')

const cors = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Request-Method', '*')
    res.setHeader('Access-Control-Allow-Method', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    if (req.method === 'OPTIONS') {
        res.writeHead(200)
        res.end()
        return true
    }
    return false
}

const {usersController} = require('./usersController')

const server = http.createServer((req, res) => {
    //set CORS headers
    if (cors(req, res)) return;

    console.log('some req')

    switch (req.url) {
        case "/users":
            usersController(req, res)
            break;
        default:
            res.write(`Page not found`)
    }

    res.end()
})

server.listen(7542)