// cart.js
export function cartHandler() {
  return {
    quantity: 1,
    cartCount: Number(localStorage.getItem('cartCount')) || 0,

    increase() {
      this.quantity++;
    },

    decrease() {
      if (this.quantity > 1) this.quantity--;
    },

    addToCart() {
      this.cartCount += this.quantity;
      localStorage.setItem('cartCount', this.cartCount);
      window.dispatchEvent(new CustomEvent('cart-updated', { detail: this.cartCount }));
    },
  };
}

export function cartBadge() {
  return {
    cartCount: Number(localStorage.getItem('cartCount')) || 0,

    init() {
      window.addEventListener('cart-updated', (e) => {
        this.cartCount = e.detail;
      });
    },
  };
}
