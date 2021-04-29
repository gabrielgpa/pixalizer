import express from 'express'
import http from 'http'
import path from 'path'

const app = express()
const server = http.createServer(app)

app.use(express.static('public'))

app.get('/', function(req, res) {
    res.sendFile(path.join(process.cwd(), '/index.html'));
});

server.listen(3000, () => {
    console.log(`> Server listening on port: 3000`)
})