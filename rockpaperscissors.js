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



function playRound(playerSelection, computerSelection) {
    if ((computerSelection === "rock" && playerSelection === "rock") || (computerSelection === "paper" && playerSelection === "paper") || (computerSelection === "scissors" && playerSelection === "scissors")) {
        alert("it's a tie!");
        return winner = "tie";
    } else if ((computerSelection === "paper" && playerSelection === "rock") || (computerSelection === "rock" && playerSelection === "scissors") || (computerSelection === "scissors" && playerSelection === "paper")) {
        alert(`you lose, ${computerSelection} beats ${playerSelection}`);
        return winner = "computer";
    } else if ((computerSelection === "rock" && playerSelection === "paper") || (computerSelection === "scissors" && playerSelection === "rock") || (computerSelection === "paper" && playerSelection === "scissors")) {
        alert(`you win, ${playerSelection} beats ${computerSelection}`);
        return winner = "user";
    }
};




function game(winner){
    playRound(playerSelection, computerSelection);
    if(winner == "computer"){
            let computerScore = 0;
            computerScore++;
            return computerScore;
        }else if(winner == "user"){
            let userScore = 0;
            userScore++;
            return userScore;
        };

    }

console.log(game());