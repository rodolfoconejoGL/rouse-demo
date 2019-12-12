const BasePage = require('./basePage')

class Settings extends BasePage {

    constructor() {
        super()
    }
    
    get infiniteScrollToggleButton() {return $(`label[for='setting_kav']`)}

}
module.exports = new Settings()