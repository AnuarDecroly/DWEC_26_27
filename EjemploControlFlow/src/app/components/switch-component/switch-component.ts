import { Component } from '@angular/core';

@Component({
    imports: [],
    selector: 'app-switch-component',
    styleUrl: './switch-component.css',
    templateUrl: './switch-component.html',
})
export class SwitchComponent {
    roles: string[];
    role: string;

    constructor() {
        this.roles = ["admin", "editor", "suscriptor", "otros"];
        this.role = this.roles[0];
    }
}
