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

    get searchResults () {
        return $$(`android.widget.TextView`)
    }

    // get searchTextbox () {
    //     return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")');
    // }

    // async searchResultCount () {
    //     return await this.searchResults.length;
    // }

    async clickSearchTextbox () {
        await this.searchWikipediaTextbox.waitForDisplayed({ timeout: 10000 });
        await this.searchWikipediaTextbox.click();
    }

    async insertTextAndWait () {
        var insertTextSelector = await $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")');
        await insertTextSelector.waitForDisplayed({ timeout: 10000 });
    
        await insertTextSelector.addValue("BrowserStack");
        await browser.pause(20000);
    }
}

module.exports = new WikiPage();
