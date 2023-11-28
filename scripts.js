// Note To Do list

// Fix nextround button
// Update final winning message
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

const startButton = document.getElementById("startButton");
const frontButton = document.getElementById("front");

// create event listener to start game
document.addEventListener("DOMContentLoaded", function() {
    // Gets ID's of existing elements on the page
    const storyText = document.getElementById("storyText");
    // const startButton = document.getElementById("startButton");
    const introDiv = document.getElementById("introDiv");

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
            // startButton.remove();
            startButton.style.visibility = 'hidden';
            const displayRound = document.createElement("h2");
            const choiceText = document.createElement("span");
            const resultsText = document.createElement("span");
            const rockPic = document.createElement("img"); 
            const paperPic = document.createElement("img"); 
            const scissorsPic = document.createElement("img");
            const imageDiv = document.createElement("div");
            
            imageDiv.id = "imageDiv";
            choiceText.id = "choiceText";
            displayRound.id = "displayRound";
            displayRound.textContent = "Round " + (roundNumber);
            choiceText.textContent = "Make your choice.";
            document.body.style.backgroundColor = "#FE674F";
            imageReplace(rockPic, "images/rock-cropped.png", "A red stylised picture of a rock");
            imageReplace(paperPic, "images/paper-cropped.png", "A red stylised picture of a piece of paper");
            imageReplace(scissorsPic, "images/scissors-cropped.png", "A red stylised picture of a pair of scissors");

            rockPic.id = "rock-pic";
            paperPic.id = "paper-pic";
            scissorsPic.id = "scissors-pic";
            resultsText.id = "resultsText";

            blackDiv.append(displayRound, resultsText, choiceText, imageDiv);
            imageDiv.append(rockPic, paperPic, scissorsPic);
            currentStage++;
        }
    })
}
)

function hideMultiElements(...elements) {
    if (elements.length === 3) {
        const [element1, element2, element3] = elements;
        const element1Var = document.getElementById(element1);
        const element2Var = document.getElementById(element2);
        const element3Var = document.getElementById(element3); 
        element1Var.style.display = "none";
        element2Var.style.display = "none";
        element3Var.style.display = "none";
    }
    else if (elements.length === 2) {
        const [element1, element2] = elements;
        const element1Var = document.getElementById(element1);
        const element2Var = document.getElementById(element2); 
        element1Var.style.display = "none";
        element2Var.style.display = "none";
    }
}

function showMultiElements(...elements) {
    if (elements.length === 3) {
        const [element1, element2, element3] = elements;
        const element4Var = document.getElementById(element1);
        const element5Var = document.getElementById(element2);
        const element6Var = document.getElementById(element3); 
        element4Var.style.display = "block";
        element5Var.style.display = "block";
        element6Var.style.display = "block";
    } else if (elements.length === 2) {
        const [element1, element2] = elements;
        const element4Var = document.getElementById(element1);
        const element5Var = document.getElementById(element2); 
        element4Var.style.display = "block";
        element5Var.style.display = "block";
    }
}


// Code for game mechanics
// Counter for score 
let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;
let playerSelection;
let playerName, computerName;
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
    const imageDiv = document.getElementById("imageDiv");
    const blackDiv = document.getElementById("blackDiv");
    // const rockPic = document.getElementById("rock-pic");
    // const paperPic = document.getElementById("paper-pic");
    // const scissorsPic = document.getElementById("scissors-pic"); 
    const choiceText = document.getElementById("choiceText");

    hideMultiElements("rock-pic", "paper-pic", "scissors-pic");

    choiceText.style.display = 'none';
    const playerChoiceDiv = document.createElement("div");
    const computerChoiceDiv = document.createElement("div");

    const playerSelectionImage = document.createElement("img");
    const computerSelectionImage = document.createElement("img");
    playerSelectionImage.id = "playerSelectionImage";
    computerSelectionImage.id = "computerSelectionImage";

    playerName = document.createElement("span");
    computerName = document.createElement("span");
    playerName.id = "playerName";
    computerName.id = "computerName";
        
    playerChoiceDiv.id = "playerChoiceDiv";
    computerChoiceDiv.id = "computerChoiceDiv";
    playerName.textContent = "You";
    computerName.textContent = "Raskalov";
    imageDiv.append(playerChoiceDiv, computerChoiceDiv);
    playerChoiceDiv.append(playerName, playerSelectionImage);
    computerChoiceDiv.append(computerName, computerSelectionImage);

    const nextRoundButton = document.createElement("button");
    nextRoundButton.id = "nextRoundButton";
    const nextRoundButtonShadow = document.createElement("span");
    const nextRoundButtonEdge = document.createElement("span");
    const nextRoundButtonFront = document.createElement("span");
    nextRoundButtonShadow.setAttribute("class", "shadow");
    nextRoundButtonEdge.setAttribute("class", "edge");
    nextRoundButtonFront.setAttribute("id", "front");
    nextRoundButton.append(nextRoundButtonShadow, nextRoundButtonEdge, nextRoundButtonFront);
    blackDiv.append(nextRoundButton);

    if (roundNumber === 5) {
        nextRoundButtonFront.textContent = "Play Again";
        choiceText.style.display = 'block';
        if (playerScore > computerScore) {
            choiceText.textContent = "'I'll be watching you.' snarls Officer Raskalov as he storms out the room.";
        }
        else if (playerScore < computerScore) {
            choiceText.textContent = "'HAHA! Face the wall!' Officer Raskalov announces gleefully.";
        }
        else {
            choiceText.textContent = "'Again!' screams Officer Raskalov.";
        }
    }
    else {
        nextRoundButtonFront.textContent = "Next Round";
    }

    if (playerSelection === "ROCK") {
        imageReplace(playerSelectionImage, "images/rock-cropped.png", "A red stylised picture of a rock");
    } else if (playerSelection === "PAPER") {
        imageReplace(playerSelectionImage, "images/paper-cropped.png", "A red stylised picture of a piece of paper");
    } else if (playerSelection === "SCISSORS") {
        imageReplace(playerSelectionImage, "images/scissors-cropped.png", "A red stylised picture of a pair of scissors");
    }

    if (computerSelection === "ROCK") {
        imageReplace(computerSelectionImage, "images/rock-cropped.png", "A red stylised picture of a rock");
    } else if (computerSelection === "PAPER") {
        imageReplace(computerSelectionImage, "images/paper-cropped.png", "A red stylised picture of a piece of paper");
    } else if (computerSelection === "SCISSORS") {
        imageReplace(computerSelectionImage, "images/scissors-cropped.png", "A red stylised picture of a pair of scissors");
    }

    // nextRound button function that resets the game if 5 rounds have been played
    nextRoundButton.addEventListener("click", function() {
        if (roundNumber === 6) {
            roundNumber = 1;
            playerScore = 0;
            computerScore = 0;
            playerChoiceDiv.remove();
            computerChoiceDiv.remove();
            playerName.remove();
            computerName.remove();
            playerSelectionImage.remove();
            computerSelectionImage.remove();
            choiceText.textContent = "Make your choice.";
        }
        displayRound.textContent = "Round " + roundNumber;
        document.getElementById("resultsText").textContent = `You ${playerScore} - Officer Raskalov ${computerScore}`;
        nextRoundButton.style.display = 'none';
        choiceText.style.display = 'block';
        playerChoiceDiv.remove();
        computerChoiceDiv.remove();
        playerChoiceDiv.remove();
        computerChoiceDiv.remove();
        playerName.remove();
        computerName.remove();
        playerSelectionImage.remove();
        computerSelectionImage.remove();
        showMultiElements("rock-pic", "paper-pic", "scissors-pic");
    });

            // Compare playerSelection vs computerSelection 
            // If tied, no one wins
    if ((playerSelection === computerSelection) && (roundNumber < 5)) {
    document.getElementById("resultsText").textContent = `It is a tie. You ${playerScore} – Officer Raskalov ${computerScore}`
    
    console.log(`It is a tie. You ${playerScore} – Officer Raskalov ${computerScore}`); 

            // Set various different scenarios of player winning and add 1 to score
    }   else if (((playerSelection === "PAPER" && computerSelection === "ROCK") || 
                (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
                (playerSelection === "SCISSORS" && computerSelection === "PAPER")) && (roundNumber < 5)) {
                playerScore++;
                document.getElementById("resultsText").textContent = `You win. You ${playerScore} - Officer Raskalov ${computerScore}`
            // Any other possibility only computer winning so add 1 to score
    }   else if (((playerSelection === "PAPER" && computerSelection === "SCISSORS") ||
                (playerSelection === "ROCK" && computerSelection === "PAPER") ||
                (playerSelection === "SCISSORS" && computerSelection === "ROCK")) && (roundNumber < 5)) {
                computerScore++;
                document.getElementById("resultsText").textContent = `Officer Raskalov wins. You ${playerScore} - Officer Raskalov ${computerScore}`
        }   else {
                document.getElementById("resultsText").textContent = `Final Score: You ${playerScore} - Officer Raskalov ${computerScore}`;
                resultsText.style.fontWeight = "900";
                resultsText.style.fontSize = "20px";
                resultsText.style.padding = "20px";
                computerChoiceDiv.remove();
                playerChoiceDiv.remove();
        }}


    const roundChoice = document.querySelector('#introDiv');

    roundChoice.addEventListener('click', (event) => {
        let target = event.target;
        
        if (roundNumber < 6) {
        switch(target.id) {
            case 'rock-pic':
                console.log('Rock was clicked');
                playRound("ROCK", getComputerChoice())
                ++roundNumber;
                console.log(roundNumber);
                break;
            case 'paper-pic':
                console.log('Paper was clicked');
                playRound("PAPER", getComputerChoice())
                ++roundNumber;
                console.log(roundNumber);
                break;
            case 'scissors-pic':
                console.log('Scissors was clicked');
                playRound("SCISSORS", getComputerChoice())
                ++roundNumber;
                console.log(roundNumber);
                break;
            }
        }
        });
