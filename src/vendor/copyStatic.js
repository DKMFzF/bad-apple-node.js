const fs = require("fs-extra");
const path = require("path");

const copyFiles = async () => {
  try {
    const srcFrames = path.join(__dirname, "../../frames");
    const destFrames = path.join(__dirname, "../../dist/frames");

    const srcSound = path.join(__dirname, "../../sound.mp3");
    const destSound = path.join(__dirname, "../../dist/sound.mp3");

    // Копируем кадры
    if (fs.existsSync(srcFrames)) {
      await fs.copy(srcFrames, destFrames);
      console.log("✅ Кадры скопированы в dist.");
    } else {
      console.warn("⚠️ Папка frames не найдена.");
    }

    // Копируем звук
    if (fs.existsSync(srcSound)) {
      await fs.copy(srcSound, destSound);
      console.log("✅ Файл звука скопирован в dist.");
    } else {
      console.warn("⚠️ Файл sound.mp3 не найден.");
    }
  } catch (err) {
    console.error("❌ Ошибка копирования файлов:", err);
  }
};

copyFiles();
