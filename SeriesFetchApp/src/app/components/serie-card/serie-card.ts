import { Component, inject, Input } from '@angular/core';
import { ISerie } from '../../interfaces/iserie.interface';
import { SeriesServices } from '../../services/series-services';

@Component({
    imports: [],
    selector: 'app-serie-card',
    styleUrl: './serie-card.css',
    templateUrl: './serie-card.html',
})
export class SerieCard {

    @Input() miSerie !: ISerie;
    seriesSerives = inject(SeriesServices);

    deleteSerie(miSerie: ISerie) {
        this.seriesSerives.deleteSerieByTitle(miSerie);
    }

    updateSerie(miSerie: ISerie) {

    }
}
