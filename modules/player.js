const player = require("play-sound")();
const { SOUND_FILE } = require("./config");

const playSound = () => {
  return new Promise((resolve, reject) => {
    player.play(SOUND_FILE, (err) => {
      if (err) {
        console.error("Ошибка воспроизведения звука:", err);
        reject(err);
      } else {
        resolve();
      }
    });
  });
};



module.exports = playSound;