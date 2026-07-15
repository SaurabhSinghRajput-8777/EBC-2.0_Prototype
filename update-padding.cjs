const fs = require('fs');
const path = require('path');
const dir = path.join(process.cwd(), 'src/features/public/landing/sections');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx') && f !== 'HeroSection.tsx');

files.forEach(f => {
  const filePath = path.join(dir, f);
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/(<section[^>]*className="[^"]*)py-\d+(?:\s+(?:sm|md|lg|xl|2xl):py-\d+)*([^"]*")/g, '$1py-8 md:py-10$2');
  fs.writeFileSync(filePath, content);
});
