const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

let fileCount = 0;

['src/app', 'src/components'].forEach(targetDir => {
  const fullPath = path.resolve(targetDir);
  if (fs.existsSync(fullPath)) {
    walkDir(fullPath, filePath => {
      if (filePath.endsWith('.tsx')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let original = content;

        // Replace any dull/dim text opacities (text-white/50, text-white/55, text-white/60, text-white/65) in paragraph/descriptions with text-white/75 for crisp readability
        content = content.replace(/text-white\/50\b/g, 'text-white/75');
        content = content.replace(/text-white\/55\b/g, 'text-white/75');
        content = content.replace(/text-white\/60\b/g, 'text-white/75');
        content = content.replace(/text-white\/65\b/g, 'text-white/75');

        // Ensure gold eyebrow tracking is uppercase & font-bold with text-[#D4AF37]
        content = content.replace(/text-gold\b/g, 'text-[#D4AF37]');
        content = content.replace(/text-gold-soft\b/g, 'text-[#FFD700]');

        if (content !== original) {
          fs.writeFileSync(filePath, content, 'utf8');
          console.log(`Standardized typography in: ${path.relative(process.cwd(), filePath)}`);
          fileCount++;
        }
      }
    });
  }
});

console.log(`Total files updated for typography & text color consistency: ${fileCount}`);
