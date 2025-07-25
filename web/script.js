// Dark mode toggle
document.getElementById('toggle-theme').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const icon = document.getElementById('toggle-theme');
  icon.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target?.scrollIntoView({ behavior: "smooth" });
  });
});

// Reveal on scroll
const sections = document.querySelectorAll(".section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });
sections.forEach(sec => observer.observe(sec));

// Typing text effect
const phrases = [
  "I'm a Developer.",
  "I build Games.",
  "I design Websites.",
  "I love JavaScript 💻",
];
let i = 0, j = 0, currentPhrase = [], isDeleting = false, isEnd = false;
const typedText = document.getElementById('typed-text');

function loop() {
  isEnd = false;
  typedText.innerHTML = currentPhrase.join('');

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j++]);
    }
    if (isDeleting && j > 0) {
      currentPhrase.pop();
      j--;
    }

    if (j === phrases[i].length) {
      isEnd = true;
      isDeleting = true;
      setTimeout(loop, 1000);
      return;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i = (i + 1) % phrases.length;
    }
  }

  const typingSpeed = isEnd ? 200 : isDeleting ? 50 : 100;
  setTimeout(loop, typingSpeed);
}
loop();

// Filter cards
function filterProjects(category) {
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    const cat = card.getAttribute("data-category");
    card.style.display = (category === "all" || cat === category) ? "block" : "none";
  });
}

// Easter Egg
document.querySelector('.logo').addEventListener('click', () => {
  alert("🎉 Surprise, Indriya! You found the Easter Egg!");
});

// Music player
const musicBtn = document.getElementById("music-btn");
const bgMusic = document.getElementById("bg-music");
let isPlaying = false;
musicBtn.addEventListener("click", () => {
  isPlaying = !isPlaying;
  if (isPlaying) {
    bgMusic.play();
    musicBtn.textContent = "🔈 Pause Music";
  } else {
    bgMusic.pause();
   musicBtn.textContent = "🎶 Play Indriya’s Song";
  }
});

// Image popup
function openImage(src) {
  const popup = document.getElementById("img-popup");
  const img = document.getElementById("popup-img");
  img.src = src;
  popup.style.display = "flex";
}
function closeImage() {
  document.getElementById("img-popup").style.display = "none";
}

// Particle background
tsParticles.load("tsparticles", {
  background: { color: { value: "transparent" } },
  particles: {
    number: { value: 40 },
    size: { value: 2 },
    move: { speed: 1 },
    color: { value: "#ffffff" },
    line_linked: { enable: true, color: "#ffffff", opacity: 0.2 }
  }
});