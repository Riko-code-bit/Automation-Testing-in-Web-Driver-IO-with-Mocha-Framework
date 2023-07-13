

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class FrontPage extends Page {
    /**
     * define selectors using getter methods
     */

    get loginBtn() {
        return $(`[data-target='#logInModal']`)
    }

    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $(`#login-button`);
    }

    async isBtnLoginDisplayed() {
        await (await this.btnSubmit).waitForDisplayed(2000)
        return await this.btnSubmit.isDisplayed()
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('v1/index.html');
    }
}

export default new FrontPage();
