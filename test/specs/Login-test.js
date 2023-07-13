import frontPage from '../pageobjects/frontPage.js';
import securePage from '../pageobjects/secure.page.js';

describe('Test suite about Login', () => {
    it('Im in front page', async() => {
        await frontPage.open()
    });
    it(`Im trying to login`, async() => {
        await frontPage.login(`standard_user`, `secret_sauce`)
    })
    it(`Im in secure page`, async() => {
        await securePage.verify()
        await browser.pause(3000)
    })
});

