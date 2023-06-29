// npm init --yes 

// npm install express ejs mysql dotenv
// npm install -g nodemon  //instalamos de forma global 

const express = require('express')
const server = express()

server.set("view engine", "ejs")

const PORT = process.env.PORT || 8081
const conexion = require('./database/db')
const crud = require('./controller/crud')

//rutas
server.get('/', crud.consultar)
server.get('/crear', (req,res) =>{
    res.render('create')
})

server.listen(PORT, () => {
    console.log("servidor funcionando en http://localhost:"+PORT)
})