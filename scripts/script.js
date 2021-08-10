const menuButton = document.querySelector(".header__button");
const navMenu = document.querySelector(".header__nav");
const menuButtonLines = document.querySelectorAll(".header__btn-line");
const headerLogo = document.querySelector(".header__logo");

function toggleMenu(menuElement) {
  menuElement.classList.toggle("header__nav_opened");
}

function rotateButtonLines(buttonLines) {
  buttonLines.forEach(element => {
    element.classList.toggle("header__btn-line_rotated");
  });
}

function hideLogo(logo) {
  logo.classList.toggle("header__logo_hidden");
}

menuButton.addEventListener("click", function () {
  toggleMenu(navMenu);
  rotateButtonLines(menuButtonLines);
  hideLogo(headerLogo);
});
