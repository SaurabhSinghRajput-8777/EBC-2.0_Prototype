const fs = require('fs');
const path = require('path');
const dir = path.join(process.cwd(), 'src/features/public/landing/sections');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

files.forEach(f => {
  const filePath = path.join(dir, f);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace large margins and gaps between headings and content
  content = content.replace(/mb-16 md:mb-24/g, 'mb-6 md:mb-8');
  content = content.replace(/mb-12 md:mb-16/g, 'mb-6 md:mb-8');
  content = content.replace(/mb-10 md:mb-16/g, 'mb-6 md:mb-8');
  
  content = content.replace(/className="mb-12"/g, 'className="mb-6"');
  content = content.replace(/className="mb-16"/g, 'className="mb-6 md:mb-8"');
  content = content.replace(/className="mb-20"/g, 'className="mb-6 md:mb-8"');
  content = content.replace(/mb-24/g, 'mb-8');

  content = content.replace(/gap-12 md:gap-16/g, 'gap-6 md:gap-8');
  content = content.replace(/gap-10 sm:gap-12 lg:gap-20/g, 'gap-6 lg:gap-8');
  content = content.replace(/gap-8 lg:gap-12/g, 'gap-6 lg:gap-8');
  content = content.replace(/gap-8 lg:gap-12/g, 'gap-6 lg:gap-8');
  content = content.replace(/mb-8 sm:mb-12/g, 'mb-4 sm:mb-6');
  
  fs.writeFileSync(filePath, content);
});
