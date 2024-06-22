document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".carousel__slider");
  const slides = document.querySelectorAll(".carousel__slide");
  const prevButton = document.querySelector(".carousel__button--prev");
  const nextButton = document.querySelector(".carousel__button--next");

  let currentSlide = 0;
  const totalSlides = slides.length;

  function updateSliderPosition() {
    const offset = -currentSlide * 100;
    slider.style.transform = `translateX(${offset}%)`;
  }

  prevButton.addEventListener("click", function () {
    console.log("Previous button clicked");
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : totalSlides - 1;
    updateSliderPosition();
  });

  nextButton.addEventListener("click", function () {
    console.log("Previous button clicked");
    currentSlide = (currentSlide < totalSlides - 1) ? currentSlide + 1 : 0;
    updateSliderPosition();
  });
});
