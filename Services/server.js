const express = require('express')
const cors = require('cors')
const upload = require('./upload')
// const { corsOptions } = require('./cors-options');


let corsOptions = {
    origin: '*',
    // optionsSuccessStatus:200,
}

const server = express()
server.use(cors(corsOptions))

server.post('/upload',upload)

server.listen(8000, () => {
  console.log('Server started!')
})