import dotenv from "dotenv";

dotenv.config();

// app
export const FRAME_RATE = parseInt(process.env.FRAME_RATE || "200", 10);
export const VIEWPORT_WIDTH = parseInt(process.env.VIEWPORT_WIDTH || "80", 10);
export const VIEWPORT_HEIGHT = parseInt(process.env.VIEWPORT_HEIGHT || "60", 10);
export const ALPHABET = process.env.ALPHABET || "variant4";
export const FILE_FORMAT = process.env.FILE_FORMAT || "png";
export const SOUND_FILE = process.env.SOUND_FILE || "./sound.mp3";
export const FRAME_DIR = process.env.FRAME_DIR || "./frames";

// static
export const pathSrcFrames = "../../frames";
export const pathSrcSound = "../../sound.mp3";
export const pathDestFrames = "../../dist/frames";
export const pathDestSound = "../../dist/sound.mp3";
