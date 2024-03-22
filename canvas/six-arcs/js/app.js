const canvas = document.querySelector("#canvas");

if (canvas.getContext) {
  const ctx = canvas.getContext("2d");

  ctx.strokeStyle = "green";
  ctx.lineWidth = 2;

  const x = 40,
    y = canvas.height / 2,
    space = 10,
    radius = 30,
    arcCount = 6;

  for (let i = 0; i < arcCount; i++) {
    ctx.beginPath();
    ctx.arc(
      x + i * (radius * 2 + space),
      y,
      radius,
      0,
      ((i + 1) * (2 * Math.PI)) / arcCount,
      false
    );
    ctx.stroke();
  }
}
