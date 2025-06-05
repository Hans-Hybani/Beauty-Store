export const newsletterComponent = () => ({
  email: '',
  message: '',
  error: false,
  success: false,

  submit() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(this.email)) {
      this.message = 'Merci pour votre inscription !';
      this.success = true;
      this.error = false;
      this.email = '';
    } else {
      this.message = 'Adresse e-mail invalide.';
      this.error = true;
      this.success = false;
    }
  },
});
