// ANIMATION CARD FOLLOW MOUSE

const card = document.querySelector(".card");

card.addEventListener("mousemove", (event) => OnMouseMove(event));

const OnMouseMove = (event) => {
  const maxDeg = 20;

  const mousePosX = event.offsetX;
  const mousePosY = event.offsetY;
  const xMid = card.offsetWidth / 2;
  const yMid = card.offsetHeight / 2;

  const xPos = mousePosX - xMid;
  const xDeg = (xPos * maxDeg) / xMid;

  const yPos = mousePosY - yMid;
  const yDeg = (yPos * maxDeg) / yMid;

  card.style.transform = `rotateY(${xDeg}deg) rotateX(${yDeg}deg)`;

  console.log(xDeg);
};

// ANIMATION SMOOTH TRANSITION, Utilisation de Scroll Reveal

ScrollReveal().reveal(".logo", {
  delay: 400,
  distance: "600px",
  duration: 2000,
  origin: "left",
});
ScrollReveal().reveal(".block", {
  delay: 400,
  distance: "600px",
  duration: 2000,
  origin: "left",
});
ScrollReveal().reveal(".mail", {
  delay: 400,
  distance: "600px",
  duration: 2000,
  origin: "left",
});

ScrollReveal().reveal(".card-container", {
  delay: 900,
  distance: "600px",
  duration: 2000,
  origin: "right",
});
