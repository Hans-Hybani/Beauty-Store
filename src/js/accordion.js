export function accordionComponent() {
  return {
    sections: [],
    openSection: null,

    async fetchContent() {
      try {
        const response = await fetch('/data/accordion.json');
        this.sections = await response.json();
      } catch (error) {
        console.error('Erreur de chargement du contenu :', error);
      }
    },

    toggle(id) {
      this.openSection = this.openSection === id ? null : id;
    },
  };
}
