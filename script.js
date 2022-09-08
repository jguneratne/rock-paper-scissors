// Write a console program for Rock-Paper-Scissors Game


// Real-World Game Play: 
    // Players say "Rock, Paper, Scissors, Shoot" and throw their selection on "Shoot"
    // Each player simultaneously plays a Rock, Paper or Scissors
        // The dominant selection wins the game: 
            // Rock beats Scissors
            // Paper beats Rock
            // Scissors beats Paper
            // Two of the same selection ends in a draw
    // Declare winner, or Draw
    // Option to play again


// Console Game Play: 
    // Game has two players - one User against the Computer

    // Write a function called getComputerChoice that randomly returns 'Rock', 'Paper' or 'Scissors'

        // Practice try, without a function: 
            //let selections = ["Rock", "Paper", "Scissors"]
            //let random = selections[Math.floor(Math.random() * selections.length)]
            //console.log(random);
    
        // Working attempt inside a function:

    function getComputerChoice() {
        let selections = ["Rock", "Paper", "Scissors"];
        let random = selections[Math.floor(Math.random() * selections.length)];
        return random;
    }

    // console.log(getComputerChoice());

    // Write a function called playRound that plays a single round of Rock-Paper-Scissors
        // Function takes two parameters: playerSelection and computerSelection
        // Make sure player selection of parameter is case-insensitive (can take rock, ROCK, RocK, etc)
        // Take selections from player and computer 
        // Write conditional statement with logical operators to compare selections
        // Return a string that declares the winner of the round, e.g. "You Lose! Paper beats Rock"
        // This function *returns* the results, rather than using console.log

        function playRound(playerSelection, computerSelection) {

            if (playerSelection === "Rock" && computerSelection === "Scissors" ||
                playerSelection === "Paper" && computerSelection === "Rock" ||
                playerSelection === "Scissors" && computerSelection === "Paper") {
                    greeting = `You win! Your ${playerSelection} beats their ${computerSelection}.`
                } else if 
                (playerSelection === "Rock" && computerSelection === "Paper" ||
                playerSelection === "Paper" && computerSelection === "Scissors" ||
                playerSelection === "Scissors" && computerSelection === "Rock") {
                    greeting = `You loose! Their ${computerSelection} beats your ${playerSelection}.`
                } else if 
                    (playerSelection === computerSelection) {
                    greeting = `It's a Draw! You both picked ${playerSelection}.`
                } else {
                    greeting = "There was a problem."
                }

            return greeting;
        }

        const computerSelection = getComputerChoice();
        // console.log(computerSelection);
        const playerSelection = "Rock";
        // console.log(playerSelection)
        console.log(playRound(playerSelection, computerSelection));
    
    // Write a function called game(), and call the playRound() function inside of this one
        // The Function should play 5 rounds of the game and keeps score (use loops)
        // Use prompt() to get input from the user
        // The winner or loser is reported at the end of the 5 rounds
        // Use console.log() to display the results of each round and the winner at the end

        //function game() {
        //    for (let i = 0; i < 5; i++)
        //}

        // Other notes: 
            // Feel free to rework previous functions if needed
            // You might want to change the return value to something more useful   



