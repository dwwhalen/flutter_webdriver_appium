const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class WikiPage extends Page {
    /**
     * define selectors using getter methods
     */
    get searchWikipediaTextbox () {
        return $(`~Search Wikipedia`);
    }

    // get searchTextbox () {
    //     return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")');
    // }

    get searchResultCount () {
        return $$(`android.widget.TextView`).length;
    }

    async clickSearchTextbox () {
        await this.searchWikipediaTextbox.waitForDisplayed({ timeout: 10000 });
        await this.searchWikipediaTextbox.click();
    }

    async insertTextAndWait () {
        var insertTextSelector = await $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")');
        await insertTextSelector.waitForDisplayed({ timeout: 10000 });
    
        await this.searchTextbox.addValue("BrowserStack");
        await browser.pause(5000);
    }
}

module.exports = new WikiPage();
