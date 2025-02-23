const player = require("play-sound")();
const { SOUND_FILE } = require("./config");

// функция воспроизведения звука 
const playSound = () => {
  return new Promise((resolve, reject) => {
    player.play(SOUND_FILE, (err) => {
      if (err) {
        reject(err);
        throw new Error("Ошибка воспроизведения звука:", err);
      } else resolve();
    });
  });
};

module.exports = playSound;
