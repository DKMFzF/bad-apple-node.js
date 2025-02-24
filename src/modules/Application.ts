import { EnumError } from "../utils/conditionApp";
import { IFrameProvider } from "../modules/FrameLoader";
import { IRenderable } from "../modules/FrameRenderer";
import { IPlayable } from "../modules/SoundPlayer";

// коскад для приложения
export class Application {
  constructor(
    private readonly frameProvider: IFrameProvider,
    private readonly frameRenderer: IRenderable,
    private readonly soundPlayer: IPlayable
  ) {}

  async run(): Promise<void> {
    try {
      const frames = await this.frameProvider.loadFrames();
      (this.frameRenderer).frames = frames;
      await this.soundPlayer.play();
      this.frameRenderer.display();
    } catch (error) {
      console.error(EnumError.start, error);
    }
  }
}
