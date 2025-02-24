import path from "path";

// @ts-ignore
import ascii from "ascii-art";
import { 
  FRAME_DIR,
} from "../utils/config";
import { EnumError } from "../utils/conditionApp";
import { Frame } from "../types";

export interface IRenderable {
  frames: string[];
  display(): void;
}

// класс для рендеринга кадров
export class FrameRenderer implements IRenderable {
  private currentFrame = 0;

  constructor(
    public frames: string[],
    private readonly width: number,
    private readonly height: number,
    private readonly alphabet: string,
    private readonly frameRate: number,
  ) {}

  async display(): Promise<void> {
    if (!this.frames.length) throw new Error(EnumError.frameNull);

    const filePath = path.join(FRAME_DIR, this.frames[this.currentFrame]);
    try {
      const frame = await ascii.image({
        filepath: filePath,
        width: this.width,
        height: this.height,
        alphabet: this.alphabet,
      });

      console.clear();
      console.log(frame);
      this.currentFrame = (this.currentFrame + 1) % this.frames.length;
      setTimeout(() => this.display(), 1000 / this.frameRate);
    } catch {
      throw new Error(EnumError.generationFrame);
    }
  }

  setFrames(frames: string[]): void {
    this.frames = frames;
  }

  getFrames(): string[] {
    return this.frames;
  }
}
