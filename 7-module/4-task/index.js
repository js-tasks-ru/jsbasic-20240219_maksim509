// // // export default class StepSlider {
// // //   constructor({ steps, value = 0 }) {
// // //   }
// // // }
// // // index.js
// // export default class StepSlider {
// //   constructor({ steps, value = 0 }) {
// //     this.steps = steps;
// //     this.value = value;
// //     this.render();

// //     // Начальные координаты для обработчиков Drag-and-Drop
// //     this.shiftX = 0;
// //     this.thumb = this.elem.querySelector(".slider__thumb");
// //     this.progress = this.elem.querySelector(".slider__progress");
// //     this.stepsElements = this.elem.querySelectorAll(".slider__steps span");

// //     this.thumb.addEventListener("pointerdown", this.onPointerDown);
// //     this.elem.addEventListener("click", this.onSliderClick);
// //   }

// //   render() {
// //     // Создание DOM-элементов слайдера
// //     this.elem = document.createElement("div");
// //     this.elem.classList.add("slider");

// //     // Добавление DOM-элементов в корневой элемент слайдера
// //     this.elem.innerHTML = `
// //       <div class="slider__thumb" style="left: ${
// //         this.value * (100 / (this.steps - 1))
// //       }%;">
// //         <span class="slider__value">${this.value}</span>
// //       </div>
// //       <div class="slider__progress" style="width: ${
// //         this.value * (100 / (this.steps - 1))
// //       }%;"></div>
// //       <div class="slider__steps">
// //         ${Array.from({ length: this.steps })
// //           .map(
// //             (_, index) =>
// //               `<span ${
// //                 index === 0 ? 'class="slider__step-active"' : ""
// //               }></span>`
// //           )
// //           .join("")}
// //       </div>
// //     `;

// //     // Отключение встроенного Drag-and-Drop
// //     this.thumb.ondragstart = () => false;

// //     document.getElementById("slider").appendChild(this.elem);
// //   }

// //   onPointerDown = (event) => {
// //     event.preventDefault();

// //     this.elem.classList.add("slider_dragging");

// //     // Сохранение начальных координат
// //     this.shiftX = event.clientX - this.thumb.getBoundingClientRect().left;

// //     // Добавление обработчиков
// //     document.addEventListener("pointermove", this.onPointerMove);
// //     document.addEventListener("pointerup", this.onPointerUp);
// //   };

// //   onPointerMove = (event) => {
// //     let newLeft =
// //       event.clientX - this.elem.getBoundingClientRect().left - this.shiftX;
// //     let leftRelative = newLeft / this.elem.offsetWidth;

// //     if (leftRelative < 0) {
// //       leftRelative = 0;
// //     }

// //     if (leftRelative > 1) {
// //       leftRelative = 1;
// //     }

// //     let leftPercents = leftRelative * 100;

// //     this.thumb.style.left = `${leftPercents}%`;
// //     this.progress.style.width = `${leftPercents}%`;

// //     let approximateValue = leftRelative * (this.steps - 1);
// //     this.value = Math.round(approximateValue);

// //     this.stepsElements.forEach((step, index) => {
// //       index === this.value
// //         ? step.classList.add("slider__step-active")
// //         : step.classList.remove("slider__step-active");
// //     });
// //   };

// //   onPointerUp = () => {
// //     this.elem.classList.remove("slider_dragging");

// //     // Удаление обработчиков
// //     document.removeEventListener("pointermove", this.onPointerMove);
// //     document.removeEventListener("pointerup", this.onPointerUp);

// //     // Генерация события изменения значения
// //     this.elem.dispatchEvent(
// //       new CustomEvent("slider-change", {
// //         detail: this.value,
// //         bubbles: true,
// //       })
// //     );
// //   };

// //   onSliderClick = (event) => {
// //     let newLeft = event.clientX - this.elem.getBoundingClientRect().left;
// //     let leftRelative = newLeft / this.elem.offsetWidth;

// //     if (leftRelative < 0) {
// //       leftRelative = 0;
// //     }

// //     if (leftRelative > 1) {
// //       leftRelative = 1;
// //     }

// //     let leftPercents = leftRelative * 100;

// //     this.thumb.style.left = `${leftPercents}%`;
// //     this.progress.style.width = `${leftPercents}%`;

// //     let approximateValue = leftRelative * (this.steps - 1);
// //     this.value = Math.round(approximateValue);

// //     this.stepsElements.forEach((step, index) => {
// //       index === this.value
// //         ? step.classList.add("slider__step-active")
// //         : step.classList.remove("slider__step-active");
// //     });

// //     // Генерация события изменения значения
// //     this.elem.dispatchEvent(
// //       new CustomEvent("slider-change", {
// //         detail: this.value,
// //         bubbles: true,
// //       })
// //     );
// //   };
// // }

// // // Использование
// // const slider = new StepSlider({ steps: 5, value: 2 });
// // slider.elem.addEventListener("slider-change", (event) => {
// //   console.log("Slider value changed:", event.detail);
// // });

index.js;
export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.render();

    // Начальные координаты для обработчиков Drag-and-Drop
    this.shiftX = 0;
    this.thumb = this.elem.querySelector(".slider__thumb");
    this.progress = this.elem.querySelector(".slider__progress");
    this.stepsElements = this.elem.querySelectorAll(".slider__steps span");

    this.thumb.addEventListener("pointerdown", this.onPointerDown);
    this.elem.addEventListener("click", this.onSliderClick);
  }

  render() {
    // Создание DOM-элементов слайдера
    this.elem = document.createElement("div");
    this.elem.classList.add("slider");

    // Добавление DOM-элементов в корневой элемент слайдера
    this.elem.innerHTML = `
      <div class="slider__thumb" style="left: ${
        this.value * (100 / (this.steps - 1))
      }%;">
        <span class="slider__value">${this.value}</span>
      </div>
      <div class="slider__progress" style="width: ${
        this.value * (100 / (this.steps - 1))
      }%;"></div>
      <div class="slider__steps">
        ${Array.from({ length: this.steps })
          .map(
            (_, index) =>
              `<span ${
                index === 0 ? 'class="slider__step-active"' : ""
              }></span>`
          )
          .join("")}
      </div>
    `;

    // Отключение встроенного Drag-and-Drop
    this.thumb.ondragstart = () => false;

    document.getElementById("slider").appendChild(this.elem);
  }

  onPointerDown = (event) => {
    event.preventDefault();

    this.elem.classList.add("slider_dragging");

    // Сохранение начальных координат
    this.shiftX = event.clientX - this.thumb.getBoundingClientRect().left;

    // Добавление обработчиков
    document.addEventListener("pointermove", this.onPointerMove);
    document.addEventListener("pointerup", this.onPointerUp);
  };

  onPointerMove = (event) => {
    let newLeft =
      event.clientX - this.elem.getBoundingClientRect().left - this.shiftX;
    let leftRelative = newLeft / this.elem.offsetWidth;

    if (leftRelative < 0) {
      leftRelative = 0;
    }

    if (leftRelative > 1) {
      leftRelative = 1;
    }

    let leftPercents = leftRelative * 100;

    this.thumb.style.left = `${leftPercents}%`;
    this.progress.style.width = `${leftPercents}%`;

    let approximateValue = leftRelative * (this.steps - 1);
    this.value = Math.round(approximateValue);

    this.stepsElements.forEach((step, index) => {
      index === this.value
        ? step.classList.add("slider__step-active")
        : step.classList.remove("slider__step-active");
    });
  };

  onPointerUp = () => {
    this.elem.classList.remove("slider_dragging");

    // Удаление обработчиков
    document.removeEventListener("pointermove", this.onPointerMove);
    document.removeEventListener("pointerup", this.onPointerUp);

    // Генерация события изменения значения
    this.elem.dispatchEvent(
      new CustomEvent("slider-change", {
        detail: this.value,
        bubbles: true,
      })
    );
  };

  onSliderClick = (event) => {
    let newLeft = event.clientX - this.elem.getBoundingClientRect().left;
    let leftRelative = newLeft / this.elem.offsetWidth;

    if (leftRelative < 0) {
      leftRelative = 0;
    }

    if (leftRelative > 1) {
      leftRelative = 1;
    }

    let leftPercents = leftRelative * 100;

    this.thumb.style.left = `${leftPercents}%`;
    this.progress.style.width = `${leftPercents}%`;

    let approximateValue = leftRelative * (this.steps - 1);
    this.value = Math.round(approximateValue);

    this.stepsElements.forEach((step, index) => {
      index === this.value
        ? step.classList.add("slider__step-active")
        : step.classList.remove("slider__step-active");
    });

    // Генерация события изменения значения
    this.elem.dispatchEvent(
      new CustomEvent("slider-change", {
        detail: this.value,
        bubbles: true,
      })
    );
  };
}

// Использование
const slider = new StepSlider({ steps: 5, value: 2 });
slider.elem.addEventListener("slider-change", (event) => {
  console.log("Slider value changed:", event.detail);
});
