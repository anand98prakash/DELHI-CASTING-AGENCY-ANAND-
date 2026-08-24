const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

const replacements = [
  // Backgrounds
  { from: /bg-\[#F5F2EA\]/g, to: 'bg-[#090909]' },
  { from: /bg-\[#EFECE4\]/g, to: 'bg-[#121212]' },
  { from: /bg-\[#F6F3ED\]/g, to: 'bg-[#0E0E0E]' },
  { from: /bg-paper/g, to: 'bg-[#090909]' },
  { from: /bg-cream/g, to: 'bg-[#0E0E0E]' },
  { from: /bg-beige/g, to: 'bg-[#121212]' },
  { from: /bg-stone-50/g, to: 'bg-[#090909]' },
  { from: /bg-stone-100/g, to: 'bg-[#0E0E0E]' },

  // Borders
  { from: /border-\[#E2DDD3\]/g, to: 'border-white/10' },
  { from: /border-stone-200/g, to: 'border-white/10' },
  { from: /border-stone-300/g, to: 'border-white/15' },

  // Text
  { from: /text-\[#171717\]/g, to: 'text-white' },
  { from: /text-\[#171717\]\/75/g, to: 'text-white/75' },
  { from: /text-\[#171717\]\/70/g, to: 'text-white/70' },
  { from: /text-\[#171717\]\/60/g, to: 'text-white/60' },
  { from: /text-\[#171717\]\/50/g, to: 'text-white/50' },
  { from: /text-\[#171717\]\/40/g, to: 'text-white/40' },
  { from: /text-stone-900/g, to: 'text-white' },
  { from: /text-stone-800/g, to: 'text-white/90' },
  { from: /text-stone-700/g, to: 'text-white/80' },
  { from: /text-stone-600/g, to: 'text-white/60' },

  // Gold Accents
  { from: /text-\[#C5A059\]/g, to: 'text-[#D4AF37]' },
  { from: /border-\[#C5A059\]/g, to: 'border-[#D4AF37]' },
  { from: /bg-\[#C5A059\]/g, to: 'bg-[#D4AF37]' },
  { from: /hover:bg-\[#C5A059\]/g, to: 'hover:bg-[#D4AF37]' },
  { from: /hover:border-\[#C5A059\]/g, to: 'hover:border-[#D4AF37]' },
  { from: /bg-gold/g, to: 'bg-[#D4AF37]' },
  { from: /text-gold/g, to: 'text-[#D4AF37]' },
];

let modifiedCount = 0;

['src/app', 'src/components'].forEach(targetDir => {
  const fullPath = path.resolve(targetDir);
  if (fs.existsSync(fullPath)) {
    walkDir(fullPath, filePath => {
      if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let original = content;

        replacements.forEach(({ from, to }) => {
          content = content.replace(from, to);
        });

        if (content !== original) {
          fs.writeFileSync(filePath, content, 'utf8');
          console.log(`Updated to Dark Theme: ${path.relative(process.cwd(), filePath)}`);
          modifiedCount++;
        }
      }
    });
  }
});

console.log(`Total files updated to Dark Theme: ${modifiedCount}`);
