const WikiPage = require('../pageobjects/wiki-page');
var assert = require('assert');

describe('Wiki page', () => {
    it('search should return results', async () => {

        await WikiPage.clickSearchTextbox();

        await WikiPage.insertTextAndWait();

        var searchResults = await WikiPage.searchResults;

        await assert(searchResults.length > 0);

    });
});


