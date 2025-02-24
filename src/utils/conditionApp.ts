// все ошибки
export enum EnumError {
  start = "[ERROR]: error loading data ",
  loadSound = "[ERROR]: error in loads sound",
  frameNull = "[ERROR]: frame null",
  loadsFrames = "[ERROR]: error loading frames",
  generationFrame = "[ERROR]: error generation frame",
}

// все логи
export enum EnumLog {
  staticFrames = "[LOG]: static frames:",
  staticSound = "[LOG]: static sound:",
  staticData = "[LOG]: static data:",
  loadsFrames = "[LOG]: loads frames: ",
}
