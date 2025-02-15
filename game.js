function initializeGame() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Game initialized successfully!");
        resolve();
      }, 2000);
    });
  }