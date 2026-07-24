import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
  page.on('pageerror', err => console.log('BROWSER ERROR:', err.toString()));
  
  try {
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle0', timeout: 5000 });
    console.log("Page loaded successfully.");
  } catch (err) {
    console.log("Navigation error:", err.message);
  }
  
  await browser.close();
  process.exit(0);
})();
