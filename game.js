function movePlayer(direction) {
    return new Promise((resolve, reject) => {
      console.log(`Moving player ${direction}...`);
      setTimeout(() => {
        console.log(`Player moved ${direction}`);
        resolve();
      }, 500);
    });
  }
  function initializeGame() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Game initialized successfully!");
        resolve();
      }, 2000);
    });
  }
  function calculateScore(events, playerData) {
    return new Promise((resolve) => {
        // Simulate an asynchronous scoring process with a 2-second delay
        setTimeout(() => {
            // Simple scoring logic: sum of event points multiplied by player multiplier
            const score = events.reduce((total, event) => total + event.points, 0) * playerData.multiplier;

            // Log the calculated score
            console.log(`Calculated Score: ${score}`);

            // Resolve the Promise with the calculated score
            resolve(score);
        }, 2000); // 2-second delay
    });
}
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

