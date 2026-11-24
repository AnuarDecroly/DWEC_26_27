import { Component, inject } from '@angular/core';
import { ServiceProfesionales } from '../../services/service-profesionales';
import { IserviciosProfesionales } from '../../interfaces/iservicios-profesionales.interface';
import { ServiciosCard } from '../../components/servicios-card/servicios-card';
import { ServiciosProfesionales } from '../servicios-profesionales/servicios-profesionales';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    imports: [],
    selector: 'app-servicios-profesionales-view',
    styleUrl: './servicios-profesionales-view.css',
    templateUrl: './servicios-profesionales-view.html',
})
export class ServiciosProfesionalesView {
    miServicioProfesional !: IserviciosProfesionales;

    private miServicio = inject(ServiceProfesionales);
    private activatedRoute = inject(ActivatedRoute);
    private router = inject(Router);

    ngOnInit(): void {
        this.activatedRoute.params.subscribe((params: any) => {
            //Recoger mi parametro de ruta
            let url: string = params.url; //igual que esta en el app.route.ts

            if (url != undefined) {
                //Pedir al servicio el servicioProfesional
                let response = this.miServicio.getByUrl(url);
                if (response != undefined) {
                    if (response.url == 'error') {
                        //NAvegar a 404
                        this.router.navigate((['404']));
                    }
                    this.miServicioProfesional = response;
                }


            }
        })
    }



}
