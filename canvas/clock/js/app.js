const canvas = document.querySelector("#canvas");

if (canvas.getContext) {
  const ctx = canvas.getContext("2d");

  ctx.beginPath();

  const centerX = canvas.width / 2,
    centerY = canvas.height / 2;

  // draw the circle
  ctx.arc(centerX, centerY, 70, 0, 2 * Math.PI, false);

  // translate to center
  ctx.translate(centerX, centerY);

  // draw the hour hand
  ctx.moveTo(0, 0);
  ctx.lineTo(-30, -20);

  // draw the minute hand
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -55);

  ctx.stroke();
}
