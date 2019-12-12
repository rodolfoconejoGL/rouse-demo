
class Search {
    get slogan() { return $('.tag-home__item') }
    get menu() {return $('.header__button--menu')}
    get dismissMenu() {return $('.badge-link__close')}
    get menuHeader() {return $('.nav-menu__heading')}
    get searchBar() {return $('#search_form_input_homepage')}
    get searchButton() {return $('#search_button_homepage')}
    get body() {return $('<body />')}
    get otherSettings() {return $(`//ul[@class='nav-menu--theme']//li[3]//a`)}
    get infiniteScrollToggleButton() {return $(`//label[@for='setting_kav']`)}

    navigate(url) {
        browser.url(url)
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
        }, 3000, `Given element does not contain following text: ${expectedText}`)
    }

    expectTitleToContain(expectedText) {
        return browser.getTitle().includes(expectedText)
    }
}
module.exports = new Search()