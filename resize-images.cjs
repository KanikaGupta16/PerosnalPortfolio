const sharp = require('sharp');
const path = require('path');

async function resizeImages() {
  const images = ['bg4.png', 'bg5.png'];
  const targetWidth = 1920;
  const targetHeight = 1080;

  for (const imageName of images) {
    const inputPath = path.join(__dirname, 'public', 'images', imageName);
    const outputPath = path.join(__dirname, 'public', 'images', `resized_${imageName}`);
    
    try {
      await sharp(inputPath)
        .resize(targetWidth, targetHeight, {
          fit: 'cover',
          position: 'center'
        })
        .png({ quality: 90 })
        .toFile(outputPath);
      
      console.log(`✅ Resized ${imageName} to ${targetWidth}x${targetHeight}`);
    } catch (error) {
      console.error(`❌ Error resizing ${imageName}:`, error.message);
    }
  }
}

resizeImages(); 