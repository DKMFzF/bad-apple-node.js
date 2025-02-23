require("dotenv").config();

module.exports = {
  FRAME_RATE: parseInt(process.env.FRAME_RATE) || 143,
  VIEWPORT_WIDTH: parseInt(process.env.VIEWPORT_WIDTH) || 200,
  VIEWPORT_HEIGHT: parseInt(process.env.VIEWPORT_HEIGHT) || 200,
  ALPHABET: process.env.ALPHABET || "variant4",
  FILE_FORMAT: process.env.FILE_FORMAT || "png",
  SOUND_FILE: process.env.SOUND_FILE || "./sound.mp3",
  FRAME_DIR: process.env.FRAME_DIR || "./frames",
};
