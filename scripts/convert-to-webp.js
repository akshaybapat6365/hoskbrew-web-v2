const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = "./public/assets/images/offerings/crystal-mines";
const outputDir = "./public/assets/images/offerings/crystal-mines";

async function convertImages() {
  const files = fs.readdirSync(inputDir).filter((f) => f.endsWith(".png"));

  console.log(`Found ${files.length} PNG files to convert`);

  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputFile = file.replace(".png", ".webp");
    const outputPath = path.join(outputDir, outputFile);

    try {
      await sharp(inputPath)
        .webp({
          quality: 85,
          effort: 6,
          lossless: false,
        })
        .toFile(outputPath);

      const originalSize = fs.statSync(inputPath).size;
      const newSize = fs.statSync(outputPath).size;
      const savings = ((1 - newSize / originalSize) * 100).toFixed(1);

      console.log(
        `${file} → ${outputFile}: ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(newSize / 1024 / 1024).toFixed(2)}MB (${savings}% smaller)`,
      );
    } catch (err) {
      console.error(`Failed to convert ${file}:`, err.message);
    }
  }

  console.log("\nConversion complete!");
}

convertImages();
