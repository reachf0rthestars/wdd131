const themeSelect = document.querySelector("#theme-select");
const body = document.body;
const logo = document.querySelector("#logo");

themeSelect.addEventListener("change", function () {
  const theme = themeSelect.value;

  if (theme === "dark") {
    body.classList.add("dark");
    logo.src = "images/byui-logo-white.png";   // white logo for dark mode
  } else {
    body.classList.remove("dark");
    logo.src = "images/byui-logo-blue.webp";   // blue logo for light mode
  }
});