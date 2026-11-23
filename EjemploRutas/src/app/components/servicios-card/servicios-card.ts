import { Component, Input } from '@angular/core';
import { IserviciosProfesionales } from '../../interfaces/iservicios-profesionales.interface';
import { RouterLink } from '@angular/router';

@Component({
    imports: [RouterLink],
    selector: 'app-servicios-card',
    styleUrl: './servicios-card.css',
    templateUrl: './servicios-card.html',
})
export class ServiciosCard {
    @Input() miServicioProfesional !: IserviciosProfesionales;
}
