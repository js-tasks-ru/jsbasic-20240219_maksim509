function initCarousel() {
  const carouselInner = document.querySelector(".carousel__inner");
  const carouselArrows = document.querySelectorAll(".carousel__arrow");

  const slideWidth = carouselInner.offsetWidth;
  let currentSlide = 0;

  function updateArrowsVisibility() {
    carouselArrows.forEach((arrow) => {
      if (
        currentSlide === 0 &&
        arrow.classList.contains("carousel__arrow_left")
      ) {
        arrow.style.display = "none";
      } else if (
        currentSlide === 3 &&
        arrow.classList.contains("carousel__arrow_right")
      ) {
        arrow.style.display = "none";
      } else {
        arrow.style.display = "";
      }
    });
  }

  function moveSlide(direction) {
    if (direction === "next") {
      currentSlide++;
    } else if (direction === "prev") {
      currentSlide--;
    }

    carouselInner.style.transform = `translateX(-${
      currentSlide * slideWidth
    }px)`;
    updateArrowsVisibility();
  }

  carouselArrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
      if (arrow.classList.contains("carousel__arrow_right")) {
        moveSlide("next");
      } else if (arrow.classList.contains("carousel__arrow_left")) {
        moveSlide("prev");
      }
    });
  });

  updateArrowsVisibility();
}
