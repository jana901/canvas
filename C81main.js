var canvas=document.getElementById("mycanvas");
var ctx=canvas.getContext("2d");
var color="blue";

circle(200,200);
color="black";
circle(300,200);
color="red";
circle(400,200);
color="yellow";
circle(250,240);
color="green";
circle(350,240);

function circle(mouse_x,mouse_y) {
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=5;
    ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
    ctx.stroke();   
}
function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}