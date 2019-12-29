require('../PageObjects/all-page-objects.po.js');

describe('Home Page verification', function () {
    browser.ignoreSynchronization = true;
    it('URL passing', function () {
        browser.get('https://courses.rahulshettyacademy.com/').then(function () {
            browser.getTitle().then(function (title) {
                console.log(title)
                expect(browser.getTitle()).toBe("Home | Rahul Shetty Academy");
            })

        })
    });

    it('List of cources',function(){

        HomePage.allcources();
        HomePage.seleniumcources();
        HomePage.restassured();
        HomePage.Protractor();
        HomePage.Appium();
        HomePage.Cypres();
        HomePage.jmeter();
        HomePage.cucumber();
        HomePage.jira();
      
    })


    });
    browser.sleep(10000);