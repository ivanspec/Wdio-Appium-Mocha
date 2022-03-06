const {config} = require('./wdio.conf');
const androidInfo = require('./android.info');
const path = require('path');

// appium capabilities
config.capabilities = [
    {   
        "deviceName": `${androidInfo.deviceName()}`,
        "udid": "emulator-5554",
        "platformName": `Android`,
        "platformVersion": `${androidInfo.platFormVersion()}`,
        "app": path.resolve(`./apps/${androidInfo.appName()}`),
        "appPackage": "com.wdiodemoapp",
        "appActivity": "com.wdiodemoapp.MainActivity",
        "automationName": "UiAutomator2"
    }
];

config.specs = [
    './tests/*.js'
];

exports.config = config;



