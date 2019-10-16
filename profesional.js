//Profesionales de la salud

var Especialidad = function (titulo, turnosDisponibles) {
    this.titulo = titulo;
    this.turnosDisponibles = turnosDisponibles;
}

var especialidades = [
    odontologo = new Especialidad("Odontologo", 5),
    pediatra = new Especialidad("Pediatra", 10),
    oncologo = new Especialidad("Oncologo", 3),
    cirujano = new Especialidad("Cirujano", 1),
    podologo = new Especialidad("Podologo", 15)
]

class Profesional extends Persona {
    constructor(nombre, apellido, dni, titulo) {
        super(nombre, apellido, dni);
        this.especialidad = especialidades[titulo].titulo;
        this.turnosDisponibles = especialidades[titulo].turnosDisponibles;
    }

    turnero(valor, numeroDeTurnos) {
        if (valor == "true") {
            this.turnosDisponibles += numeroDeTurnos;
        }
        if (valor == "false") {
            let resultado = this.turnosDisponibles - numeroDeTurnos;
            if (resultado > 0) {
                this.turnosDisponibles = resultado;
            } else {
                this.turnosDisponibles = 0;
            }
        } this
    }
}

  

var especialistas = [];


function crearEspecialista() {
    var nombreEspecialista = document.getElementById("nombre-doc").value
    var apellidoEspecialista = document.getElementById("apellido-doc").value
    var dniEspecialista = document.getElementById("dni-doc").value
    var tituloEspecialista = document.getElementById("especialidades").value


    var especialista = new Profesional(nombreEspecialista, apellidoEspecialista, dniEspecialista, tituloEspecialista)
    especialistas.push(especialista)
    alert("Bienvenido Dr/Dra " + nombreEspecialista + " " + apellidoEspecialista)

    holaEspecialista();
    mostrarCantTurnos();

    var cajaDoctor = document.createElement('li');
    cajaDoctor.className = 'botonesPacientes';
    var seccionDoctores = document.getElementById('doctores');
    var info = document.createTextNode(especialista.nombre + " " + especialista.apellido + " - " + especialista.especialidad);
    cajaDoctor.appendChild(info);
    seccionDoctores.style.display = "flex";
    seccionDoctores.appendChild(cajaDoctor);
}
var doctoresLista = [];
function holaEspecialista() {
    //var holaEspecialista = document.createElement('p');
    var info = document.createTextNode("Hola " + especialistas[especialistas.length - 1].nombre + " " + especialistas[especialistas.length - 1].apellido)
    doctoresLista.push(info);
    var ultimo = doctoresLista.length - 1;
    var contenedorholaEspecialista = document.getElementById('hola-doctor')
    if (contenedorholaEspecialista.childNodes[0]) {
        contenedorholaEspecialista.removeChild(contenedorholaEspecialista.childNodes[0])
    }
    contenedorholaEspecialista.appendChild(doctoresLista[ultimo]);

}
function modificarTurno(id) {
    var valorBoolean = document.getElementById(id).value;
    var cantidadTurnos = parseInt(prompt("¿Cuantos Turnos?"))
    especialistas[0].turnero(valorBoolean, cantidadTurnos);
    alert("Hecho")
    mostrarCantTurnos();
}
var h3conTurnos = [];
function mostrarCantTurnos() {
    //var h3conTurnos = document.createElement('h3');
    var infoH3conTurnos = document.createTextNode("Usted tiene " + especialistas[especialistas.length - 1].turnosDisponibles + " turnos");
    h3conTurnos.push(infoH3conTurnos);
    ultimo = h3conTurnos.length - 1;
    var contenedorh3conTurnos = document.getElementById("cantidad-turnos");
    if (contenedorh3conTurnos.childNodes[0]) {
        contenedorh3conTurnos.removeChild(contenedorh3conTurnos.childNodes[0]);
    }
    contenedorh3conTurnos.appendChild(h3conTurnos[ultimo]);
}