const searchPage = require('../pages/searchPage')
const testData = require('../data/testData')

describe('Home page displays and slogan text matches',() => {
    it('should work', () => {
        searchPage.navigate(testData.basePage)
        assert.equal(testData.baseUrl, browser.getUrl())
        assert.isTrue(searchPage.expectTextToContain(testData.sloganText, searchPage.slogan))
    })
})

describe('Side menu opens and title is as expected', () => {
    it('should work', () => {
        searchPage.navigate(testData.basePage)
        searchPage.clickElementBySelector(searchPage.dismissMenu)
        searchPage.clickElementBySelector(searchPage.menu)
        assert.isTrue(searchPage.expectInnerHtmlTextToContain(testData.menuHeader, searchPage.menuHeader, false))
    })
})

describe('Search and result should not be displayed', () => {
    it('should not work', () => {
        searchPage.navigate(testData.basePage)
        searchPage.setValueBySelector(testData.searchTextCriteria, searchPage.searchBar)
        searchPage.clickElementBySelector(searchPage.searchButton)
        assert.isTrue(searchPage.waitForTextToContain(testData.searchTextResult, searchPage.body)) // Test will fail
    })
})

describe('Search and validate title contains search criteria', () => {
    it('work', () => {
        searchPage.navigate(testData.basePage)
        searchPage.setValueBySelector(testData.searchTextCriteria, searchPage.searchBar)
        searchPage.clickElementBySelector(searchPage.searchButton)
        assert.isTrue(searchPage.expectTitleToContain(testData.searchTextCriteria))
    })
})

describe('Color should change on Infinite Scrolling toggle', () => {
    it('should work', () => {
        searchPage.navigate(testData.basePage)
        searchPage.clickElementBySelector(searchPage.menu)
        searchPage.clickElementBySelector(searchPage.otherSettings)
        let currentColor = searchPage.getCssPropertyByName(testData.backgroundColorPropertyName, searchPage.infiniteScrollToggleButton).parsed.hex
        searchPage.clickElementBySelector(searchPage.infiniteScrollToggleButton)
        let newColor = searchPage.getCssPropertyByName(testData.backgroundColorPropertyName, searchPage.infiniteScrollToggleButton).parsed.hex
        assert.notEqual(currentColor, newColor)
    })
})