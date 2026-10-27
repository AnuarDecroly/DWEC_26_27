import { Component } from '@angular/core';

@Component({
    imports: [],
    selector: 'app-if-component',
    styleUrl: './if-component.css',
    templateUrl: './if-component.html',
})
export class IfComponent {

    edad: number;

    constructor() {
        this.edad = 23;
    }

    cambiarEdad($event: any) {
        if ($event.target.value == undefined) {
            this.edad = -1;
        }
        else {
            this.edad = $event.target.value;
        }
    }
}
