import particles from 'particles.js';
import { config } from './particles_config.js'
import settingsBox from './settingsBox_module';


require('../../index.html');
require('../scss/style.scss');


settingsBox();


// eslint-disable-next-line no-undef



if (window.matchMedia('(min-width: 650px)').matches) {
  particles.particlesJS('particles-js', config);
}