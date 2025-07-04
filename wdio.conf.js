const path = require('path');

exports.config = {
    
    runner: 'local',
    
    specs: [
        './test/specs/**/*.js'
    ],
    
    exclude: [
        // 'path/to/excluded/files'
    ],
    
    maxInstances: 10,
    
    services: ['appium'],
    appium: {
        command: 'appium',
    },
    
    capabilities: [{
        platformName: 'Android',
        'appium:platformVersion': '16', // emulator Android version
        'appium:deviceName': 'emulator-5554',
        'appium:automationName': 'UiAutomator2',
        'appium:app': path.resolve('./apps/mda-2.2.0-25.apk'),
        'appium:autoGrantPermissions': true
    }],

    logLevel: 'info',
    
    bail: 0,
    
    waitforTimeout: 10000,
    
    connectionRetryTimeout: 120000,
    
    connectionRetryCount: 3,
    
    framework: 'mocha',
    
    
    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }    
}
