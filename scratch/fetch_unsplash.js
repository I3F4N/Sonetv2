const https = require('https');

function getUnsplashIds(query) {
  return new Promise((resolve) => {
    https.get(`https://unsplash.com/s/photos/${query}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const regex = /"id":"([a-zA-Z0-9_\-]+)","slug"/g;
        let match;
        const ids = [];
        while ((match = regex.exec(data)) !== null) {
          ids.push(match[1]);
        }
        resolve(ids);
      });
    });
  });
}

async function main() {
  const cctv = await getUnsplashIds('cctv-camera');
  const wireless = await getUnsplashIds('factory-ceiling');
  const av = await getUnsplashIds('boardroom-screen');
  
  console.log('CCTV IDs:', cctv.slice(0, 3));
  console.log('Wireless IDs:', wireless.slice(0, 3));
  console.log('AV IDs:', av.slice(0, 3));
}

main();
