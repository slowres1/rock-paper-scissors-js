//user input
function getUserInput () {
    let userInput = (prompt("Rock, paper or scissors?"));
    if (typeof(userInput) === 'string') {
        let userChoice = userInput.toLowerCase();
        if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
            return userChoice;
        } else {
            alert("Please enter rock, paper or scissors");
        }       
    }   else {
        alert("Please enter a valid string");
    }    
}
//generate computer choice
function getComputerInput () {
    let computerInput = Math.floor(Math.random() * 3);
    //console.log(computerInput);
    let computerChoice;
    switch (computerInput) {
        case 0:
            computerChoice = "rock";   
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
    }
    return computerChoice;
}
//compare user and computer input
function compareChoices(computerChoice, userChoice) {
    let result;
    if (userChoice === computerChoice) {
        return result = 'draw';
    } else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return result = 'computer';    
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return result = 'computer'; 
        }
    } else {
        if (computerChoice === 'rock') {
            return result = 'computer'; 
        }
    }
}

function game(userInput, score) {

    const selection = document.querySelector('.selection');
    /*const oldText = document.querySelectorAll('.displayChoice, .displayResult');
    if (oldText) {
        selection.removeChild(oldText);
    } */
    while (selection.firstChild) {
        selection.removeChild(selection.lastChild);
    };

    let userChoice = userInput;
    let computerChoice = getComputerInput();

    const displayChoices = document.createElement('h1');
    displayChoices.textContent = `You have chosen ${userChoice}. Computer has chosen ${computerChoice}.`;
    displayChoices.classList.add('displayChoice');
    selection.appendChild(displayChoices);

    let result = compareChoices(computerChoice, userChoice);
    let playerScore = document.querySelector('#playerScore');
    let computerScore = document.querySelector('#computerScore');

    const displayResult = document.createElement('h1');
    displayResult.classList.add('displayResult');
    if (result=== 'draw') {
        displayResult.textContent = 'It\'s a draw!';
    } else if (result === 'computer') {
        displayResult.textContent = 'Computer wins!';
        score[1] += 1;
        computerScore.textContent = `Computer score: ${score[1]}`;
    } else {
        displayResult.textContent = 'Player wins!';
        score[0] += 1;
        playerScore.textContent = `Player score: ${score[0]}`;
    }
    selection.appendChild(displayResult);
}

const buttons = document.querySelectorAll('button');

score = [0,0];

buttons.forEach((button => {
    button.addEventListener('click', () => {
        let userInput = button.id;
        game(userInput, score);        
    });
}));


//output a result!