const fs = require("fs-extra");
const path = require("path");

const BASE_DIR = path.join(__dirname, "../../");
const SRC_FRAMES = path.join(BASE_DIR, "frames");
const DEST_FRAMES = path.join(BASE_DIR, "dist/frames");
const SRC_SOUND = path.join(BASE_DIR, "sound.mp3");
const DEST_SOUND = path.join(BASE_DIR, "dist/sound.mp3");
const LOG_SUCCESS_FRAMES = '[LOG]: "Frames copied to dist." status OK';
const LOG_ERROR_FRAMES = '[LOG]: "Frames folder not found." status ERROR';
const LOG_SUCCESS_SOUND = '[LOG]: "Sound file copied to dist." status OK';
const LOG_ERROR_SOUND = '[LOG]: "Sound file not found." status ERROR';

const copyFiles = async () => {
  try {
    // Копируем кадры
    if (fs.existsSync(SRC_FRAMES)) {
      await fs.copy(SRC_FRAMES, DEST_FRAMES);
      console.log(LOG_SUCCESS_FRAMES);
    } else console.warn(LOG_ERROR_FRAMES);

    // Копируем звук
    if (fs.existsSync(SRC_SOUND)) {
      await fs.copy(SRC_SOUND, DEST_SOUND);
      console.log(LOG_SUCCESS_SOUND);
    } else console.warn(LOG_ERROR_SOUND);
  } catch (err) {
    console.error(`[LOG]: "File copy error: ${err.message}" status ERROR`);
  }
};

copyFiles();
