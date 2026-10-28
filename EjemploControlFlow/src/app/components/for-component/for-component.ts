import { Component } from '@angular/core';
import { Iestudiante } from '../../interfaces/iestudiante.interface';

@Component({
    imports: [],
    selector: 'app-for-component',
    styleUrl: './for-component.css',
    templateUrl: './for-component.html',
})
export class ForComponent {

    estudiantes: Iestudiante[];
    nElementos: number;

    constructor() {
        this.estudiantes = [
            { id: 1, name: "Frodo Bolson", age: 23 },
            { id: 2, name: "Sam Gamyi", age: 33 },
            { id: 3, name: "Gandalf", age: 2755 },
            { id: 4, name: "Aragorn", age: 85 },
            { id: 5, name: "Legolas", age: 5313 },
        ];
        this.nElementos = this.estudiantes.length;
    }

    insertarEstudiante(): void {
        let estudiante: Iestudiante = {
            id: this.nElementos + 1,
            name: "Boromir",
            age: 35
        }
        this.estudiantes.push(estudiante);
        this.nElementos = this.estudiantes.length;
    }

    eliminarEstudiante(): void {
        this.estudiantes.pop();
        this.nElementos = this.estudiantes.length;
    }
}
