export class HomePage {
    constructor (page){
      this.page = page;
      this.singupbutton = page.getByRole('link', { name: 'Sign up' }).describe('Кнопка Sign up');
      this.loginbutton = page.getByRole('link', { name: 'Login' }).describe('Кнопка Login');
      this.profileName = page.locator(".dropdown-toggle").describe('Разворачивание dropdown')
      this.mainContent = (page.locator('main'));
      this.mainContentnav = (page.locator('nav'));
      this.articleButton = page.getByRole('link', { name: 'New Article' }).describe('Кнопка New Article');

    }
async goToRegister (url){
    await this.page.goto(url);
    await this.singupbutton.click();
}
async goToLogin (url){
    await this.page.goto(url);
    await this.loginbutton.click();
}    
async goToArticle (){
    await this.articleButton.click();

}
}