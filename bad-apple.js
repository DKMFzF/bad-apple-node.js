const fs = require("fs");
const path = require("path");
const ascii = require("ascii-art");
const player = require("play-sound")();

const FILES = fs.readdirSync(FRAME_DIR).filter(file => file.endsWith(FILE_FORMAT)).sort();
let iter = 0;

const start = (width, height, alphabet) => {
  const filePath = path.join(FRAME_DIR, FILES[iter]);

  ascii
    .image({ filepath: filePath, width: width, height: height, alphabet: alphabet }).then((frame) => {
      console.clear();
      console.log(frame);
      iter++;
      setTimeout(start, FRAME_DELAY);
    });
};

