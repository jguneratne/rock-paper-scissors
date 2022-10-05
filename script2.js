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
*/ 


function playRound(playerSelection, computerSelection) { 
    
    playerSelection = prompt("Ready to Play? Enter Rock, Paper or Scissors!", "Make your choice here.");
    computerSelection = getComputerChoice();

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    playerScore = 0;
    computerScore = 0;
    tieScore = 0;
    
    if 
        (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper") {

        return `You win this round! You chose ${playerSelection}, they chose ${computerSelection}.`

    } else if 

        (playerSelection === "rock" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "rock") {
            computerScore++;
        return `You loose this round! You chose ${playerSelection}, they chose ${computerSelection}.`

    } else if 
            
        (playerSelection === computerSelection) {
            
            return `This round was a tie! You both chose ${playerSelection}.`
    } else {

            return "There was a problem."
    }
}

//  console.log(playRound()); 


/* Build keepScore function
    Takes score from playRound and adds it for each player
    Displays score at end of game()
*/

function keepScore () {
    playRound(playerScore, computerScore, tieScore);

    for (i = 0; i > 5; i++) {
        if (playerSelection > computerSelection) {
            playerScore++;
        } else {
            computerScore++
        } 
    }
    
}

/* Build function that plays 5 rounds of game
let round = number
increment rounds up to 5 rounds
keep score
announce winner at the end
*/

function game() {

round = 0;

do {
    console.log(playRound(round++));
    //console.log(keepScore());
} while (round < 5)


}
  console.log(game());