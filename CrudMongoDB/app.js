// npm install express ejs mongoose nodemon dotenv
const express = require('express')
const server = express()

server.set("view engine", "ejs")

const PORT = process.env.PORT || 8083
const modelo = require('./database/db')

server.listen(PORT, () => {
    console.log("servidor funcionando en http://localhost:"+PORT)
})