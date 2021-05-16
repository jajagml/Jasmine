exports.config = {
    // DirectConnect set to true 
    directConnect: true,

    // URL 
    baseUrl: "https://computer-database.gatling.io/computers",

    // Browser set to Chrome and Maximized 
    capabilities: {
      browserName: 'chrome',
      chromeOptions: {
        args: [ '--start-maximized' ]
      }
    },
  
    framework: 'jasmine',
    
    specs: ['..\\test\\FilterComputers.js','..\\test\\AddNewComputer.js'],
  
    jasmineNodeOpts: {
      defaultTimeoutInterval: 1000000
    }
    
  };
