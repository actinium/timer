var canvas = document.getElementById("timerCanvas");
var ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = true;
var radius = canvas.height / 2;

ctx.translate(radius, radius);
radius = radius -5;

function drawCircle(radius,color) {
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0 , 2*Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawPie(radius,color,progress){
  ctx.beginPath();
  ctx.moveTo(0,0);
  ctx.arc(0, 0, radius, progress*Math.PI/50 - Math.PI/2, 2*Math.PI-Math.PI/2 );
  ctx.lineTo(0,0);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawTimer(progress){

  ctx.clearRect(-canvas.width/2,-canvas.height/2,canvas.width,canvas.height);

  drawCircle(radius,"#eeeeee");
  drawCircle(0.9*radius,"#bbbbbb");
  drawPie(0.9*radius, "#777777", progress);
  drawCircle(0.9*0.9*radius,"#eeeeee");
}

drawTimer(0);

var id;

function startCountDown() {
  stopCountDown();
  var progress = 0;
  id = setInterval(frame, 100);
  function frame() {
    if (progress >= 100) {
      clearInterval(id);
    } else {
      progress++;
      drawTimer(progress);
    }
  }
}

function stopCountDown(){
  clearInterval(id);
  drawTimer(0);
}

document.getElementById("minutes").onkeypress = function(evt) {
  evt = evt || window.event;
  var charCode = evt.keyCode || evt.which;
  var charStr = String.fromCharCode(charCode);
  console.log(charStr);
};
