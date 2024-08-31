document.addEventListener('DOMContentLoaded', function () {
    // Sample data for chart.js to simulate fetching from API
    const data = {
        labels: ['Upcoming', 'New Listed', 'Ongoing'],
        datasets: [{
            data: [15, 25, 2],
            backgroundColor: ['#6f42c1', '#6610f2', '#17a2b8'],
        }]
    };

    const config = {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function (tooltipItem) {
                            return tooltipItem.label + ": " + tooltipItem.raw;
                        }
                    }
                }
            }
        }
    };

    const ipoChart = new Chart(
        document.getElementById('ipoChart'),
        config
    );

    // CRUD operations would go here with fetch or axios to communicate with your API
    // Example: Fetch data from JSON file or API and render it dynamically
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Process the data and update the DOM
        })
        .catch(error => console.error('Error fetching data:', error));
});



