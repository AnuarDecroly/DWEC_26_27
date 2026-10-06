import Persona from './Persona.js';

export default class Cliente extends Persona {

    constructor(nombre, apellido, dni, telefono){
        super(nombre,apellido,dni);
        this.telefono = telefono;
    }
}