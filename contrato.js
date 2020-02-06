function crearPaciente() {
  const nombrePaciente = document.getElementById("nombre").value;
  const apellidoPaciente = document.getElementById("apellido").value;
  const dniPaciente = document.getElementById("dni").value;
  const body = {
    nombre: nombrePaciente,
    apellido: apellidoPaciente,
    dni: dniPaciente
  };
  fetch("http://localhost:4000/pacientes", {
    method: "POST",
    body: body
  })
    .then(data => {
      return data.json();
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
}

function crearProfesional() {
  var nombreEspecialista = document.getElementById("nombre-doc").value;
  var apellidoEspecialista = document.getElementById("apellido-doc").value;
  var dniEspecialista = document.getElementById("dni-doc").value;
  var tituloEspecialista = document.getElementById("especialidades").value;
  var turnosDisponibles;

  if (tituloEspecialista === "Odontologo") {
    turnosDisponibles = 5;
    return;
  }
  if (tituloEspecialista === "Pediatra") {
    turnosDisponibles = 10;
    return;
  }
  if (tituloEspecialista === "Oncologo") {
    turnosDisponibles = 3;
    return;
  }
  if (tituloEspecialista === "Cirujano") {
    turnosDisponibles = 1;
    return;
  }
  if (tituloEspecialista === "Podologo") {
    turnosDisponibles = 15;
    return;
  }

  const body = {
    nombre: nombreEspecialista,
    apellido: apellidoEspecialista,
    dni: dniEspecialista,
    especialidad: tituloEspecialista,
    turnosDisponibles
  };
  fetch("http://localhost:3000/profesionales", {
    method: "POST",
    body: body
  })
    .then(data => {
      return data.json();
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
}
