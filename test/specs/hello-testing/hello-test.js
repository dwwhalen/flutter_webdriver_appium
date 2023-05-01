var assert = require('assert');
const find = require('appium-flutter-finder');
const percyScreenshot = require('@percy/appium-app');


describe('Hello World app', () => {
    it('Clicking the button should increment the counter', async () => {

        // *** locators
        const counterTextFinder = find.byValueKey('counter');
        const buttonFinder = find.byValueKey('increment');

        // *** just some random fluttter stuff from https://github.com/appium-userland/appium-flutter-driver/blob/main/example/nodejs/src/index.js
        assert.strictEqual(await driver.execute('flutter:checkHealth'), 'ok');
        await driver.execute('flutter:clearTimeline');
        await driver.execute('flutter:forceGC');

        const renderObjectDiagnostics = await driver.execute(
            'flutter:getRenderObjectDiagnostics',
            counterTextFinder,
            { includeProperties: true, subtreeDepth: 2 }
          );
          assert.strictEqual(renderObjectDiagnostics.type, 'DiagnosticableTreeNode');
          assert.strictEqual(renderObjectDiagnostics.children.length, 1);

          const semanticsId = await driver.execute(
            'flutter:getSemanticsId',
            counterTextFinder
          );
          assert.strictEqual(semanticsId, 4);
        
          const treeString = await driver.execute('flutter: getRenderTree');
          assert.strictEqual(treeString.substr(0, 11), 'RenderView#');
          
          await driver.switchContext('NATIVE_APP');
          await driver.saveScreenshot('./native-screenshot.png');
          await driver.switchContext('FLUTTER');
          await driver.saveScreenshot('./flutter-screenshot.png');

        // ***


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

