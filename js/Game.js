let game = setInterval(drawGame, 110);*/

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const ground = new Image();
ground.src = "images/img.png";

const wallImg = new Image();
wallImg.src = "images/wall.png";

const foodImg = new Image();
foodImg.src = "images/apple.png";

const snakeImg = new Image();
snakeImg.src = "images/snake.png";

const headImg = new Image();
headImg.src = "images/head.jpg";

const cellImg = new Image();
cellImg.src = "images/cell.png";

restartButton = document.createElement('BUTTON');
restartButton.id = 'rb';

resumeButton = document.createElement('BUTTON');
resumeButton.id = 'rb1';

startButton = document.createElement('BUTTON');
startButton.id = 'sb';

restartFromPauseButton = document.createElement('BUTTON');
restartFromPauseButton.id = 'resfpause';

controlButtons = {
    rightButton: document.createElement('BUTTON'),
    leftButton: document.createElement('BUTTON'),
    upButton: document.createElement('BUTTON'),
    downButton: document.createElement('BUTTON'),
};

controlButtons.rightButton.id = 'right';
controlButtons.leftButton.id = 'left';
controlButtons.upButton.id = 'up';
controlButtons.downButton.id = 'down';

controlButtons.rightButton.onclick = function (){
    if(dir !== "left") {
        dir = "right";
    }
}

controlButtons.leftButton.onclick = function (){
    if(dir !== "right") {
        dir = "left";
    }
}

controlButtons.upButton.onclick = function (){
    if(dir !== "down") {
        dir = "up";
    }
}

controlButtons.downButton.onclick = function (){
    if(dir !== "up") {
        dir = "down";
    }
}

resumeButton.onclick = function () {
    document.body.removeChild(resumeButton);
    game_paused = false;
    game = setInterval(drawGame, 110);
    document.body.removeChild(restartFromPauseButton);
}

restartFromPauseButton.textContent = 'Start new game';

startButton.onclick = function () {
    document.body.removeChild(startButton);
    gameStarted = true;
    dir = "right";
}

const addPauseButtons = function(){
    document.body.appendChild(resumeButton);
    document.body.appendChild(restartFromPauseButton);
}

restartButton.onclick = function() {
    new_game = true;
    document.body.removeChild(restartButton);
    snake.splice(1, snake.length);
    snake[0].x = 10 * box;
    snake[0].y = 10 * box;
    score = 0;
    dir = "";
    newFood();
    game = setInterval(drawGame, 110);
}

restartFromPauseButton.onclick = function(){
    new_game = true;
    game_paused = false;
    document.body.removeChild(restartFromPauseButton);
    document.body.removeChild(resumeButton);
    snake.splice(1, snake.length);
    snake[0].x = 10 * box;
    snake[0].y = 10 * box;
    score = 0;
    dir = "";
    newFood();
    game = setInterval(drawGame, 110);
}

restartButton.textContent = "Restart";
resumeButton.textContent = "Resume";
startButton.textContent = "New game";

let box = 32;

let score = 0;

let food = {
    x: Math.floor((Math.random() * 17 + 1)) * box,
    y: Math.floor((Math.random() * 13 + 5)) * box
};

function newFood(){
    food.x = Math.floor((Math.random() * 17 + 1))* box;
    food.y = Math.floor((5 + Math.random() * 13)) * box;
}

let snake = [];

snake[0] = {
    x: 10 * box,
    y: 10 * box
};

let game_paused = false;
let new_game = true;
let gameStarted = false;

document.addEventListener("keydown", direction);
let dir;

function direction(event){
    switch(event.keyCode){
        case 37:
            if(dir !== "right" && gameStarted) {
                dir = "left";
            }
            break;
        case 38:
            if(dir !== "down" && gameStarted) {
                dir = "up";
            }
            break;
        case 39:
            if(dir !== "left" && gameStarted) {
                dir = "right";
            }
            break;
        case 40:
            if(dir !== "up" && gameStarted) {
                dir = "down";
            }
            break;
        case 32:
            game_paused = true;
            break;
    }
}

function appendControlButtons(){
    document.body.appendChild(controlButtons.rightButton);
    controlButtons.rightButton.textContent = "Right";
    document.body.appendChild(controlButtons.leftButton);
    controlButtons.leftButton.textContent = "Left";
    document.body.appendChild(controlButtons.downButton);
    controlButtons.downButton.textContent = "Down";
    document.body.appendChild(controlButtons.upButton);
    controlButtons.upButton.textContent = "Up";
}

function eatTale(head, arr){
    for(let i = 0; i < arr.length; i++){
        if(head.x === arr[i].x && head.y === arr[i].y){
            clearInterval(game);
            gameStarted = false;
            document.body.appendChild(restartButton);
        }
    }
}

function drawGame(){
    if(game_paused){
        clearInterval(game);
        addPauseButtons()
    }
    
    appendControlButtons();
    
    if(new_game){
        document.body.appendChild(startButton);
        new_game = false;
    }

    ctx.fillStyle = "rgb(157,255,212)";
    ctx.fillRect(0, 0, 960, 672); //drawImage(ground, 0, 0);

    for (let i = 0; i < 30; i++) {
        for (let j = 2; j < 21; j++) {
            ctx.drawImage(cellImg, i * box, j * box);
        }
    }
    
    ctx.drawImage(foodImg, food.x, food.y);

    for(let i = 0; i < snake.length; i++){
        if(i === 0) {
            ctx.drawImage(headImg, snake[i].x, snake[i].y);
        }
        else {
            ctx.drawImage(snakeImg, snake[i].x, snake[i].y);
        }
    }

    ctx.fillStyle = "black";
    ctx.font = "40px Times new roman Bold";
    ctx.fillText("Score: " + score, 400, 40);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    let foodGenerated = true;

    if(snakeX === food.x && snakeY === food.y){
        score++;
        while(true) {
            newFood();
            for(let i = 0; i < snake.length; i++) {
                if (food.x === snake[i].x && food.y === snake[i].y) {
                    foodGenerated = false;
                    break;
                }
                else{
                    foodGenerated = true;
                }
            }
            if(foodGenerated){
                break;
            }
        }
    }
    else {
        snake.pop();
    }

    /*if(snakeX === 0 || snakeX > box * 28 || snakeY < box * 3 || snakeY > box * 19){
        clearInterval(game);
        gameStarted = false;
        document.body.appendChild(restartButton);
    }*/
    
    if(snakeX > box * 29){
        snakeX = 0;
    }

    if(snakeX < 0){
        snakeX = box * 29;
    }
    
    if(snakeY < box * 3){
        snakeY = box * 20;
    }

    if(snakeY > box * 20){
        snakeY = box * 2;
    }
    
    /*for(let i = 0; i < 30; i++){
        ctx.drawImage(wallImg, i * box, 2 * box);
        ctx.drawImage(wallImg, i * box, 20 * box);
    }

    for(let i = 3; i < 20; i++){
        ctx.drawImage(wallImg, 0, i * box);
        ctx.drawImage(wallImg, 29 * box, i * box);
    }*/

    switch (dir){
        case "left":
            snakeX -= box;
            break;
        case "right":
            snakeX += box;
            break;
        case "up":
            snakeY -= box;
            break;
        case "down":
            snakeY += box;
            break;
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    };

    eatTale(newHead, snake)

    snake.unshift(newHead);
}

let game = setInterval(drawGame, 110);
