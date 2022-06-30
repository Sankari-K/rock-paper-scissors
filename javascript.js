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
let games_played = 0;
let won = 0;
let lost = 0;
const user_choice = document.querySelectorAll('.big .symbol');
 
user_choice.forEach((button) => {
    button.addEventListener('click', 
    function () {
        games_played += 1;
        const tot_games = document.querySelector('#tot');
        tot_games.textContent = games_played;

        let comp_choice = computerPlay();
        const computer_choice = document.querySelector('.computer-choice');
        computer_choice.textContent = `The computer chose: ${comp_choice}`;

        let player_choice = button.id;
        
        let outcome = playRound(player_choice, comp_choice);
        const roundResult = document.querySelector('.round-result');
        if (outcome === 1)
        {
            won += 1;
            const wonGames = document.querySelector('#won');
            wonGames.textContent = won;
            roundResult.textContent = `${player_choice} beats ${comp_choice}. You win the round!`
        }
        else if (outcome === -1)
        {
            lost += 1;
            const lostGames = document.querySelector('#lost');
            lostGames.textContent = lost;
            roundResult.textContent = `${comp_choice} beats ${player_choice}. You lost the round!`
        }
        else {
            roundResult.textContent = `This round is a tie!`
        }
    });
}); 

console.log(user_choice);
user_choice.forEach((button) => {
    button.addEventListener('click', function () {console.log("hu"); })
}); 