

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */

    get productLabel() { 
        return $(`.product_label`)
    }

    async verify() {
        return await expect(await this.productLabel).toBeDisplayed()
        

    }
}

export default new SecurePage();
