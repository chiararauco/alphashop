import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent {

  // Inizializzazione di variabili
  @Input() Titolo: string = "";
  @Input() Sottotitolo: string = "";

  @Input() Show: boolean = true;
  constructor() {

  }

}
