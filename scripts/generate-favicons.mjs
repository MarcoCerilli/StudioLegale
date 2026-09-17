import sharp from 'sharp';
import { execSync } from 'child_process';
import fs from 'fs';

const input = 'public/images/logo-fusco.png';
const sizes = [48, 96, 144, 192, 512];

async function run() {
  console.log('Generating PNG favicons...');
  for (const size of sizes) {
    await sharp(input)
      .resize({
        width: size,
        height: size,
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .toFile(`public/favicon-${size}x${size}.png`);
  }

  console.log('Generating Apple Touch Icon...');
  // 180x180 is the standard size for Apple Touch Icon
  await sharp(input)
    .resize({
      width: 160, // slight padding
      height: 160,
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 1 } // White background is safer for Apple
    })
    .extend({
      top: 10, bottom: 10, left: 10, right: 10,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    })
    .toFile('public/apple-touch-icon.png');

  console.log('Generating ICO favicon...');
  await sharp(input)
    .resize({
        width: 32,
        height: 32,
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .toFile('public/favicon-32x32.png');
    
  execSync('npx -y png-to-ico public/favicon-32x32.png > public/favicon.ico', { stdio: 'inherit' });
  fs.unlinkSync('public/favicon-32x32.png');
  
  if (fs.existsSync('test.ico')) {
    fs.unlinkSync('test.ico');
  }
  
  console.log('Successfully generated all favicons.');
}

run().catch(console.error);
