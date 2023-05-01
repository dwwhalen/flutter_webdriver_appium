exports.config = {
    user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',
  
    hostname: 'hub.browserstack.com',
  
    services: [
      [
        'browserstack',
        {
          buildIdentifier: '${BUILD_NUMBER}',
          browserstackLocal: true,
          opts: { forcelocal: false, localIdentifier: "flutter-webdriverio-appium" },
          app: "https://github.com/appium-userland/appium-flutter-driver/releases/download/v0.0.4/android-real-debug.apk"
        }
      ]
    ],
  
    capabilities: [{
      "appium:automationName": 'flutter',
      'bstack:options': {
        deviceName: 'Samsung Galaxy S23 Ultra',
        osVersion: "13.0",
        platformName: "android",
      }
    }, {
      "appium:automationName": 'flutter',
      'bstack:options': {
        deviceName: 'Google Pixel 6 Pro',
        osVersion: "12.0",
        platformName: "android",
      }
    }],
  
    commonCapabilities: {
      'bstack:options': {
        projectName: "Flutter/WebdriverIO/Appium POC",
        buildName: 'Flutter/WebdriverIO/Appium POC build',
        sessionName: 'Flutter/WebdriverIO/Appium POC session',
        debug: true,
        networkLogs: true,
        source: 'webdriverio:appium-sample-sdk:v1.0',
      }
    },
  
    maxInstances: 10,
  
    updateJob: false,
    specs: [
      './test/specs/hello-testing/*.js'
    ],
    exclude: [],

    logLevel: 'info',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 30000,
    connectionRetryTimeout: 240000,
    connectionRetryCount: 1,
  
    framework: 'mocha',
    mochaOpts: {
      ui: 'bdd',
      timeout: 60000
  },
  };
  
  // Code to support common capabilities
  exports.config.capabilities.forEach(function(caps){
    for(let key in exports.config.commonCapabilities) 
      caps[key] = { ...caps[key], ...exports.config.commonCapabilities[key]};
  });
  