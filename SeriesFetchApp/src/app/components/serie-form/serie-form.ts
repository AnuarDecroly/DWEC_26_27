import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ISerie } from '../../interfaces/iserie.interface';
import { SeriesServices } from '../../services/series-services';

@Component({
    imports: [ReactiveFormsModule],
    selector: 'app-serie-form',
    styleUrl: './serie-form.css',
    templateUrl: './serie-form.html',
})
export class SerieForm {

    serieForm: FormGroup;
    seriesService = inject(SeriesServices);

    constructor() {
        this.serieForm = new FormGroup({
            id: new FormControl(null, []),
            title: new FormControl(null, [Validators.required]),
            creator: new FormControl(null, [Validators.required]),
            rating: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(10)]),
            dates: new FormControl(null, [Validators.required]),
            image: new FormControl(null, [Validators.required]),
            channel: new FormControl(null, [Validators.required]),
        });
    }

    getDataForm() {
        let serie: ISerie = this.serieForm.value as ISerie;
        serie.id = -1;
        //Llamar al servicio
        this.seriesService.addSerie(serie);
        this.serieForm.reset();
    }
}
