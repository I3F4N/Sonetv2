const fs = require('fs');
const path = require('path');

const dir = 'src/pages';
const files = [
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

  // Find the hero image block
  const imgRegex = /<img\s+src=\{service\?\.heroImage[\s\S]*?className="w-full h-full object-cover opacity-100"\s*\/>/g;
  
  content = content.replace(imgRegex, match => {
    // Replace <img with <motion.img
    // Add initial, animate, transition props
    // Remove opacity-100 from className
    let newImg = match.replace('<img', '<motion.img');
    newImg = newImg.replace('className="w-full h-full object-cover opacity-100"', 'className="w-full h-full object-cover"');
    
    const animationProps = `
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}`;
            
    // Insert the animation props after the <motion.img
    newImg = newImg.replace('<motion.img', '<motion.img' + animationProps);
    return newImg;
  });

  fs.writeFileSync(filePath, content);
  console.log(`Updated ${file}`);
});
