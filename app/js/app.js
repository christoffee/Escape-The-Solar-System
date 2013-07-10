jQuery(document).ready ( function () {
  // shim layer with setTimeout fallback
  window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
      window.webkitRequestAnimationFrame       ||
      window.mozRequestAnimationFrame          ||
        function( callback ){
          window.setTimeout(callback, 1000 / 60);
        };
  })();

  var canvas, context, toggle, starSize;
  var cloudsArr = [];
  var starsArr = [];
  var pulsate = 40;
  var canvasXCenter;
  var canvasyCenter;
  var expAlpha = 0.5;
  var expSize = 0;
  var canvasHeight;
  var canvasWidth;
  var planetPosition = 3;
  var gameTime = 12345678;

  init();

  (function animloop(){
    requestAnimFrame(animloop);
    render();
  })();
  
  function init() {
    canvasWidth = jQuery('body').width();
    canvasHeight = jQuery('body').height();
    createBackgound();
    canvas = document.createElement( 'canvas' );
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    canvasXCenter = canvasWidth/ 2;
    canvasyCenter = canvasHeight / 2;

    window.addEventListener( "keydown", doKeyDown, true);

    context = canvas.getContext( '2d' );
    context.fillStyle = "black";
    context.rect(0, 0, canvasWidth, canvasHeight);
    context.fill();

    document.body.appendChild( canvas );
  }

  function doKeyDown (e) {
    //left
    if(e.keyCode == 37){
      planetPosition += 0.05;
    }
    //right
    if (e.keyCode == 39) {

      planetPosition -= 0.05;
    }
  }

  function render() {
    if(context){
      context.clearRect(0,0,canvasWidth,canvasHeight);

      drawBackground();
      drawPlanet();
      drawResources();
      drawClouds();
      drawFactory();
      drawDashboard();
      console.log(gameTime);
    }
  }
  
  function createBackgound () {
    for (i = 0; i <= 1000; i++) {
      var star = [];
      // Get random positions for stars.
      var x = Math.floor(Math.random() * (canvasWidth - 1));
      var y = Math.floor(Math.random() * (canvasHeight - 1));
      toggle = !toggle;

      starSize = toggle ? 0.8 :  0.2;
      starColour = toggle ? 'white' :  'aqua';

      star.push(x,y,starSize,starColour);
      starsArr.push(star);
    }
    for (i = 0; i <= 120; i++) {
      var cloud = [];
      // Get random positions for stars.
      var size = Math.floor(Math.random() * 4) + 2.5;
      var speed = (Math.random()*0.00001+0.000001).toFixed(8);
      toggle = !toggle;

      var direction = toggle;

      cloud.push(size,speed,direction);
      cloudsArr.push(cloud);
    }
  }

  function drawBackground() {
    for (var arr in starsArr) {
      for (var i = 0; i < starsArr[arr].length; i++) {
        // Draw an individual star.
        context.fillStyle = starsArr[arr][3];
        context.beginPath();
        context.rect(starsArr[arr][0], starsArr[arr][1], starsArr[arr][2], starsArr[arr][2]);
        context.closePath();
        context.fill();
      }
    }
  }

  function drawPlanet() {
    context.beginPath();    
    context.fillStyle = "rgba(102, 255, 255, 0.5)";
    context.arc( canvasWidth / 2, canvasHeight - 10, canvasWidth / 2, 0, Math.PI * 5, true );
    context.closePath();
    context.fill(); 

    context.beginPath();    
    context.fillStyle = "rgba(102, 204, 102, 1)";
    context.arc( canvasWidth / 2, canvasHeight - 10, canvasWidth / 2.2, 0, Math.PI * 5, true );
    context.closePath();
    context.fill(); 

    context.fillStyle = 'rgba(51, 25, 0, 1)';
    context.beginPath();
    context.arc( canvasWidth / 2, canvasHeight - 10, canvasWidth / 2.25, 0, Math.PI * 5, true );
    context.closePath();
    context.fill();

    context.fillStyle = 'rgba(102, 51, 0, 1)';
    context.beginPath();
    context.arc( canvasWidth / 2, canvasHeight - 10, canvasWidth / 3, 0, Math.PI * 5, true );
    context.closePath();
    context.fill(); 

    context.fillStyle = 'rgba(255, 178, 102, 1)';
    context.beginPath();
    context.arc( canvasWidth / 2, canvasHeight - 10, canvasWidth / 12, 0, Math.PI * 5, true );
    context.closePath();
    context.fill(); 

    context.fillStyle = 'rgba(255, 225, 102, 1)';
    context.beginPath();
    context.arc( canvasWidth / 2, canvasHeight - 10, canvasWidth / 18, 0, Math.PI * 5, true );
    context.closePath();
    context.fill(); 
  }

  function drawClouds(){
    for(var arr in cloudsArr){
      for (var i = 0; i < cloudsArr[arr].length; i++) {
        var cloudSize = cloudsArr[arr][0],
            cloudSpeed = cloudsArr[arr][1],
            antiClockwise = cloudsArr[arr][2];
        var time = (gameTime * cloudSpeed) + planetPosition;
        
        if(antiClockwise){
        	time = -time;
        }

        var cloudx = Math.sin( time ) * ((canvasWidth / 2.12) + cloudSize *4) + canvasWidth / 2;
        var cloudy = Math.cos( time ) * ((canvasWidth / 2.12) + cloudSize *4) + canvasHeight;

        var cloud2x = Math.sin( time - 2 ) * 5 + cloudx;
        var cloud2y = Math.cos( time - 2 ) * 5 + cloudy;

        var cloud3x = Math.sin( time + 2 ) * 5 + cloudx;
        var cloud3y = Math.cos( time + 2 ) * 5 + cloudy;

        context.beginPath();
        context.fillStyle = "rgba(255, 255, 255, 0.5)";
        context.arc( cloudx, cloudy, cloudSize, 0, Math.PI * 5, true );
        context.closePath();

        context.fill();

        context.beginPath();
        context.fillStyle = "rgba(255, 255, 255, 0.4)";
        context.arc( cloud2x, cloud2y, cloudSize / 2, 0, Math.PI * 5, true );
        context.closePath();

        context.fill();

        context.beginPath();
        context.fillStyle = "rgba(255, 255, 255, 0.4)";
        context.arc( cloud3x, cloud3y, cloudSize /1.5, 0, Math.PI * 5, true );
        context.closePath();

        context.fill();
      }
    }
  }

  function drawResources () {

    var x = ((Math.sin( planetPosition ) * (canvasWidth / 8)) + canvasWidth / 2) ;
    var y = ((Math.cos( planetPosition ) * (canvasWidth / 8)) + canvasHeight);

    //gold
    context.beginPath();
    context.fillStyle="yellow";
    context.fillRect(x,y -15,5,5);
    context.fill();

    context.beginPath();
    context.fillStyle="yellow";
    context.fillRect(x + 5,y,3,3);
    context.fill();

    context.beginPath();
    context.fillStyle="yellow";
    context.fillRect(x - 15,y,2,2);
    context.fill();

    context.beginPath();
    context.fillStyle="yellow";
    context.fillRect(x -6,y - 6,5,5);
    context.fill();

    x = ((Math.sin( planetPosition +0.5 ) * (canvasWidth / 4)) + canvasWidth / 2) ;
    y = ((Math.cos( planetPosition +0.5) * (canvasWidth / 4)) + canvasHeight);
    //coal
    context.beginPath();
    context.fillStyle="black";
    context.fillRect(x,y - 5,5,5);
    context.fill();

    context.beginPath();
    context.fillStyle="black";
    context.fillRect(x - 15,y ,3,3);
    context.fill();

    context.beginPath();
    context.fillStyle="black";
    context.fillRect(x - 15,y - 8,2,2);
    context.fill();

    context.beginPath();
    context.fillStyle="black";
    context.fillRect(x -6,y - 6,5,5);
    context.fill();

    x = ((Math.sin( planetPosition -1.5 ) * (canvasWidth / 6)) + canvasWidth / 2) ;
    y = ((Math.cos( planetPosition -1.5) * (canvasWidth / 6)) + canvasHeight);

    //jewles
    context.beginPath();
    context.fillStyle="white";
    context.fillRect(x,y - 5,5,5);
    context.fill();

    context.beginPath();
    context.fillStyle="aqua";
    context.fillRect(x + 5,y ,3,3);
    context.fill();

    context.beginPath();
    context.fillStyle="aqua";
    context.fillRect(x - 15,y - 8,2,2);
    context.fill();

    context.beginPath();
    context.fillStyle="white";
    context.fillRect(x -6,y - 6,5,5);
    context.fill();

    context.beginPath();
    context.fillStyle="white";
    context.fillRect(x -1,y + 10,5,5);
    context.fill();
  }

  function drawFactory () {

    var y = (Math.sin( planetPosition ) * (canvasWidth / 2.15)) + canvasWidth / 2;
    var x = (Math.cos( planetPosition ) * (canvasWidth / 2.15)) + canvasHeight ;
    var r = (Math.PI / (planetPosition));

    context.save();

    context.fillStyle="#FF0000";
    context.translate(25,5);
    context.rotate(r);
    context.fillRect(y,x +5,50,15);

    context.restore();
  }

  function drawDashboard () {
    //dashboard
    context.beginPath();
    context.fillStyle="#333";
    context.fillRect(0,0,canvasWidth,50);
    context.fill();

    //timer
    context.beginPath();
    context.fillStyle="#fff";
    context.fillRect(canvasWidth / 2 - 45,5,90,40);
    context.fill();

    //generation
    context.beginPath();
    context.fillStyle="#000";
    context.font="30px Arial";
    var gameText = planetPosition;
    context.fillText(gameText,canvasWidth / 2 - 45,45)
    context.fill();
  }

});