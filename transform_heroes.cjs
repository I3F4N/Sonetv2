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
  const fp = path.join(dir, file);
  let content = fs.readFileSync(fp, 'utf8');

  // Regex to extract pieces
  // We extract the badge text, the H1 fallback text, the P fallback text, and the IMG src and alt.
  
  const badgeRegex = /<span[^>]*uppercase tracking-widest[^>]*>([^<]+)<\/span>/;
  const badgeMatch = content.match(badgeRegex);
  const badgeText = badgeMatch ? badgeMatch[1] : '';

  const h1Regex = /<h1[^>]*>\{service\?.title \|\| ["']([^"']+)["']\}<\/h1>/;
  const h1Match = content.match(h1Regex);
  const h1Fallback = h1Match ? h1Match[1] : '';

  const pRegex = /<p[^>]*>\s*\{service\?.subtitle \|\| ["']([^"']+)["']\}\s*<\/p>/;
  const pMatch = content.match(pRegex);
  const pFallback = pMatch ? pMatch[1] : '';

  // Extract the img src and alt
  const imgRegex = /<img\s+src=\{([^}]+)\}\s+alt=\{([^}]+)\}/;
  const imgMatch = content.match(imgRegex);
  const imgSrc = imgMatch ? imgMatch[1] : '';
  const imgAlt = imgMatch ? imgMatch[2] : '';

  if (badgeMatch && h1Match && pMatch && imgMatch) {
    const newHero = `    <div className="min-h-screen overflow-hidden relative">
      {/* Dynamic Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-start mb-32 pt-32 pb-20 border-b border-black/5">
        <motion.div style={{ y: yHero }} className="absolute inset-0 z-0 bg-black">
          <img 
            src={${imgSrc}} 
            alt={${imgAlt}} 
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
              <span className="text-white text-sm font-semibold uppercase tracking-widest">${badgeText}</span>
            </div>
            <h1 className="mb-6 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white">{service?.title || "${h1Fallback}"}</h1>
            <p className="text-base sm:text-lg md:text-xl text-neutral-200 font-light leading-relaxed mb-8">
              {service?.subtitle || "${pFallback}"}
            </p>
            <div className="flex gap-4">
              <a 
                href="https://wa.me/9845424560"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white hover:bg-primary/90 px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(225,29,72,0.4)]"
              >
                Deploy Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>`;

    // Replace the old hero block (from <div className="min-h-screen... to </section>)
    const oldBlockRegex = /<div className="min-h-screen[^>]*>[\s\S]*?{?\/\* Dynamic Hero \*\/}?\s*<section[\s\S]*?<\/section>/;
    content = content.replace(oldBlockRegex, newHero);
    
    fs.writeFileSync(fp, content);
    console.log(`Updated ${file}`);
  } else {
    console.log(`Failed to match parts in ${file}`);
  }
});
