
const buttonsContainer = document.getElementById('button')
buttonsContainer.addEventListener('click', function (event) {
    const playerSelection = getPlayerChoice(event);
    const computerSelection = getComputerChoice();
    const result = checkWinner(playerSelection, computerSelection);
    playRound(result, playerSelection, computerSelection);
});

// Build getComputerChoice function that allows computer to make random selection

function getComputerChoice() {
    
    let selection = ["Rock", "Paper", "Scissors"];

    computerSelection = selection[Math.floor(Math.random() * selection.length)];

    displayComputerChoice(computerSelection);
    return computerSelection;
}


//Build function to take the player choice

function getPlayerChoice(event) {

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



// Build function that checks winner each round

function checkWinner(playerSelection, computerSelection) { 

let playerWin = 0;
let computerWin = 0;

if 
(playerSelection === computerSelection) {
    result = "Tie";

} else if 
    (playerSelection === "rock" && computerSelection === "scissors" ||
    playerSelection === "paper" && computerSelection === "rock" ||
    playerSelection === "scissors" && computerSelection === "paper") {
        playerWin++
        result = "Player";

} else {
        computerWin++
        result = "Computer";
}

if(wins >= 5) {
    return
}

gameResult(playerWin, computerWin);
return result;
}


/* Build playRound function that represents a single round of the game
conditional statements checking winner of each round
*/ 

function playRound(result) {

let announce; 

if (result === "Tie") {
    announce = `This round was a tie! You both chose ${playerSelection}.`;

    } else if (result === "Player") {
        announce = `You win this round! Your ${playerSelection} beats their ${computerSelection}.`;

    } else {
        announce = `You loose this round! Their ${computerSelection} beats your ${playerSelection}.`;
        
    }
        
roundResult(announce);
return announce;
    
}

// Function to display result of Round as DOM element

function roundResult(announce) {
let roundResult = document.createElement('p');
roundResult.innerText = announce;
let resultDisplay = document.querySelector('.round-result');
resultDisplay.appendChild(roundResult);
}


/* Announce game winner by comparing player and computer scores
*/

function gameResult(playerWin, computerWin) {

let gameWinner; 

if (playerWin > computerWin) {
    gameWinner = "Game Over! You win the game!"
} else if (playerWin < computerWin) {
    gameWinner = "Game Over! Computer wins the game!"
} else if (playerWin === computerWin) {
    gameWinner = "Game Over! The game ends in a draw."
}

playerScoreDisplay(playerWin);
computerScoreDisplay(computerWin);
gameResultDisplay(gameWinner);
}


// CREATE DOM ELEMENTS

// Build function to display computer DOM element from getComputerChoice

function displayComputerChoice(computerSelection) {

let computer = document.createElement('p');
computer.innerText = computerSelection;
let computerDisplay = document.querySelector('.computer-choice');
computerDisplay.appendChild(computer);
}


// Build function to display player DOM element from getPlayerChoice

function displayPlayerChoice(playerSelection) {

let player = document.createElement('p');
player.innerText = playerSelection;
let playerDisplay = document.querySelector('.player-choice');
playerDisplay.appendChild(player);
}

// Create function to display Player Score as DOM element

function playerScoreDisplay(playerWin) {
    let playerScore = document.createElement('p');
    playerScore.innerText = playerWin;
    let playerDisplay = document.querySelector('.player-score');
    playerDisplay.appendChild(playerScore);

    document.querySelector('player-score').textContent = `Score: ${playerWin}`
}


// Create function to display Computer Score as DOM element

function computerScoreDisplay(computerWin) {
    let computerScore = document.createElement('p');
    computerScore.innerText = computerWin;
    let computerDisplay = document.querySelector('.computer-score');
    computerDisplay.appendChild(computerScore);

    document.querySelector('computer-score').textContent = `Score: ${computerWin}`
}


// Create function to display Game Result as DOM element

function gameResultDisplay (gameWinner) {
let gameResult = document.createElement('p');
gameResult.innerText = gameWinner;
let gameResultDisplay = document.querySelector('.game-result');
gameResultDisplay.appendChild(gameResult);
}


