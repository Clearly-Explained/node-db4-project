const express = require("express")
const recipiesRouter = require('./recipies/recipies-router')

const server = express()

server.use(express.json())
server.use('/api/recipies', recipiesRouter)

server.use('*', (req, res) => {
    res.json({api: 'up'})
})

module.exports = server