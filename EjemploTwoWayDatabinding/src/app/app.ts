import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AfficionesComponent } from './components/afficiones-component/afficiones-component';

@Component({
    imports: [AfficionesComponent],
    selector: 'app-root',
    styleUrl: './app.css',
    templateUrl: './app.html',
})
export class App {
    protected readonly title = signal('EjemploTwoWayDatabinding');
}
