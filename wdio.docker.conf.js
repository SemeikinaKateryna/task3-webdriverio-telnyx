import { config as baseConfig} from "./wdio.conf.js";

export const config ={
    ...baseConfig,
    hostname: 'localhost',
    port: 4444,
    maxInstances: 5,
    capabilities: [
        {
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: [
                    ...(process.env.HEADLESS_STATE === 'true' ? ['--headless'] : []),
                    '--disable-gpu'
                ]
            }
            
        }
    ],
    services: []
}