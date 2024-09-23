// Example rating value
const rating = 4.5; // You can modify this value to dynamically change the stars
const starRatingDiv = document.getElementById('star-rating');

function generateStars(rating) {
  let stars = '';
  // Full stars
  for (let i = 1; i <= Math.floor(rating); i++) {
    stars += '<i class="fas fa-star text-warning"></i>';
  }
  // Half star
  if (rating % 1 !== 0) {
    stars += '<i class="fas fa-star-half-alt text-warning"></i>';
  }
  // Empty stars
  for (let i = Math.ceil(rating); i < 5; i++) {
    stars += '<i class="far fa-star text-warning"></i>';
  }
  return stars;
}

// Inject stars into the div
starRatingDiv.innerHTML = generateStars(rating);
