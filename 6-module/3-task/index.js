import createElement from "../../assets/lib/create-element.js";
export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.currentSlideIndex = 0;
    this.render();
  }

  renderSlide(slide) {
    return `
      <div class="carousel__slide" data-id="${slide.id}">
        <img src="/assets/images/carousel/${
          slide.image
        }" class="carousel__img" alt="${slide.name}">
        <div class="carousel__caption">
          <span class="carousel__price">€${slide.price.toFixed(2)}</span>
          <div class="carousel__title">${slide.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
    `;
  }

  render() {
    this.elem = createElement(`
      <div class="carousel">
        <div class="carousel__arrow carousel__arrow_left" style="display: none;">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__inner">
          ${this.slides.map((slide) => this.renderSlide(slide)).join("")}
        </div>
      </div>
    `);

    this.inner = this.elem.querySelector(".carousel__inner");
    this.arrows = {
      left: this.elem.querySelector(".carousel__arrow_left"),
      right: this.elem.querySelector(".carousel__arrow_right"),
    };

    this.arrows.left.addEventListener("click", () => this.prevSlide());
    this.arrows.right.addEventListener("click", () => this.nextSlide());

    this.updateArrows();
    this.initButtonEvents();
  }

  updateArrows() {
    if (this.currentSlideIndex === 0) {
      this.arrows.left.style.display = "none";
    } else {
      this.arrows.left.style.display = "";
    }

    if (this.currentSlideIndex === this.slides.length - 1) {
      this.arrows.right.style.display = "none";
    } else {
      this.arrows.right.style.display = "";
    }
  }

  initButtonEvents() {
    this.elem.querySelectorAll(".carousel__button").forEach((button, index) => {
      button.addEventListener("click", () => {
        const event = new CustomEvent("product-add", {
          detail: this.slides[index].id,
          bubbles: true,
        });
        this.elem.dispatchEvent(event);
      });
    });
  }

  prevSlide() {
    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
      this.inner.style.transform = `translateX(-${
        this.currentSlideIndex * this.elem.offsetWidth
      }px)`;
      this.updateArrows();
    }
  }

  nextSlide() {
    if (this.currentSlideIndex < this.slides.length - 1) {
      this.currentSlideIndex++;
      this.inner.style.transform = `translateX(-${
        this.currentSlideIndex * this.elem.offsetWidth
      }px)`;
      this.updateArrows();
    }
  }
}
