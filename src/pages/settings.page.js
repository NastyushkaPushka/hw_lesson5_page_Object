 export class SettingPage {
    constructor (page) {
        this.page = page;
        this.editbutton = page.getByRole('link', { name: ' Edit Profile Settings' }).describe('Кнопка редактирование профиля');
        this.aboutyouinput = page.getByRole('textbox', { name: 'Short bio about you' }).describe('Инпут с описанием');
        this.updatebutton = page.getByRole('button', { name: 'Update Settings' }).describe('Кнопка Сохранить');
        this.mainContent = page.locator('main');
    }
    async openEditPage () {
        await this.editbutton.click();
    }
    async changeAboutYou(description) {
        await this.aboutyouinput.click()
        await this.aboutyouinput.fill(description)
        await this.updatebutton.click()
    }
   
 }  
