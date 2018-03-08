var canvas= document.querySelector('canvas');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var c=canvas.getContext('2d');
//c.fillStyle= "red";
//c.fillRect(100,100,100,100);
//
//
//console.log(canvas);
//
////drawing a line
//c.beginPath();
//c.moveTo(80,300);
//c.lineTo(500,80);
//c.strokeStyle="blue";
//c.stroke();

//Arc //Circle
c.beginPath();
c.arc(300,300,50,0,Math.PI*2,false);
c.strokeStyle="orange";
c.stroke();

//for(i=0;i<100;i++){
//    var x=Math.random() *window.innerWidth;
//    var y=Math.random() *window.innerHeight;
//    c.beginPath();
//c.arc(x,y,50,0,Math.PI*2,false);
//c.strokeStyle="yellow";
//c.stroke();
//    
//}
function animate(){
    requestAnimationFrame(animate);
}
animate();