import { IPersona } from "./IPersona";
import { Persona } from "./Persona";
import { Size } from './Size';

let nombre: string = "Pepe";

let nombre2 = "Petter"; // inferencia de TIPO
let num = 33;

let cosa: number | string;
cosa = "Pedro";

cosa = 33;

let miArray: number[] = [5, 7, 13, 23, 33, 45];

function sumar(pNumeroA: number, pNumeroB: number): number {
    return pNumeroA + pNumeroB;
}

let resultado: number = sumar(5, 3);

let person1: IPersona = {
    nombre: "Paco",
    edad: 23,
    // isDeveloper: true,
    size: Size.M,
};

const person2 = new Persona("Pepe", 25, false);
console.log(person2.getNombre);


