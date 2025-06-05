export function testimonialSlider() {
  return {
    testimonials: [],
    current: 0,
    interval: null,

    async fetchTestimonials() {
      try {
        const res = await fetch('/data/testimonial.json');
        this.testimonials = await res.json();
        this.startSlider();
      } catch (error) {
        console.error("Erreur de chargement des témoignages :", error);
      }
    },

    startSlider() {
      this.interval = setInterval(() => {
        this.current = (this.current + 1) % this.testimonials.length;
      }, 5000);
    },

    goTo(index) {
      this.current = index;
      clearInterval(this.interval);
      this.startSlider();
    },

    init() {
      this.fetchTestimonials();
    }
  };
}