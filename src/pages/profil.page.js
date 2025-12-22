export class ProfilPage {
    constructor (page, title){
      this.page = page;
      this.menu = page.locator('.cursor-pointer');
      this.profilebutton = page.getByRole('link', { name: ' Profile' }).describe('Кнопка Profil в dropdown');
      this.logoutbutton = page.getByRole('link', { name: ' Logout' }).describe('Кнопка Logout в dropdown');
      this.filterbutton = page.getByRole('button', { name: 'реклама' }).describe('Чипсина(фильтр) "реклама" ');
      this.filter = page.locator('button.nav-link.active').describe('Разворачивание dropdown');
      this.mainContentnav = page.locator('nav');
      this.mainContent = page.locator('main');
      this.title = page.locator('h1').first();
      this.noArticles = page.getByText('Articles not available.');
 
    }
async openMenu (){
    await this.menu.click();
}
async goToProfile (){
    await this.profilebutton.click();
}
async logOut(){
    await this.logoutbutton.click();
}
async filterSelect(){
    await this.filterbutton.click();
}
async openArticle(){
    await this.title.click()
}
}

  