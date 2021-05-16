/*BasePage class where base functionality resides*/

const { browser } = require("protractor");

/*Most of the browser function will also resides here */
class BasePage {

    // will navigate to the desire url
    Get = (url) => {
        browser.waitForAngularEnabled(false);
        browser.get(url);
    }
    
    // will get the current url
    GetCurrentUrl = () => {
        return browser.getCurrentUrl();
    }
    
    // will get the current page title
    GetTitlePage = () => {
        return browser.getTitle();
    }
    
    // navigate to the given url
    NavigateToGivenUrl = (url) => {
        browser.navigate().to(url);
    }

    // wait till page loaded
    IsPageLoaded = () => {
        browser.sleep(5000);
    }
}
module.exports = BasePage;