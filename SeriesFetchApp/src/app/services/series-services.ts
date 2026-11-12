import { Service } from '@angular/core';
import { ISerie } from '../interfaces/iserie.interface';

@Service()
export class SeriesServices {
    private arrSeries: ISerie[];
    private url: string = "https://peticiones.online/api/series";
    private id: number;

    constructor() {
        this.arrSeries = [];
        this.connectSeries();
        this.id = this.arrSeries.length;
    }

    gettAllSeries(): ISerie[] {
        return this.arrSeries;
    }

    private connectSeries() {
        fetch(this.url)
            .then(response => response.json())
            .then(datos => {
                datos.forEach((element: any) => {
                    let serie: ISerie = element as ISerie;
                    this.arrSeries.push(serie)
                });
            })

        console.log(this.arrSeries);
    }

    addSerie(serie: ISerie): void {
        if (!this.arrSeries.includes(serie) && serie != null) {
            serie.id = this.id;
            this.arrSeries.push(serie);
            this.id++;
        }
    }

    deleteSerieByTitle(miSerie: ISerie) {
        // this.arrSeries = this.arrSeries.filter(serie => serie.title !== miSerie.title);

        //Segunda opcion de eliminar
        let i = this.arrSeries.findIndex(serie => serie.title == miSerie.title);
        if (i != -1 && i >= 0 && i < this.arrSeries.length) {
            this.arrSeries.splice(i, 1);
        }
    }
}
