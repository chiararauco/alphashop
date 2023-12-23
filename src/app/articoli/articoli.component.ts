import { Component } from '@angular/core';
import { IArticoli } from '../models/articoli';

@Component({
  selector: 'app-articoli',
  templateUrl: './articoli.component.html',
  styleUrls: ['./articoli.component.css']
})
export class ArticoliComponent {
  articoli: IArticoli[] = [
    { codart: '01525458', descrizione: 'BARILLA FARINA 1 KG', um: 'PZ', pzcart: 24, peso: 1, prezzo: 1.09, active: true, data: new Date() },
    { codart: '05468648', descrizione: 'BARILLA PASTA 500 GR', um: 'PZ', pzcart: 24, peso: 1, prezzo: 1.39, active: true, data: new Date() },
    { codart: '00855331', descrizione: 'BARILLA PASTA 500 GR', um: 'PZ', pzcart: 24, peso: 1, prezzo: 1.39, active: true, data: new Date() },
    { codart: '05468648', descrizione: 'FINDUS CROCCOLE', um: 'PZ', pzcart: 12, peso: 1, prezzo: 5.09, active: true, data: new Date() }



  ]

  constructor() { }
}
