let choices = ["rock", "paper", "scissors"];

function getComputerChoice(choices) {
    let randChoice = [Math.floor(Math.random() * choices.length)];
    return choices[randChoice];
}

function game() {
    const computerSelection = getComputerChoice(choices);
    console.log(computerSelection);
    const playerSelection = prompt("Message: ").toLowerCase();
    console.log(playerSelection);

    function playRound(playerSelection, computerSelection) {
        if(playerSelection === computerSelection) {
            alert("Tie! No one wins this round");
        } else if(playerSelection == "rock" && computerSelection == "paper") {
            alert("You lose! Paper beats Rock");
        } else if (playerSelection == "paper" && computerSelection == "scissors") {
            alert("You lose! Scissors beats Paper");
        } else if (playerSelection == "scissors" && computerSelection == "rock") {
            alert("You lose! Rock beats Scissors" );
        } else if (playerSelection == "rock" && computerSelection == "scissors") {
            alert("You win! Rock beats Scissors");
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            alert("You win! Paper beats Rock");
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            alert("You win! Scissors beats Paper");
        } else {
            alert("Invalid choice! You should choose Rock, Paper or Scissors. Try again!");
        }
        return result = ' ';
    }
    playRound(playerSelection, computerSelection);
}
game();


