//@ts-ignore
import player from 'play-sound';
import { EnumError } from '../utils/conditionApp';

export interface IPlayable {
  play(): Promise<void>;
}

// звуковое сопровождение
export class SoundPlayer implements IPlayable {
  constructor(
    private readonly soundFile: string, 
    private readonly playerInstance = player()
  ) {}

  // включение
  public async play(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.playerInstance.play(this.soundFile, (err: Error | null) => {
        if (err) reject(new Error(`${EnumError.loadSound} ${err.message}`));
        else resolve();
      });
    });
  }
}
