import { Application } from "./modules/Application";
import { FrameLoader } from "./modules/FrameLoader";
import { FrameRenderer } from "./modules/FrameRenderer";
import { SoundPlayer } from "./modules/SoundPlayer";
import { 
  ALPHABET, 
  FILE_FORMAT,
  FRAME_DIR,
  FRAME_RATE,
  SOUND_FILE,
  VIEWPORT_HEIGHT,
  VIEWPORT_WIDTH
} from "./utils/config";

// start app
(async () => {
  const frameProvider = new FrameLoader(FRAME_DIR, FILE_FORMAT);
  const frames = await frameProvider.loadFrames();
  const frameRenderer = new FrameRenderer(
    frames,
    VIEWPORT_WIDTH,
    VIEWPORT_HEIGHT,
    ALPHABET,
    FRAME_RATE
  );
  const soundPlayer = new SoundPlayer(SOUND_FILE);
  const app = new Application(frameProvider, frameRenderer, soundPlayer);
  
  await app.run();
})();
