const result = document.querySelector('.result');
const humanScore = document.querySelector('#human-score');
const machineScore = document.querySelector('#machine-score');
const drawit = document.querySelector('#draw');

let humanScoreNumber = 0;
let machineScoreNumber = 0;
let draw = 0;

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine());
};

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissor'];
    const randomNumber = Math.floor(Math.random() * 3);

    return choices[randomNumber];
};

const playTheGame = (human, machine) => {
    console.log('Humano:' + human + " Maquina: " + machine);

    if (human === machine) {
        draw++;
        drawit.innerHTML = draw;
        result.innerHTML = "Deu empate!!";
        showAnimation("🤝", "Empate");
    } else if ((human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissor') ||
        (human === 'scissor' && machine === 'paper')) {
        humanScoreNumber++;
        humanScore.innerHTML = humanScoreNumber;
        result.innerHTML = "Você Ganhou!";
        showAnimation("🏆", "Vitória");
    } else {
        machineScoreNumber++;
        machineScore.innerHTML = machineScoreNumber;
        result.innerHTML = "Você perdeu para a Alexa!";
        showAnimation("😢", "Derrota");
    }
};

// Função para exibir animação
const showAnimation = (emoji, text) => {
    const animationElement = document.createElement('div');
    animationElement.classList.add('animation');
    animationElement.innerHTML = `${emoji} <br> ${text}`;
    document.body.appendChild(animationElement);

    // Remove o elemento após a animação
    setTimeout(() => {
        animationElement.remove();
    }, 1500);
}