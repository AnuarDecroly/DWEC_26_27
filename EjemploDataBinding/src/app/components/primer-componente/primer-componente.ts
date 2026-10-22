import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ipersona } from '../../interfaces/ipersona.interface';

@Component({
    imports: [FormsModule],
    selector: 'app-primer-componente',
    styleUrl: './primer-componente.css',
    templateUrl: './primer-componente.html',
})
export class PrimerComponente {


    horas: number;
    minutos: number;
    color: string;
    colores: string[];
    estado: boolean;
    url: string;
    stock: boolean;
    descuento: boolean;
    private contador: number;
    isHabilitado: boolean;
    texto: string;

    miPersona: Ipersona;

    constructor() {
        this.horas = 16;
        this.minutos = 50;
        this.color = "azul";
        this.colores = ["azul", "rojo", "verde", "amarillo", "gris", "rosa", "violeta", "blanco"];
        this.estado = true;
        this.url = "https://nakama.es";
        this.stock = false;
        this.descuento = false;
        this.contador = 0;
        this.isHabilitado = true;
        this.texto = "Soy un texto de prueba";
        this.miPersona = {
            nombre: "",
            apellido: "",
            dni: "",
            edad: 0
        }
    }

    //Esto es un comentario a ver si lo veis bien
    validarApellido() {
        if (this.miPersona.apellido.length == 0) {
            alert("El apellido debe de estar cumplemintado");
        }
    }

    validarEdad() {
        if (this.miPersona.edad < 0) {
            alert("La edad de una persona no pùede ser negativa");
        }
    }

    mostrarPersona(): string {
        return `${this.miPersona.nombre} ${this.miPersona.apellido} DNI: ${this.miPersona.dni} Edad: ${this.miPersona.edad}`
    }

    clasesCombinadas(): boolean {
        let estado = false;
        if (this.stock && this.descuento) {
            estado = true;
        }
        return estado;
    }

    horaActual(): string {
        // this.horas = Math.random();
        // this.minutos = Math.random();
        return `${this.horas}:${this.minutos}`;
    }

    listaColores(): string {
        let miLista: string;
        miLista = "<ul>";
        for (let s of this.colores) {
            miLista = miLista + `<li>${s}</li>`
        }

        miLista = miLista + "</ul>";
        return miLista;

    }

    actualizarUrl(): string {
        this.url = "https://as.com";
        return this.url;
    }

    sumar($event: any) {
        let miButton: HTMLButtonElement = $event as HTMLButtonElement;
        this.contador++;
        if (this.contador > 1) {
            this.isHabilitado = false;
        }
        alert("El contador es " + this.contador);
        this.stock = true;
    }

    reset() {
        this.contador = 0;
        alert("Hemos reiniciado el contador");
    }

    restar() {
        this.contador--;
        if (this.contador < 0) {
            this.isHabilitado = true;
        }
        alert("El contador es " + this.contador);
        this.descuento = true;
    }



}
