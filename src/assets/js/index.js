import settingsBox from './settingsBox_module';
import 'lazyload';

const lazyImages = document.querySelectorAll('.lazy');
lazyload(lazyImages);

require('../../index.html');
require('../../informacje.html');
require('../../prace.html');
require('../scss/style.scss');



settingsBox();
