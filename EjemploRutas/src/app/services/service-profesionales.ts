import { Service } from '@angular/core';
import { IserviciosProfesionales } from '../interfaces/iservicios-profesionales.interface';
import { SERVICIOSPROFESIONALES } from '../../db/serviciosProfesionales.db';

@Service()
export class ServiceProfesionales {

    private arrServiciosProfesionales: IserviciosProfesionales[];

    constructor() {
        this.arrServiciosProfesionales = SERVICIOSPROFESIONALES;
    }

    getAllServiciosProfesionales(): IserviciosProfesionales[] {
        return this.arrServiciosProfesionales;
    }
}
