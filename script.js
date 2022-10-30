
// Global Variables

let playerWin = 0;
let computerWin = 0;
const gameDiv = document.querySelector('.game');
let gameEnd = document.querySelector('.game-result');
const resetScreen = document.querySelector('.result-reset');
const goodbye = document.querySelector('.goodbye');
const reload = document.querySelector('.reload-btn');

// Click Events

const buttonsContainer = document.querySelector('.btns-box')
    buttonsContainer.addEventListener('click', function (event) {
    const playerSelection = getPlayerChoice(event);
    const computerSelection = getComputerChoice();
    const result = checkWinner(playerSelection, computerSelection);
});

resetScreen.addEventListener('click', resetGame);

reload.addEventListener('click', reloadPage);




// Function that allows computer to make random selection

function getComputerChoice() {

    let selection = ["Rock", "Paper", "Scissors"];
    computerSelection = selection[Math.floor(Math.random() * selection.length)];

    displayComputerChoice(computerSelection);
    return computerSelection;
}


// Function to take the player choice

function getPlayerChoice(event) {

    if (event.target.matches('.rock-btn')) {
        playerSelection = "Rock";

    } else if (event.target.matches('.paper-btn')) {
        playerSelection = "Paper";

    } else if (event.target.matches('.scissors-btn')) {
        playerSelection = "Scissors";
    }

    displayPlayerChoice(playerSelection);
    return playerSelection;
}


// Function that checks winner each round

function checkWinner(playerSelection, computerSelection) { 

      if 
        (playerSelection === computerSelection) {
            result = "Tie";

        } else if 
            (playerSelection === "Rock" && computerSelection === "Scissors" ||
            playerSelection === "Paper" && computerSelection === "Rock" ||
            playerSelection === "Scissors" && computerSelection === "Paper") {
                playerWin += 1;
                result = "Player";

        } else {
                computerWin += 1;
                result = "Computer";
        }
    
    playRound(result);
    playerScoreDisplay();
    computerScoreDisplay();
    gameResult();

}


/* Function that represents a single round of the game,
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


// Announce game winner by comparing player and computer scores

function gameResult() {
    let gameWinner;

    if (playerWin >= 5) {
        gameWinner = "Game Over! You win the game!";
        scoreFive();
        
    } else if (computerWin >= 5) {
        gameWinner = "Game Over! Computer wins the game!";
        scoreFive();
    
   } else {
        gameWinner = "";
   }

    gameResultDisplay(gameWinner);
    scoreFive();
}
   


// CREATE DOM ELEMENTS

// Start Game

function startGame() {
    let start = document.querySelector('.start-btn');
    let introScreen = document.querySelector('.intro');
    let reset = document.querySelector('.result-reset');
    
    start.addEventListener('click', function(event) {
        if (event.target.matches('.start-btn')) {
            introScreen.classList.add('fadeOut');
            gameDiv.classList.add("fadeIn");
        }
    })
   
}


// Display computer DOM element from getComputerChoice

function displayComputerChoice(computerSelection) {
    document.querySelector('.c-choice').textContent = `Computer Choice: ${computerSelection}`;
}


// Display player DOM element from getPlayerChoice

function displayPlayerChoice(playerSelection) {
    document.querySelector('.p-choice').textContent = `Player Choice: ${playerSelection}`;
}

// Display Player Score as DOM element

function playerScoreDisplay() {
    document.querySelector('.player-score p').textContent = `${playerWin}`;
}


// Display Computer Score as DOM element

function computerScoreDisplay() {
    document.querySelector('.computer-score p').textContent = `${computerWin}`;
}

// Display result of Round as DOM element

function roundResult(announce) {
    document.querySelector('.result').textContent = `${announce}`;
}

// Display Game Result as DOM element

function gameResultDisplay(gameWinner) {
    gameEnd.textContent += `${gameWinner}`;
}

// Reset Game Button

function scoreFive() {
    let resetScreen = document.querySelector('.result-reset');


    if ((playerWin >= 5) || (computerWin >= 5))  {
        resetScreen.classList.add("fadeIn");
        gameDiv.classList.remove('fadeIn');
    } 

}


function resetGame(event) {
    
        if (event.target.matches('.reset-btn')) {
            resetScreen.classList.remove('fadeIn');
            gameDiv.classList.add("fadeIn");
            playerWin = 0;
            document.querySelector('.player-score p').textContent = `${playerWin}`;
            document.querySelector('.p-choice').textContent = `Player Choice:`;
            computerWin = 0;
            document.querySelector('.computer-score p').textContent = `${computerWin}`;
            document.querySelector('.c-choice').textContent = `Computer Choice:`;
            document.querySelector('.result').textContent = '';
            gameEnd = '';
            
        } else if (event.target.matches('.end-btn')) {
            goodbye.classList.add('fadeIn');
            resetScreen.classList.remove('fadeIn');
        }
            
    }

function reloadPage(event) {
    if (event.target.matches('.reload-btn')) {
        location.reload();
    }
}


startGame();
