// 서버에서만 실행할 예시입니다. Vercel Serverless Function 또는 별도 Node 서버로 분리하세요.
// 목적: Pinterest 페이지를 스크롤하며 이미지 URL을 수집하고, 프론트에는 image_url 중심으로 전달합니다.

const { chromium } = require('playwright');

async function collectPinterestImages(url) {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1200 } });

  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });

  for (let i = 0; i < 35; i++) {
    await page.mouse.wheel(0, 2400);
    await page.waitForTimeout(900);
  }

  const images = await page.$$eval('img', imgs => imgs
    .map(img => img.currentSrc || img.src)
    .filter(Boolean)
    .filter(src => src.includes('pinimg.com'))
    .map(src => src.replace(/\/\d+x\//, '/originals/'))
  );

  await browser.close();

  return [...new Set(images)].map(src => ({
    image_url: src,
    ocr_text: '',
    category: '미분류',
    source_url: url
  }));
}

module.exports = { collectPinterestImages };
