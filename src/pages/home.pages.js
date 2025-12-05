export class HomePage {
    constructor (page){
      this.page = page;
      this.singupbutton = page.getByRole('link', { name: 'Sign up' }).describe('Кнопка Sign up');
      this.loginbutton = page.getByRole('link', { name: 'Login' }).describe('Кнопка Login');
      this.profileName = page.locator(".dropdown-toggle").describe('Разворачивание dropdown')
      this.mainContent = (page.locator('main'));
      this.mainContentnav = (page.locator('nav'));
    }
async gotoregister (){
    await this.singupbutton.click();
}
async gotologin (){
    await this.loginbutton.click();
}
async openwebsite (url){
    await this.page.goto(url);
}
    
}