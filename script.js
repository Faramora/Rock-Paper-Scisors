

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

//  play a single round
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (
        (playerSelection === 'rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'paper' && computerSelection === 'Rock') ||
        (playerSelection === 'scissors' && computerSelection === 'Paper')
    ) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (
        (playerSelection === 'rock' && computerSelection === 'Paper') ||
        (playerSelection === 'paper' && computerSelection === 'Scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'Rock')
    ) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        return `It's a Tie! Both chose ${playerSelection}`;
    }
}

//  play the game for 5 rounds
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerChoice = prompt("Enter your choice (Rock, Paper, or Scissors):");
        const computerChoice = getComputerChoice();

        console.log(`Round ${i + 1}: ${playRound(playerChoice, computerChoice)}`);

        // Update scores
        if (playRound(playerChoice, computerChoice).includes('Win')) {
            playerScore++;
        } else if (playRound(playerChoice, computerChoice).includes('Lose')) {
            computerScore++;
        }
    }

    
    if (playerScore > computerScore) {
        console.log("You are the winner!");
    } else if (playerScore < computerScore) {
        console.log("Computer is the winner!");
    } else {
        console.log("It's a tie! No clear winner.");
    }
}


game();
