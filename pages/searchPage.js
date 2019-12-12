const BasePage = require('./basePage')

class Search extends BasePage {

    constructor() {
        super()
    }
    
    get slogan() { return $('.tag-home__item') }
    get menu() {return $('.header__button--menu')}
    get dismissMenu() {return $('.badge-link__close')}
    get menuHeader() {return $('.nav-menu__heading')}
    get searchBar() {return $('#search_form_input_homepage')}
    get searchButton() {return $('#search_button_homepage')}
    get otherSettings() {return $(`=Other Settings`)}
    
}
module.exports = new Search()