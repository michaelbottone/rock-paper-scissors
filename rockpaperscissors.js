function computerPlay() {
    let n = Math.floor(Math.random() * 100);

    if (n <= 33) {
        return "rock";
    } else if (n >= 33 && n <= 66) {
        return "paper";
    } else {
        return "scissors";
    }
};
let computerSelection = computerPlay();

let pick = prompt("choose your fighter: rock, paper, or scissors");

let playerSelection = pick.toLowerCase();

let roundWinner = '';

function playRound(playerSelection, computerSelection) {
    if ((computerSelection === "rock" && playerSelection === "rock") || (computerSelection === "paper" && playerSelection === "paper") || (computerSelection === "scissors" && playerSelection === "scissors")) {
        alert("it's a tie!");
        return roundWinner = "tie";
    } else if ((computerSelection === "paper" && playerSelection === "rock") || (computerSelection === "rock" && playerSelection === "scissors") || (computerSelection === "scissors" && playerSelection === "paper")) {
        alert(`you lose, ${computerSelection} beats ${playerSelection}`);
        return roundWinner = "computer";
    } else if ((computerSelection === "rock" && playerSelection === "paper") || (computerSelection === "scissors" && playerSelection === "rock") || (computerSelection === "paper" && playerSelection === "scissors")) {
        alert(`you win, ${playerSelection} beats ${computerSelection}`);
        return roundWinner = "user";
    }
};


playRound(playerSelection, computerSelection);

function game(roundWinner){
    if(roundWinner === "computer"){
            computerScore = 0;
            computerScore++;
            return computerScore;
        }else if(roundWinner === "user"){
            userScore = 0;
            userScore++;
            return userScore;
        }else if(roundWinner === "tie"){
            console.log("it's a tie, no points!");
        }

    }

game(roundWinner);