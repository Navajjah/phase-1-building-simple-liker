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
        heart.textContent = FULL_HEART;
        heart.classList.add('activated-heart'); 
      })
      .catch((error) => {
        errorMessage.textContent = error; 
        errorModal.classList.remove('hidden'); 
        
        setTimeout(() => {
          errorModal.classList.add('hidden'); 
        }, 3000);
      });
  } else {
    // User clicked on the full heart
    heart.textContent = EMPTY_HEART; 
    heart.classList.remove('activated-heart'); 
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
