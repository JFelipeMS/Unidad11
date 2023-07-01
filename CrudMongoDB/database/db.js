const mongoose = require('mongoose')

mongoose.connect('mongodb://admin:admin@localhost:27017/backend_db',
{useNewUrlParser: true, useUnifiedTopology:true})

const conexion = mongoose.connection
conexion.once('open', ()=>{
    console.log("Conexion a MongoDB exitosa")
})
conexion.on('error', (error)=>{
    console.log("Error de conexion: "+error)
})

//creacion del modelo
const schema = new mongoose.Schema(
    {nombre:String,edad:Number,genero:Boolean,email:String})
const modelo = mongoose.model('personas',schema)

module.exports = modelo