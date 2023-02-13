const input = document.getElementById("textInput");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let explosion = false;
let particles = [];

const audio = new Audio("newthatI.mp3");

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && input.value === "강준혁") {
    explosion = true;
    input.style.display = "none";
    for (let i = 0; i < 800; i++) {
      const angle = Math.random() * 2 * Math.PI;
      const distance = Math.random() * canvas.width / 2;
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: Math.cos(angle) * distance / 20,
        vy: Math.sin(angle) * distance / 20,
        size: Math.random() * 50 + 20,
        color: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
          Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)})`,
      });
    }
  } else if (event.key === "Enter" && input.value.toLowerCase() === "rick" || input.value.toLowerCase() === "rickroll" || input.value ==="갸차") {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  } else if (event.key === "Enter" && input.value === "이시원") {
    var audio = new Audio('newthatI.mp3');
    audio.play();
    window.location.href = "https://cdn.discordapp.com/attachments/835781870821965845/1074715920896897034/dabadeedabad0.png";
  }
});

function animate() {
  if (!explosion) {
    requestAnimationFrame(animate);
    return;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const particle of particles) {
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, 2 * Math.PI);
    ctx.fillStyle = particle.color;
    ctx.fill();

    particle.x += particle.vx;
    particle.y += particle.vy;
    particle.vy += 1;
    particle.size *= 0.97;
  }

  requestAnimationFrame(animate);
}

animate();
