const buttons = Array.from(document.getElementsByClassName('button')) // get all buttons. Array.from() converts from node list to array list

buttons.forEach(button => {
    button.addEventListener('click', playRound)
});

const playerText = document.getElementById('playerSelection')
const cpuText = document.getElementById('cpuSelection')

function playRound(e) {
    let playerTurn = e.target.dataset.play
    let cpuTurn = cpuChoice()
    playerText.textContent = playerTurn
    cpuText.textContent = cpuTurn
    calculateWinner(playerTurn, cpuTurn)
}
let roundsPlayed = 0
let roundsWon = 0
let roundsLost = 0
let roundsDrawn = 0

function updateScores() {
    document.getElementById('roundsPlayed').textContent = roundsPlayed
    document.getElementById('roundsWon').textContent = roundsWon
    document.getElementById('roundsLost').textContent = roundsLost
    document.getElementById('roundsDrawn').textContent = roundsDrawn
    // removes styles
    document.getElementById('roundsWon').parentElement.classList.remove('win')
    document.getElementById('roundsLost').parentElement.classList.remove('win')

    if (roundsWon === 3 || roundsLost === 3) {

        document.getElementById('roundsPlayed').textContent = roundsPlayed
        document.getElementById('roundsWon').textContent = roundsWon
        document.getElementById('roundsLost').textContent = roundsLost
        document.getElementById('roundsDrawn').textContent = roundsDrawn
        // add styles
        document.getElementById('roundsLost').parentElement.classList.add('win')
        document.getElementById('roundsWon').parentElement.classList.add('win')

        roundsPlayed = 0
        roundsWon = 0
        roundsLost = 0
        roundsDrawn = 0
    }




}
function calculateWinner(player, cpu) {
    // declares functions used in this function
    function playerWins() {
        roundsPlayed++
        roundsWon++
        updateScores()
    }
    function playerLoses() {
        roundsPlayed++
        roundsLost++
        updateScores()
    }
    function playerDraws() {
        roundsPlayed++
        roundsDrawn++
        updateScores()
    }

    switch (player) {
        case cpu: // if player === cpu match is drawn
            playerDraws()
            break;
        case 'rock':
            cpu === 'scissors' ? playerWins() : playerLoses()
            break;
        case 'paper':
            cpu === 'rock' ? playerWins() : playerLoses()
            break;
        case 'scissors':
            cpu === 'paper' ? playerWins() : playerLoses()
            break;
        default:
            alert('It\'s broken')
            break;
    }
}

function cpuChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let random = choices[Math.floor(Math.random() * choices.length)];
    return random
}
