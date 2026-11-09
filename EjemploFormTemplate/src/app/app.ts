import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Formulario } from './components/formulario/formulario';
import { WorkerList } from './components/worker-list/worker-list';

@Component({
    imports: [Formulario, WorkerList],
    selector: 'app-root',
    styleUrl: './app.css',
    templateUrl: './app.html',
})
export class App {
    protected readonly title = signal('EjemploFormTemplate');
}
