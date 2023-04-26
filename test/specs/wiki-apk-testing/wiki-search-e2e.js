const WikiPage = require('../../pageobjects/wiki-page');
var assert = require('assert');
const percyScreenshot = require('@percy/appium-app');

describe('Wiki page', () => {
    it('search should return results', async () => {
        await WikiPage.clickSearchTextbox();
        await WikiPage.insertTextAndWait();
        var searchResults = await WikiPage.searchResults;
        await assert(searchResults.length > 0);
        await percyScreenshot('George Jones results page');
    });
});


