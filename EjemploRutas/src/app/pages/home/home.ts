import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ServiciosProfesionalesView } from '../servicios-profesionales-view/servicios-profesionales-view';
import { ServiceProfesionales } from '../../services/service-profesionales';
import { Router, RouterLink } from '@angular/router';

@Component({
    imports: [FormsModule, RouterLink],
    selector: 'app-home',
    styleUrl: './home.css',
    templateUrl: './home.html',
})
export class Home {
    private miService = inject(ServiceProfesionales);
    private router = inject(Router);

    getSuscribe(suscribeForm: NgForm) {
        if (suscribeForm.value.email !== "") {
            let email = suscribeForm.value.email;
            this.miService.registrarEmail(email); //hay que crearlo en nuestro servicio
            this.router.navigate(['/servicios']);
            suscribeForm.reset();
        }
        else {
            alert('El campo email no puede estar vacio');
        }
    }
}
