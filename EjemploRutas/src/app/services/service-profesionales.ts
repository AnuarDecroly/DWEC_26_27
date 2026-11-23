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

    getByUrl(miUrl: string): IserviciosProfesionales {
        let servicioProfesional: IserviciosProfesionales;

        let response = this.arrServiciosProfesionales.find(s => s.url == miUrl);

        if (response != undefined) {
            servicioProfesional = response;
        }
        else {
            servicioProfesional = {
                title: "Servicio no encontrado",
                description: "Contacte con el adminsitrador",
                url: "error"
            }
        }

        return servicioProfesional;

    }
}
