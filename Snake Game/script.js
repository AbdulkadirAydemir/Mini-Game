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

const chanceDirection = e => {
    //? Tuşa basmaya bağlı olarak hız değerini değiştirme
    if (e.key === "ArrowUp" && velocityY != 1) {
        veloCityX = 0;
        velocityY = -1;
    } else if (e.key === "ArrowDown" && velocityY != -1) {
        veloCityX = 0;
        velocityY = 1;
    } else if (e.key === "ArrowLeft" && veloCityX != 1) {
        veloCityX = -1;
        velocityY = 0;
    } else if (e.key === "ArrowRight" && veloCityX != -1) {
        veloCityX = 1;
        velocityY = 0;
    }
}

//? // Her tuş tıklamasında changeDirection'ı çağırmak ve anahtar veri kümesi değerini bir nesne olarak iletmek
controls.forEach(button => button.addEventListener("click",
    () => chanceDirection({ key: button.dataset.key })));

const initGame = () => {
    if (gameOver) return handleGameOver();
    let html = `<div class = "food" style = "grid-area: ${foodY} / ${foodX}" ></div>`;

    //! Yılanın yiyeceğe çarpıp çarpmadığını kontrol etme
    if (snakeX === foodX && snakeY === foodY) {
        updateFoodPosition();
        snakeBody.push([foodY, foodX]);
        score++;
        highScore = score >= highScore ? score : highScore;
        localStorage.setItem("high-score", highScore);
        scoreElement.innerText = `Score : ${score}`;
        highScoreElement.innerText = `High Score : ${highScore}`;
    }
}
