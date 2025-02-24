import fs from "fs/promises";
import { EnumError, EnumLog } from "../utils/conditionApp";

export interface IFrameProvider {
  loadFrames(): Promise<string[]>;
}

// загрузка кадров
export class FrameLoader implements IFrameProvider {
  constructor(private readonly directory: string, private readonly format: string) {}

  async loadFrames(): Promise<string[]> {
    try {
      const files = await fs.readdir(this.directory);
      const frames = files.filter(file => file.endsWith(`.${this.format}`)).sort();
      
      if (!frames.length) throw new Error(EnumError.frameNull);
      console.log(EnumLog.loadsFrames, frames.length);
      
      return frames;
    } catch (error) {
      throw new Error(EnumError.loadsFrames);
    }
  }
}
