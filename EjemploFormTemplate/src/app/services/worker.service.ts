import { Service } from '@angular/core';
import { IWorker } from '../interfaces/Iworker.interface';

@Service()
export class WorkerService {

    private arrayWorkers: IWorker[];

    constructor() {
        this.arrayWorkers = [];
    }

    addWorker(worker: IWorker): void {
        this.arrayWorkers.push(worker);
    }

    getAllWorkers(): IWorker[] {
        return this.arrayWorkers;
    }

    removeLastWorker(): void {
        this.arrayWorkers.pop();
    }

}
