// Scroll animation for sections
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

// Hover animation for CV title
const title = document.getElementById("id1");

title.addEventListener("mouseenter", () => {
  title.style.transform = "scale(1.15)";
});

title.addEventListener("mouseleave", () => {
  title.style.transform = "scale(1)";
});

// Typing animation for subtitle
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
// Add emojis to phone & email (safe solution)
const paragraphs = document.querySelectorAll(".section p");

paragraphs.forEach(p => {
  if (p.textContent.includes("Phone Number")) {
    p.innerHTML = "📞 " + p.innerHTML;
  }

  if (p.textContent.includes("Email")) {
    p.innerHTML = "✉️ " + p.innerHTML;
  }

});
// Add LinkedIn icon
const links = document.querySelectorAll('a[href*="linkedin.com"]');

links.forEach(link => {
  link.innerHTML = "🔗 " + link.innerHTML;
});




