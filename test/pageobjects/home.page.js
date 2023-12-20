const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get appLogo () {
        return $(`div[class='app_logo']`);
    }

    get burgerMenu() {
        return $(`#react-burger-menu-btn`);
    }

    get logOutLink () {
        return $(`#logout_sidebar_link`);
    }

    /**
     * Home page methods
     */
    async clickBurgerMenu() {
        await this.burgerMenu.click();
    }

    async logout() {
        await browser.waitUntil(() => this.logOutLink.isClickable());
        await this.logOutLink.click();
    }

}

module.exports = new HomePage();
