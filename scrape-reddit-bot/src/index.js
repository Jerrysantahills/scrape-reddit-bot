const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.reddit.com');

  const html = await page.content();
  const $ = cheerio.load(html);

  $('a').each((i, el) => {
    console.log($(el).text());
  });

  await browser.close();
})();