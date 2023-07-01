const express = require('express')
const modelo = require('../database/db')

exports.consultar = (req,res) => {
    modelo.find()
    .then(consulta => {
        //res.send(consulta)
        res.render('index',{consulta1:consulta})
    })
    .catch(error =>{
        console.log("error consultando la coleccion personas: "+ error)
            return
    })
}
exports.save = (req,res) => {
    const nombre = req.body.nombre
    const edad = req.body.edad
    const genero = req.body.genero
    const email = req.body.email
    console.log(req.body, nombre, edad, genero, email)
    
    const persona = 
        new modelo({nombre:nombre,edad:edad,genero:genero,email:email})
    persona.save()
    .then(mivar =>{
        console.log("Documento agregado a la coleccion persona")
        res.redirect('/')
    })
    .catch(error =>{
        console.log("Error agregando documento "+error)
    })
}
exports.consultaruno = (req,res) => {
    const id = req.params.id
    console.log(id)
    modelo.findById({_id:id})
    .then(consulta =>{
        //res.send(consulta)
        res.render('edit',{persona:consulta})
    })
    .catch(error =>{
        console.log("error consultando el id en la coleccion personas: "+ error)
    })
}
exports.actualizar = (req,res) => {
    const id = req.body.id
    const nombre = req.body.nombre
    const edad = req.body.edad
    const genero = req.body.genero
    const email = req.body.email
    //console.log(req.body, nombre, edad, genero, email)
    modelo.findByIdAndUpdate({_id:id},
        {nombre:nombre,edad:edad,genero:genero,email:email})
        .then(mivar =>{
            console.log("Documento actualizado a la coleccion persona")
            res.redirect('/')
        })
        .catch(error =>{
            console.log("error actualizando el documento en la coleccion personas: "+ error)
        })
}
exports.delete = (req,res) => {
    const id = req.params.id
    modelo.findByIdAndDelete({_id:id})
    .then(mivar =>{
        console.log("Documento borrado a la coleccion persona")
        res.redirect('/')
    })
    .catch(error =>{
        console.log("error borrando el documento en la coleccion personas: "+ error)
    })
}