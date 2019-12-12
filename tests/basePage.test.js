const basePage = require('../pages/searchPage')
const testData = require('../data/testData')

class BasePageTest {
    constructor() {
        beforeEach(() => {
            basePage.navigate(testData.basePage)
            basePage.maximizeWindow()
        })
    }
}
module.exports = BasePageTest