
let playerWin = 0;
let computerWin = 0;


const buttonsContainer = document.querySelector('.game')
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


// Announce game winner by comparing player and computer scores

function gameResult(playerWin, computerWin) {
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
    scoreFive(playerWin, computerWin);
    resetGame(playerWin, computerWin);
}
   


// CREATE DOM ELEMENTS

// Start Game

function startGame() {
    let start = document.querySelector('.start-btn');
    let introScreen = document.querySelector('.intro');
    let game = document.querySelector('.game');
    let reset = document.querySelector('.result-reset');
    
    start.addEventListener('click', function(event) {
        if (event.target.matches('.start-btn')) {
            introScreen.classList.add('fadeOut');
            game.classList.add("fadeIn");
        }
    })
    
    resetGame(game);
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

function playerScoreDisplay(playerWin) {
    document.querySelector('.player-score p').textContent = `${playerWin}`;
}


// Display Computer Score as DOM element

function computerScoreDisplay(computerWin) {
    document.querySelector('.computer-score p').textContent = `${computerWin}`;
}

// Display result of Round as DOM element

function roundResult(announce) {
    document.querySelector('.result').textContent = `${announce}`;
}

// Display Game Result as DOM element

function gameResultDisplay(gameWinner) {
    let gameResult = document.createElement('p');
    gameResult.innerText = gameWinner;
    let gameResultDisplay = document.querySelector('.game-result');
    gameResultDisplay.appendChild(gameResult);

    resetGame(gameWinner);
}

// Reset Game Button

function scoreFive(playerWin, computerWin) {
    let resetScreen = document.querySelector('.result-reset');
    let game = document.querySelector('.game');
    

    if ((playerWin >= 5) || (computerWin >= 5))  {
        resetScreen.classList.add("fadeIn");
        game.classList.remove('fadeIn');
        resetGame();
    } 

}

function resetGame(playerWin, computerWin, game, gameWinner) {
    let resetScreen = document.querySelector('.result-reset');
    let goodbye = document.querySelector('.goodbye');
    
    resetScreen.addEventListener('click', function(event) {
        if (event.target.matches('.reset-btn')) {
            playerWin = 0;
            document.querySelector('.player-score p').textContent = `${playerWin}`;
            document.querySelector('.p-choice').textContent = `Player Choice:`;
            computerWin = 0;
            document.querySelector('.computer-score p').textContent = `${computerWin}`;
            document.querySelector('.c-choice').textContent = `Computer Choice:`;
            document.querySelector('.result').textContent = '';
            gameWinner = '';
            resetScreen.classList.remove('fadeIn');
            game.classList.add("fadeIn");
            
        } else if (event.target.matches('.end-btn')) {
            goodbye.classList.add('fadeIn');
            resetScreen.classList.remove('fadeIn');
        }
    })

}


startGame();
