var assert = require('assert');
const find = require('appium-flutter-finder');
const percyScreenshot = require('@percy/appium-app');


describe('Hello World app', () => {
    it('Clicking the button should increment the counter', async () => {

        const counterTextFinder = find.byValueKey('counter');
        const buttonFinder = find.byValueKey('increment');

        assert.strictEqual(await driver.getElementText(counterTextFinder), '0');
        await driver.pause(2000);
        await percyScreenshotFlutter(driver, 'Initial page');

        await browser.elementClick(buttonFinder);
        assert.strictEqual(await driver.getElementText(counterTextFinder), '1');

        await browser.touchAction({
            action: 'tap',
            element: { elementId: buttonFinder }
        });
        assert.strictEqual(await browser.getElementText(counterTextFinder), '2');

        await driver.elementClick(find.byTooltip('Increment'));
        assert.strictEqual(await driver.getElementText(counterTextFinder), '3');
        await percyScreenshotFlutter(driver, 'Page with counter = 3');
    });
});

async function percyScreenshotFlutter(driver, name) {
    await driver.switchContext('NATIVE_APP');
    // call percyScreenshot when current context is NATIVE_APP
    await percyScreenshot(driver, name);
    // switch back to flutter context
    await driver.switchContext('FLUTTER');
  }

