function smoothRedirect(page) {
  document.body.classList.add("fade-out");
  setTimeout(() => {
    window.location.href = page;
  }, 600);
}

function checkPassword() {
  const input = document.getElementById("password").value.trim().toLowerCase();
  const error = document.getElementById("error");

  const validPasswords = [
    "shrily","angella","shoharji","rits","ritu","ana","anu","sagnika","jabeda","pallabi"
  ];

  if (validPasswords.includes(input)) {
    createFloatingHearts();
    setTimeout(() => smoothRedirect("reasons.html"), 1500);
  } else {
    error.innerText = "Hmm that's not what I call you💔 Try again!";
  }
}

function goToProposal() {
  smoothRedirect("proposal.html");
}

function sayYes() {
  const audio = document.getElementById("bgMusic");
  audio.play();

  document.getElementById("proposalSection").classList.add("hidden");
  document.getElementById("yaySection").classList.remove("hidden");

  startConfetti();

  setTimeout(() => {
    stopConfetti();
    document.getElementById("yaySection").classList.add("hidden");
    document.getElementById("finalSection").classList.remove("hidden");
    document.getElementById("loveFill").style.width = "100%";
  }, 2000);
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("secretBtn");
  if (btn) {
    btn.addEventListener("click", () => {
      document.getElementById("secretMessage").classList.remove("hidden");
      document.getElementById("signature").classList.remove("hidden");
    });
  }
});

function moveNo(button) {
  button.style.position = "absolute";
  button.style.top = Math.random() * 400 + "px";
  button.style.left = Math.random() * 400 + "px";
}

let confettiAnimation;

function startConfetti() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = Array.from({length:150}).map(() => ({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    r: Math.random()*6+2,
    color: `hsl(${Math.random()*360},100%,70%)`
  }));

  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    pieces.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle = p.color;
      ctx.fill();
      p.y += 3;
      if (p.y > canvas.height) p.y = 0;
    });
    confettiAnimation = requestAnimationFrame(draw);
  }
  draw();
}

function stopConfetti() {
  cancelAnimationFrame(confettiAnimation);
}

function createFloatingHearts() {
  for (let i=0;i<20;i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.className = "random-heart";
    heart.style.left = Math.random()*100 + "vw";
    heart.style.animationDuration = (Math.random()*3+2)+"s";
    document.body.appendChild(heart);
    setTimeout(()=>heart.remove(),4000);
  }
}
