export default () => {


  const boxConfig = {
    boxHandler: document.querySelector('#settingsBoxHandler'),
    settingsBox: document.querySelector('#settingsBox'),
    changeSizeBtn: document.querySelector('#changeSizeBtn'),
    showClass: 'header-settingsBox--show',
    startFontLevelSize: 1,
    documentHTML: document.documentElement,
    fontInfoElement: document.querySelector('#font-actualLevel'),
  };


  function toggleSettingsBox() {
    boxConfig.settingsBox.classList.toggle(boxConfig.showClass);

    if(!boxConfig.settingsBox.classList.contains(boxConfig.showClass)) {
      boxConfig.changeSizeBtn.setAttribute('tabindex', '-1');
    } else {
      boxConfig.changeSizeBtn.setAttribute('tabindex', '0');
    }
  }

  function changeFontSize(fontLevel) {
    switch (fontLevel) {
      case 1:
        if (boxConfig.documentHTML.classList.contains('font-size-x3')) {
          boxConfig.documentHTML.classList.remove('font-size-x3');
        }
        boxConfig.documentHTML.classList.add('font-size-x1');
        break;
      case 2:
        if (boxConfig.documentHTML.classList.contains('font-size-x1')) {
          boxConfig.documentHTML.classList.remove('font-size-x1');
        }
        boxConfig.documentHTML.classList.add('font-size-x2');
        break;
      case 3:
        if (boxConfig.documentHTML.classList.contains('font-size-x2')) {
          boxConfig.documentHTML.classList.remove('font-size-x2');
        }
        boxConfig.documentHTML.classList.add('font-size-x3');
        break;
      default:
        boxConfig.documentHTML.classList.add('font-size-x1');
    }
  }

  function updateFontInfo(fontLevel) {
    boxConfig.fontInfoElement.textContent = `aktualny rozmiar: ${fontLevel}`;
  }

  boxConfig.boxHandler.addEventListener('click', toggleSettingsBox);
  boxConfig.changeSizeBtn.addEventListener('click', () => {
    if (boxConfig.startFontLevelSize >= 3) {
      boxConfig.startFontLevelSize = 0;
    }
    boxConfig.startFontLevelSize += 1;
    const actualfontLevel = boxConfig.startFontLevelSize;
    changeFontSize(actualfontLevel);
    updateFontInfo(actualfontLevel);
  });
};
