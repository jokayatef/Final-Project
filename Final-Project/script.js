document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("main-header");
  const btn = document.querySelector(".btn-toggle");
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "light") {
    document.body.classList.remove("dark-theme");
  } else if (currentTheme === "dark" || prefersDarkScheme.matches) {
    document.body.classList.add("dark-theme");
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("shrink");
    } else {
      header.classList.remove("shrink");
    }
  });

  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    const theme = document.body.classList.contains("dark-theme") ? "dark" : "light";
    localStorage.setItem("theme", theme);
  });
});




