var assert = require('assert');
const find = require('appium-flutter-finder');
const percyScreenshot = require('@percy/appium-app');


describe('Hello World app', () => {
    it('Clicking the button should increment the counter', async () => {

        const counterTextFinder = find.byValueKey('counter');
        const buttonFinder = find.byValueKey('increment');

        assert.strictEqual(await driver.getElementText(counterTextFinder), '0');
        await browser.pause(10000); 
        await percyScreenshot('Initial page');

        await browser.elementClick(buttonFinder);
        assert.strictEqual(await driver.getElementText(counterTextFinder), '1');

        await browser.touchAction({
            action: 'tap',
            element: { elementId: buttonFinder }
        });
        assert.strictEqual(await browser.getElementText(counterTextFinder), '2');

        await driver.elementClick(find.byTooltip('Increment'));
        assert.strictEqual(await driver.getElementText(counterTextFinder), '3');
        await percyScreenshot('counter should be 3');
    });
});


