// Build getComputerChoice function that allows computer to make random selection

function getComputerChoice() {
    let selection = ["rock", "paper", "scissors"];
    let random = selection[Math.floor(Math.random() * selection.length)];

    let computer = document.createElement('p');
    computer.innerHTML = random;
    let computerDisplay = document.querySelector('.computer-choice');
    computerDisplay.appendChild(computer);

    return random;
}


//Build function to take the player choice

 function getPlayerChoice(playerSelection) {


    playerSelection = document.addEventListener('click', function (event) {
        if (event.target.matches('.rock')) {
            console.log(playerSelection);
            //return "Rock";
            
        } else if (event.target.matches ('.paper')) {
            console.log(playerSelection);
            //return "Paper";

        } else if (event.target.matches) {
            console.log(playerSelection);
            //return "Scissors";
        }
    })
    
    let player = document.createElement('p');
    player.innerHTML = playerSelection;
    let playerDisplay = document.querySelector('.player-choice');
    playerDisplay.appendChild(player);

}


// Build function that checks winner each round

function checkWinner(playerSelection, computerSelection) { 
        
    if 
    (playerSelection === computerSelection) {
        return "Tie";

    } else if 
        (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper") {
            return "Player";

    } else {
            return "Computer;"
    }

}


/* Build playRound function that represents a single round of the game
conditional statements checking winner of each round
*/ 

function playRound (playerSelection, computerSelection) {
    
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();


    let result = checkWinner(playerSelection, computerSelection)

    if (result === "Tie") {
        return `This round was a tie! You both chose ${playerSelection}.`

    } else if (result === "Player") {
        return `You win this round! Your ${playerSelection} beats their ${computerSelection}.`

    } else {
        return `You loose this round! Their ${computerSelection} beats your ${playerSelection}.`
    }


}

console.log(playRound());

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