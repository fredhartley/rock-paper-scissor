document.addEventListener("DOMContentLoaded", function() {
    const removeButton = document.getElementById("removeButton");
    const titleText = document.getElementById("titleText");
    const introDiv = document.getElementById("introDiv");
    const introParaOne = document.createElement("p");
    const nextBtn = document.createElement("button");
    const imgStageOne = document.createElement("img");

    introParaOne.textContent = "The year is 1933, in the frosty grip of a Soviet winter, desperation and hunger clawed at the hearts of the people. You, a humble soul driven by the instinct to protect your family, found yourself on the wrong side of the law after stealing a single loaf of bread from the desolate bakery. The Soviet famine had spared no one, and your family's survival depended on that stolen sustenance.";
    nextBtn.textContent = "Next";
    imgStageOne.src = "images/stage-one-img.jpeg";
    imgStageOne.alt = "An illustration of people pleading for bread from a stand in Russia";

    removeButton.addEventListener("click", function() {
        titleText.remove();
        removeButton.remove();
        introDiv.appendChild(imgStageOne);
        introDiv.appendChild(introParaOne);
        introDiv.appendChild(nextBtn);
    });
});









// Code for game mechanics
// Counter for score 
        let playerScore = 0;
        let computerScore = 0;
        let roundNumber = 0;
        let playerSelection;
        // Function 1 – getComputerChoice
        // Define function called getComputerChoice
        function getComputerChoice() {
        // Create a int variable to store the choice with an initVal of null 
        // Randomly generate a whole number between 1 and 3 
            let randomNumber = Math.floor((Math.random() * 3) + 1);
        // Create a conditional statement — if 1, 2 and 3 assign respectively to "ROCK", "PAPER" or "SCISSORS"
            if (randomNumber === 1) {
                return "ROCK";
            } else if (randomNumber === 2) {
                return "PAPER";
            } else
                return "SCISSORS";
        }
        // Function 2 — playRound
        // Define function called playRound
        function playRound(playerSelection, computerSelection) { 
            // Compare playerSelection vs computerSelection 
            // If tied, no one wins
            if (playerSelection === computerSelection) {
            document.getElementById("results-text").textContent = `It is a tie. You ${playerScore} – Officer Raskalov ${computerScore}`
            console.log(`It is a tie. You ${playerScore} – Officer Raskalov ${computerScore}`); 

            // Set various different scenarios of player winning and add 1 to score
        }   else if ((playerSelection === "PAPER" && computerSelection === "ROCK") || 
                     (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
                     (playerSelection === "SCISSORS" && computerSelection === "PAPER")) {
                    playerScore++;
                    document.getElementById("results-text").textContent = `You win. You ${playerScore} - Officer Raskalov ${computerScore}`
            // Any other possibility leaves to computer winning so add 1 to score
        }   else {
                    computerScore++;
                    document.getElementById("results-text").textContent = `Officer Raskalov wins. You ${playerScore} - Officer Raskalov ${computerScore}`
        }   
        } 

        const roundChoice = document.querySelector('#round-selection');

        roundChoice.addEventListener('click', (event) => {
            let target = event.target;
        
            if (roundNumber < 5) {
            switch(target.id) {
                case 'rock-pic':
                    console.log('Rock was clicked');
                    playRound("ROCK", getComputerChoice())
                    roundNumber++;
                    console.log(roundNumber);
                    break;
                case 'paper-pic':
                    console.log('Paper was clicked');
                    playRound("PAPER", getComputerChoice())
                    roundNumber++;
                    console.log(roundNumber);
                    break;
                case 'scissors-pic':
                    console.log('Scissors was clicked');
                    playRound("SCISSORS", getComputerChoice())
                    roundNumber++;
                    console.log(roundNumber);
                    break;
            }
        }
            else {
                // If player's score is bigger, alert "You win"
                if (playerScore > computerScore) {
                    document.getElementById("results-text").textContent = `Final Score: You ${playerScore} - Officer Raskalov ${computerScore}. You win.`;
                    document.getElementById("extra-dialogue").textContent = `'I'll be watching you.' snarls Officer Raskalov as he storms out the room.`;
                // If player's score is smaller, alert "You lose"
                } else if (playerScore < computerScore) {
                    document.getElementById("results-text").textContent = `Final Score: You ${playerScore} - Officer Raskalov ${computerScore}. You lose...`;
                    document.getElementById("extra-dialogue").textContent = `'HAHA! Face the wall!' Officer Raskalov sadistically announces.`;
                // Anything else has to be a tie
                } else {
                    document.getElementById("results-text").textContent = `Final Score: You ${playerScore} - Officer Raskalov ${computerScore}. It's a tie.`;
                    document.getElementById("extra-dialogue").textContent = `'Again!' screams Officer Raskalov.`;
                    playerScore = 0;
                    computerScore = 0;
                    roundNumber = 0;
                }
            }
        });



// Code for game mechanics
// // Counter for score 
//         let playerScore = 0;
//         let computerScore = 0;
//         let roundNumber = 0;
//         let playerSelection;
//         // Function 1 – getComputerChoice
//         // Define function called getComputerChoice
//         function getComputerChoice() {
//         // Create a int variable to store the choice with an initVal of null 
//         // Randomly generate a whole number between 1 and 3 
//             let randomNumber = Math.floor((Math.random() * 3) + 1);
//         // Create a conditional statement — if 1, 2 and 3 assign respectively to "ROCK", "PAPER" or "SCISSORS"
//             if (randomNumber === 1) {
//                 return "ROCK";
//             } else if (randomNumber === 2) {
//                 return "PAPER";
//             } else
//                 return "SCISSORS";
//         }
//         // Function 2 — playRound
//         // Define function called playRound
//         function playRound(playerSelection, computerSelection) { 
//             const userInput = prompt("Rock, paper or scissors?");
//             // Convert to uppercase for validation purposes
//             const userInputUpper = userInput.toUpperCase();
//             // Validate initial answer from user and return answer or remind them to only input correct strings
//             if (userInputUpper === "ROCK" || 
//                 userInputUpper === "PAPER" || 
//                 userInputUpper === "SCISSORS") {
//                 playerSelection = userInputUpper;
//             }   else {
//                 alert("Input rock, paper or scissors.");
//             // Recall the function if the incorrect input is made
//                 return playRound();
//             }  
//             // Compare playerSelection vs computerSelection 
//             // If tied, no one wins
//             if (playerSelection === computerSelection) {
//             alert(`It is a tie. Computer ${computerScore} - Player ${playerScore}`); 
//             // Set various different scenarios of player winning and add 1 to score
//         }   else if ((playerSelection === "PAPER" && computerSelection === "ROCK") || 
//                      (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
//                      (playerSelection === "SCISSORS" && computerSelection === "PAPER")) {
//                     playerScore++; 
//                     alert(`Player wins. Player ${playerScore} - Computer ${computerScore}`);
//             // Any other possibility leaves to computer winning so add 1 to score
//         }   else {
//                     computerScore++;
//                     alert(`Computer wins. Player ${playerScore} - Computer ${computerScore}`);  
//         }   
//         } 
//         // Function 3 – game
//         // Define function called game
//         function game() {
//             // Play 5 rounds
//             while (roundNumber < 5) {
//                 // Store computer's random answer in computerSelection variable
//                 let computerSelection = getComputerChoice();
//                 // Call playRound
//                 playRound(playerSelection, computerSelection);
//                 // Increment roundNumber
//                 roundNumber++;
//             }
//             // Once 5 rounds are complete, show playersScore and computersScore
//             if (roundNumber === 5) {
//                 alert(`Final Score: Player ${playerScore} - Computer ${computerScore}`);
//             // If player's score is bigger, alert "You win"
//             if (playerScore > computerScore) {
//                 alert("You win.");
//             // If player's score is smaller, alert "You lose"
//             } else if (playerScore < computerScore) {
//                 alert("You lose.");
//             // Anything else has to be a tie
//             } else {
//                 alert("It's a tie.");
//             }
//             }
//             }
        
        // Call the game function (Remember this!!)
        // game()
        