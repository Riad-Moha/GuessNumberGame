

// Selecting Elements
const sendBtn = document.querySelector('#submit');
const guessInput = document.querySelector('.guess-input');
const msg = document.querySelector('.msg');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');

// Assigne min and max number
minNum.innerHTML = 0;
maxNum.innerHTML = 10;

//Computing the winning number
   
let winningGuess = Math.floor(Math.random() * 9) + 1;
let tryGuess = 3;
 


//Add event listener
sendBtn.addEventListener('click', guessFun);


function guessFun() {
    if (tryGuess >= 1) {
      if( guessInput.value > 1 && guessInput.value < 10) {
        if (guessInput.value == winningGuess) {
          // if the guess is right
          colorCase('Bravo', 'win-border', 'win-color');
          sendBtn.innerHTML= "play again";
          guessInput.setAttribute('disabled', true);
          tryGuess = 0;
        }
        else {       
          tryGuess--;
          // Game over case.
          if (tryGuess == 0) {
            guessInput.value = "";
            colorCase("vous avez perdu. La réponse était le " + winningGuess, 'perdu-border', 'perdu-color');
          } 
          else {

           // if the answer is wrong
            colorCase("Mauvaise réponse.<br> Il vous reste " + tryGuess + " tentatives", "none","perdu-color" )
            guessInput.value = "";
          }
          if (tryGuess == 0) {
            sendBtn.innerHTML= "play again";
            guessInput.setAttribute('disabled', true); 
          }
        }
      }
      else {
        msg.innerHTML = "Il faut entrer un number entre " + minNum.innerHTML  + " et "   + maxNum.innerHTML;
      }
    }

    if (tryGuess == 0) {

      sendBtn.addEventListener("click", playAgainFun);

    }
}


// Using the reload method to refresh the page
function playAgainFun() {
  location.reload();
}

// Using a function to setting the message and colors
function colorCase(message, BorderColor, textColor) {
  msg.innerHTML = message;
  guessInput.classList.add(BorderColor);
  msg.classList.add(textColor);

}