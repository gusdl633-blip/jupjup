// 서버에서만 실행할 예시 코드입니다. 정적 배포에는 포함만 되어 있고 실행되지 않습니다.
// npm install playwright tesseract.js openai @supabase/supabase-js

const { chromium } = require('playwright');

async function collectPinterestImages(url, scrollCount = 30) {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle' });

  for (let i = 0; i < scrollCount; i++) {
    await page.mouse.wheel(0, 3000);
    await page.waitForTimeout(1200);
  }

  const images = await page.$$eval('img', imgs =>
    [...new Set(imgs.map(img => img.src))]
      .filter(src => src.includes('pinimg.com'))
      .filter(src => !src.includes('/75x75/'))
  );

  await browser.close();
  return images;
}

module.exports = { collectPinterestImages };
