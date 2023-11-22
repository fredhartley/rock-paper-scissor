// Note To Do list
// Organise styles in CSS. Remove from JS where possible to enable ease of future CSS alterations.
// Add audio
// Mobile responsive design (title needs to drop font size)
// More care with how everything is styled. Padding, flex-shrink etc.
// Use more precise and industry standard naming conventions


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
    const firstPageDivider = document.getElementById("firstPageDivider");
    const introDiv = document.getElementById("introDiv");
    const frontButton = document.getElementById("front");

    startButton.addEventListener("click", function() {
        if (currentStage === 1) {
            const blackDiv = document.createElement("div");
            blackDiv.id = "blackDiv";
            const footerHr = document.createElement("hr");
            const footerText = document.createElement("span");
            footerText.id = "footerText";
            footerText.textContent = "A rock, paper, scissors spin-off";
            introDiv.appendChild(blackDiv);
            introDiv.appendChild(footerHr);
            introDiv.appendChild(footerText);
            blackDiv.appendChild(storyText);
            blackDiv.appendChild(startButton);
            storyText.innerHTML = "In the frosty grip of a Soviet winter, desperation and hunger clawed at the hearts of the people. <br><br>You, a humble soul driven by the instinct to protect your family, found yourself on the wrong side of the law after stealing a single loaf of bread from the local bakery. ";
            frontButton.textContent = "Next";
            currentStage++;
            console.log(currentStage);
        } else if (currentStage === 2) {
            storyText.innerHTML = "A local sadistic police officer, Officer Raskalov, caught you red-handed, with the stolen bread as damning evidence. Instead of turning you in immediately, he presented a sinister proposition. <br><br>'Beat me at a game of Rock, Paper, Scissors, and I'll turn a blind eye to your transgressions. Fail, and you and your family face the firing squad.'";
            currentStage++;
            console.log(currentStage);
        } else if (currentStage === 3) {
            frontButton.textContent = "Begin";
            storyText.innerHTML = "The chilling wind whipped through the desolate streets as you reluctantly agreed, knowing that the stakes were life and death. <br><br>Officer Raskalov grinned, the icy glint in his eye reflecting the stark reality of your situation.";
            currentStage++;
            console.log(currentStage);
        } else if (currentStage === 4) {
            storyText.remove();
            startButton.remove();
            const displayRound = document.createElement("h2");
            const choiceText = document.createElement("span");
            const resultsText = document.createElement("span");
            const rockPic = document.createElement("img"); 
            const paperPic = document.createElement("img"); 
            const scissorsPic = document.createElement("img");
            const imageDiv = document.createElement("div");
            
            imageDiv.id = "imageDiv";
            displayRound.textContent = "Round " + (roundNumber + 1);
            choiceText.textContent = "Make your choice.";
            displayRound.style.color = "#EFE9DB";
            choiceText.style.color = "#EFE9DB";
            resultsText.style.color = "#EFE9DB"; 
            resultsText.style.padding = "10px";
            document.body.style.backgroundColor = "#FE674F";
            imageReplace(rockPic, "images/rock-cropped.png", "A red stylised picture of a rock");
            imageReplace(paperPic, "images/paper-cropped.png", "A red stylised picture of a piece of paper");
            imageReplace(scissorsPic, "images/scissors-cropped.png", "A red stylised picture of a pair of scissors");

            rockPic.id = "rock-pic";
            paperPic.id = "paper-pic";
            scissorsPic.id = "scissors-pic";
            resultsText.id = "resultsText";

            blackDiv.append(displayRound,choiceText, resultsText, imageDiv);
            imageDiv.append(rockPic, paperPic, scissorsPic);
            currentStage++;
        }
    })
}
)

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
    document.getElementById("resultsText").textContent = `It is a tie. You ${playerScore} – Officer Raskalov ${computerScore}`
    console.log(`It is a tie. You ${playerScore} – Officer Raskalov ${computerScore}`); 

            // Set various different scenarios of player winning and add 1 to score
    }   else if ((playerSelection === "PAPER" && computerSelection === "ROCK") || 
                (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
                (playerSelection === "SCISSORS" && computerSelection === "PAPER")) {
                playerScore++;
                document.getElementById("resultsText").textContent = `You win. You ${playerScore} - Officer Raskalov ${computerScore}`
            // Any other possibility only computer winning so add 1 to score
    }   else {
                computerScore++;
                document.getElementById("resultsText").textContent = `Officer Raskalov wins. You ${playerScore} - Officer Raskalov ${computerScore}`
        }   
        } 

    const roundChoice = document.querySelector('#introDiv');

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
                document.getElementById("resultsText").textContent = `Final Score: You ${playerScore} - Officer Raskalov ${computerScore}. You win.`;
                document.getElementById("extra-dialogue").textContent = `'I'll be watching you.' snarls Officer Raskalov as he storms out the room.`;
                // If player's score is smaller, alert "You lose"
            } else if (playerScore < computerScore) {
                document.getElementById("resultsText").textContent = `Final Score: You ${playerScore} - Officer Raskalov ${computerScore}. You lose...`;
                document.getElementById("extra-dialogue").textContent = `'HAHA! Face the wall!' Officer Raskalov sadistically announces.`;
                // Anything else has to be a tie
            } else {
                document.getElementById("resultsText").textContent = `Final Score: You ${playerScore} - Officer Raskalov ${computerScore}. It's a tie.`;
                document.getElementById("extra-dialogue").textContent = `'Again!' screams Officer Raskalov.`;
                playerScore = 0;
                computerScore = 0;
                roundNumber = 0;
                }
            }
        });
