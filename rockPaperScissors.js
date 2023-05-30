console.log('hi');

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Incorrect input');
  }
};

// console.log(getUserChoice('Rock'));

const getComputerChoice = () => {
  let getComputerChoice = Math.floor(Math.random() * 3);
  switch (getComputerChoice) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    default:
    console.log('Error!')
    break;
  }
}

// console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'The game is a tie!';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer wins!'
    } else {
      return 'Congratulations, rock beats paper!';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer wins!'
    } else {
      return 'Congratulations, paper beats rock!';
    }
  }
    if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer wins!'
    } else {
      return 'Congratulations, scissors beats paper!';
    }
  }
}

const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log('You chose: ' + userChoice);
  console.log('The computer chose: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();