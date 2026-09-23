console.log("hola mundo");

var a = 5;
console.log(typeof a);

a = "Hola";


const alumnos = [1, 3, "hola", true];
for (let a of alumnos) {
    console.log(a);
}

alumnos.forEach(a => {
    console.log(a);
});

miArray = [5, 67];



console.log(miArray);

function saludar(nombre) {
    console.log("Hola " + nombre);
}

function sumaBool(a, b) {
    return a + b;
}

let salida = saludar("Marco");
console.log(typeof salida);

console.log(sumaBool(true, true));

function dividir(a, b = 1) {
    return a / b;
}

let div = dividir(7);



const plato = "paella";

function cocinar(plato) {
    console.log("Voy a cocinar " + plato);
}

cocinar("burger");

const numeros = [1, 3, 6, 9, 23];

const numeros2 = numeros.map(num => num * 2);

const mayor20 = numeros.find(num => num > 20);

const filtro = numeros.filter(num => num % 3 === 0);

console.log(mayor20);

console.log(numeros2);

console.log(filtro);