// rock, paper, scissors!

function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === "rock" ||
        userInput === "paper" ||
        userInput === "scissors" ||
        userInput === "bomb") {
        return userInput;
    } else {
        console.log("Invalid user input");
    }
}
  
getComputerChoice = function () {
    rand_num = Math.floor(Math.random() * 3);
    let choice = "";
    switch (rand_num) {
      case 0:
        choice = "rock";
        break;
      case 1:
        choice = "paper";
        break;
      case 2:
        choice = "scissors";
        break;
    }
    return choice;
  };
  
determineWinner = function (userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return (result = "It's a tie");
    }
  
    if (userChoice === "rock") {
      if (computerChoice === "paper") {
        return (result = "Computer wins");
      } else {
        return (result = "User wins");
      }
    }
  
    if (userChoice === "paper") {
      if (computerChoice === "scissors") {
        return (result = "Computer wins");
      } else if (computerChoice === "rock") {
        return (result = "User wins");
      }
    }
  
    if (userChoice === "scissors") {
      if (computerChoice === "rock") {
        return (result = "Computer wins");
      } else if (computerChoice === "paper") {
        return (result = "User wins");
      }
    }
  
    if (userChoice === "bomb") {
      return (result = "User wins!!");
    }
  };
  
playGame = function () {
    const userChoice = getUserChoice("bomb");
    console.log("You chose: " + userChoice);
    const computerChoice = getComputerChoice();
    console.log("Computer chose: " + computerChoice);
  
    console.log(determineWinner(userChoice, computerChoice));
  };
  
playGame();
  