// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
const hearts = document.querySelectorAll(".like-glyph");

const modalMessage = () => {
  let modal = document.getElementById("modal");
  modal.className = "hidden";
};

function likeHeartCllbck(e) {
  const heart = e.target;
  mimicServerCall()
    .then(() => {
      if (heart.innerText === FULL_HEART) {
        heart.innerText = EMPTY_HEART;
        heart.className = "";
      } else {
        heart.innerText = FULL_HEART;
        heart.className = "activated-heart";
      }
    })
    .catch(() => {
      modal.className = "";
      setTimeout(modalMessage, 3000);
    });
};

for (const full of hearts) {
  full.addEventListener("click", likeHeartCllbck);
};

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
};
