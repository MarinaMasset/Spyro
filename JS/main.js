function TurnOnDarkMode() {
  const button = document.querySelector('.lightBulb');
  var element = document.body;

  button.addEventListener('click', event => {
    element.classList.toggle("dark-mode");
  });
}

TurnOnDarkMode();

const pickr = Pickr.create({
  el: '.color-picker',
  theme: 'classic',
  default: '#ffffff',

  swatches: [
      '#333333',
      '#BF1212'
  ],

  components: {

      // Main components
      preview: true,
      opacity: true,
      hue: true,

      // Input / output Options
      interaction: {
          hex: true,
          rgba: true,
          input: true,
          clear: true,
          save: true
      }
  }
});

pickr.on('change', (color) => {
  const rgbaColor = color.toRGBA().toString()
  document.querySelector('body').style.background = rgbaColor;
});
