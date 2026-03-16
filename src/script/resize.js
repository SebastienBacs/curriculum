import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const files = [
  { folder: 'me', name: '4.png', output: 'opt_4-desktop.webp', x: 400, y: 600, quality: 100 },
  { folder: 'me', name: '4.png', output: 'opt_4-retina.webp', x: 300, y: 450, quality: 40 },
  { folder: 'me', name: '4.png', output: 'opt_4-mobile.webp', x: 200, y: 300, quality: 40 },
  { folder: 'about', name: 'seb.jpg', output: 'opt_seb.webp', x: 210, y: 210, quality: 80 },
  { folder: 'about', name: 'seb.jpg', output: 'opt_seb-mobile.webp', x: 180, y: 180, quality: 80 },
  { folder: '', name: 'background.png', output: 'opt_background.webp', x: 1670, y: 911, quality: 100 },
  { folder: '', name: 'background-mobile.png', output: 'opt_background-mobile.webp', x: 433, y: 823, quality: 100 },
  // { name: 'intro.webp', format: 500, quality: 100 },
  // { name: 'intro_computer.webp', format: 500, quality: 100 },
  // { name: 'intro_phone.webp', format: 500, quality: 100 },
  // { name: 'intro_kiosk.webp', format: 500, quality: 100 },
  // { name: 'intro_tablet.webp', format: 500, quality: 100 }
];
const inputPath = resolve(__dirname, `../../public/assets/`);
const outputPath = resolve(__dirname, `../../public/assets/`);

async function resize(file) {
  try {
    const fileInputPath = inputPath + '\\' + file.folder + '\\' + file.name;
    //const fileOutputPath = outputPath + file.name;
    const fileOutputPath = outputPath + '\\' + file.folder + '\\' + file.output;

    await sharp(fileInputPath)
      .resize(file.x, file.y)
      .toFormat('webp', { quality: file.quality })
      .toFile(fileOutputPath);

    console.log('✅ Done:', fileOutputPath);
  } catch (err) {
    console.error('❌ Sharp error:', err);
  }
}

console.log('Resizing...');

for (let i = 0; i < files.length; i++) {
  resize(files[i]);
}
