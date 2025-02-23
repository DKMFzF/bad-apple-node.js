const { loadFrames, showFrame } = require("./modules/frames");
const playSound = require("./modules/player");

// Стартуем. Я СКАЗАЛ СТАРТУЕМ!
(async () => {
  await loadFrames();
  await playSound();
  showFrame();
})();
