window.onload = () => {
  let game = new Game('container');
  window.addEventListener('resize', () => game.resize());
  window.addEventListener('keypress', (event) => {
    event.preventDefault();
    if (event.key === 'Enter') {
      game.start();
    } else if (event.key === 'ArrowLeft') {
      game.cat.direction = -1;
    } else if (event.key === 'ArrowDown') {
      game.cat.direction = 0;
    } else if (event.key === 'ArrowRight') {
      game.cat.direction = 1;
    } else if (event.key === 'ArrowUp') {
      if (!game.cat.isJumping) {
        game.cat.jump();
      }
    }
  });
};
