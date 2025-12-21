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




