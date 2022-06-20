/*const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

/*ctx.drawImage(cellImg, 0, 10/*cells[0].posX, cells[0].posY);
//ctx.fillStyle = "rgb(157,255,212)";
//ctx.fillRect(0,0,960,640);

let field = {
    size_x: 960,
    size_y: 640
};

let cells = []

let box = 32;

cells[0] = {
  posX: 10 * box,
  posY: 10 * box
};

let food = {
    x: Math.floor((Math.random() * 17 + 1)) * box,
    y: Math.floor((Math.random() * 13 + 5)) * box
};

ctx.drawImage(cellImg, food.x, food.y);


for(let i = 0; i < field.size_x; i++){
    ctx.drawImage(cellImg, snake[i].x, snake[i].y);
}



//const cell = new Image();
//let cellImg;
//cellImg.src = "images/cell.png";

const ground = new Image();
ground.src = "images/img.png";

const cellImg = new Image();
cellImg.src = "images/cell.png";

const foodImg = new Image();
foodImg.src = "images/apple.png";

const snakeImg = new Image();
snakeImg.src = "images/snake.png";

const headImg = new Image();
headImg.src = "images/head.jpg";

restartButton = document.createElement('BUTTON');
restartButton.id = 'rb';

resumeButton = document.createElement('BUTTON');
resumeButton.id = 'rb1';

startButton = document.createElement('BUTTON');
startButton.id = 'sb';

resumeButton.onclick = function () {
    document.body.removeChild(resumeButton);
    game_paused = false;
    game = setInterval(drawGame, 110);
}

startButton.onclick = function () {
    document.body.removeChild(startButton);
    gameStarted = true;
    dir = "right";
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
    x: 13 * box,
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


function drawGame() {
    ctx.fillStyle = "rgb(157,255,212)";
    ctx.fillRect(0, 0, 960, 678); //drawImage(ground, 0, 0);

    for (let i = 0; i < 30; i++) {
        for (let j = 0; j < 21; j++) {
            ctx.drawImage(cellImg, i * box, j * box);
        }
    }


    ctx.drawImage(foodImg, food.x, food.y);


    for (let i = 0; i < snake.length; i++) {
        if (i === 0) {
            ctx.drawImage(headImg, snake[i].x, snake[i].y);
        } else {
            ctx.drawImage(snakeImg, snake[i].x, snake[i].y);
        }
    }

    /*ctx.fillStyle = "white";
    ctx.font = "40px Arial";
    ctx.fillText("Score: " + score, box * 2.5, box * 1.6);
    
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
            if(foodGenerated === false){
                continue;
            }
            else{
                break;
            }
        }
    }
    else {
        snake.pop();
    }
    
    if(snakeX < box || snakeX > box * 17 || snakeY < 3 * box || snakeY > box * 17){
        clearInterval(game);
        gameStarted = false;
        document.body.appendChild(restartButton);
    }
    
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

    //eatTale(newHead, snake)
    
    snake.unshift(newHead);
}



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

resumeButton.onclick = function () {
    document.body.removeChild(resumeButton);
    game_paused = false;
    game = setInterval(drawGame, 110);
}

startButton.onclick = function () {
    document.body.removeChild(startButton);
    gameStarted = true;
    dir = "right";
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
        document.body.appendChild(resumeButton);
    }
    
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
    ctx.fillText("Score: " + score, 400, 45);

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
            if(foodGenerated === false){
                continue;
            }
            else{
                break;
            }
        }
    }
    else {
        snake.pop();
    }

    if(snakeX === 0 || snakeX > box * 28 || snakeY < box * 3 || snakeY > box * 19){
        clearInterval(game);
        gameStarted = false;
        document.body.appendChild(restartButton);
    }

    for(let i = 0; i < 30; i++){
        ctx.drawImage(wallImg, i * box, 2 * box);
        ctx.drawImage(wallImg, i * box, 20 * box);
    }

    for(let i = 3; i < 20; i++){
        ctx.drawImage(wallImg, 0, i * box);
        ctx.drawImage(wallImg, 29 * box, i * box);
    }

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