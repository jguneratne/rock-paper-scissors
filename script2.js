// Build getComputerChoice function that allows computer to make random selection

function getComputerChoice() {
    let selection = ["rock", "paper", "scissors"];
    let random = selection[Math.floor(Math.random() * selection.length)];

    return random;
}

function getPlayerChoice() {
    let selection = ["rock", "paper", "scissors"];
    let checkInput = false;

    while (checkInput == false) {
        let choice = prompt("Ready to Play? Enter Rock, Paper or Scissors!", "Make your choice here.");
        
        if (choice == null) {
            prompt = ("You must make a choice. Enter Rock, Paper or Scissors!", "Make your choice here.");
        
        } let choiceInLower = choice.toLowerCase();
            if (selection.includes(choiceInLower)) {
                checkInput == true;
                return choiceInLower;
            }
        }
    }


/* Build playRound function that represents a single round of the game
playerSelection = prompt
computerSelection = getComputerChoice()
let score values for each player and a tie
conditional statements comparing entries and incrementing scores
*/ 


function playRound(playerSelection, computerSelection) { 
        
    if 
    (playerSelection === computerSelection) {
        return `This round was a tie! You both chose ${playerSelection}.`

    } else if 
        (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper") {
    
            return `You win this round! You ${playerSelection} beats their ${computerSelection}.`

    } else {
            return `You loose this round! Their ${computerSelection} beats your ${playerSelection}.`
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
    for (let i = 0; i < 5; i++) {
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));
    }
}

  console.log(game());