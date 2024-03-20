// import createElement from '../../assets/lib/create-element.js';

// export default class RibbonMenu {
//   constructor(categories) {
//     this.categories = categories;
//   }
// }

import createElement from "../../assets/lib/create-element.js";

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.render();
    this.addEventListeners();
  }

  render() {
    const ribbon = createElement(`
      <div class="ribbon">
        <button class="ribbon__arrow ribbon__arrow_left">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </button>
        <div class="ribbon__inner">
          ${this.categories
            .map(
              (category) => `
            <a href="#" class="ribbon__item" data-id="${category.id}">${category.name}</a>
          `
            )
            .join("")}
        </div>
        <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </button>
      </div>
    `);
    this.elem = ribbon;
  }

  addEventListeners() {
    const inner = this.elem.querySelector(".ribbon__inner");
    const leftArrow = this.elem.querySelector(".ribbon__arrow_left");
    const rightArrow = this.elem.querySelector(".ribbon__arrow_right");

    inner.addEventListener("click", (event) => {
      event.preventDefault();
      const link = event.target.closest(".ribbon__item");
      if (!link) return;

      const currentActiveLink = inner.querySelector(".ribbon__item_active");
      if (currentActiveLink) {
        currentActiveLink.classList.remove("ribbon__item_active");
      }

      link.classList.add("ribbon__item_active");

      const categoryId = link.dataset.id;
      const ribbonSelectEvent = new CustomEvent("ribbon-select", {
        detail: categoryId,
        bubbles: true,
      });
      this.elem.dispatchEvent(ribbonSelectEvent);
    });

    inner.addEventListener("scroll", () => {
      const scrollWidth = inner.scrollWidth;
      const scrollLeft = inner.scrollLeft;
      const clientWidth = inner.clientWidth;
      const scrollRight = scrollWidth - scrollLeft - clientWidth;

      if (scrollLeft === 0) {
        leftArrow.classList.remove("ribbon__arrow_visible");
      } else {
        leftArrow.classList.add("ribbon__arrow_visible");
      }

      if (scrollRight < 1) {
        rightArrow.classList.remove("ribbon__arrow_visible");
      } else {
        rightArrow.classList.add("ribbon__arrow_visible");
      }
    });

    leftArrow.addEventListener("click", () => {
      inner.scrollBy(-350, 0);
    });

    rightArrow.addEventListener("click", () => {
      inner.scrollBy(350, 0);
    });
  }
}
