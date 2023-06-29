// npm init --yes 

// npm install express ejs mysql dotenv
// npm install -g nodemon  //instalamos de forma global 

const express = require('express')
const server = express()

server.set("view engine", "ejs")

const PORT = process.env.PORT || 8081
const conexion = require('./database/db')
const crud = require('./controller/crud')

server.use(express.urlencoded({extended:false}))
server.use(express.json())
server.use(express.static('./database'))    //modelo
server.use(express.static('./views'))       //vista
server.use(express.static('./controller'))  //controlador

//Inicio Rutas
server.get('/', crud.consultar)
server.get('/crear', (req,res) =>{
    res.render('create')
})
server.post('/salvar',crud.save)
server.get('/editar/:id', crud.consultaruno)
server.post('/actualizar',crud.actualizar)
server.get('/borrar/:id',crud.delete)
//fin Rutas

server.listen(PORT, () => {
    console.log("servidor funcionando en http://localhost:"+PORT)
})