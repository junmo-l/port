const saveBtn = document.getElementById("save");
const textInput = document.getElementById("text");
const fileInput = document.getElementById("file");
const modeBtn = document.getElementById("mode_btn");
const destroyBtn = document.getElementById("destroy_btn");
const eraserBtn = document.getElementById("eraser_btn");
const colorOptions = Array.from(
  document.getElementsByClassName("color_option")
);
const color = document.getElementById("color");
const lintWidth = document.getElementById("line_width");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
let bgColor = (document.body.style.backgroundColor = "beige");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lintWidth.value;
ctx.lineCap = "round";
let isPainting = false;
let isFilling = false;

function onMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.beginPath();
  ctx.moveTo(event.offsetX, event.offsetY);
}
function startPainting() {
  isPainting = true;
}
function canclePainting() {
  isPainting = false;
}
function onLineWidthChange(event) {
  ctx.lineWidth = event.target.value;
}
function onColorChange(event) {
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
}
function onColorClick(event) {
  const colorValue = event.target.dataset.color;
  ctx.strokeStyle = colorValue;
  ctx.fillStyle = colorValue;
  color.value = colorValue;
}
function onModeClick() {
  if (isFilling) {
    isFilling = false;
    modeBtn.innerText = "Fill";
  } else {
    isFilling = true;
    modeBtn.innerText = "Draw";
  }
}
function onCanvasClick() {
  if (isFilling) {
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
}
function onDestroyClick() {
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  fileInput.value = null;
}
function onEraserClick() {
  ctx.strokeStyle = bgColor;
  isFilling = false;
  modeBtn.innerText = "Fill";
}
function onFileChanger(event) {
  const file = event.target.files[0];
  const url = URL.createObjectURL(file);
  const image = new Image();
  image.src = url;
  image.onload = function () {
    ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  };
}
function onDoubleClick(event) {
  const text = textInput.value;
  if (text !== "") {
    ctx.save();
    ctx.lineWidth = 1;
    ctx.font = "45px arial";
    ctx.fillText(text, event.offsetX, event.offsetY);
    ctx.restore();
  }
}
function onSaveClick() {
  const url = canvas.toDataURL();
  const a = document.createElement("a");
  a.href = url;
  a.download = "myDrawing.png";
  a.click();
}
canvas.addEventListener("dblclick", onDoubleClick);
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", canclePainting);
canvas.addEventListener("mouseleave", canclePainting);
canvas.addEventListener("click", onCanvasClick);

lintWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);

colorOptions.forEach((color) => color.addEventListener("click", onColorClick));
modeBtn.addEventListener("click", onModeClick);
destroyBtn.addEventListener("click", onDestroyClick);
eraserBtn.addEventListener("click", onEraserClick);
fileInput.addEventListener("change", onFileChanger);
saveBtn.addEventListener("click", onSaveClick);

// const colors = [
//   "#c56cf0",
//   "#ffb8b8",
//   "#ff3838",
//   "#ff9f1a",
//   "#ff9f1a",
//   "#fff200",
//   "#32ff7e",
//   "#7efff5",
//   "#18dcff",
//   "#7d5fff",
//   "#4b4b4b",
// ];

// function onClick(event) {
//   ctx.beginPath();
//   ctx.moveTo(400, 400);
//   const color = colors[Math.floor(Math.random() * colors.length)];
//   ctx.strokeStyle = color;
//   ctx.lineTo(event.offsetX, event.offsetY);
//   ctx.stroke();
// }

// canvas.addEventListener("mousemove", onClick);

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

// ctx.fillRect(230, 200, 15, 100);
// ctx.fillRect(340, 200, 15, 100);
// ctx.fillRect(260, 200, 60, 200);
// ctx.arc(290, 145, 50, 0, 2 * Math.PI);
// ctx.fill();

// ctx.beginPath();
// ctx.fillStyle = "yellow";
// ctx.arc(270, 140, 10, 0, 1 * Math.PI);
// ctx.arc(300, 130, 10, 0, 1.5 * Math.PI);
// ctx.fill();
