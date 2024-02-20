import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-show-results',
  templateUrl: './show-results.component.html',
  styleUrls: ['./show-results.component.css']
})
export class ShowResultsComponent {
  ngOnInit(): void {
    this.createPieChart();
  }

  createPieChart(): void {
    const canvas: any = document.getElementById('myPieChart');
    const ctx = canvas.getContext('2d');


    const data = {
      labels: ['Non Superato', 'Superato'],
      datasets: [{
        label: '# of Votes',
        data: [20, 10],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          // 'rgba(255, 206, 86, 0.5)',
          // 'rgba(75, 192, 192, 0.5)',
          // 'rgba(153, 102, 255, 0.5)',
          // 'rgba(255, 159, 64, 0.5)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          // 'rgba(255, 206, 86, 1)',
          // 'rgba(75, 192, 192, 1)',
          // 'rgba(153, 102, 255, 1)',
          // 'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1,

      }],
    };

    const option = {
      responsive: false,
      maintainAspectRatio: false
    };


    const myPieChart = new Chart(ctx, {
      type: 'pie',
      data: data,
      options: option
    });
  }

}
