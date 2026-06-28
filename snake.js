/* ==========================================
   SNAKE GAME
========================================== */

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let box = 20;

let snake = [];
snake[0] = { x: 9 * box, y: 10 * box };

let food = {
    x: Math.floor(Math.random() * 20) * box,
    y: Math.floor(Math.random() * 20) * box
};

let direction;

document.addEventListener("keydown", updateDirection);

function updateDirection(event) {

    if (event.keyCode == 37 && direction != "RIGHT") direction = "LEFT";
    else if (event.keyCode == 38 && direction != "DOWN") direction = "UP";
    else if (event.keyCode == 39 && direction != "LEFT") direction = "RIGHT";
    else if (event.keyCode == 40 && direction != "UP") direction = "DOWN";

}

function draw() {

    ctx.fillStyle = "#f4f6f8";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Snake
    for (let i = 0; i < snake.length; i++) {

        ctx.fillStyle = i == 0 ? "#2563eb" : "#60a5fa";

        ctx.fillRect(snake[i].x, snake[i].y, box, box);

    }

    // Food
    ctx.fillStyle = "#ef4444";
    ctx.fillRect(food.x, food.y, box, box);

    // Snake Kopf
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction == "LEFT") snakeX -= box;
    if (direction == "RIGHT") snakeX += box;
    if (direction == "UP") snakeY -= box;
    if (direction == "DOWN") snakeY += box;

    // Essen essen
    if (snakeX == food.x && snakeY == food.y) {

        food = {
            x: Math.floor(Math.random() * 20) * box,
            y: Math.floor(Math.random() * 20) * box
        };

    } else {
        snake.pop();
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    };

    // Game Over
    if (
        snakeX < 0 ||
        snakeY < 0 ||
        snakeX >= canvas.width ||
        snakeY >= canvas.height ||
        collision(newHead, snake)
    ) {
        clearInterval(game);
        alert("Game Over 💀");
    }

    snake.unshift(newHead);

}

function collision(head, array) {

    for (let i = 0; i < array.length; i++) {
        if (head.x == array[i].x && head.y == array[i].y) {
            return true;
        }
    }

    return false;
}

let game = setInterval(draw, 120);