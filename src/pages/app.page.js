import {HomePage, RegistrationPage, ProfilPage, SettingPage, LoginPage, ArticlePage,OpenArticlePage} from './index'
export class App {
    constructor (page) {
        this.page = page;
        this.profilePage = new ProfilPage(page);
        this.loginPage = new LoginPage(page);
        this.settingPage = new SettingPage(page);
        this.articlePage = new ArticlePage(page);
        this.homePage = new HomePage(page);
        this.registretionPage = new RegistrationPage(page);
        this.openArticlePage = new OpenArticlePage(page);
    }
}
