import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ideporte } from '../../interfaces/ideporte.interface';

@Component({
    imports: [],
    selector: 'app-deporte-component',
    styleUrl: './deporte-component.css',
    templateUrl: './deporte-component.html',
})
export class DeporteComponent {
    @Input() deporte: string;
    @Input() color: string;

    @Input() sport: Ideporte;

    @Output() cuentaAtrasComenzada: EventEmitter<string> = new EventEmitter();
    @Output() cuentaAtrasTerminada: EventEmitter<string> = new EventEmitter();

    constructor() {
        this.deporte = "Deporte no definido";
        this.color = "azul";

        this.sport = {
            nombre: "No definido",
            valor: -1,
            color: "blanco"
        }
    }

    comenzar(): void {
        this.cuentaAtrasComenzada.emit("verde");
    }

    terminar(): void {
        this.cuentaAtrasTerminada.emit("rojo");
    }

}
