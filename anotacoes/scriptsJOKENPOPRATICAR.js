const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score') //constantes mapeadas no html

let humanScoreNumber = 0  // as pontuacoes dos jogadores..
let machineScoreNumber = 0


const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine()) // funcao para a escolha humana "click"
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissor']
    const randomNumber = Math.floor(Math.random() * 3) // funcao escolha da maquina aleatoria de 0 a 2
    return choices[randomNumber]
}

const playTheGame = (human, machine) => {

    console.log(`Humano: ${human}  Maquina: ${machine}`)  // funcao para rodar o jogo, ela esta chamada na funcao playHuman.

    if (human === machine) {
        result.innerHTML = "Deu empate"
    } else if (
        human === 'paper' && machine === 'rock' ||
        human === 'rock' && machine === 'scissor' ||
        human === 'scissor' && machine === 'paper'                       // if e else as condicoes do jogo.
    ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "You Win"
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "You Loose for Alexa."
    }
}