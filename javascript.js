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

let games_played = 0;
let won = 0;
let lost = 0;
const user_choice = document.querySelectorAll('.big .symbol');
let tryAgain = document.querySelector('.try-again');
const computerChoice = document.querySelector('.computer-choice');
const finalResult = document.querySelector('.final-result');
let homePage = document.querySelector('.home');
let body = document.querySelector('body');
user_choice.forEach((button) => {
    button.addEventListener('click', playGame);
}); 


function playGame(evt) {
    games_played += 1;
    const tot_games = document.querySelector('#tot');
    tot_games.textContent = `Total Games: ${games_played}`;

    let compChoice = computerPlay();
    computerChoice.textContent = `The computer chose: ${compChoice}`;

    computerChoice.classList.remove('rock', 'paper', 'scissors');
    computerChoice.classList.add(`${compChoice.toLowerCase()}`);

    let playerChoice = evt.composedPath()[0].id;
    //console.log(evt.path[0].id);
    let outcome = playRound(playerChoice, compChoice);
    const roundResult = document.querySelector('.round-result');

    const wonGames = document.querySelector('#won');
    const lostGames = document.querySelector('#lost');
    if (outcome === 1) {
        won += 1;
        wonGames.textContent = `You won: ${won}`;
        roundResult.textContent = `${playerChoice} beats ${compChoice}. You win the round!`
    }
    else if (outcome === -1) {
        lost += 1;
        lostGames.textContent = `Computer won: ${lost}`;
        roundResult.textContent = `${compChoice} beats ${playerChoice}. You lost the round!`
    }
    else {
        roundResult.textContent = `This round is a tie!`
    }

    if (won === 5 || lost === 5) {
        finalResult.textContent = won === 5? "You won the game! :)" : "You lost the game! :(";
        lost === 5 ? finalResult.style.color = '#ff5c5c': finalResult.style.color = '#98ff98';
        lost === 5 ? body.style.backgroundColor = '#ff5c5c33': body.style.backgroundColor = '#98ff9833';
        won = 0;
        lost = 0;
        games_played = 0;
        roundResult.textContent = '';
        wonGames.textContent = '';
        lostGames.textContent = ''; 
        tot_games.textContent = '';

        tryAgain.textContent = 'Play again?';
        homePage.textContent = 'Main menu';
        user_choice.forEach((choice) => {
            choice.removeEventListener('click', playGame);
        }); 
    }
}

try {
    tryAgain.addEventListener('click', 
    function() {
        computerChoice.textContent = '';
        finalResult.textContent = '';
        tryAgain.textContent = '';
        homePage.textContent = '';
        body.style.backgroundColor = '';
        user_choice.forEach((button) => {
            button.addEventListener('click', playGame);
        }); 
    })
}

catch {

}
