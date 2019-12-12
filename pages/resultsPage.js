const BasePage = require('./basePage')

class Results extends BasePage {

    constructor() {
        super()
    }
    
    get body() {return $('<body />')}
    
}
module.exports = new Results()