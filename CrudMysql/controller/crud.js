const express = require('express')
const conexion = require('../database/db')

exports.consultar = (req,res) => {
    conexion.query('select * from persona',(error, consulta) => {
        if(error){
            console.log("error consultando la tabla persona: "+ error)
            return
        }
        //res.send(consulta)
        res.render('index',{consulta1:consulta})
    })
}