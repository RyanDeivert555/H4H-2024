import Chart from 'chart.js/auto';

const ctx = document.getElementById('myChart');

const chart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['Taste', 'Location', 'Accesibility', 'Cleanliness', 'Water Pressure'],
      datasets: [{
        label: 'Water Rating',
        data: [1.0, 3.5, 2.7, 4.2, 5],
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
