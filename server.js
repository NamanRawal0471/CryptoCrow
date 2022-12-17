// Creating a Server using NodeJS Moddule - http
const http = require('http')
const app = require('./public/app')

const PORT = process.env.PORT || 5001

const server = http.createServer(app)
server.listen(PORT)