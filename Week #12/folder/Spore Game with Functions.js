//placement of player
        var playerX = 100;
        var playerY = 100;
        //key codes for letters
        var w = 87;
        var a = 65;
        var d = 68;
        var s = 83;
        //canvas
        var canvasWidth = 500;
        var canvasHeight = 500;
        //obstacle
        var obstacleX = 100;
        var obstacleY = 260;
        var speedobstacleX;
        var speedobstacleY;
        //shape
        var shapeX = 40;
        var shapeY = 190;
        var shapeXSpeed;
        var shapeYSpeed;
        //square
        var squareX = 50;
        var squareY = 50;
        var squareMovementX = 50;
        var squareMovementY = 50;

        //Mouse shape
        var mouseShapeX;
        var mouseShapeY;

    function setup()
    {
        createCanvas(canvasWidth,canvasHeight);
        //random speed at start
        speedobstacleX = (Math.floor(Math.random() *5) + 1);
        speedobstacleY = (Math.floor(Math.random() * 5) + 1);
        shapeXSpeed = (Math.floor(Math.random() * 10) + 1);
        shapeYSpeed = (Math.floor(Math.random() * 10) + 1);
    }
    function draw()
    {
        //Board
        createBorders(10);
        leftExit();
        createExit();

        //Player
        createPlayer();
        playerMovement();

        //Obstacle
        createObstacle();
        moveObstacle();

        //Shape
        moveShape();
        createShape();
        
        //Mouse Clicked Shape
        mouseShape();

    //circle shape
    function createShape()
        {
            fill(240,152,234);
            circle(shapeX, shapeY, 50);
        }

    //move shape
    function moveShape()
        {
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    // check to see if the shape has gone out of bounds
    if(shapeX > canvasWidth)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = canvasWidth;
    }
    if(shapeY > canvasHeight)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = canvasHeight;
    }
        }

    //obstacle rectangle
    function createObstacle()
        {
        fill(86,16,208);
        rect(obstacleX,obstacleY,10,30);
        }

    //move the obstacle
    function moveObstacle()
        {
        obstacleX += speedobstacleX;
        //check bounds
        if(obstacleX > canvasWidth)
        {
            obstacleX = 0;
        }
        if(obstacleX < 0)
        {
            obstacleX = canvasWidth;
        }
        if(obstacleY > canvasHeight)
        {
            obstacleY = 0;
        }
        if(obstacleY < 0)
        {
            obstacleY = canvasHeight;
        }

        }
    }

    //key handling
    function playerMovement()
    {
        if(keyIsDown(w))
        {
            playerY -= 8;
        }
        if(keyIsDown(s))
        {
            playerY += 8;
        }
        if(keyIsDown(a))
        {
            playerX -= 8;
        }
        if(keyIsDown(d))
        {
            playerX += 8;
        }

    }

    //player
    function createPlayer()
    {
        fill(10);
        circle(playerX,playerY,25);
    }

    //exit
    function createExit()
    {
        text("EXIT",canvasWidth-35,canvasHeight-25);
    }

    //boarders
    function createBorders(thickness)
    {
        background(207,182,240);
        stroke(0);
        fill(0);
        // top border
        rect(0,0,canvasWidth,thickness);
        //left border
        rect(0,0,thickness,canvasHeight);
        //bottom border
        rect(0, canvasHeight-thickness,canvasWidth,thickness);
        //right border
        rect(canvasWidth-thickness,0,thickness,canvasHeight-50);
    }
    
    //check if player left the exit
    function leftExit()
    {
        if(playerX > canvasWidth && playerY > canvasWidth-50)
        {
            fill(0);
            stroke(10);
            text("You're free!", canvasWidth/2-50,canvasHeight/2-50)
        }
    }

    //create when mouse clicked
    function mouseShape()
    {
        fill(153,77,153);
        circle(mouseShapeX,mouseShapeY,150);
    }
    function mouseClicked()
    {
        mouseShapeX = mouseX;
        mouseShapeY = mouseY;
    }
