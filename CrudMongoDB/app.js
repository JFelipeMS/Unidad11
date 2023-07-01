// npm install express ejs mongoose nodemon dotenv
const express = require('express')
const server = express()

server.set("view engine", "ejs")

const PORT = process.env.PORT || 8083
const modelo = require('./database/db')
const crud = require('./controller/crud')

server.use(express.urlencoded({extended:false}))
server.use(express.json())
server.use(express.static('./database'))    //modelo
server.use(express.static('./views'))       //vista
server.use(express.static('./controller'))  //controlador

//Rutas
server.get('/', crud.consultar)
server.get('/crear', (req,res) =>{
    res.render('create')
})
server.post('/salvar',crud.save)
server.get('/editar/:id', crud.consultaruno)
server.post('/actualizar',crud.actualizar)
server.get('/borrar/:id',crud.delete)
//Fin Rutas

server.listen(PORT, () => {
    console.log("servidor funcionando en http://localhost:"+PORT)
})