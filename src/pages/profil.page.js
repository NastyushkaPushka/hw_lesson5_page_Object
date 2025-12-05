export class ProfilPage {
    constructor (page){
      this.page = page;
      this.menu = page.locator('.cursor-pointer');
      this.profilebutton = page.getByRole('link', { name: ' Profile' }).describe('Кнопка Profil в dropdown');
      this.logoutbutton = page.getByRole('link', { name: ' Logout' }).describe('Кнопка Logout в dropdown');
      this.filterbutton = page.getByRole('button', { name: 'реклама' }).describe('Чипсина(фильтр) "реклама" ')
      this.filter = page.locator('button.nav-link.active').describe('Разворачивание dropdown')
      this.mainContentnav = page.locator('nav');
      this.mainContent = page.locator('main');
 
    }
async openmenu (){
    await this.menu.click();
}
async gotoprofile (){
    await this.profilebutton.click();
}
async logout(){
    await this.logoutbutton.click();
}
async filterselect(){
    await this.filterbutton.click();
}
}

  