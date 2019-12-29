var listofcourses=function(){

}

listofcourses.prototype.allcources=function()
{
    element(by.xpath("//a[contains(@class,'btn btn-md')]")).click().then(function(){
        browser.sleep(4000);
        var list=element.all(by.xpath('(//div[@class="course-listing-title"])')).getText().then(function(text){
            console.log(text)
            console.log(text.length)
        })
        
    })
}
listofcourses.prototype.seleniumcources=function(){
    element(by.id("search-courses")).sendKeys("Selenium");
    element(by.id("search-course-button")).click();
     element.all(by.xpath("(//div[@class='course-listing-title'])")).getText().then(function(text1){
        console.log(text1);
        console.log(text1.length)
    });

    listofcourses.prototype.restassured=function(){
        element(by.id("search-courses")).clear();
        element(by.id("search-courses")).sendKeys("Rest Assured");
        element(by.id("search-course-button")).click();
        element.all(by.xpath("(//div[@class='course-listing-title'])")).getText().then(function(text2){
            browser.sleep(5000)
            console.log(text2);
            console.log(text2.length);
            

        })

        listofcourses.prototype.Protractor=function(){
            element(by.id("search-courses")).clear();
            element(by.id("search-courses")).sendKeys("Rest Assured");
            element(by.id("search-course-button")).click();
            element.all(by.xpath("(//div[@class='course-listing-title'])")).getText().then(function(text3){
                browser.sleep(5000)
                console.log(text3);
                console.log(text3.length);
                
    
            });
        }

        listofcourses.prototype.Appium=function(){
            element(by.id("search-courses")).clear();
            element(by.id("search-courses")).sendKeys("Appium");
            element(by.id("search-course-button")).click();
            element.all(by.xpath("(//div[@class='course-listing-title'])")).getText().then(function(text4){
                browser.sleep(5000)
                console.log(text4);
                console.log(text4.length);
                
    
            });
        }

        listofcourses.prototype.Cypres=function(){
            element(by.id("search-courses")).clear();
            element(by.id("search-courses")).sendKeys("Cypres");
            element(by.id("search-course-button")).click();
            element.all(by.xpath("(//div[@class='course-listing-title'])")).getText().then(function(text5){
               browser.sleep(5000)
                console.log(text5);
                console.log(text5.length);
                
    
            });
        }

        listofcourses.prototype.jmeter=function(){
            element(by.id("search-courses")).clear();
            element(by.id("search-courses")).sendKeys("jmeter");
            element(by.id("search-course-button")).click();
            element.all(by.xpath("(//div[@class='course-listing-title'])")).getText().then(function(text6){
                browser.sleep(5000)
                console.log(text6);
                console.log(text6.length);
                
    
            });
        }

        listofcourses.prototype.cucumber=function(){
            element(by.id("search-courses")).clear();
            element(by.id("search-courses")).sendKeys("cucumber");
            element(by.id("search-course-button")).click();
            element.all(by.xpath("(//div[@class='course-listing-title'])")).getText().then(function(text7){
                browser.sleep(5000)
                console.log(text7);
                console.log(text7.length);
                
    
            });
        }

        listofcourses.prototype.jira=function(){
            element(by.id("search-courses")).clear();
            element(by.id("search-courses")).sendKeys("jira");
            element(by.id("search-course-button")).click();
            element.all(by.xpath("(//div[@class='course-listing-title'])")).getText().then(function(text8){
                browser.sleep(5000)
                console.log(text8);
                console.log(text8.length);
                
    
            });
        }
    }
}
module.exports=new listofcourses();