export function productsComponent() {
  return {
    products: [],
    favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),

    async fetchProducts() {
      const res = await fetch('/data/products.json');
      this.products = await res.json();
    },

    toggleFavorite(id) {
      if (this.favorites.includes(id)) {
        this.favorites = this.favorites.filter((fav) => fav !== id);
      } else {
        this.favorites.push(id);
      }
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    },
  };
}
