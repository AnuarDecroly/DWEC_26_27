import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IfComponent } from './components/if-component/if-component';
import { SwitchComponent } from './components/switch-component/switch-component';
import { ForComponent } from './components/for-component/for-component';

@Component({
    imports: [IfComponent, SwitchComponent, ForComponent],
    selector: 'app-root',
    styleUrl: './app.css',
    templateUrl: './app.html',
})
export class App {
    protected readonly title = signal('EjemploControlFlow');
    ejemploActivo: string;

    constructor() {
        this.ejemploActivo = "case";
    }
}
