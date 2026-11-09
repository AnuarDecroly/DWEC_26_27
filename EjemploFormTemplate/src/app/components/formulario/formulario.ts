import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { IWorker } from '../../interfaces/Iworker.interface';
import { WorkerService } from '../../services/worker.service';

@Component({
    imports: [FormsModule],
    selector: 'app-formulario',
    styleUrl: './formulario.css',
    templateUrl: './formulario.html',
})
export class Formulario {

    private workerServices = inject(WorkerService);


    getDataForm(miFormulario: NgForm): void {
        let trabajador: IWorker = miFormulario.value as IWorker;

        //console.log(trabajador);
        //this.arrayWorkers.push(trabajador);
        //console.log(this.arrayWorkers);

        this.workerServices.addWorker(trabajador);
        miFormulario.reset();
    }
}
