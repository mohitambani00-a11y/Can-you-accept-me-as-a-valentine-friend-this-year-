const yes = document.getElementById("yes");
const no = document.getElementById("no");
const msg = document.getElementById("msg");


// YES CLICK
yes.addEventListener("click", () => {
  msg.innerHTML = "Yayyyy!! 💖 Best decision ever 😄✨";
  startConfetti();
});


// MOVING NO BUTTON
no.addEventListener("mouseover", () => {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 300 - 150;

  no.style.transform = `translate(${x}px, ${y}px)`;
});


// CONFETTI
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

function startConfetti() {
  for (let i = 0; i < 150; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6 + 2
    });
  }

  animate();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confetti.forEach(c => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fillStyle = `hsl(${Math.random()*360},100%,50%)`;
    ctx.fill();
    c.y += 2;
  });

  requestAnimationFrame(animate);
}
