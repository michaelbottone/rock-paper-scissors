
computerScore = +'';

userScore = +'';


function game() {
    for (let i = 0; i < 5; i++) {

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
    
            } else if ((computerSelection === "paper" && playerSelection === "rock") || (computerSelection === "rock" && playerSelection === "scissors") || (computerSelection === "scissors" && playerSelection === "paper")) {
                alert(`you lose, ${computerSelection} beats ${playerSelection}`);
                return ++computerScore;

            } else if ((computerSelection === "rock" && playerSelection === "paper") || (computerSelection === "scissors" && playerSelection === "rock") || (computerSelection === "paper" && playerSelection === "scissors")) {
                alert(`you win, ${playerSelection} beats ${computerSelection}`);
                return ++userScore;

            }




        };


        playRound(playerSelection, computerSelection);

    };


alert(`you scored ${userScore}, the computer scored ${computerScore}`)
if(computerScore >= 3) {
    alert("the computer wins'")

}else if (userScore >= 3){
    alert("congrats, you win!")
}else{
    alert("no winner, too many ties")
}

};










game();