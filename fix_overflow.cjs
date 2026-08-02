const fs = require('fs');
const path = require('path');

const dir = 'src/pages';
const files = [
  'Home.jsx',
  'Networking.jsx',
  'Surveillance.jsx',
  'DataCenter.jsx',
  'Wireless.jsx',
  'AudioVisual.jsx',
  'CloudSolutions.jsx'
];

files.forEach(file => {
  const filePath = path.join(dir, file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');

  // Add overflow-hidden to the hero container to crop the scaling image perfectly
  content = content.replace(
    /className="absolute inset-0 z-0 bg-black"/g,
    'className="absolute inset-0 z-0 bg-black overflow-hidden"'
  );

  fs.writeFileSync(filePath, content);
  console.log(`Updated ${file}`);
});
