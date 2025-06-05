<!-- Structure du projet -->
📦 public/
├── data/
│   ├── accordion.json       # Contenu 
│   ├── products.json        # Liste des produits
│   └── testimonials.json    # Témoignages clients           
├── resources

src/
├── js/
│   ├── accordion.js         # Composant FAQ dynamique
│   ├── cart.js              # Système de panier (localStorage + badge)
│   ├── dropdownMenu.js      # Menu déroulant responsive
│   ├── gallery.js           # Galerie d’images avec zoom
│   ├── main.js              
│   ├── newsletter.js        # Formulaire d’inscription avec validation
│   ├── products.js          # Rendu dynamique de produits depuis JSON
│   ├── testimonials.js      # Slider automatique avec puces
├── scss/
│   └── style.scss           # Styles personnalisés
├── index.html               # Page principale HTML
└── vite.config.js           # Configuration Vite

Lancement du projet

Prérequis
- Node.js >= 18
- NPM ou Yarn

Installation
- npm install

Démarrage en développement
- npm run dev

Technologies utilisées

Alpine.js – Interactions minimalistes avec x-data, x-show, x-for…
Vite – Serveur de développement ultra rapide
SCSS – Organisation et surcharge de style propre
Bootstrap – Grille et composants de base

