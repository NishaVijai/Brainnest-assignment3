const CHOICES = ['rock', 'paper', 'scissors'];
let computersChoice = "";
let computerScore;
let playerScore;
let drawScore;

let message = `- please enter one word from the following list of words - rock, paper or scissors`;
alert("Welcome to rock/paper/scissors game!");

function game() {
    computerScore = 0;
    playerScore = 0;
    drawScore = 0;
    for(let i=1; i<=5; i++) {
        let playerSelection = getPlayerSelction();
        let computerSelection = computerPlay();
        console.log("Round number:", i);
        let result = playRound(playerSelection, computerSelection);
        console.log("Result round number:", i, result);
        alert(`Your result from round ${i}: ${result}`);
    }
    console.log(`Scores after 5 rounds - Your score: ${playerScore} & Computer score: ${computerScore} & draw: ${drawScore}`);
}
game();

function getPlayerSelction() {
    let userInput;
    do {       
        userInput = prompt(`To play rock, paper, scissors game for 5 times in a row ${message}`);
        if (userInput) {
            userInput = userInput.toLocaleLowerCase().trim();
        }
    } while(checkPlayersInputIsInvalid(userInput));
    return userInput;
}

function checkPlayersInputIsInvalid(playerInput) {
    if(playerInput === '' || playerInput === undefined || playerInput === NaN || playerInput === null) {
        console.log(`You have entered an empty input: ${message}`);
        return true;
    }

    let lengthOfPlayersInput = playerInput.split(' ').length;
    if(lengthOfPlayersInput > 1) {        
        console.log(`You have entered more than one word "${playerInput}", length is: ${lengthOfPlayersInput} ${message}`);
        return true;  
    }

    let playersInvalidNumberInput = parseInt(playerInput);
    if (Number.isInteger(playersInvalidNumberInput)) {        

        if(typeof playersInvalidNumberInput === 'number') {        
            console.log(`You have entered a number "${playersInvalidNumberInput}" ${message}`);
            return true;
        }
    }

    if (!CHOICES.includes(playerInput))
    {
        console.log(`Your have entered: ${playerInput} ${message}`);
        return true;
    }

    console.log("Your have entered: ", playerInput);
    return false;
}

function computerPlay() {
    const computersRandomChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    switch(computersRandomChoice) {
        case 'rock':
            computersChoice = 'rock';
            break;
        case 'paper':
            computersChoice = 'paper';
            break;
        case 'scissors':
            computersChoice = 'scissors';
            break;
    }
    return computersRandomChoice;
}

function playRound(playerSelection, computerSelection) {    
    if(playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
        if(playerSelection == computerSelection) {
            return `Draw! with computer's choice: "${computerSelection}" and player's choice: "${playerSelection}"`;
        }
        
        if(computerSelection === "rock") {
            if(playerSelection === "paper") {
                computerScore++;
                return `Computer Won :-) Player Lose! with player's choice: "${playerSelection}" and computer's choice: "${computerSelection}"`;
            }
            playerScore++;
            return `Player Won:-) and Computer Lose! with computer's choice: "${computerSelection}" and player's choice: "${playerSelection}"`;
        }
        
        if(computerSelection === "paper") {
            if(playerSelection === "scissors") {
                computerScore++;
                return `Computer Won :-) Player Lose! with player's choice: "${playerSelection}" and computer's choice: "${computerSelection}"`;
            }

            playerScore++;
            return `Player Won:-) and Computer Lose! with computer's choice: "${computerSelection}" and player's choice: "${playerSelection}"`;
        }
        
        if(computerSelection === "scissors") {
            if(playerSelection === "rock") {
                computerScore++;
                return `Computer Won :-) Player Lose! with player's choice: "${playerSelection}" and computer's choice: "${computerSelection}"`;
            }
            playerScore++;
            return `Player Won:-) and Computer Lose! with computer's choice: "${computerSelection}" and player's choice: "${playerSelection}"`;
        }
    }
}
