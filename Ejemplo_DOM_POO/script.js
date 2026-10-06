import Persona from './Persona.js'
import Cliente from './Cliente.js'

const persona1 = new Persona('Anuar', 'Khan', '123456789A');
const cliente1 = new Cliente('Farah', 'Khan', '987654321F', '942333333');

var nButton1 = 1;
var nButton2 = 1;
var nButton3 = 1;

console.log(persona1);
console.log(cliente1.getDni());

document.addEventListener('DOMContentLoaded', function () {
    const sectionPrincipal = document.getElementById('principal');

    const divP = document.createElement('div');
    divP.classList.add('contenedor');

    const p1 = document.createElement('p');
    p1.textContent = cliente1.nombre + " " + cliente1.apellido
        + " " + cliente1.getDni() + ' ' + cliente1.telefono;

    p1.classList.add('parrafo');

    const btn_1 = document.createElement('button');
    const btn_2 = document.createElement('button');
    const btn_3 = document.createElement('button');

    btn_1.textContent = 'click me';
    btn_2.textContent = 'click me';
    btn_3.textContent = 'click me';

    btn_1.classList.add('btn');
    btn_2.classList.add('btn');
    btn_3.classList.add('btn');

    btn_1.addEventListener('click', function (event) {
        click(1);
    });

    btn_2.addEventListener('click', function (event) {
        click(2);
    });

    btn_3.addEventListener('click', function (event) {
        click(3);
    });

    divP.append(btn_1, btn_2, btn_3);
    sectionPrincipal.append(p1, divP);
});

function click(nButton) {
    if (nButton === 1) {
        alert("Esto es un boton y lo he pulsado " + nButton1 + " veces");
        nButton1++;
    }
    if (nButton === 2) {
        alert("Esto es un boton y lo he pulsado " + nButton2 + " veces");
        nButton2++;
    }
    if (nButton === 3) {
        alert("Esto es un boton y lo he pulsado " + nButton3 + " veces");
        nButton3++;
    }

}