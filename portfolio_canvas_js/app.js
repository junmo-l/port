const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

// ctx.fillRect(200, 200, 50, 200);
// ctx.fillRect(400, 200, 50, 200);
// ctx.lineWidth = 3;
// ctx.strokeRect(300, 300, 50, 100);
// ctx.moveTo(300, 300);
// ctx.lineTo(350, 400);
// ctx.stroke();
// ctx.moveTo(350, 300);
// ctx.lineTo(300, 400);
// ctx.stroke();
// ctx.fillRect(200, 200, 200, 20);
// ctx.moveTo(200, 200);
// ctx.lineTo(325, 100);
// ctx.lineTo(450, 200);
// ctx.fill();

// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50);
// ctx.lineTo(150, 150);
// ctx.lineTo(50, 150);
// ctx.lineTo(50, 50);
// ctx.stroke();

// ctx.rect(50, 50, 100, 100);
// ctx.rect(150, 150, 100, 100);
// ctx.fill();
// ctx.rect(250, 250, 100, 100);

ctx.fillRect(230, 200, 15, 100);
ctx.fillRect(340, 200, 15, 100);
ctx.fillRect(260, 200, 60, 200);
ctx.arc(290, 145, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "yellow";
ctx.arc(270, 140, 10, 0, 1 * Math.PI);
ctx.arc(300, 130, 10, 0, 1.5 * Math.PI);
ctx.fill();
