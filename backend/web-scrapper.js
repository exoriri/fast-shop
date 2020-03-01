const puppeteer = require('puppeteer');
const url = 'https://www.amazon.co.uk/s/ref=lp_428655031_nr_n_2?fst=as%3Aoff&rh=n%3A340831031%2Cn%3A%21340832031%2Cn%3A428655031%2Cn%3A430546031&bbn=428655031&ie=UTF8&qid=1583004042&rnid=428655031';

const getProducts = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(url); 

    const products  = await page.evaluate(() => {
        return document.querySelectorAll('.octopus-pc-item-block');
    });

    await browser.close();
    return products;
};

module.exports = getProducts;