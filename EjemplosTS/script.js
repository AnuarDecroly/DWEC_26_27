import { Persona } from "./Persona";
import { Size } from './Size';
let nombre = "Pepe";
let nombre2 = "Petter"; // inferencia de TIPO
let num = 33;
let cosa;
cosa = "Pedro";
cosa = 33;
let miArray = [5, 7, 13, 23, 33, 45];
function sumar(pNumeroA, pNumeroB) {
    return pNumeroA + pNumeroB;
}
let resultado = sumar(5, 3);
let person1 = {
    nombre: "Paco",
    edad: 23,
    // isDeveloper: true,
    size: Size.M,
};
const person2 = new Persona("Pepe", 25, false);
console.log(person2.getNombre);
