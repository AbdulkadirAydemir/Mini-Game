const playBoard = document.querySelector(".play-board");
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".high-score");
const controls = document.querySelectorAll(".controls i");

let gameOver = false;
let foodX, foodY;
let snakeX = 5, snakeY = 5;
let veloCityX = 0, velocityY = 0;
let snakeBody = [];
let setIntervalid;
let score = 0;

//? Yerel depolamadan yüksek puanı almak

let highScore = localStorage.getItem("high-score") || 0;
highScoreElement.innerText = `High Score : ${highScore}`;

const updateFoodPosition = () => {
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}

const handleGameOver = () => {
    clearInterval(setIntervalid);
    alert("Game Over! Yeniden oynatmak için Tamam'a basın...");
    location.reload();
}
