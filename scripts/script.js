const menuButton = document.querySelector(".header__button");
const navMenu = document.querySelector(".header__nav");
const menuButtonLines = document.querySelectorAll(".header__btn-line");
const headerLogo = document.querySelector(".header__logo");
const galleryPics = document.querySelectorAll(".gallery__pic");
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const firstRadioBtn = document.querySelector("#first-radio");
const secondRadioBtn = document.querySelector("#second-radio");
const pressLinkBtn = document.querySelector(".press__link-btn");
const pressTexts = document.querySelectorAll(".press__text");

let carouselCounter = 0;

/* header menu */
function toggleMenu(menuElement) {
  menuElement.classList.toggle("header__nav_opened");
}

function rotateButtonLines(buttonLines) {
  buttonLines.forEach((element) => {
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

/* carousel */

prevBtn.addEventListener("click", function () {
  galleryPics[carouselCounter].style.display = "none";
  carouselCounter--;
  if (carouselCounter < 0) {
    carouselCounter = galleryPics.length - 1;
  }
  galleryPics[carouselCounter].style.display = "block";
});

nextBtn.addEventListener("click", function () {
  galleryPics[carouselCounter].style.display = "none";
  carouselCounter++;
  if (carouselCounter >= galleryPics.length) {
    carouselCounter = 0;
  }
  galleryPics[carouselCounter].style.display = "block";
});

/* radio btns */

firstRadioBtn.addEventListener("click", function () {
  pressLinkBtn.setAttribute(
    "href",
    "https://www.engadget.com/2020-03-20-vw-unveils-e-bulli-t1-electric-conversion.html"
  );
  firstRadioBtn.classList.add("press__btn_type_active");
  secondRadioBtn.classList.remove("press__btn_type_active");
  pressTexts[1].style.display = "none";
  pressTexts[0].style.display = "block";
});

secondRadioBtn.addEventListener("click", function () {
  pressLinkBtn.setAttribute(
    "href",
    "https://www.drive.ru/news/volkswagen/5e7447bdec05c4b251000010.html"
  );
  firstRadioBtn.classList.remove("press__btn_type_active");
  secondRadioBtn.classList.add("press__btn_type_active");
  pressTexts[0].style.display = "none";
  pressTexts[1].style.display = "block";
});
