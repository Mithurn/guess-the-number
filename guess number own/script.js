// Generate a random number between 1 and 20
let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Function to update the message
const displayMessage = (message) => {
  document.querySelector('.details').textContent = message;
};

// Function to handle the 'Check' button click
document.querySelector('.check-button').addEventListener('click', function () {
  const guess = Number(document.querySelector('.input-box').value);

  // If no number is entered
  if (!guess) {
    displayMessage('⛔ No number entered!');
  } 
  // If the player wins
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.question-mark').textContent = secretNumber;

    // Update high score
    if (score > highScore) {
      highScore = score;
      document.querySelector('#highscore').textContent = `High Score: ${highScore}`;
    }

    // Change background color and box content
    document.querySelector('.body').style.backgroundColor = '#60b347';
    document.querySelector('.box').style.width = '30rem';
  } 
  // If guess is wrong
  else {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('#score').textContent = `Score: ${score}`;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('#score').textContent = `Score: 0`;
    }
  }
});

// Function to handle the 'Again' button click
document.querySelector('.again-button').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('#score').textContent = `Score: ${score}`;
  document.querySelector('.question-mark').textContent = '?';
  document.querySelector('.input-box').value = '';

  // Reset styles
  document.querySelector('.body').style.backgroundColor = '#222';
  document.querySelector('.box').style.width = '15rem';
});
