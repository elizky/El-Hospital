class Paciente extends Persona {
    constructor(nombre, apellido, dni) {
        super(nombre, apellido, dni)

    }
    solicitarTurno(buscarDoctor) {
        var doctor = especialistas.find(especialista => especialista.especialidad == buscarDoctor);
        let resultado = doctor.turnosDisponibles - 1
        this.turnosReservados = [];

        if (resultado >= 0) {
            alert("Se ha reservado exitosamente el turno con " + doctor.nombre + " " + doctor.apellido);
            doctor.turnosDisponibles -= 1;
            this.turnosReservados += 1
        } else {
            alert("Lamentablemente, " + doctor.nombre + " " + doctor.apellido + " no tiene mas turnos disponibles para el día de la fecha.\nDisculpe las molestias.");
        } return;

    }

}

var pacientes = [];


//Funciones en el HTML


function crearPaciente() {
    var nombrePaciente = document.getElementById("nombre").value
    var apellidoPaciente = document.getElementById("apellido").value
    var dniPaciente = document.getElementById("dni").value

    var nuevoPaciente = new Paciente(nombrePaciente, apellidoPaciente, dniPaciente);
    pacientes.push(nuevoPaciente);
    alert("Bienvenido " + nombrePaciente + " " + apellidoPaciente + ". A continuación elija el profesional con quien quiere el turno.")

    holaPaciente()
    var cajaPaciente = document.createElement('li');
    cajaPaciente.className = 'botonesPacientes';
    var seccionPacientes = document.getElementById('pacientes');
    var info = document.createTextNode(nuevoPaciente.nombre + " " + nuevoPaciente.apellido);
    cajaPaciente.appendChild(info);
    seccionPacientes.style.display = "flex";
    seccionPacientes.appendChild(cajaPaciente);

}
var pacientesLista = [];

function holaPaciente() {
    //var holaPaciente = document.createElement('p');
    var info = document.createTextNode("Hola " + pacientes[pacientes.length - 1].nombre + " " + pacientes[pacientes.length - 1].apellido)
    pacientesLista.push(info);
    var contenedorHolaPaciente = document.getElementById('hola-paciente')
    var ultimo = pacientesLista.length - 1;
    console.log(ultimo);
    if (contenedorHolaPaciente.childNodes[0]) {
        contenedorHolaPaciente.removeChild(contenedorHolaPaciente.childNodes[0]);
    }
    contenedorHolaPaciente.appendChild(pacientesLista[ultimo]);
}



function solicitarTurno() {
    var tituloEspecialista = document.getElementById("turno-con").value
    pacientes[0].solicitarTurno(tituloEspecialista)

}