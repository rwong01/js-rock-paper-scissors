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

    const info = document.createElement("div");
    info.style.cssText = "font-size: 18px; font-family:Arial,sans-serif; text-align:center";
    const results = document.createElement("h3");
    const score = document.createElement("h3");
    const winner = document.createElement("h2");

    function playRound(humanChoice, computerChoice) {
        if(info.contains(winner)) info.removeChild(winner);
        if (humanChoice == computerChoice) {
            results.textContent = ("It's a tie!");
        } else if ((humanChoice == 'rock' && computerChoice == 'scissors') || 
        (humanChoice == 'paper' && computerChoice == 'rock') ||
        (humanChoice == 'scissors' && computerChoice == 'paper')) {
            humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
            results.textContent = (`You win! ${humanChoice} beats ${computerChoice}.`);
            humanScore += 1;
        } else {
            computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
            results.textContent = (`You lose! ${computerChoice} beats ${humanChoice}.`);
            computerScore += 1;
        }
        score.textContent = (`You: ${humanScore} vs Computer: ${computerScore}`);
        document.body.appendChild(info);
        info.appendChild(results);
        info.appendChild(score);

        if (humanScore == 5 || computerScore == 5) {
            if (humanScore > computerScore) {
                winner.textContent = (`Congrats! You won with a score of ${humanScore} to ${computerScore}.`);
            } else if (computerScore > humanScore) {
                winner.textContent = (`Too bad! You lost with a score of ${humanScore} to ${computerScore}.`);
            } else {
                winner.textContent = (`Eh. You tied with a score of ${humanScore} to ${computerScore}.`);
            }
            info.appendChild(winner);
            humanScore = 0;
            computerScore = 0;
        }
    }
        
    const rockButton = document.getElementById("rock");
    const paperButton = document.getElementById("paper");
    const scissorsButton = document.getElementById("scissors");

    rockButton.addEventListener("click", () => {
        playRound('rock', getComputerChoice());
    });
    paperButton.addEventListener("click", () => {
        playRound('paper', getComputerChoice());
    });
    scissorsButton.addEventListener("click", () => {
        playRound('scissors', getComputerChoice());
    });

    
    
}

playGame();