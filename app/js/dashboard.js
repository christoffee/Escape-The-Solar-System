function drawDashboard () {
    //dashboard
    context.beginPath();
    context.fillStyle="rgba(50, 0, 60, 0.3)";
    context.fillRect(0,0,canvasWidth,50);
    context.fill();

    //generation text
    context.beginPath();
    context.fillStyle="#fff";
    context.fillRect(canvasWidth / 2 - 75,5,250,40);
    context.fill();

    context.beginPath();
    context.fillStyle="#000";
    context.font="30px Arial";
    var gameText = "Generation: " + generation;
    context.fillText(gameText,canvasWidth / 2 - 45,45)
    context.fill();

    //planet text
    context.beginPath();
    context.fillStyle="#fff";
    context.fillRect(canvasWidth / 4 - 75,5,250,40);
    context.fill();

    context.beginPath();
    context.fillStyle="#000";
    context.font="30px Arial";
    var planetText = targetPlanet;
    context.fillText(planetText,canvasWidth / 4 - 45,45)
    context.fill();

    //next turn
    context.save();
    context.beginPath();
    context.rect(canvasWidth-(canvasWidth/6),canvasHeight -(canvasHeight/10),canvasWidth/7,canvasHeight/15);
    context.fillStyle="rgba(250, 0, 60, 0.3)";
    context.fill();
    context.restore();

    context.save();
    context.beginPath();
    context.fillStyle="white";
    context.font="2em Arial";
    context.translate(canvasWidth-(canvasWidth/6),canvasHeight -(canvasHeight/10));
    context.fillText("Next Gen",(canvasWidth/50),(canvasHeight/22));
    context.fill();
    context.restore();

    //exit planet
    context.save();
    context.beginPath();
    context.rect(canvasWidth/30,canvasHeight -(canvasHeight/10),canvasWidth/15,canvasHeight/15);
    context.fillStyle="rgba(0, 250, 60, 0.3)";
    context.fill();
    context.restore();

    context.save();
    context.beginPath();
    context.fillStyle="white";
    context.font="2em Arial";
    context.translate(canvasWidth/30,canvasHeight -(canvasHeight/10));
    context.fillText("Exit",(canvasWidth/100),(canvasHeight/22));
    context.fill();
    context.restore();
  }