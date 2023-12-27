const expect = require('chai').expect;
const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

describe('Scrape Reddit Bot', () => {
  it('should scrape the Reddit front page', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.reddit.com');

    const html = await page.content();
    const $ = cheerio.load(html);

    expect($('a').length).to.be.greaterThan(0);

    await browser.close();
  });
});