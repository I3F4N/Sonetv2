const fs = require('fs');
const path = require('path');
const dir = 'src/pages';
fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.jsx')) {
    const fp = path.join(dir, file);
    let content = fs.readFileSync(fp, 'utf8');
    content = content.replace(/opacity-(?:60|70) mix-blend-luminosity hover:mix-blend-normal/g, 'opacity-100');
    content = content.replace(/hue-rotate-\[90deg\]/g, '');
    content = content.replace(/opacity-10 group-hover:scale-110 group-hover:opacity-20/g, 'opacity-100 group-hover:scale-110');
    content = content.replace(/className="w-full h-full object-cover opacity-60"/g, 'className="w-full h-full object-cover opacity-100"');
    content = content.replace(/opacity-70 transition-all duration-500 hover:opacity-100/g, 'opacity-100 transition-all duration-500');
    fs.writeFileSync(fp, content);
  }
});
