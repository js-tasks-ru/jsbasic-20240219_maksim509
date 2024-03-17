export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.elem = this.render();
    this.elem.addEventListener("click", this.onAddButtonClick.bind(this));
  }

  render() {
    const card = document.createElement("div");
    card.className = "card";

    const cardTop = document.createElement("div");
    cardTop.className = "card__top";

    const image = document.createElement("img");
    image.src = `/assets/images/products/${this.product.image}`;
    image.alt = "product";
    image.className = "card__image";
    cardTop.appendChild(image);

    const price = document.createElement("span");
    price.className = "card__price";
    price.textContent = `€${this.product.price.toFixed(2)}`;
    cardTop.appendChild(price);

    card.appendChild(cardTop);

    const cardBody = document.createElement("div");
    cardBody.className = "card__body";

    const title = document.createElement("div");
    title.className = "card__title";
    title.textContent = this.product.name;
    cardBody.appendChild(title);

    const button = document.createElement("button");
    button.type = "button";
    button.className = "card__button";

    const icon = document.createElement("img");
    icon.src = "/assets/images/icons/plus-icon.svg";
    icon.alt = "icon";
    button.appendChild(icon);

    cardBody.appendChild(button);
    card.appendChild(cardBody);

    return card;
  }

  onAddButtonClick() {
    const event = new CustomEvent("product-add", {
      detail: this.product.id,
      bubbles: true,
    });
    this.elem.dispatchEvent(event);
  }
}
