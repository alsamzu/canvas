var canvas= document.querySelector('canvas');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var c=canvas.getContext('2d');
c.fillStyle= "red";
c.fillRect(100,100,100,100);


console.log(canvas);

//drawing a line
c.beginPath();
c.moveTo(80,300);
c.lineTo(500,80);
c.strokeStyle="blue";
c.stroke();