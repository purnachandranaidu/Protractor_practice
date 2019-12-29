
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {

    directconnect: true,
    framework: "jasmine2",
    defaultTimeoutInterval: 2500000,
    capablities: {
        'chromeOptions': {
             w3c: false,
          },
        browserName: "chrome",
        
    },
    
    suites: {
        sampletest: 'Test_Specs/HomePage.spec.js'
    },
    baseUrl:"https://www.delta.com/",
    onPrepare: function () {
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
              savePath: 'target/screenshots',
              takeScreenshots: true,
              takeScreenshotsOnlyOnFailures: true,
              fixedScreenshotName: true,
              showPassed: true,
            })
          );
          jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: './test/reports/'
         }));

    //     var AllureReporter = require('jasmine-allure-reporter');
    // jasmine.getEnv().addReporter(new AllureReporter({
    //   resultsDir: 'allure-results'
    // }));

    // jasmine.getEnv().afterEach(function(done){
    //     browser.takeScreenshot().then(function (png) {
    //       allure.createAttachment('Screenshot', function () {
    //         return new Buffer(png, 'base64')
    //       }, 'image/png')();
    //       done();
    //     })
    //   });
        browser.manage().window().maximize();
        

    },
    onComplete: function () {
    
        
       browser.close();
    },
    jasmineNodeOpts: {
        isVerbose: true,
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 480000,
      },


}   