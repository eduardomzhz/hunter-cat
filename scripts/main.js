window.onload = () => {
  var game = new Game('container');
  window.addEventListener('resize', () => game.resize());
  window.addEventListener('keypress', () => game.start());
};
