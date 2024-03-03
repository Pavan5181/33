let userScore = 0;
let computerScore = 0;
let attempts = 0;

function makeChoice(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  attempts++;

  const result = determineWinner(userChoice, computerChoice);
  displayResult(userChoice, computerChoice, result);

  if (attempts === 10) {
    displayFinalResult();
    resetGame();
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'It\'s a tie!';
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    userScore++;
    return 'You win!';
  } else {
    computerScore++;
    return 'Computer wins!';
  }
}

function togglePassword() {
  var passwordField = document.getElementById("password");
  var confirmPasswordField = document.getElementById("confirmPassword");
  var passwordToggle = document.querySelector(".password-toggle");

  if (passwordField.type === "password") {
      passwordField.type = "text";
      confirmPasswordField.type = "text";
      passwordToggle.textContent = "👁️";
  } else {
      passwordField.type = "password";
      confirmPasswordField.type = "password";
      passwordToggle.textContent = "👁️";
  }
}

function validateForm() {
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var passwordError = document.getElementById("passwordError");

  if (password !== confirmPassword) {
      passwordError.textContent = "Passwords do not match.";
  } else {
      passwordError.textContent = "";
      // Additional form validation or submission logic can be added here
      alert("Registration successful!");
  }
}
