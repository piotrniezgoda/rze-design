import particles from 'particles.js';
import { config } from './particles_config';


if (window.matchMedia('(min-width: 650px)').matches) {
  particles.particlesJS('particles-js', config);
}
