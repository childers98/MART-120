//Player Values
var playerX = 50;
var playerY = 50;
// define the key codes for each letter
var w = 87;
var s = 83;
var a = 65;
var d = 68;

//Shape
var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];

//Obstacle
var obstacleX = 70;
var obstacleY = 50;

var obstacleXs = [];
var obstacleYs = [];

var obstacleXspeed = [];
var obstacleYspeed = [];

//white circle
var circleX = [];
var circleY = [];
var circleXspeed = [];
var circleYspeed = [];

//spin
var spinX = [];
var spinY = [];
var spinXspeed = [];
var spinYspeed = [];

//rect
var rectX = [];
var rectY = [];
var rectXspeed = [];
var rectYspeed = [];

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;

//canvas
var canvasHeight = 500;
var canvasWidth = 500;


function setup() {
    createCanvas(canvasWidth, canvasHeight);
    // get a random speed when the it first starts
    for (var i = 0; i < 2; i++) {
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeXs[i] = getRandomNumber(500);
        shapeYs[i] = getRandomNumber(500);
        diameters[i] = getRandomNumber(30);
    }
    for (var t = 0; t < 4; t++) {
        obstacleXspeed[t] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        obstacleYspeed[t] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        obstacleXs[t] = getRandomNumber(500);
        obstacleYs[t] = getRandomNumber(500);
        diameters[t] = getRandomNumber(30);
    }
    for (var z = 0; z < 10; z++){
        circleXspeed[z] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        circleYspeed[z] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        circleX[z] = getRandomNumber(500);
        circleY[z] = getRandomNumber(500);
        diameters[z] = getRandomNumber(30);  
    }
    for (var w = 0; w < 5; w++){
        rectXspeed[w] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        rectYspeed[w] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        rectX[w] = getRandomNumber(500);
        rectY[w] = getRandomNumber(500);
        diameters[w] = getRandomNumber(30);
    }
    for (var y = 0; y < 3; y++){
        spinXspeed[y] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        spinYspeed[y] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        spinX[y] = getRandomNumber(500);
        spinY[y] = getRandomNumber(500);
        diameters[y] = getRandomNumber(10);
    }

    
    // obstacleXspeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    

    createPlayer(100, 100);
}

function draw() {
    background(207,182,240);
    stroke(0);
    fill(0);

    // call createBorders function
    createBorders(10);

    // exit message
    textSize(16);
    text("EXIT", canvasWidth - 35, canvasHeight - 25)

    //Player
    drawPlayer();
    playerMovement();

    // Pink Circles
    fill(240,152,234);
    // draw the shape
    for (var i = 0; i < shapeXs.length; i++) {
        circle(shapeXs[i], shapeYs[i], diameters[i]);
        // move the shape
        shapeXs[i] += shapeXSpeeds[i];
        shapeYs[i] += shapeYSpeeds[i];
        // check to see if the shape has gone out of bounds
        if (shapeXs[i] > width) {
            shapeXs[i] = 0;
        }
        if (shapeXs[i] < 0) {
            shapeXs[i] = width;
        }
        if (shapeYs[i] > height) {
            shapeYs[i] = 0;
        }
        if (shapeYs[i] < 0) {
            shapeYs[i] = height;
        }
    }
    // rect obstacle
    fill(200);
    // draw the obstacle
    for (var t = 0; t < obstacleXs.length; t++) {
        rect(obstacleXs[t], obstacleYs[t], diameters[t]);
        // move the obstacle
        obstacleXs[t] += obstacleXspeed[t];
        obstacleYs[t] += obstacleYspeed[t];
        // obstacle out of bounds
        if (obstacleXs[t] > width) {
            obstacleXs[t] = 0;
        }
        if (obstacleXs[t] < 0) {
            obstacleXs[t] = width;
        }
        if (obstacleYs[t] > height) {
            obstacleYs[t] = 0;
        }
        if (obstacleYs[t] < 0) {
            obstacleYs[t] = height;
        }
    }
    // white circle
    fill(300);
    // draw the obstacle
    for (var z = 0; z < circleX.length; z++) {
        circle(circleX[z], circleY[z], diameters[z]);

        // move the obstacle
        circle[z] += circleXspeed[z];
        circleY[z] += circleYspeed[z];
        // obstacle out of bounds
        if (circleX[z] > width) {
            circleX[z] = 0;
        }
        if (circleX[z] < 0) {
            circleX[z] = width;
        }
        if (circleY[z] > height) {
            circleY[z] = 0;
        }
        if (circleY[z] < 0) {
            circleY[z] = height;
        }
    }
    
    // yellow circle
        fill(243,197,88);
    for (var y = 0; y < spinX.length; y++) {
        circle(spinX[y], spinY[y], diameters[y]);
        // move the obstacle
        spinX[y] += spinXspeed[y];
        spinY[y] += spinYspeed[y];
        // obstacle out of bounds
        if (spinX[y] > width) {
            spinX[y] = 0;
        }
        if (spinX[y] < 0) {
            spinX[y] = width;
        }
        if (spinY[y] > height) {
            spinY[y] = 0;
        }
        if (spinY[y] < 0) {
            spinY[y] = height;
        }
    }

     // purple rect
    fill(168,30,238);
    // draw the obstacle
    for (var z = 0; z < rectX.length; z++) {
        rect(rectX[z], rectX[z], diameters[z]);

        // move the obstacle
        rectX[z] += rectXspeed[z];
        rectY[z] += circleYspeed[z];
        // obstacle out of bounds
        if (rectX[z] > width) {
            rectX[z] = 0;
        }
        if (rectX[z] < 0) {
            rectX[z] = width;
        }
        if (rectY[z] > height) {
            rectY[z] = 0;
        }
        if (rectY[z] < 0) {
            rectY[z] = height;
        }
    }

// check to see if the character has left the exit
    if (playerX > width && playerY > width - 50) {
        fill(0);
        stroke(10);
        textSize(23);
        text("You're Free!", width / 2 - 50, height / 2 - 50);
    }

    // create the shape based on the mouse click
    fill(153, 77, 153);
    circle(mouseShapeX, mouseShapeY, 150);
}

function playerMovement() {
    // handle the keys
    if (keyIsDown(w)) {
        playerY -= 8;
    }
    if (keyIsDown(s)) {
        playerY += 8;
    }
    if (keyIsDown(a)) {
        playerX -= 8;
        console.log("movement: " + playerX);
    }
    if (keyIsDown(d)) {
        playerX += 8;
    }
}

function createPlayer(x, y) {
    playerrX = x;
    playerY = y;
}

function drawPlayer() {
    fill(10);
    circle(playerX, playerY, 25);
}

function createBorders(thickness) {
    // top border
    rect(0, 0, width, thickness);
    // left border
    rect(0, 0, thickness, height);
    // bottom border
    rect(0, height - thickness, width, thickness);
    // right upper border
    rect(width - thickness, 0, thickness, height - 50);
}

function mouseClicked() {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}
function getRandomColor(color) {
    
}
