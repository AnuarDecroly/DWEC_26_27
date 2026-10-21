import { Component } from '@angular/core';

@Component({
    imports: [],
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

    constructor() {
        this.horas = 16;
        this.minutos = 50;
        this.color = "azul";
        this.colores = ["azul", "rojo", "verde", "amarillo", "gris", "rosa", "violeta", "blanco"];
        this.estado = true;
        this.url = "https://nakama.es";
        this.stock = true;
        this.descuento = true;
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



}
