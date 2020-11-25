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
        //Mouse shape
        var mouseShapeX;
        var mouseShapeY;

    function setup()
    {
        createCanvas(canvasWidth,canvasHeight);
        //random speed at start
        speedobstacleX = Math.floor(Math.random() * (Math.floor(Math.random() *5)) + 1);
        speedobstacleY = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    }
    function draw()
    {
        background(207,182,240);
        stroke(0);
        fill(0);
        // top border
        rect(0,0,canvasWidth,10);
        //left border
        rect(0,0,10,canvasHeight);
        //bottom border
        rect(0, canvasHeight-10,canvasWidth,10);
        //right border
        rect(canvasWidth-10,0,10,canvasHeight-50);
        //exit
        text("EXIT",canvasWidth-35,canvasHeight-25);

        //player
        fill(10);
        circle(playerX,playerY,25);

        //key handling
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

        //obstacle rectangle
        fill(86,16,208);
        rect(obstacleX,obstacleY,10,30);

        //random speed
        speedobstacleX = Math.floor(Math.random() * (Math.floor(Math.random() * 5))+ 1);
        speedobstacleY = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

        //move the obstacle
        obstacleX += speedobstacleX;
        obstacleY += speedobstacleY;
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

    // circle shape
    fill(240,152,234);
    // draw the shape
    circle(shapeX, shapeY, 50);

     // get a random speed when the it first starts
     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    // move the shape
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

        //check if player left the exit
        if(playerX > canvasWidth && playerY > canvasWidth-50)
        {
            fill(0);
            stroke(10);
            text("You're free!", canvasWidth/2-50,canvasHeight/2-50)
        }

        //create when mouse clicked
        fill(120,130,140);
        circle(mouseShapeX,mouseShapeY,50);
    }

        function mouseClicked()
        {
           mouseShapeX = mouseX;
           mouseShapeY = mouseY; 
        }
