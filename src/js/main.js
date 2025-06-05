import '../scss/style.scss';
import { dropdownMenu } from './dropdown.js';
import { galleryHandler } from './gallery.js';
import { accordionComponent } from './accordion.js';
import { testimonialSlider } from './testimonial.js';
import { productsComponent } from './products.js';
import { newsletterComponent } from './newsletter.js';
import { cartHandler, cartBadge } from './cart.js';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

window.dropdownMenu = dropdownMenu;
window.galleryHandler = galleryHandler;

Alpine.data('productsComponent', productsComponent);
Alpine.data('testimonialSlider', testimonialSlider);
Alpine.data('accordionComponent', accordionComponent);
Alpine.data('newsletterComponent', newsletterComponent);
Alpine.data('cartHandler', cartHandler);
Alpine.data('cartBadge', cartBadge);

Alpine.start();
