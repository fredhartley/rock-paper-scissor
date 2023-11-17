// create variable for current stage
let currentStage = 1;

// create function to replace image src and alt
function imageReplace(imageVar, imageSrc, imageAlt) {
    imageVar.src = imageSrc;
    imageVar.alt = imageAlt;
}
// create event listener to start game
document.addEventListener("DOMContentLoaded", function() {
    // Gets ID's of existing elements on the page
    const stageImg = document.getElementById("stageImg");
    const titleText = document.getElementById("titleText");
    const storyText = document.getElementById("storyText");
    const startButton = document.getElementById("startButton");

    startButton.addEventListener("click", function() {
        if (currentStage === 1) {
            titleText.remove();
            storyText.textContent = "The year is 1933, in the frosty grip of a Soviet winter, desperation and hunger clawed at the hearts of the people. You, a humble soul driven by the instinct to protect your family, found yourself on the wrong side of the law after stealing a single loaf of bread from the desolate bakery. The Soviet famine had spared no one, and your family's survival depended on that stolen sustenance.";
            imageReplace(stageImg, "images/stage-one-img.jpeg", "An illustration of people pleading for bread from a stand in Russia");
            startButton.textContent = "Next";
            currentStage++;
            console.log(currentStage);
        } else if (currentStage === 2) {
            storyText.textContent = "Enter the stage, a local corrupt police officer, a man who reveled in the misfortune of others. He caught you red-handed, with the stolen bread as damning evidence. Instead of turning you in immediately, he presented a sinister proposition. 'Beat me at a game of Rock, Paper, Scissors, and I'll turn a blind eye to your transgressions. Fail, and you and your family face the firing squad.'";
            imageReplace(stageImg, "images/stage-two-img.jpeg", "A illustration of an angry Russian officer.");
            currentStage++;
            console.log(currentStage);
        } else if (currentStage === 3) {
            startButton.textContent = "Begin";
            storyText.textContent = "The chilling wind whipped through the desolate streets as you reluctantly agreed, knowing that the stakes were life and death. The corrupt officer grinned, the icy glint in his eye reflecting the stark reality of your situation.";
            imageReplace(stageImg, "images/stage-three-img.jpeg", "A illustration of two hands aggressively interlocking on a red background.");
            currentStage++;
            console.log(currentStage);
        }
        else if (currentStage === 4) {
            stageImg.remove();
            storyText.remove();
            startButton.remove();
            const h2Text = document.createElement("h2");
            const rockPic = document.createElement("img"); 
            const paperPic = document.createElement("img"); 
            const scissorsPic = document.createElement("img"); 

            h2Text.textContent = "Make your choice.";
            h2Text.style.color = "#003049";
            imageReplace(rockPic, "images/rock-cropped.png", "A red stylised picture of a rock");
            imageReplace(paperPic, "images/paper-cropped.png", "A red stylised picture of a piece of paper");
            imageReplace(scissorsPic, "images/scissors-cropped.png", "A red stylised picture of a pair of scissors");

            rockPic.id = "rock-pic";
            paperPic.id = "paper-pic";
            scissorsPic.id = "scissors-pic";

            document.getElementById("introDiv").append(h2Text, rockPic, paperPic, scissorsPic);
        }
    })
}
)

// Code for game mechanics
// Counter for score 
        // let playerScore = 0;
        // let computerScore = 0;
        // let roundNumber = 0;
        // let playerSelection;
        // // Function 1 – getComputerChoice
        // // Define function called getComputerChoice
        // function getComputerChoice() {
        // // Create a int variable to store the choice with an initVal of null 
        // // Randomly generate a whole number between 1 and 3 
        //     let randomNumber = Math.floor((Math.random() * 3) + 1);
        // // Create a conditional statement — if 1, 2 and 3 assign respectively to "ROCK", "PAPER" or "SCISSORS"
        //     if (randomNumber === 1) {
        //         return "ROCK";
        //     } else if (randomNumber === 2) {
        //         return "PAPER";
        //     } else
        //         return "SCISSORS";
        // }
        // // Function 2 — playRound
        // // Define function called playRound
        // function playRound(playerSelection, computerSelection) { 
        //     // Compare playerSelection vs computerSelection 
        //     // If tied, no one wins
        //     if (playerSelection === computerSelection) {
        //     document.getElementById("results-text").textContent = `It is a tie. You ${playerScore} – Officer Raskalov ${computerScore}`
        //     console.log(`It is a tie. You ${playerScore} – Officer Raskalov ${computerScore}`); 

        //     // Set various different scenarios of player winning and add 1 to score
        // }   else if ((playerSelection === "PAPER" && computerSelection === "ROCK") || 
        //              (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
        //              (playerSelection === "SCISSORS" && computerSelection === "PAPER")) {
        //             playerScore++;
        //             document.getElementById("results-text").textContent = `You win. You ${playerScore} - Officer Raskalov ${computerScore}`
        //     // Any other possibility leaves to computer winning so add 1 to score
        // }   else {
        //             computerScore++;
        //             document.getElementById("results-text").textContent = `Officer Raskalov wins. You ${playerScore} - Officer Raskalov ${computerScore}`
        // }   
        // } 

        // const roundChoice = document.querySelector('#round-selection');

        // roundChoice.addEventListener('click', (event) => {
        //     let target = event.target;
        
        //     if (roundNumber < 5) {
        //     switch(target.id) {
        //         case 'rock-pic':
        //             console.log('Rock was clicked');
        //             playRound("ROCK", getComputerChoice())
        //             roundNumber++;
        //             console.log(roundNumber);
        //             break;
        //         case 'paper-pic':
        //             console.log('Paper was clicked');
        //             playRound("PAPER", getComputerChoice())
        //             roundNumber++;
        //             console.log(roundNumber);
        //             break;
        //         case 'scissors-pic':
        //             console.log('Scissors was clicked');
        //             playRound("SCISSORS", getComputerChoice())
        //             roundNumber++;
        //             console.log(roundNumber);
        //             break;
        //     }
        // }
        //     else {
        //         // If player's score is bigger, alert "You win"
        //         if (playerScore > computerScore) {
        //             document.getElementById("results-text").textContent = `Final Score: You ${playerScore} - Officer Raskalov ${computerScore}. You win.`;
        //             document.getElementById("extra-dialogue").textContent = `'I'll be watching you.' snarls Officer Raskalov as he storms out the room.`;
        //         // If player's score is smaller, alert "You lose"
        //         } else if (playerScore < computerScore) {
        //             document.getElementById("results-text").textContent = `Final Score: You ${playerScore} - Officer Raskalov ${computerScore}. You lose...`;
        //             document.getElementById("extra-dialogue").textContent = `'HAHA! Face the wall!' Officer Raskalov sadistically announces.`;
        //         // Anything else has to be a tie
        //         } else {
        //             document.getElementById("results-text").textContent = `Final Score: You ${playerScore} - Officer Raskalov ${computerScore}. It's a tie.`;
        //             document.getElementById("extra-dialogue").textContent = `'Again!' screams Officer Raskalov.`;
        //             playerScore = 0;
        //             computerScore = 0;
        //             roundNumber = 0;
        //         }
        //     }
        // });




















// OLD

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
        