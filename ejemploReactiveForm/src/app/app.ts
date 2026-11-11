import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioreactiveFormModel } from './componenets/formularioreactive-form-model/formularioreactive-form-model';

@Component({
    imports: [FormularioreactiveFormModel],
    selector: 'app-root',
    styleUrl: './app.css',
    templateUrl: './app.html',
})
export class App {
    protected readonly title = signal('ejemploReactiveForm');
}
