import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponenteHijoComponent } from './components/componente-hijo/componente-hijo.component';
import { ComponenteHijo2Component } from './components/componente-hijo2/componente-hijo2.component';
import { ComponenteHijo3 } from './components/componente-hijo3/componente-hijo3';
import { Botonera } from './components/botonera/botonera';

@Component({
    imports: [ComponenteHijoComponent, ComponenteHijo2Component, ComponenteHijo3, Botonera],
    selector: 'app-root',
    styleUrl: './app.css',
    templateUrl: './app.html',
})
export class App {
    protected readonly title = signal('PrimeraAppAngular');
}
