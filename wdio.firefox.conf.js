export const config = {
    runner: 'local',
    specs: [
        './test/specs/test.e2e.js'
    ],
    
    maxInstances: 10,
    
    capabilities: [
        {
            browserName: 'firefox',
            'moz:firefoxOptions': {
                args: [
                    ...(process.env.HEADLESS_STATE === 'true' ? ['--headless'] : []), 
                    '-safe-mode'
                ]
            }
        }
    ],

    logLevel: 'info',
    
    bail: 0,
    
    waitforTimeout: 10000,
    
    connectionRetryTimeout: 120000,
    
    connectionRetryCount: 3,
   
    framework: 'mocha',
    
    reporters: [
        'spec',
        [
            "allure",
            {
              outputDir: "allure-results",
            },
          ],
    ],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}
