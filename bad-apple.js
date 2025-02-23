const { loadFrames, showFrame } = require("./modules/frames");
const playSound = require("./modules/player");

// Делаем Бада-Бумчик
(async () => {
  await Promise.all([
    loadFrames(), 
    playSound()
  ]);
  showFrame();
})();
