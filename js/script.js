const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");
const ButtonRst = document.querySelector("#restartBtn");
const scoreDiv = document.querySelector('#score');

let currentScore = 0;
let interval = null;

function init() {
  interval = setInterval(() => {
    currentScore++
    scoreDiv.innerHTML = `Score: ${currentScore}`;
  }, 120);
}

function stopCount() {
  clearInterval(interval);
}

const jump = () => {
  mario.classList.add("jump");
  setTimeout(() => {
    mario.classList.remove("jump");
  }, 700);
};

const Restart = () => {
  location.reload();
};

const loop = setInterval(() => {
  const cloudPsition = clouds.offsetLeft;
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", ""); // adicionando o sinal de soma na frente da declaração, haverá uma tentativa de conversão de string para number
  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;
    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;
    mario.src = "../imgs/game-over.png";
    mario.style.width = "80px";
    mario.style.margin = "60px";
    clouds.style.animation = "none";
    clouds.style.left = `${cloudPsition}px`;
    ButtonRst.style.visibility = ''
    stopCount();
    clearInterval(loop);
    return;
  }
}, 10);

document.addEventListener("keydown", jump);


init();