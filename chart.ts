import Chart from 'chart.js/auto';
import { getFirestore,getDoc,doc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';




const ctx = <HTMLCanvasElement>document.getElementById('myChart');

const chart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['Taste', 'Location', 'Accesibility', 'Cleanliness', 'Water Pressure'],
      datasets: [{
        label: 'Drinking Fountain Rating',
        data: [1.0, 3.5, 2.7, 4.2, 5],
        //data: [taste.value, location.value, accessibility.value, health.value, temperature.value];
        borderWidth: 1,
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)' 
      }]
    },
    options: {
      scales: {
        r: {
          angleLines: {
            display: true
          },
          suggestedMin: 0, 
          suggestedMax: 5,
          ticks: {
            maxTicksLimit:6,
          } 
        }
      }
    }
  });
