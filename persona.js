
class Persona {
    constructor(nombre, apellido, dni) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
    }
    hablar() {
        alert("hola, mi nombre es " + this.nombre + " " + this.apellido);
    }
}

