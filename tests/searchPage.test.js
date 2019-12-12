const searchPage = require('../pages/searchPage')
const BasePageTest = require('./basePage.test')

const testData = require('../data/testData')

class SearchPageTest extends BasePageTest {
    constructor() {
        super()

        describe('Home page displays and slogan text matches',() => {
            it('should work', () => {
                assert.equal(testData.baseUrl, browser.getUrl())
                assert.isTrue(searchPage.expectTextToContain(testData.sloganText, searchPage.slogan))
            })
        })
    }
}
module.exports = new SearchPageTest()