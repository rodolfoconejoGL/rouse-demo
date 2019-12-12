const searchPage = require('../pages/searchPage')
const resultsPage = require('../pages/resultsPage')
const BasePageTest = require('./basePage.test')

const testData = require('../data/testData')

class ResultsPageTest extends BasePageTest {
    constructor() {
        super()

        describe('Search and result should not be displayed', () => {
            it('should not work', () => {
                searchPage.setValueBySelector(testData.searchTextCriteria, searchPage.searchBar)
                searchPage.clickElementBySelector(searchPage.searchButton)
                assert.isTrue(searchPage.waitForTextToContain(testData.searchTextResult, resultsPage.body))
            })
        })
        
        describe('Search and validate title contains search criteria', () => {
            it('work', () => {
                searchPage.setValueBySelector(testData.searchTextCriteria, searchPage.searchBar)
                searchPage.clickElementBySelector(searchPage.searchButton)
                assert.isTrue(searchPage.expectTitleToContain(testData.searchTextCriteria))
            })
        })
    }
}
module.exports = new ResultsPageTest()