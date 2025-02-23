const fs = require("fs");
const path = require("path");
const ascii = require("ascii-art");
const player = require("play-sound")(); // Импортируем play-sound

const FRAME_RATE = 160;
const FRAME_DELAY = 1000 / FRAME_RATE;
const FRAME_DIR = path.join(__dirname, "frames");
const VIEWPORT_WIDTH = 120;
const VIEWPORT_HEIGHT = 40;
const ALPHABET = "variant4";
const FILE_FORMAT = "png";
const SOUND_FILE = path.join(__dirname, "sound.mp3"); // Укажи путь к звуку

const FILES = fs.readdirSync(FRAME_DIR).filter(file => file.endsWith(FILE_FORMAT)).sort();
let iter = 0;

// Функция воспроизведения анимации
const start = (width, height, alphabet) => {
  if (iter >= FILES.length) iter = 0;
  const filePath = path.join(FRAME_DIR, FILES[iter]);

  ascii.image({
    filepath: filePath,
    width: width,
    height: height,
    alphabet: alphabet
  }).then((frame) => {
    console.clear();
    console.log(frame);
    iter++;
    setTimeout(start, FRAME_DELAY);
  });
};

// Запускаем звук при старте
player.play(SOUND_FILE, (err) => {
  if (err) console.error("Ошибка воспроизведения звука:", err);
});

// Запускаем анимацию
start(VIEWPORT_WIDTH, VIEWPORT_HEIGHT, ALPHABET);
