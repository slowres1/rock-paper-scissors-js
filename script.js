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
    console.log(computerInput);
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
    let draw;
    let computerWins;
    let userWins;
    let score = [];
    if (userChoice === computerChoice) {
        draw = true;
    } else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            computerWins = true;    
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            computerWins = true; 
        }
    } else {
        if (computerChoice === 'rock') {
            computerWins = true; 
        }
    }
    if (draw) {
        score = [0,0];
        console.log("It's a DRAW!");
    } else if (computerWins) {
        score = [0,1];
        console.log('Computer Wins!');
    } else {
        score = [1,0];
        console.log('Player Wins!');
    }
    return score;
}

function game() {
    let userChoice;
    while (!userChoice) {
        userChoice = getUserInput();
    }

    let computerChoice = getComputerInput();
    
    console.log(`You have chosen ${userChoice}. Computer has chosen ${computerChoice}`);
    
    let score = compareChoices(computerChoice, userChoice);

    //let userScore = score[0];
    //let computerScore = score[1];
    return(score);

}

//need to produce a score from each game

let score = [0,0];

for (i=0; i<5; i++) {
    newScore = game();

    console.log(newScore);
    
    score[0] = score[0] + newScore[0];
    score[1] = score[1] + newScore[1];
    
    console.log(`Games Played: ${i+1}. Player score: ${score[0]}. Computer score: ${score[1]}.`);

    console.log(score);
}

//output a result!