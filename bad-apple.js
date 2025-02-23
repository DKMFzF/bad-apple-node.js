const { loadFrames, showFrame } = require("./modules/frames");
const playSound = require("./modules/player");

// запуск программы
(async () => {
  await loadFrames();
  await playSound();
  showFrame();
})();
