export function dropdownMenu() {
    return {
      open: false,
      toggleMenu() {
        this.open = !this.open;
      },
      closeMenu() {
        this.open = false;
      }
    };
  }
  