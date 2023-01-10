const puppeteer = require('puppeteer');


(async () => {

  const browser = await puppeteer.launch({ headless: false });

    const page = await browser.newPage();

    await page.setUserAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36");

    await page.goto("https://web.whatsapp.com/");

    await page.waitForSelector('._3Nsgw');

    await delay(3000);

    await page.click('span[title="VD"]');

    await delay(2000);

    await page.type('._13NKt[data-tab="6"]','Opa!');

    await delay(1000);

    await page.click('[data-testid="send"]');

})();


function delay(time) {

  return new Promise(function (resolve) {

    setTimeout(resolve, time);

  });

}