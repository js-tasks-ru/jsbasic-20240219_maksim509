// import createElement from '../../assets/lib/create-element.js';

// export default class Modal {
//   constructor() {
//   }
// }

import createElement from "../../assets/lib/create-element.js";

export default class Modal {
  constructor() {
    this.render();
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  render() {
    this.modal = createElement(`
      <div class="modal">
        <div class="modal__overlay"></div>
        <div class="modal__inner">
          <div class="modal__header">
            <button class="modal__close" data-dismiss="modal">&times;</button>
            <h3 class="modal__title"></h3>
          </div>
          <div class="modal__body"></div>
        </div>
      </div>
    `);
  }

  open() {
    document.body.appendChild(this.modal);
    document.body.classList.add("is-modal-open");
    document.addEventListener("keydown", this.handleKeyDown);
    const closeButton = this.modal.querySelector(".modal__close");
    closeButton.addEventListener("click", this.handleCloseClick);
  }

  setTitle(title) {
    const titleElement = this.modal.querySelector(".modal__title");
    titleElement.textContent = title;
  }

  setBody(node) {
    const bodyElement = this.modal.querySelector(".modal__body");
    bodyElement.innerHTML = "";
    bodyElement.appendChild(node);
  }

  close() {
    if (this.modal && this.modal.parentNode === document.body) {
      document.body.removeChild(this.modal);
      document.body.classList.remove("is-modal-open");
      document.removeEventListener("keydown", this.handleKeyDown);
      const closeButton = this.modal.querySelector(".modal__close");
      closeButton.removeEventListener("click", this.handleCloseClick);
    }
  }

  handleCloseClick() {
    this.close();
  }

  handleKeyDown(event) {
    if (event.code === "Escape") {
      this.close();
    }
  }
}
