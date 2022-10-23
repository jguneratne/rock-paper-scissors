
let playerWin = 0;
let computerWin = 0;


const buttonsContainer = document.getElementById('button')
    buttonsContainer.addEventListener('click', function (event) {
    const playerSelection = getPlayerChoice(event);
    const computerSelection = getComputerChoice();
    const result = checkWinner(playerSelection, computerSelection);
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

    } else if (event.target.matches('.paper')) {
        playerSelection = "Paper";

    } else if (event.target.matches('.scissors')) {
        playerSelection = "Scissors";
    }

    displayPlayerChoice(playerSelection);
    return playerSelection;
}


// Build function that checks winner each round

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
    playerScoreDisplay(playerWin);
    computerScoreDisplay(computerWin);
    gameResult(playerWin, computerWin);

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


/* Announce game winner by comparing player and computer scores
*/

function gameResult(playerWin, computerWin) {
    let gameWinner;
 
     if (playerWin >= 5) {
         gameWinner = "Game Over! You win the game!";
         resetGameOut();
     } else if (computerWin >= 5) {
         gameWinner = "Game Over! Computer wins the game!";
         resetGameOut();
    } else {
         gameWinner = "";
    }
 
     gameResultDisplay(gameWinner);
 }
   


// CREATE DOM ELEMENTS

// Start Game

function startGame() {
    let start = document.querySelector('.start-btn');
    let introScreen = document.querySelector('.intro');
    let game = document.querySelector('.game');
    
    start.addEventListener('click', function() {
        introScreen.classList.add('fadeOut');
        game.classList.add("fadeIn");
    })
    
    resetGameIn(game);
    resetGameOut(introScreen, game);
}

// Build function to display computer DOM element from getComputerChoice

function displayComputerChoice(computerSelection) {
    document.querySelector('.computer-choice').textContent = `Computer Choice: ${computerSelection}`;
}


// Build function to display player DOM element from getPlayerChoice

function displayPlayerChoice(playerSelection) {
    document.querySelector('.player-choice').textContent = `Player Choice: ${playerSelection}`;
}

// Create function to display Player Score as DOM element

function playerScoreDisplay(playerWin) {
    document.querySelector('.player-score').textContent = `Player Score: ${playerWin}`;
}


// Create function to display Computer Score as DOM element

function computerScoreDisplay(computerWin) {
    document.querySelector('.computer-score').textContent = `Computer Score: ${computerWin}`;
}

// Function to display result of Round as DOM element

function roundResult(announce) {
    document.querySelector('.round-result').textContent = `${announce}`;
}

// Create function to display Game Result as DOM element

function gameResultDisplay(gameWinner) {
    let gameResult = document.createElement('p');
    gameResult.innerText = gameWinner;
    let gameResultDisplay = document.querySelector('.game-result');
    gameResultDisplay.appendChild(gameResult);
}

function resetGameIn(game) {
    let reset = document.querySelector('.reset-btn');
    let resetScreen = document.querySelector('.reset');
    game = document.querySelector('.game');
    
    reset.addEventListener('click', function() {
        game.classList.add('fadeOut');
        resetScreen.classList.add("fadeIn");
    })

}

function resetGameOut(introScreen) {
    let reset = document.querySelector('.reset-btn');
    let resetScreen = document.querySelector('.reset');
    introScreen = document.querySelector('.intro');
    
    reset.addEventListener('click', function() {
        resetScreen.classList.add('fadeOut');
        introScreen.classList.add("fadeIn");
    })

}


window.onload = function() {
    startGame();
}
