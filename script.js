const buttons = Array.from(document.getElementsByClassName('button')) // get all buttons. Array.from() converts from node list to array list

buttons.forEach(button => {
    button.addEventListener('click', playRound)
});


let playerSelection = ''
let cpuSelection = 'paper'
console.log(playerSelection)

const playerText = document.getElementById('playerSelection')
const cpuText = document.getElementById('cpuSelection')

function playRound(e) {

    playerSelection = e.target.dataset.play
    playerText.textContent = playerSelection
    cpuText.textContent = cpuSelection

}
