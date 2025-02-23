const fs = require("fs");
const path = require("path");
const ascii = require("ascii-art");
const player = require("play-sound")();

const FRAME_RATE = 143;
const FRAME_DELAY = 1000 / FRAME_RATE;
const FRAME_DIR = path.join(__dirname, "frames");
const VIEWPORT_WIDTH = 200;
const VIEWPORT_HEIGHT = 200;
const ALPHABET = "variant4";
const FILE_FORMAT = "png";
const SOUND_FILE = path.join(__dirname, "sound.mp3");

const FILES = fs.readdirSync(FRAME_DIR).filter(file => file.endsWith(FILE_FORMAT)).sort();
let iter = 0;

const start = (width, height, alphabet) => {
  if (iter >= FILES.length) iter = 0;
  const filePath = path.join(FRAME_DIR, FILES[iter]);
  if (!filePath) throw new Error("нету файла с фреймами (или он повреждён):", filePath);

  ascii
    .image({
      filepath: filePath,
      width: width,
      height: height,
      alphabet: alphabet
    })
    .then((frame) => {
      console.clear();
      console.log(frame);
      iter++;
      setTimeout(start, FRAME_DELAY);
    });
};

player.play(SOUND_FILE, (err) => {
  if (err) throw new Error("ошибка в звуке:", err);
  start(VIEWPORT_WIDTH, VIEWPORT_HEIGHT, ALPHABET);
});
