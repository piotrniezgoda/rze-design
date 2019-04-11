import 'particles.js/particles';
import { config } from './particles_config';

const particlesJS = window.particlesJS;
if (window.matchMedia('(min-width: 650px)').matches) {
  particlesJS('particles-js', config);
}
