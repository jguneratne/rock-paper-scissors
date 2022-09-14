// Build getComputerChoice function that allows computer to make random selection

function getComputerChoice() {
    let selection = ["Rock", "Paper", "Scissors"];
    let random = selection[Math.floor(Math.random() * selection.length)];

    return random;
}

    // console.log(getComputerChoice());

/* Build playRound function that represents a single round of the game
playerSelection = prompt
computerSelection = getComputerChoice()
let score values for each player and a tie
conditional statements comparing entries and incrementing scores

Why does adding .toLowerCase to the prompt return the else statement??
*/ 


function playRound(playerSelection, computerSelection) { 
    
    playerSelection = prompt("Ready to Play? Enter Rock, Paper or Scissors!", "Make your choice here.");
    computerSelection = getComputerChoice();
 

    let playerScore = 0;
    let computerScore = 0;
    let tieScore = 0;
    
    if 
        (playerSelection === "Rock" && computerSelection === "Scissors" ||
        playerSelection === "Paper" && computerSelection === "Rock" ||
        playerSelection === "Scissors" && computerSelection === "Paper") {
        playerScore++;
        return `You win this round! Your ${playerSelection} beats their ${computerSelection}. Your score is ${playerScore}. Their score is ${computerScore}.`

    } else if 

        (playerSelection === "Rock" && computerSelection === "Paper" ||
        playerSelection === "Paper" && computerSelection === "Scissors" ||
        playerSelection === "Scissors" && computerSelection === "Rock") {
        computerScore++;
        return `You loose this round! Their ${computerSelection} beats your ${playerSelection}. Your score is ${playerScore}. Their score is ${computerScore}.`

    } else if 
            
        (playerSelection === computerSelection) {
            
            return `This round was a tie! You both picked ${playerSelection}. You both scored ${tieScore}`

    } else {

            return "There was a problem."
    }
}

//  console.log(playRound()); 


/* Build function that plays 5 rounds of game
let round = number
increment rounds up to 5 rounds
keep score
announce winner at the end
*/

function game() {

let round = 0;

do {
    playRound(round++);
    console.log(playRound());
} while (round < 5)

}
  console.log(game());