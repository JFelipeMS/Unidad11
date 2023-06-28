// npm init --yes 

// npm install express ejs mysql dotenv
// npm install -g nodemon  //instalamos de forma global 

const express = require('express')
const server = express()

const PORT = process.env.PORT || 8081
const conexion = require('./database/db')


server.listen(PORT, () => {
    console.log("servidor funcionando en http://localhost:"+PORT)
})