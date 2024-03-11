function initCarousel() {
  // ваш код...
  const carouselInner = document.querySelector(".carousel__inner");
  const slideWidth = carouselInner.offsetWidth;
  const totalSlides = 4; 
  let currentSlide = 0;

  const hideShowArrows = () => {
    const prevArrow = document.querySelector(".carousel__arrow_left");
    const nextArrow = document.querySelector(".carousel__arrow_right");

    prevArrow.style.display = currentSlide === 0 ? "none" : "";
    nextArrow.style.display = currentSlide === totalSlides - 1 ? "none" : "";
  };

  hideShowArrows();

  document
    .querySelector(".carousel__arrow_left")
    .addEventListener("click", () => {
      if (currentSlide > 0) {
        currentSlide--;
        carouselInner.style.transform = `translateX(-${
          currentSlide * slideWidth
        }px)`;
      }
      hideShowArrows();
    });

  document
    .querySelector(".carousel__arrow_right")
    .addEventListener("click", () => {
      if (currentSlide < totalSlides - 1) {
        currentSlide++;
        carouselInner.style.transform = `translateX(-${
          currentSlide * slideWidth
        }px)`;
      }
      hideShowArrows();
    });
}
