const sections = document.querySelectorAll(".section");

function revealSections() {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 120) {
      section.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);


const title = document.getElementById("id1");

title.addEventListener("mouseenter", () => {
  title.style.transform = "scale(1.15)";
});

title.addEventListener("mouseleave", () => {
  title.style.transform = "scale(1)";
});
const subtitle = document.getElementById("paragraph1");
const text = subtitle.innerText;
subtitle.innerText = "";

let i = 0;
function typingEffect() {
  if (i < text.length) {
    subtitle.innerText += text.charAt(i);
    i++;
    setTimeout(typingEffect, 65);
  }
}

typingEffect();





