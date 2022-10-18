// Build getComputerChoice function that allows computer to make random selection

function getComputerChoice() {
        
    let selection = ["Rock", "Paper", "Scissors"];

    let computerSelection = selection[Math.floor(Math.random() * selection.length)];

    displayComputerChoice(computerSelection);
    return computerSelection;
}

// Separate computer DOM element from getComputerChoice

function displayComputerChoice(computerSelection) {

let computer = document.createElement('p');
computer.innerText = computerSelection;
let computerDisplay = document.querySelector('.computer-choice');
computerDisplay.appendChild(computer);
}


//Build function to take the player choice

function getPlayerChoice(event) {

let playerSelection;

    if (event.target.matches('.rock')) {
        playerSelection = "Rock";
        // console.log(playerSelection);

    } else if (event.target.matches ('.paper')) {
        playerSelection = "Paper";
        // console.log(playerSelection);

    } else if (event.target.matches) {
        playerSelection = "Scissors";
        // console.log(playerSelection);
    }

displayPlayerChoice(playerSelection);
return playerSelection;
}

// Separate player DOM element from getPlayerChoice

function displayPlayerChoice(playerSelection) {

let player = document.createElement('p');
player.innerText = playerSelection;
let playerDisplay = document.querySelector('.player-choice');
playerDisplay.appendChild(player);
}


// Build function that checks winner each round

function checkWinner(result, playerSelection, computerSelection) { 
        
    if 
    (playerSelection === computerSelection) {
        result = "Tie";

    } else if 
        (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper") {
            result = "Player";

    } else {
            result = "Computer";
    }
    console.log(result)
    return result;

}

/* Build playRound function that represents a single round of the game
conditional statements checking winner of each round
*/ 

function playRound (result, playerSelection, computerSelection, announce) {
    
    result = checkWinner();
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();


        result = checkWinner(playerSelection, computerSelection)

            if (result === "Tie") {
                announce = `This round was a tie! You both chose ${playerSelection}.`;

            } else if (result === "Player") {
                announce = `You win this round! Your ${playerSelection} beats their ${computerSelection}.`;

            } else {
                announce = `You loose this round! Their ${computerSelection} beats your ${playerSelection}.`;
            
            }

    let roundResult = document.createElement('p');
    roundResult.innerText = announce;
    let resultDisplay = document.querySelector('.round-result');
    resultDisplay.appendChild(roundResult);
        
}

playRound();

/* Build function that plays 5 rounds of game
increment rounds up to 5 rounds
announce winner at the end
*/

// function game() {
//     let playerWin = 0;
//     let computerWin = 0;
    
//    // for (let i = 0; i < 5; i++) {
//         playerSelection = getPlayerChoice();
//         computerSelection = getComputerChoice();

//         console.log(playRound(playerSelection, computerSelection));


//         if (checkWinner(playerSelection, computerSelection) === "Player") {
//             playerWin++;
    
//         } else if (checkWinner(playerSelection, computerSelection) === "Computer") {
//             computerWin++;
//   //  }
       
//     }

//     console.log("------------");
//     console.log("Game Over:");

//     if(playerWin > computerWin){
//         console.log("Player was the winner.")
//     } else if (playerWin < computerWin) {
//         console.log("Computer was the winner.")
//     } else if (playerWin === computerWin) {
//         console.log("The game ends in a draw.")
//     }
// }

//   console.log(game());