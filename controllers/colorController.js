var express = require('express');
var router = express.Router();

/* GET users listing. */

let colorController = {

  mostrarPaginaColor: function(req, res) {
    //escribir dato de sesión
     req.session.userLogged = "Alejandro";
    //leer un dato de session
     console.log("entro a session", req.session.userLogged);

    res.render("color", {color: req.cookies.background, mensaje: req.session.mensaje})
  },

  elegirColor: function(req, res) {
    let color = req.body.color;
    req.session.mensaje = `Has elegido el color: ${color}`
    let mensaje = req.session.mensaje
    console.log(mensaje)
    if (req.body.recordar == "on") {
      res.cookie("background", color)
    }
    res.render("color", {color: color, mensaje: mensaje})
  }
}


module.exports = colorController