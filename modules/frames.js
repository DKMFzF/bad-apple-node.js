const fs = require("fs").promises;
const path = require("path");
const ascii = require("ascii-art");
const { 
  FRAME_DIR, 
  FILE_FORMAT, 
  VIEWPORT_WIDTH, 
  VIEWPORT_HEIGHT, 
  ALPHABET, 
  FRAME_RATE 
} = require("./config");

let iter = 0;
let frames = [];

// функция подгрузки кадров
const loadFrames = async () => {
  try {
    const files = await fs.readdir(FRAME_DIR);
    frames = files.filter(file => file.endsWith(FILE_FORMAT)).sort();
    if (frames.length === 0) throw new Error("Фреймы не найдены!");
    console.log(`Загружено ${frames.length} кадров.`);
  } catch (error) {
    console.error("Ошибка загрузки кадров:", error);
    process.exit(1);
  }
};

// функция обработки кадров
const showFrame = async () => {
  if (iter >= frames.length) iter = 0;
  const filePath = path.join(FRAME_DIR, frames[iter]);

  try {
    const frame = await ascii.image({
      filepath: filePath,
      width: VIEWPORT_WIDTH,
      height: VIEWPORT_HEIGHT,
      alphabet: ALPHABET,
    });
    
    console.clear();
    console.log(frame);
    iter++;
    setTimeout(showFrame, 1000 / FRAME_RATE);
  } catch (error) {
    throw new Error("Ошибка обработки кадра:", error);
  }
};

module.exports = { loadFrames, showFrame };
