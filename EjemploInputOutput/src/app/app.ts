import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DeporteComponent } from './components/deporte-component/deporte-component';
import { Ideporte } from './interfaces/ideporte.interface';

@Component({
    imports: [DeporteComponent],
    selector: 'app-root',
    styleUrl: './app.css',
    templateUrl: './app.html',
})
export class App {
    protected readonly title = signal('EjemploInputOutput');

    miDeporte: string;
    miColor: string;

    private deportes: string[];
    private colores: string[];

    private miSport: Ideporte;

    constructor() {
        this.deportes = ["Futbol", "Baloncesto", "F1", " MotoGP"];
        this.colores = ["azul", "rojo", "verde", " violeta"];
        this.miDeporte = this.deportes[Math.trunc(Math.random() * 4)];
        this.miColor = this.colores[Math.trunc(Math.random() * 4)];

        this.miSport = {
            nombre: this.deportes[Math.trunc(Math.random() * 4)],
            valor: 7,
            color: this.colores[Math.trunc(Math.random() * 4)]
        }
    }

    comenzar($event: string): void {
        this.miColor = $event;
        console.log(this.miColor);

    }

    terminar($event: string): void {
        this.miColor = $event;
        console.log(this.miColor);
    }
}
