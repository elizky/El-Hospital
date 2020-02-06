const chalk = require('chalk');
const express = require('express');

let app = express();

let pacientes = [];

app.post('/pacientes', function (req, res) {
    var { body } = req;
    var { nombre, apellido, dni } = body;
    var paciente = {
        nombre,
        apellido,
        dni,
    }
    pacientes.push(paciente);
    var respuesta = paciente
    res.send(respuesta);
});

app.get('/pacientes', function (req, res) {
    var nombre = req.query.name;
    var apellido = req.query.apellido;
    var respuesta
    // console.log(nombre)
    if (nombre) {
        var pacientesBuscados = pacientes.filter(paciente => nombre === paciente.nombre);
        // console.log(personasBuscadas)
        respuesta = pacientesBuscados
        res.send(respuesta);
    } else if (apellido) {
        var pacientesBuscados = pacientes.filter(paciente => apellido === paciente.apellido);
        // console.log(personasBuscadas)
        respuesta = pacientesBuscados
        res.send(respuesta);
    };
    respuesta = pacientes
    res.send(respuesta);
});


app.get('/names/:dni', function (req, res) {

    var idparam = req.params.dni
    var parseId = parseInt(idparam, 10);
    // console.log(idparam)
    var respuesta
    // console.log(nombre)

    var pacienteBuscado = pacientes.find(paciente => parseId === paciente.id);
    console.log(pacienteBuscado)
    respuesta = pacienteBuscado
    res.send(respuesta);
});


app.listen(4000, function () {
    console.log(chalk.blue('example app listening on port 4000!'));
});