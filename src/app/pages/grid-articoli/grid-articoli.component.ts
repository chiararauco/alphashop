import { Component } from '@angular/core';
import { IArticoli } from 'src/app/models/articoli';
import { ArticoliService } from 'src/services/articoli.service';

@Component({
  selector: 'app-grid-articoli',
  templateUrl: './grid-articoli.component.html',
  styleUrls: ['./grid-articoli.component.css']
})
export class GridArticoliComponent {
  articoli$: IArticoli[] = [];

  constructor(private articoliService: ArticoliService) { }

  ngOnInit(): void {
    this.articoli$ = this.articoliService.getArticoli();
    console.log(this.articoli$)
  }

  handleEdit = (codart: string) => {
    console.log("clicca tasto modifica del codice " + codart)
  }

  handleDelete = (codart: string) => {
    console.log("clicca tasto elimina del codice " + codart)
    this.articoli$.splice(this.articoli$.findIndex(x => x.codart === codart), 1)
    console.log(this.articoli$)

  }
}
