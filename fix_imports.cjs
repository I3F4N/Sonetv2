const fs = require('fs');
const path = require('path');

const dir = 'src/pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  if (!content.includes("import SEO from '../components/SEO'")) {
    // Simply insert it after the very first line
    const lines = content.split(/\r?\n/);
    lines.splice(1, 0, "import SEO from '../components/SEO';");
    content = lines.join('\n');
    fs.writeFileSync(filePath, content);
    console.log(`Fixed import in ${file}`);
  }
});
