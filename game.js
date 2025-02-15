function checkGameOver() {
    return new Promise((resolve, reject) => {
      console.log('Checking if game is over...');
      setTimeout(() => {
        const gameOver = Math.random() > 0.5; 
        if (gameOver) {
          console.log('Game over!');
          resolve(true);
        } else {
          console.log('Continue playing.');
          resolve(false);
        }
      }, 700);   });
  }