const fs = require('fs');
const path = require('path');

const dir = 'src/pages';
const files = [
  { name: 'Home.jsx', slug: '' },
  { name: 'Networking.jsx', slug: 'networking' },
  { name: 'Surveillance.jsx', slug: 'surveillance' },
  { name: 'DataCenter.jsx', slug: 'data-center' },
  { name: 'Wireless.jsx', slug: 'wireless' },
  { name: 'AudioVisual.jsx', slug: 'audio-visual' },
  { name: 'CloudSolutions.jsx', slug: 'cloud' },
  { name: 'Partners.jsx', slug: 'partners' }
];

files.forEach(file => {
  const filePath = path.join(dir, file.name);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');

  // Add SEO import if not present
  if (!content.includes("import SEO from '../components/SEO'")) {
    content = content.replace(/(import React.*?;\n)/, `$1import SEO from '../components/SEO';\n`);
  }

  // Generate dynamic SEO block based on page
  let seoBlock = '';
  if (file.name === 'Home.jsx') {
    seoBlock = `
      <SEO 
        title="Physical & Logical Infrastructure Deployments" 
        url="/" 
        schema={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Sonet Integrated Solutions",
          "url": "https://sonet.vercel.app",
          "logo": "https://sonet.vercel.app/logo.png"
        }}
      />`;
  } else if (file.name === 'Partners.jsx') {
    seoBlock = `
      <SEO 
        title="Our Hardware Partners" 
        description="We deploy Tier-1 OEM global leaders including Cisco, Aruba, Fortinet, and more."
        url="/partners" 
      />`;
  } else {
    seoBlock = `
      <SEO 
        title={service?.title || "${file.name.replace('.jsx', '')}"} 
        description={service?.subtitle}
        url="/${file.slug}"
        image={service?.heroImage ? (typeof service.heroImage === 'string' ? service.heroImage : urlFor(service.heroImage).url()) : undefined}
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": service?.title,
          "provider": {
            "@type": "Organization",
            "name": "Sonet Integrated Solutions"
          }
        }}
      />`;
  }

  // Inject SEO block right after the main return div
  // The pages usually have return ( <div className="min-h-screen..."> or <div className="min-h-screen overflow-hidden relative">
  const divRegex = /(return \([\s]*<div[^>]*>)/;
  
  if (divRegex.test(content) && !content.includes('<SEO')) {
    content = content.replace(divRegex, `$1${seoBlock}`);
  }

  fs.writeFileSync(filePath, content);
  console.log(`Injected SEO into ${file.name}`);
});
