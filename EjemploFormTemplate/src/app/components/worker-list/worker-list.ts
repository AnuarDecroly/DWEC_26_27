import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { IWorker } from '../../interfaces/Iworker.interface';
import { WorkerService } from '../../services/worker.service';

@Component({
    imports: [],
    selector: 'app-worker-list',
    styleUrl: './worker-list.css',
    templateUrl: './worker-list.html',
    changeDetection: ChangeDetectionStrategy.Eager
})
export class WorkerList implements OnInit {
    arrayWorkers: IWorker[];

    private workerService = inject(WorkerService);

    constructor() {
        this.arrayWorkers = [];
    }

    ngOnInit(): void {
        this.arrayWorkers = this.workerService.getAllWorkers();
    }

    eliminarTrabajador(): void {
        this.workerService.removeLastWorker();
        //this.arrayWorkers = this.workerService.getAllWorkers();
    }
}
