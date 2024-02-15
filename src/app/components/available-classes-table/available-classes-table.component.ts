import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-available-classes-table',
  templateUrl: './available-classes-table.component.html',
  styleUrls: ['./available-classes-table.component.css']
})
export class AvailableClassesTableComponent {

  tableData: any[] = [
    { name: 'Classe Host Security', category: 'Classi Disponibili' },
    { name: 'Network Security', category: 'Classi Disponibili' },
    { name: 'Classe Febbraio 2024', category: 'Classi Disponibili' },
    { name: 'Classe Host Security Giugno 2024', category: 'Classi Disponibili' },

    { name: 'Classe Host Security', category: 'Classi in corso' },
    { name: 'Network Security', category: 'Classi in corso' },
    { name: 'Classe Febbraio 2024', category: 'Classi in corso' },
    { name: 'Classe Giugno 2024', category: 'Classi in corso' },
    { name: 'Classe Host Security Giugno 2024', category: 'Classi in corso' },
    { name: 'Classe Network Security Giugno 2024', category: 'Classi in corso' },


    { name: 'Classe Giugno 2020', category: 'Classi Concluse' },
    { name: 'Network Security', category: 'Classi Concluse' },
    { name: 'Classe Febbraio 2020', category: 'Classi Concluse' },
    { name: 'Classe Host Security Giugno 2024', category: 'Classi Concluse' },

    { name: 'Network Security', category: 'Classi a cui sei iscritto' },
    { name: 'Classe Host Security Giugno 2024', category: 'Classi a cui sei iscritto' },
  ];

  // Elenco delle schede
  tabs: string[] = ['Classi Disponibili', 'Classi in corso', 'Classi Concluse', 'Classi a cui sei iscritto'];

  // Inizialmente selezionata la prima scheda
  selectedTab: string = this.tabs[0];


  // Metodo per cambiare la scheda selezionata
  selectTab(tab: string): void {
    this.selectedTab = tab;

  }

  handleButtonClick(){
    prompt('ciao')
  }
}
