// export default class StepSlider {
//   constructor({ steps, value = 0 }) {
//   }
// }

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;

    this.render();
    this.addEventListeners();
  }

  render() {
    this.elem = document.createElement("div");
    this.elem.classList.add("slider");

    this.elem.innerHTML = `
            <div class="slider__thumb">
                <span class="slider__value">${this.value}</span>
            </div>
            <div class="slider__progress" style="width: 0;"></div>
            <div class="slider__steps">
                <span class="slider__step-active"></span>
                ${"<span></span>".repeat(this.steps - 1)}
            </div>
        `;
  }

  addEventListeners() {
    this.elem.onclick = (event) => {
      let left = event.clientX - this.elem.getBoundingClientRect().left;
      let leftRelative = left / this.elem.offsetWidth;
      let segments = this.steps - 1;
      let approximateValue = leftRelative * segments;
      let value = Math.round(approximateValue);
      let valuePercents = (value / segments) * 100;

      let thumb = this.elem.querySelector(".slider__thumb");
      let progress = this.elem.querySelector(".slider__progress");

      thumb.querySelector(".slider__value").textContent = value;
      thumb.style.left = `${valuePercents}%`;
      progress.style.width = `${valuePercents}%`;

      let steps = this.elem.querySelector(".slider__steps");
      let stepActive = steps.querySelector(".slider__step-active");
      if (stepActive) {
        stepActive.classList.remove("slider__step-active");
      }
      steps.children[value].classList.add("slider__step-active");

      this.value = value;

      this.elem.dispatchEvent(
        new CustomEvent("slider-change", {
          detail: this.value,
          bubbles: true,
        })
      );
    };
  }
}
