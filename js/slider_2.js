const slider = document.querySelector(".team-slider ul");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
let slideIndex = 0;
let autoScrollInterval;
const slides = document.querySelectorAll(".team-slider li");
const totalSlides = slides.length;
const slideWidth = slides[0].offsetWidth + 10; // Ширина слайда + margin-right

function moveSlides(n) {
  slideIndex += n;
  if (slideIndex < 0) slideIndex = totalSlides - 1;
  if (slideIndex >= totalSlides) slideIndex = 0;
  slider.style.transition = "transform 0.5s ease-in-out";
  slider.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
}

prevButton.addEventListener("click", () => {
  clearInterval(autoScrollInterval);
  moveSlides(-1);
});

nextButton.addEventListener("click", () => {
  clearInterval(autoScrollInterval);
  moveSlides(1);
});

function autoScroll() {
  autoScrollInterval = setInterval(() => {
    moveSlides(1);
  }, 2000);
}

autoScroll();

slider.addEventListener("mouseover", () => {
  clearInterval(autoScrollInterval);
});

slider.addEventListener("mouseout", () => {
  autoScroll();
});
