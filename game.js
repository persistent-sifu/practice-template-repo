






























function movePlayer(direction) {
    return new Promise((resolve, reject) => {
      console.log(`Moving player ${direction}...`);
      setTimeout(() => {
        console.log(`Player moved ${direction}`);
        resolve();
      }, 500);
    });
  }
  