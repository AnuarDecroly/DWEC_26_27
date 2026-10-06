export default class Persona {

    #dni;

    constructor(nombre, apellido, dni) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.#dni = dni;
    }

    getDni(){
        return this.#dni;
    }
}