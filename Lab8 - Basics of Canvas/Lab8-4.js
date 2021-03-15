const BALL_R = 15;
const MOVEMENT_VAL = 5;
let movementX = MOVEMENT_VAL;
let movementY = 0;
$(document).ready(() => {
    gameControls.init();
    $(".startBtn").click(() => {
        gameControls.start();
    });
    $(".stopBtn").click(() => {
        gameControls.stop();
    });
    $(".resetBtn").click(() => {
        gameControls.reset();
    });
    $(".upDownBtn").click(() => {
        gameControls.changeDirection("down");
    });
    $(".leftRightBtn").click(() => {
        gameControls.changeDirection("left");
    });

    $("body").keypress((e) => {
        if (e.key == "w") {
            gameControls.increaseSpeed();
        } else if (e.key == "s") {
            gameControls.decreaseSpeed();
        }
    })
})

let gameControls = {
    init() {
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.gameSpeed = 50;
        this.gameStarted = false;
        this.initBall();
    },
    initBall() {
        this.ball = new Ball(30, 30);
        drawBall();
    },
    start() {
        if (!this.gameStarted) {
            this.interval = setInterval(updateDisplay, this.gameSpeed);
            this.gameStarted = true;
        }
    },
    stop() {
        if (this.gameStarted) {
            clearInterval(this.interval);
            this.gameStarted = false;
        }
    },
    reset() {
        this.clear();
        this.initBall();
    },
    clear() {
        this.canvas.width = this.canvas.width;
    },
    increaseSpeed() {
        if (this.gameSpeed >= 50) {
            this.gameSpeed -= 30;
            this.stop();
            this.start();
        }
    },
    decreaseSpeed() {
        this.gameSpeed += 30;
        this.stop();
        this.start();
    },
    changeDirection(direction) {
        this.direction = direction;
        switch (this.direction) {
            case "left":
                movementX = MOVEMENT_VAL * -1;
                movementY = 0;
                break;
            case "right":
                movementX = MOVEMENT_VAL;
                movementY = 0;
                break;
            case "up":
                movementY = MOVEMENT_VAL * -1;
                movementX = 0;
                break;
            case "down":
                movementY = MOVEMENT_VAL;
                movementX = 0;
                break;
        }
    }
}

function updateDisplay() {
    gameControls.clear();

    if ((gameControls.ball.x + BALL_R) >= gameControls.canvas.width) {
        gameControls.changeDirection("left");
    } else if ((gameControls.ball.x - BALL_R) <= 0) {
        gameControls.changeDirection("right");
    } else if ((gameControls.ball.y + BALL_R) >= gameControls.canvas.height) {
        gameControls.changeDirection("up");
    } else if ((gameControls.ball.y - BALL_R) <= 0) {
        gameControls.changeDirection("down");
    }

    gameControls.ball.move(movementX, movementY);
    drawBall();
}

function drawBall() {
    let ctx = gameControls.ctx;
    let ball = gameControls.ball;
    ctx.beginPath();
    ctx.fillStyle = "orange";
    ctx.arc(ball.x, ball.y, BALL_R, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
}


class Ball {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    move(x, y) {
        this.x += x;
        this.y += y;
    }
}