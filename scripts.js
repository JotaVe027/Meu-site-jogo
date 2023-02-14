let canvas = document.getElementById("snake-game");
let ctx = canvas.getContext("2d");

let snake = {
  x: 10,
  y: 10,
  dx: 10,
  dy: 0,
  cells: [{ x: 10, y: 10 }, { x: 0, y: 10 }],
};

function drawSnake() {
  ctx.fillStyle = "#0f0";
  snake.cells.forEach((cell) => {
    ctx.fillRect(cell.x, cell.y, 10, 10);
  });
}

function updateSnake() {
  let head = { x: snake.cells[0].x + snake.dx, y: snake.cells[0].y + snake.dy };
  snake.cells.unshift(head);
  snake.cells.pop();
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  updateSnake();
  drawSnake();
}

setInterval(gameLoop, 100);
