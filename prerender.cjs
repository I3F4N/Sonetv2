const puppeteer = require('puppeteer');
const express = require('express');
const fs = require('fs');
const path = require('path');

const routes = [
  '/',
  '/data-center',
  '/networking',
  '/surveillance',
  '/wireless',
  '/partners',
  '/audio-visual',
  '/cloud'
];

async function prerender() {
  console.log('Starting prerender script...');
  const app = express();
  const distPath = path.join(__dirname, 'dist');
  
  if (!fs.existsSync(distPath)) {
    console.error('dist folder not found! Run npm run build first.');
    process.exit(1);
  }

  // Serve static files, but fallback to index.html for SPA routing
  app.use(express.static(distPath));
  app.use((req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });

  const server = app.listen(3000, async () => {
    console.log('Server started for prerendering on port 3000');
    try {
      const browser = await puppeteer.launch({ headless: 'new' });
      const page = await browser.newPage();
      
      for (const route of routes) {
        console.log(`Prerendering route: ${route}`);
        await page.goto(`http://localhost:3000${route}`, { waitUntil: 'networkidle0' });
        
        // Ensure react-helmet-async has injected meta tags
        await new Promise(resolve => setTimeout(resolve, 500));

        const html = await page.content();
        
        let writePath;
        if (route === '/') {
          writePath = path.join(distPath, 'index.html');
        } else {
          const routeDir = path.join(distPath, route.slice(1));
          if (!fs.existsSync(routeDir)) {
            fs.mkdirSync(routeDir, { recursive: true });
          }
          writePath = path.join(routeDir, 'index.html');
        }
        
        fs.writeFileSync(writePath, html);
        console.log(`Successfully wrote ${writePath}`);
      }
      
      await browser.close();
      console.log('Prerendering complete!');
    } catch (err) {
      console.error('Error during prerendering:', err);
    } finally {
      server.close();
    }
  });
}

prerender();
