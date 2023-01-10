const puppeteer = require('puppeteer');


(async () => {

  const browser = await puppeteer.launch({ headless: false });

    const page = await browser.newPage();

    await page.setUserAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36");

    await page.goto("https://web.whatsapp.com/");

    await page.waitForSelector('._3Nsgw');

    await page.click('span[title="Afiliados Danki Code"]');

    await delay(2000);

    var lastMessagesCount = 0;

    await page.evaluate(()=>{

      let messagesIn = document.querySelectorAll('.message-in');

      lastMessagesCount = messagesIn.length;

    })

    console.log("no momento possuimos apenas: "+ lastMessagesCount);

    while(true){

      await page.evaluate(()=>{

          let messagesIn = document.querySelectorAll('.message-in');

          console.log(lastMessagesCount);

          if(messagesIn.length > lastMessagesCount){

            console.log("Nova mensagem!");

            console.log(messagesIn[messagesIn.length-1].textContent);

          }else{

            console.log("Nada novo :(");

          }

      })

      await delay(2000);

    }

})();

function delay(time) {

  return new Promise(function (resolve) {

    setTimeout(resolve, time);

  });

}