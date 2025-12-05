 export class SettingPage {
    constructor (page) {
        this.page = page;
        this.editbutton = page.getByRole('link', { name: ' Edit Profile Settings' }).describe('Кнопка редактирование профиля');
        this.aboutyouinput = page.getByRole('textbox', { name: 'Short bio about you' }).describe('Инпут с описанием');
        this.updatebutton = page.getByRole('button', { name: 'Update Settings' }).describe('Кнопка Сохранить');
        this.mainContent = page.locator('main');
    }
    async openeditpage () {
        await this.editbutton.click();
    }
    async openaboutyou() {
        await this.aboutyouinput.click();
    }
    async fillaboutyou (description) {
        await this.aboutyouinput.fill(description);
    }
    async saveupdatesetting () {
        await this.updatebutton.click();
    }
 }  
