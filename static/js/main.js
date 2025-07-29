function playClickSound() {
  const clickSound = document.getElementById('click-sound');
  if (clickSound) {
    clickSound.currentTime = 0;
    clickSound.play().catch((e) => {
      console.warn("Le son n'a pas pu être joué :", e);
    });
  }
}

// Lance une animation de fondu + effet zoom avant de charger une autre page
function launchScene() {
  playClickSound();

  const overlay = document.getElementById('overlay-transition');
  overlay.style.opacity = 1;

  // Ajoute un zoom à tout le contenu
  document.querySelector('.content').style.transition = 'transform 1s ease';
  document.querySelector('.content').style.transform = 'scale(1.2)';

  // Redirige vers une page (à changer plus tard)
  setTimeout(() => {
    window.location.href = "catalogue.html"; // à adapter quand tu crées la page suivante
  }, 1200);
}

// Génère plein d’icônes en fond de manière aléatoire avec plusieurs types (play, pause, clap, bobine, caméra)
function generateAnimatedIcons() {
  const container = document.getElementById('background-animation');
  const totalIcons = 70;

  // Liste des icônes disponibles
  const iconsList = [
    '../static/images/play.svg',
    '../static/images/pause.svg',
    '../static/images/clap.svg',
    '../static/images/reel.svg',
    '../static/images/camera.svg'
  ];

  for (let i = 0; i < totalIcons; i++) {
    const icon = document.createElement('img');
    icon.src = iconsList[Math.floor(Math.random() * iconsList.length)];
    icon.className = 'anim-icon';

    const size = Math.random() * 40 + 20; // entre 20px et 60px
    icon.style.width = `${size}px`;
    icon.style.left = `${Math.random() * 100}%`;
    icon.style.top = `${Math.random() * 100}%`;
    icon.style.animationDuration = `${10 + Math.random() * 20}s`;
    icon.style.opacity = `${0.03 + Math.random() * 0.07}`;

    container.appendChild(icon);
  }
}

generateAnimatedIcons();

// Scintillement aléatoire du titre S.C.E.N.E.
function randomTwinkle() {
  const title = document.querySelector('.title');
  if (!title) return;

  setInterval(() => {
    // Opacité entre 0.85 et 1.0, durée aléatoire entre 100 et 400ms
    const opacity = 0.85 + Math.random() * 0.15;
    title.style.opacity = opacity;

  }, 200 + Math.random() * 400);
}

randomTwinkle();

// Effet parallax léger sur le fond avec la souris
function handleParallax() {
  const container = document.getElementById('background-animation');

  document.addEventListener('mousemove', (e) => {
    // Centre de la fenêtre
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // Distance par rapport au centre, normalisée entre -1 et 1
    const offsetX = (e.clientX - centerX) / centerX;
    const offsetY = (e.clientY - centerY) / centerY;

    // On applique un décalage modéré sur le container d’icônes
    // max 20px dans chaque direction
    const moveX = offsetX * 20;
    const moveY = offsetY * 20;

    container.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
}

handleParallax();