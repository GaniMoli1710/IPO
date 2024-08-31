document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll("input");

    inputs.forEach(input => {
        input.addEventListener("blur", function() {
            if (input.value === "") {
                input.classList.add("is-invalid");
            } else {
                input.classList.remove("is-invalid");
            }
        });
    });
});


// Function to create IPO and send data to the API
async function saveIpo() {
    // Gather input data from the form
    const data = {
        company_name: document.getElementById('companyName').value,
        open_date: document.getElementById('openDate').value,
        issue_size: document.getElementById('issueSize').value,
        listing_date: document.getElementById('listingDate').value,
        price_band: document.getElementById('priceBand').value,
        close_date: document.getElementById('closeDate').value,
        issue_type: document.getElementById('issueType').value,
        status: document.getElementById('status').value,
        ipo_price: document.getElementById('ipoPrice').value,
        listing_gain: document.getElementById('listingGain').value,
        cmp: document.getElementById('cmp').value,
        rhp: document.getElementById('rhp').value,
        listing_price: document.getElementById('listingPrice').value,
        listing_date_new: document.getElementById('listingDateNew').value,
        current_return: document.getElementById('currentReturn').value,
        drhp: document.getElementById('drhp').value
    };

    try {
        // Send a POST request to the API endpoint
        const response = await fetch('http://localhost:8000/api/create-item', { // Ensure this matches your Django URL configuration
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            // If the response is successful
            const responseData = await response.json();
            alert('IPO created successfully!');
            console.log(responseData);
        } else {
            // Handle errors from the server
            const errorData = await response.json();
            alert('Failed to create IPO: ' + (errorData.message || 'Unknown error'));
        }
    } catch (error) {
        // Handle network or other errors
        console.error('Error:', error);
        alert('An error occurred while creating the IPO');
    }
}

// Attach event listener to the Register button
document.getElementById('registerbutton').addEventListener('click', saveIpo);

// Optional: Clear input fields when Cancel button is clicked
document.querySelector('.btn.btn-outline-primary').addEventListener('click', () => {
    document.querySelectorAll('input').forEach(input => input.value = '');
});
