// import createElement from '../../assets/lib/create-element.js';
// import ProductCard from '../../6-module/2-task/index.js';

// export default class ProductGrid {
//   constructor(products) {
//     this.products = products;
//     this.filters = {};
//   }
// }

import createElement from "../../assets/lib/create-element.js";
import ProductCard from "../../6-module/2-task/index.js";

export default class ProductGrid {
  constructor(products) {
    this.products = products;
    this.filters = {};
    this.render();
  }

  render() {
    this.elem = createElement(`
      <div class="products-grid">
        <div class="products-grid__inner">
          <!-- В этом месте будут отрисованы карточки товаров -->
        </div>
      </div>
    `);

    this.products.forEach((product) => {
      const productCard = new ProductCard(product);
      this.elem
        .querySelector(".products-grid__inner")
        .appendChild(productCard.elem);
    });
  }

  updateFilter(filters) {
    Object.assign(this.filters, filters);
    const filteredProducts = this.filterProducts();
    this.updateGrid(filteredProducts);
  }

  filterProducts() {
    return this.products.filter((product) => {
      return Object.keys(this.filters).every((filter) => {
        if (filter === "noNuts") {
          return !product.nuts;
        } else if (filter === "vegeterianOnly") {
          return product.vegeterian;
        } else if (filter === "maxSpiciness") {
          return product.spiciness <= this.filters.maxSpiciness;
        } else if (filter === "category") {
          return product.category === this.filters.category;
        }
        return true;
      });
    });
  }

  updateGrid(filteredProducts) {
    const gridInner = this.elem.querySelector(".products-grid__inner");
    gridInner.innerHTML = "";
    filteredProducts.forEach((product) => {
      const productCard = new ProductCard(product);
      gridInner.appendChild(productCard.elem);
    });
  }
}
