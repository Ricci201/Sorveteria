const zapBtn = document.getElementById("btnzap");

function animatePulse(element) {
  let scaleUp = true;
  setInterval(() => {
    element.style.transition = "transform 0.3s ease";
    element.style.transform = scaleUp ? "scale(1.1)" : "scale(1)";
    scaleUp = !scaleUp;
  }, 600);
}

if (zapBtn) {
  animatePulse(zapBtn);
}
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

function createStar() {
  const star = document.createElement("div");
  star.textContent = "★";
  star.style.position = "fixed";
  star.style.color = "#fff";
  star.style.fontSize = `${Math.random() * 10 + 10}px`;
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.opacity = 0;
  star.style.transition = "top 10s linear, opacity 3s ease-in-out";
  document.body.appendChild(star);

  setTimeout(() => {
    star.style.top = "110%";
    star.style.opacity = 1;
  }, 10);

  setTimeout(() => {
    star.remove();
  }, 12000);
}

setInterval(createStar, 800);