document.addEventListener("DOMContentLoaded", function() {
    const ratings = document.querySelectorAll(".rating");
  
    // Update the stars based on the rating
    ratings.forEach(rating => {
      const starsContainer = rating.querySelector('.stars');
      const ratingValue = parseFloat(rating.dataset.rating);
      const fullStars = Math.floor(ratingValue);
      const halfStar = ratingValue % 1 >= 0.5 ? 1 : 0;
  
      let starsHTML = '';
      for (let i = 0; i < fullStars; i++) {
        starsHTML += '★';  // Full star
      }
      if (halfStar) {
        starsHTML += '★';  // Half star for simplicity
      }
      starsContainer.innerHTML = starsHTML;
    });
  
    // Plot the chart comparing Angel One and Zerodha
    const ctx = document.getElementById('brokerComparisonChart').getContext('2d');
    const brokerComparisonChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['2016-17', '2017-18', '2018-19', '2019-20','2020-21','2021-22','2022-23','2023-24'], // X-axis: Years
        datasets: [
          {
            label: 'Angel One',
            data: [3,4,5,6,8,18,45,50], // Y-axis values for Angel One
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            //fill: true
          },
          {
            label: 'Zerodha',
            data: [2,3,7,12,21,48,73,79], // Y-axis values for Zerodha
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
           // fill: true
          }
        ]
      },
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: 'Year'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Money (in L)'
            }
          }
        }
      }
    });
  });
  //Plot for Complaints Section
  var ctx = document.getElementById('complaintsChart').getContext('2d');
  var complaintsChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['2016-17', '2017-18', '2018-19', '2019-20', '2020-21', '2021-22', '2022-23', '2023-24'],
      datasets: [
        {
          label: 'Angel One',
          data: [300, 450, 400, 600, 1400, 800, 400, 1200], // Sample data for Angel One
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          //fill: true
        },
        {
          label: 'Zerodha',
          data: [200, 300, 350, 500, 650, 750, 850, 1100], // Sample data for Zerodha
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          //fill: true
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        x: {
          title: {
            display: true,
            text: 'Year'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Number of Complaints'
          },
          beginAtZero: true,
          max: 1800,
          ticks: {
            stepSize: 200
          }
        }
      }
    }
  });
  //Plot for Share Holding for Angel One 
  var ctx2 = document.getElementById('shareHoldingChart').getContext('2d');
  var shareHoldingChart = new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: ['Angel One'], // Broker Name
      datasets: [
        {
          label: '2016',
          data: [40],
          backgroundColor: 'rgba(255, 99, 132, 0.5)', // Bar color
        },
        {
          label: '2017',
          data: [35],
          backgroundColor: 'rgba(54, 162, 235, 0.5)', // Bar color
        },
        {
          label: '2018',
          data: [30],
          backgroundColor: 'rgba(255, 206, 86, 0.5)', // Bar color
        },
        {
          label: '2019',
          data: [25],
          backgroundColor: 'rgba(75, 192, 192, 0.5)', // Bar color
        },
        {
          label: '2020',
          data: [20],
          backgroundColor: 'rgba(153, 102, 255, 0.5)', // Bar color
        },
        {
          label: '2021',
          data: [15],
          backgroundColor: 'rgba(255, 159, 64, 0.5)', // Bar color
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          title: {
            display: true,
            text: 'Share Holding (%)'
          },
          beginAtZero: true,
          max: 45,
          ticks: {
            stepSize: 5
          }
        }
      },
      plugins: {
        legend: {
          display: true, // Shows the year for each bar as a label
          position: 'top'
        }
      }
    }
  });

  //Plot for Share Holding for Zerodha
  var ctx3 = document.getElementById('zerodhaShareHoldingChart').getContext('2d');
  var zerodhaShareHoldingChart = new Chart(ctx3, {
    type: 'bar',
    data: {
      labels: ['Zerodha'], // Broker Name
      datasets: [
        {
          label: '2016',
          data: [30],
          backgroundColor: 'rgba(255, 99, 132, 0.5)', // Bar color
        },
        {
          label: '2017',
          data: [28],
          backgroundColor: 'rgba(54, 162, 235, 0.5)', // Bar color
        },
        {
          label: '2018',
          data: [27],
          backgroundColor: 'rgba(255, 206, 86, 0.5)', // Bar color
        },
        {
          label: '2019',
          data: [8],
          backgroundColor: 'rgba(75, 192, 192, 0.5)', // Bar color
        },
        {
          label: '2020',
          data: [3],
          backgroundColor: 'rgba(153, 102, 255, 0.5)', // Bar color
        },
        {
          label: '2021',
          data: [3],
          backgroundColor: 'rgba(255, 159, 64, 0.5)', // Bar color
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          title: {
            display: true,
            text: 'Share Holding (%)'
          },
          beginAtZero: true,
          max: 35,
          ticks: {
            stepSize: 5
          }
        }
      },
      plugins: {
        legend: {
          display: true, // Shows the year for each bar as a label
          position: 'top'
        }
      }
    }
  });
