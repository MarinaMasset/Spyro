function TurnOnDarkMode() {
const button = document.querySelector('.lightBulb');
var element = document.body;

button.addEventListener('click', event => {
  element.classList.toggle("dark-mode");
});
  }

  TurnOnDarkMode();