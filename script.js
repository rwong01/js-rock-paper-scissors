function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function getComputerChoice() {
    let randomInt = getRandomInt(0,4);
    let computerChoice;
    if (randomInt == 0) {
        computerChoice = 'rock';
    } else if (randomInt == 1) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors'
    }
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Your turn: rock, paper, or scissors?").toLowerCase();
    while (humanChoice != 'rock' && humanChoice != 'paper' && humanChoice != 'scissors'){
        humanChoice = prompt("Invalid input. Try again: rock, paper, or scissors?").toLowerCase();
    }
    return humanChoice;
}


function playGame() {
    let humanScore = 0,
    computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        if (humanChoice == computerChoice) {
            console.log("It's a tie!");
        } else if ((humanChoice == 'rock' && computerChoice == 'scissors') || 
        (humanChoice == 'paper' && computerChoice == 'rock') ||
        (humanChoice == 'scissors' && computerChoice == 'paper')) {
            humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            humanScore += 1;
        } else {
            computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
            computerScore += 1;
        }
    }

    for (let i = 1; i < 6; i++) {
        console.log(`Round ${i} of 5:`)
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        // console.log(`Score is You: ${humanScore} to Computer: ${computerScore}`);
    }
    
    if (humanScore > computerScore) {
        console.log(`Congrats! You won with a score of ${humanScore} to ${computerScore}.`);
    } else if (computerScore > humanScore) {
        console.log(`Too bad! You lost with a score of ${humanScore} to ${computerScore}.`);
    } else {
        console.log(`Welp. You tied with a score of ${humanScore} to ${computerScore}.`);
    }
}

playGame();