function computerPlay() {
    // Returns a randomly generated choice
    let computer_choice = Math.floor(Math.random() * 3);
    if (computer_choice == 0) {
        return 'Rock';
    }
    else if (computer_choice == 1) {
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
}

function capitalize(string) {
    // Returns a string in title case
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    let won; // To keep track of whether it is a win/loss/tie
    // A +1 implies a win, -1 a loss, and 0 a tie
    if (playerSelection == computerSelection) {
        won = 0;
    }
    else if (playerSelection == 'Rock') {
        if (computerSelection == 'Scissors') {
            won = 1;
        }
        else {
            won = -1;
        }
    }
    else if (playerSelection == 'Paper') {
        if (computerSelection == 'Rock') {
            won = 1;
        }
        else {
            won = -1;
        }
    }
    else {
        if (computerSelection == 'Rock') {
            won = -1;
        }
        else {
            won = 1;
        }
    }
    return won;
}

function game() {
    let gamePoints = 0; // To track the points of whole game
    for (let i = 0; i < 5; i++) {
        let computerSelection = computerPlay();
        let playerSelection = capitalize(prompt('Choose between Rock, Paper and Scissors!'));
        let currentPoint = playRound(playerSelection, computerSelection);
        if (currentPoint == 1) {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        }
        else if (currentPoint == -1) {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
        }
        else {
            console.log('This round was a Tie!');
        }
        gamePoints += currentPoint;
    }
    if (gamePoints > 0) {
        console.log('You win the game!');
    }
    else if (gamePoints < 0) {
        console.log('You lose the game!');
    }
    else {
        console.log('The game is a tie!');
    }
}