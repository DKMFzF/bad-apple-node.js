const fs = require("fs");
const path = require("path");
const ascii = require("ascii-art");
const player = require("play-sound")();

const FILES = fs.readdirSync(FRAME_DIR).filter(file => file.endsWith(FILE_FORMAT)).sort();
let iter = 0;

const play = () => {
  if (i >= files.length) i = 0;

  const filePath = path.join(FRAME_DIR, files[i]);

  ascii.image({
    filepath: filePath,
    width: 120,
    height: 40,
    alphabet: "variant4"
  }).then((frame) => {
    console.clear();
    console.log(frame);
    i++;
    setTimeout(play, FRAME_DELAY);
  });
};

play();