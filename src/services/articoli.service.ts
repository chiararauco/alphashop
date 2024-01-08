import { Injectable } from '@angular/core';
import { IArticoli } from 'src/app/models/articoli';

@Injectable({
  providedIn: 'root'
})
export class ArticoliService {

  articoli: IArticoli[] = [
    { codart: '05464646', descrizione: 'Barilla Farina 1 Kg', um: 'PZ', pzcart: 24, peso: 1, prezzo: 1.09, active: true, data: new Date(), imageUrl: 'assets/images/prodotti/013500121.jpg' },
    { codart: '05464646', descrizione: 'Barilla Farina 1 Kg', um: 'PZ', pzcart: 24, peso: 1, prezzo: 1.09, active: true, data: new Date(), imageUrl: 'assets/images/prodotti/013500121.jpg' },
    { codart: '05464646', descrizione: 'Barilla Farina 1 Kg', um: 'PZ', pzcart: 24, peso: 1, prezzo: 1.09, active: true, data: new Date(), imageUrl: 'assets/images/prodotti/013500121.jpg' },
    { codart: '05464646', descrizione: 'Barilla Farina 1 Kg', um: 'PZ', pzcart: 24, peso: 1, prezzo: 1.09, active: true, data: new Date(), imageUrl: 'assets/images/prodotti/013500121.jpg' },
    { codart: '05464646', descrizione: 'Barilla Farina 1 Kg', um: 'PZ', pzcart: 24, peso: 1, prezzo: 1.09, active: true, data: new Date(), imageUrl: 'assets/images/prodotti/013500121.jpg' }
  ]
  constructor() { }

  // Funzione che mi restituisce tutti gli articoli
  getArticoli = (): IArticoli[] => this.articoli;

  // Funzione che mi restitiusce l'articolo con lo specifico codice
  getArticoliByCode = (codart: string): IArticoli => {
    const index = this.articoli.findIndex(articoli => articoli.codart === codart);
    return this.articoli[index]
  }
}
