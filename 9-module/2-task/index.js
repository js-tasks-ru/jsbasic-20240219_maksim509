// import Carousel from '../../6-module/3-task/index.js';
// import slides from '../../6-module/3-task/slides.js';

// import RibbonMenu from '../../7-module/1-task/index.js';
// import categories from '../../7-module/1-task/categories.js';

// import StepSlider from '../../7-module/4-task/index.js';
// import ProductsGrid from '../../8-module/2-task/index.js';

// import CartIcon from '../../8-module/1-task/index.js';
// import Cart from '../../8-module/4-task/index.js';

// export default class Main {

//   constructor() {
//   }

//   async render() {
//     // ... ваш код
//   }
// }

import Carousel from "../../6-module/3-task/index.js";
import slides from "../../6-module/3-task/slides.js";

import RibbonMenu from "../../7-module/1-task/index.js";
import categories from "../../7-module/1-task/categories.js";

import StepSlider from "../../7-module/4-task/index.js";
import ProductsGrid from "../../8-module/2-task/index.js";

import CartIcon from "../../8-module/1-task/index.js";
import Cart from "../../8-module/4-task/index.js";

export default class Main {
  constructor() {}

  async render() {
    const carousel = new Carousel(slides);
    document.querySelector("[data-carousel-holder]").append(carousel.elem);

    const ribbonMenu = new RibbonMenu(categories);
    document.querySelector("[data-ribbon-holder]").append(ribbonMenu.elem);

    const stepSlider = new StepSlider({ steps: 5, value: 3 });
    document.querySelector("[data-slider-holder]").append(stepSlider.elem);

    const cartIcon = new CartIcon();
    document.querySelector("[data-cart-icon-holder]").append(cartIcon.elem);

    const cart = new Cart(cartIcon);

    const response = await fetch("products.json");
    const products = await response.json();
    const productsGrid = new ProductsGrid(products);
    document.querySelector("[data-products-grid-holder]").innerHTML = "";
    document
      .querySelector("[data-products-grid-holder]")
      .append(productsGrid.elem);

    this.productsGrid = productsGrid;
    this.stepSlider = stepSlider;
    this.ribbonMenu = ribbonMenu;

    document.body.addEventListener("product-add", (event) => {
      const productId = event.detail;
      const product = products.find((item) => item.id === productId);
      if (product) {
        cart.addProduct(product);
      }
    });

    document.body.addEventListener("slider-change", (event) => {
      const value = event.detail;
      this.productsGrid.updateFilter({
        maxSpiciness: value,
      });
    });

    document.body.addEventListener("ribbon-select", (event) => {
      const categoryId = event.detail;
      this.productsGrid.updateFilter({
        category: categoryId,
      });
    });

    document
      .getElementById("nuts-checkbox")
      .addEventListener("change", (event) => {
        const checked = event.target.checked;
        this.productsGrid.updateFilter({
          noNuts: checked,
        });
      });

    document
      .getElementById("vegeterian-checkbox")
      .addEventListener("change", (event) => {
        const checked = event.target.checked;
        this.productsGrid.updateFilter({
          vegeterianOnly: checked,
        });
      });
  }
}
