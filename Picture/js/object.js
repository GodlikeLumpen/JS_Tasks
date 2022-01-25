
var canvas = document.getElementById('canvas');
console.log(canvas.width,canvas.height);
canvas.width = 600;
canvas.height = 600;
var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.strokeStyle = 'white';
ctx.lineWidth = 5;
ctx.moveTo(canvas.width / 2, canvas.height / 2);
ctx.lineTo(Math.round(Math.random()) * (canvas.width / 2) + 150, Math.round(Math.random()) * (canvas.height / 2) + 150);
ctx.lineTo(Math.round(Math.random()) * (canvas.width / 2) + 150, Math.round(Math.random()) * (canvas.width / 2) + 150);
ctx.lineTo(Math.round(Math.random()) * (canvas.width / 2) + 150, Math.round(Math.random()) * (canvas.width / 2) + 150);
ctx.lineTo(Math.round(Math.random()) * (canvas.width / 2) + 150, Math.round(Math.random()) * (canvas.width / 2) + 150);
ctx.lineTo(Math.round(Math.random()) * (canvas.width / 2) + 150, Math.round(Math.random()) * (canvas.width / 2) + 150);
ctx.lineTo(Math.round(Math.random()) * (canvas.width / 2) + 150, Math.round(Math.random()) * (canvas.width / 2) + 150);
ctx.closePath();

ctx.fillStyle = "#" + Math.round(Math.random() * 16777215).toString(16);
ctx.fillRect(0,0,canvas.width,canvas.height);
ctx.fill();
ctx.stroke()