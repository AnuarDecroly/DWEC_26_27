import { Component } from '@angular/core';
import { Iaficiones } from '../../interfaces/iaficiones.interfaces';
import { FormsModule } from '@angular/forms';

@Component({
    imports: [FormsModule],
    selector: 'app-afficiones-component',
    styleUrl: './afficiones-component.css',
    templateUrl: './afficiones-component.html',
})
export class AfficionesComponent {
    arrAficiones: Iaficiones[];
    newAfficion: Iaficiones;


    constructor() {
        this.arrAficiones = [];
        this.newAfficion = {
            aficion: "",
            nombre: ""
        }
    }

    guardarDatos(): void {
        this.arrAficiones.push(this.newAfficion);

        this.newAfficion = {
            aficion: "",
            nombre: ""
        }

        // console.log(this.arrAficiones);
    }

    cargarDatos(): string {
        let html: string = "";
        this.arrAficiones.forEach(afi => {
            html += `<p>${afi.aficion} - ${afi.nombre}</p>`;
        });
        return html;
    }
}
