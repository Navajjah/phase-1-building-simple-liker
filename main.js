// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const heart = document.getElementById('heart');
const errorModal = document.getElementById('error-modal');
const errorMessage = document.getElementById('error-message');

// Function to handle the heart click
function handleHeartClick() {
  if (heart.textContent === EMPTY_HEART) {
    // User clicked on the empty heart
    mimicServerCall()
      .then(() => {
        heart.textContent = FULL_HEART; // Change to full heart
        heart.classList.add('activated-heart'); // Add class to style it
      })
      .catch((error) => {
        errorMessage.textContent = error; // Display the error message
        errorModal.classList.remove('hidden'); // Show the error modal
        
        setTimeout(() => {
          errorModal.classList.add('hidden'); // Hide the error modal after 3 seconds
        }, 3000);
      });
  } else {
    // User clicked on the full heart
    heart.textContent = EMPTY_HEART; // Change to empty heart
    heart.classList.remove('activated-heart'); // Remove class to revert styling
  }
}

// Adding event listener to the heart
heart.addEventListener('click', handleHeartClick);



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
