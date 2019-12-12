const testData = require('../data/testData')

class Base {
    constructor() {
    }

    navigate(url) {
        browser.url(url)
    }

    maximizeWindow() {
        browser.maximizeWindow()
    }

    clickElementBySelector(selector) {
        selector.waitForClickable()
        return selector.click()
    }

    setValueBySelector(value, selector) {
        selector.waitForDisplayed()
        return selector.setValue(value)
    }

    getCssPropertyByName(propertyName, selector) {
        selector.waitForDisplayed()
        return selector.getCSSProperty(propertyName)
    }

    expectTextToContain(expectedText, selector) {
        return selector.getText().includes(expectedText)
    }

    expectInnerHtmlTextToContain(expectedText, selector, includeSelectorTag) {
        return selector.getHTML(includeSelectorTag).includes(expectedText)
    }

    waitForTextToContain(expectedText, selector) {
        browser.waitUntil(() => {
            return selector.getText().includes(expectedText) 
        }, timeout, `${testData.elementDoesNotContainMessage} ${expectedText}`)
    }

    expectTitleToContain(expectedText) {
        return browser.getTitle().includes(expectedText)
    }
    
}
module.exports = Base