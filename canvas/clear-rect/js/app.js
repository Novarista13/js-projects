const canvas = document.querySelector("#canvas");

const ctx = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;

function drawWall(ctx, canvasWidth, canvasHeight) {
  const bh = 20,
    bw = 50,
    space = 5;

  const rows = Math.ceil(canvasHeight / (bh + space));
  const columns = Math.ceil(canvasWidth / (bw + space));

  ctx.fillStyle = "#D6632A";

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      if (r % 2) {
        c == 0
          ? ctx.fillRect(c * (bw + space), r * (bh + space), bw / 2, bh)
          : ctx.fillRect(c * (bw + space) - bw / 2, r * (bh + space), bw, bh);
      } else {
        ctx.fillRect(c * (bw + space), r * (bh + space), bw, bh);
      }
    }
  }
}

drawWall(ctx, width, height);
