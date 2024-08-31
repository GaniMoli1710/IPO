// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    const updateButtons = document.querySelectorAll('.update-btn');
    const deleteButtons = document.querySelectorAll('.delete-btn');
    const viewButtons = document.querySelectorAll('.view-btn');

    updateButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Update action clicked!');
        });
    });

    deleteButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Get the IPO id from the data attribute
            const ipoId = button.getAttribute('data-ipo-id');
            
            // Confirm deletion with the user
            if (confirm('Are you sure you want to delete this IPO?')) {
                // Make the DELETE API call
                fetch(`/api/ipo/delete-ipo/${ipoId}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('Failed to delete IPO');
                    }
                })
                .then(data => {
                    console.log('Deleted IPO:', data);
                    alert('IPO deleted successfully!');
                    
                    // Optionally remove the IPO from the UI
                    button.closest('.ipo-item').remove();
                })
                .catch(error => {
                    console.error('Error deleting IPO:', error);
                    alert('Error deleting IPO');
                });
            }
        });
    });
    

    viewButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Get the IPO id from the data attribute
            const ipoId = button.getAttribute('data-ipo-id');
    
            // Make the GET API call to fetch IPO details
            fetch(`/api/ipo/get-ipo/${ipoId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to fetch IPO details');
                }
            })
            .then(data => {
                console.log('Fetched IPO details:', data);
    
                // Display the IPO details (This example uses a simple alert, but you can use a modal or other UI component)
                alert(`
                    IPO Name: ${data.name}
                    Company: ${data.company}
                    Issue Size: ${data.issueSize}
                    Listing Date: ${data.listingDate}
                    Price Band: ${data.priceBand}
                `);
            })
            .catch(error => {
                console.error('Error fetching IPO details:', error);
                alert('Error fetching IPO details');
            });
        });
    });

    
});



let currentPage = 1;  // Track the current page
const totalPages = 10; // Total number of pages (you can set this dynamically based on your data)

// Function to fetch IPO details for the given page
function fetchIPODetails(page) {
    fetch(`/api/ipo/get-ipos?page=${page}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        console.log('Fetched IPO details for page', page, ':', data);
        // Update the UI with the fetched data
        updateIPODetailsUI(data);
    })
    .catch(error => {
        console.error('Error fetching IPO details:', error);
    });
}

// Function to update the UI with the fetched IPO details
function updateIPODetailsUI(data) {
    // Clear existing IPO details
    const ipoContainer = document.getElementById('ipo-container');
    ipoContainer.innerHTML = '';

    // Append new IPO details
    data.forEach(ipo => {
        const ipoItem = document.createElement('div');
        ipoItem.classList.add('ipo-item');
        ipoItem.innerHTML = `
            <h5>${ipo.name}</h5>
            <p>Company: ${ipo.company}</p>
            <p>Issue Size: ${ipo.issueSize}</p>
            <p>Listing Date: ${ipo.listingDate}</p>
            <p>Price Band: ${ipo.priceBand}</p>
        `;
        ipoContainer.appendChild(ipoItem);
    });
}

// Event listener for pagination buttons
document.querySelectorAll('.page-btn').forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent.trim();

        if (buttonText === '«') {
            if (currentPage > 1) {
                currentPage--;
                fetchIPODetails(currentPage);
            }
        } else if (buttonText === '»') {
            if (currentPage < totalPages) {
                currentPage++;
                fetchIPODetails(currentPage);
            }
        } else if (!isNaN(buttonText)) {
            currentPage = parseInt(buttonText);
            fetchIPODetails(currentPage);
        }
    });
});

// Initial fetch for the first page
fetchIPODetails(currentPage);


