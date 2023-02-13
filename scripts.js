const input = document.getElementById("textInput");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let explosion = false;
let explosionSize = 0;

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && input.value === "강준혁") {
    explosion = true;
    input.style.display = "none";
  } else if (event.key === "Enter" && input.value.toLowerCase() === "rick") {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  } else if (event.key === "Enter" && input.value === "이시원") {
    window.location.href = "https://cdn.discordapp.com/attachments/835781870821965845/1074715920896897034/dabadeedabad0.png";
  }
});

function animate() {
  if (!explosion) {
    requestAnimationFrame(animate);
    return;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, explosionSize, 0, 2 * Math.PI);
  ctx.fillStyle = "red";
  ctx.fill();
  explosionSize++;

  requestAnimationFrame(animate);
}

animate();
