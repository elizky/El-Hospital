var express = require('express');
var axios = require('axios');
var app = express();

app.use(express.json());

let profesionales = [];

app.post('/profesional', async (req, res) => {
    try {
        var { body } = req;
        var { nombre, apellido, dni, especialidad,turnosDisponibles } = body;
        var profesional = {
            nombre,
            apellido,
            dni,
            especialidad,
            turnosDisponibles
        }
        profesionales.push(profesional);
        res.send(profesional);
    }
    catch (e) {
        console.log(new Error(e));
    }
});

app.get("/profesional/:especialidad",async (req, res) => {
    try {
        var { params } = req;
        var { especialidad } = params;
        var profesionalesBuscados = profesionales.filter(profesional => profesional.especialidad === especialidad)        
        res.send(profesionalesBuscados);
    }
    catch (e) {
        console.log(new Error(e));
    }
});  


app.listen(3000, () => {
    console.log('Escuchando puerto 3000');
});