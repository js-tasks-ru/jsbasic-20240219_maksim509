import createElement from "../../assets/lib/create-element.js";

export default class CartIcon {
  constructor() {
    this.render();

    this.addEventListeners();
  }

  render() {
    this.elem = createElement('<div class="cart-icon"></div>');
  }

  update(cart) {
    if (!cart.isEmpty()) {
      this.elem.classList.add("cart-icon_visible");

      this.elem.innerHTML = `
        <div class="cart-icon__inner">
          <span class="cart-icon__count">${cart.getTotalCount()}</span>
          <span class="cart-icon__price">€${cart
            .getTotalPrice()
            .toFixed(2)}</span>
        </div>`;

      this.updatePosition();

      this.elem.classList.add("shake");
      this.elem.addEventListener(
        "transitionend",
        () => {
          this.elem.classList.remove("shake");
        },
        { once: true }
      );
    } else {
      this.elem.classList.remove("cart-icon_visible");
    }
  }

  addEventListeners() {
    document.addEventListener("scroll", () => this.updatePosition());
    window.addEventListener("resize", () => this.updatePosition());
  }

  updatePosition() {
    // Проверяем ширину окна браузера
    const isMobile = document.documentElement.clientWidth <= 767;

    // Если ширина окна меньше или равна 767px, обнуляем стили и выходим из метода
    if (isMobile) {
      Object.assign(this.elem.style, {
        position: "",
        top: "",
        left: "",
        zIndex: "",
      });
      return;
    }

    if (!this.initialTopCoord) {
      this.initialTopCoord =
        this.elem.getBoundingClientRect().top + window.pageYOffset;
    }

    const initialTopCoord = this.initialTopCoord;

    // Получаем элемент .container
    const container = document.querySelector(".container");

    // Проверяем, существует ли элемент .container
    if (container) {
      // Вычисляем отступ по горизонтали
      const containerRight = container.getBoundingClientRect().right + 20;
      const windowWidth = document.documentElement.clientWidth;
      const iconWidth = this.elem.offsetWidth;
      const minLeftIndent = windowWidth - iconWidth - 10;
      let leftIndent = Math.min(containerRight, minLeftIndent) + "px";

      // Применяем фиксированное позиционирование, если пользователь прокрутил до конца страницы
      if (window.pageYOffset > initialTopCoord) {
        Object.assign(this.elem.style, {
          position: "fixed",
          top: "50px",
          zIndex: 1000,
          right: "20px",
          left: leftIndent,
        });
      } else {
        // Возвращаем обычное позиционирование
        Object.assign(this.elem.style, {
          position: "",
          top: "",
          left: "",
          zIndex: "",
        });
      }
    } else {
      // Применяем фиксированное позиционирование с учетом отступа от правого края окна
      if (window.pageYOffset > initialTopCoord) {
        Object.assign(this.elem.style, {
          position: "fixed",
          top: "50px",
          zIndex: 1000,
          right: "10px",
          left: "10px", // Отступ от левого края окна по умолчанию
        });
      } else {
        // Возвращаем обычное позиционирование
        Object.assign(this.elem.style, {
          position: "",
          top: "",
          left: "",
          zIndex: "",
        });
      }
    }
  }
}
