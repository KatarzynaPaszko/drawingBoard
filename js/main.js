const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth-10;
canvas.height = window.innerHeight-100;
ctx.strokeStyle = "#BADA55";
ctx.lineJoint = "round";
ctx.lineCap = "round";
ctx.lineWidth = document.querySelector("#spacing").value;

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
  if (!isDrawing) return;
  ctx.strokeStyle = document.querySelector("#base").value;
  ctx.strokeWidth = document.querySelector("#spacing").value;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
  ctx.lineWidth = document.querySelector("#spacing").value;
});
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseout", () => isDrawing = false);


function reload() {
  location.reload();
}
let btn = document.querySelector("#clearBoard");
btn.addEventListener("click", reload);
