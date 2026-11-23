import { Component, inject } from '@angular/core';
import { IserviciosProfesionales } from '../../interfaces/iservicios-profesionales.interface';
import { ServiceProfesionales } from '../../services/service-profesionales';
import { ServiciosCard } from '../../components/servicios-card/servicios-card';

@Component({
    imports: [ServiciosCard],
    selector: 'app-servicios-profesionales',
    styleUrl: './servicios-profesionales.css',
    templateUrl: './servicios-profesionales.html',
})
export class ServiciosProfesionales {
    private miServicio = inject(ServiceProfesionales);
    arrServiciosProfesionales: IserviciosProfesionales[];

    constructor() {
        this.arrServiciosProfesionales = [];
    }

    ngOnInit(): void {
        this.arrServiciosProfesionales = this.miServicio.getAllServiciosProfesionales();
    }
}
