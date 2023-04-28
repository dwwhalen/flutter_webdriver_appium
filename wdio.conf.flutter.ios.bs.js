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
          app: "/Users/denniswhalen/flutter_webdriverio_appium/app/ios-hello.zip"
        }
      ]
    ],
  
    capabilities: [{
      "appium:automationName": 'flutter',
      'bstack:options': {
        deviceName: 'iPhone 13',
        osVersion: "15",
        platformName: "ios",
      }
    }, {
      "appium:automationName": 'flutter',
      'bstack:options': {
        deviceName: 'iPhone 14',
        osVersion: "16",
        platformName: "ios",
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
  