import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ISerie } from '../../interfaces/iserie.interface';
import { SeriesServices } from '../../services/series-services';
import { SerieCard } from '../serie-card/serie-card';

@Component({
    imports: [SerieCard],
    selector: 'app-serie-list',
    styleUrl: './serie-list.css',
    templateUrl: './serie-list.html',
    changeDetection: ChangeDetectionStrategy.Eager,
})
export class SerieList {

    seriesArray: ISerie[];
    private seriesService = inject(SeriesServices);

    constructor() {
        this.seriesArray = [];
    }

    ngOnInit(): void {
        this.seriesArray = this.seriesService.gettAllSeries();
    }
}
