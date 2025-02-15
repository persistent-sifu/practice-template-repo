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