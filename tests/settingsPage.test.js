const searchPage = require('../pages/searchPage')
const settingsPage = require('../pages/settingsPage')

const BasePageTest = require('./basePage.test')

const testData = require('../data/testData')

class SettingsPageTest extends BasePageTest {
    constructor() {
        super()

        describe('Side menu opens and title is as expected', () => {
            it('should work', () => {
                searchPage.clickElementBySelector(searchPage.dismissMenu)
                searchPage.clickElementBySelector(searchPage.menu)
                assert.isTrue(searchPage.expectInnerHtmlTextToContain(testData.menuHeader, searchPage.menuHeader, false))
            })
        })
    
        describe('Color should change on Infinite Scrolling toggle', () => {
            it('should work', () => {
                searchPage.clickElementBySelector(searchPage.menu)
                searchPage.clickElementBySelector(searchPage.otherSettings)
                let currentColor = searchPage.getCssPropertyByName(testData.backgroundColorPropertyName, settingsPage.infiniteScrollToggleButton).parsed.hex
                searchPage.clickElementBySelector(settingsPage.infiniteScrollToggleButton)
                let newColor = searchPage.getCssPropertyByName(testData.backgroundColorPropertyName, settingsPage.infiniteScrollToggleButton).parsed.hex
                assert.notEqual(currentColor, newColor)
            })
        })
    }
}

module.exports = new SettingsPageTest()