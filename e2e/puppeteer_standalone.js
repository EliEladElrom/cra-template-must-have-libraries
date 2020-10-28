const puppeteer = require('puppeteer');
const SERVER_URL = 'http://localhost:3000';

(async function main(){
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(SERVER_URL, {waitUntil: 'domcontentloaded'});

    const urlLink = await page.$('a[href*="https://github.com"]');
    if (urlLink) {
      await urlLink.click();
    } else {
      console.log('No "urlLink" found on page');
    }
    // wait 2 secs and shut down!
    await new Promise(resolve =>  setTimeout(resolve, 2000));
    await browser.close();
  } catch (error) {
    if (error.message.includes('ERR_CONNECTION_REFUSED'))
      console.log('Make sure you have React running: $ yarn start');
    console.log('Error message', error.message);
  }
})();