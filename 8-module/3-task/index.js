export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  addProduct(product) {
    if (!product) return; // Проверка на наличие аргумента product
    let cartItem = this.cartItems.find(
      (item) => item.product.id === product.id
    );
    if (cartItem) {
      cartItem.count++;
    } else {
      this.cartItems.push({ product: product, count: 1 });
    }
    this.onProductUpdate(cartItem);
  }

  updateProductCount(productId, amount) {
    let cartItem = this.cartItems.find((item) => item.product.id === productId);
    if (!cartItem) return;

    cartItem.count += amount;
    if (cartItem.count <= 0) {
      this.cartItems.splice(this.cartItems.indexOf(cartItem), 1);
    }
    this.onProductUpdate(cartItem);
  }

  isEmpty() {
    return this.cartItems.length === 0;
  }

  getTotalCount() {
    return this.cartItems.reduce(
      (totalCount, cartItem) => totalCount + cartItem.count,
      0
    );
  }

  getTotalPrice() {
    return this.cartItems.reduce(
      (totalPrice, cartItem) =>
        totalPrice + cartItem.product.price * cartItem.count,
      0
    );
  }

  onProductUpdate(cartItem) {
    this.cartIcon.update(this);
  }
}

