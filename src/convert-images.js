import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = "public/country-map";
const outputDir = "public/country-map-webp";

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}



const files = fs.readdirSync(inputDir);

(async () => {
  for (const file of files) {
    if (!file.endsWith(".png") && !file.endsWith(".png")) continue;

    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(
      outputDir,
      file.replace(/\.(png)$/i, ".webp")
    );

    // Skip if already converted
    if (fs.existsSync(outputPath)) continue;

    await sharp(inputPath)
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(outputPath);

    console.log(`✔ Converted: ${file}`);
  }
})();
