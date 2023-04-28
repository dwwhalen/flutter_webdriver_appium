# Overview
This repo will eventually provide an example E2E testing of a Flutter mobile app with Appium and wdio.

## Clone this repo
`git clone ...`

## Install dependencies
`npm install`


## Running in BrowserStack
### set your BrowserStack environment variables
```
export BROWSERSTACK_USERNAME={your username}
export BROWSERSTACK_ACCESS_KEY={your access key}
```

## test a native app

### run the wikipedia android test locally
`npm run test-wiki`
### run the wikipedia android test in browserstack
`npm run test-wiki-bs`

## test a flutter app

### run the flutter android test locally
`npm run test-hello-android`
### run the flutter android test locally WITH percy (be sure to set PERCY_TOKEN)
`npm run test-hello-android-percy`

### run the flutter ios test locally
`npm run test-hello-ios`

### Run a test in BrowserStack
`npm run test-bs`