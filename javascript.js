function computerPlay() {
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
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    let flag;
    if (playerSelection == computerSelection) {
        flag = 0;
    }
    else if (playerSelection == 'Rock') {
        if (computerSelection == 'Scissors') {
            flag = 1;
        }
        else {
            flag = -1;
        }
    }
    else if (playerSelection == 'Paper') {
        if (computerSelection == 'Rock') {
            flag = 1;
        }
        else {
            flag = -1;
        }
    }
    else {
        if (computerSelection == 'Rock') {
            flag = -1;
        }
        else {
            flag = 1;
        }
    }
    return flag;
}

function game() {
    let gamePoints = 0;
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