export class RegistrationPage {
    constructor(page){
        this.page = page;
        this.nameinput = page.getByRole('textbox', { name: 'Your Name' }).describe('Инпут  с именем');
        this.emailinput = page.getByRole('textbox', { name: 'Email' }).describe('Инпут   с email');
        this.passwordinput = page.getByRole('textbox', { name: 'Password' }).describe('Инпут  с паролем');
        this.singupbutton = page.getByRole('button', { name: 'Sign up' }).describe('Кнопка Сохранить');
    }
async registration (name, email, password){
    await this.nameinput.waitFor({ state: 'visible' });
    await this.nameinput.click()
    await this.nameinput.fill(name)
    await this.emailinput.click()
    await this.emailinput.fill(email)
    await this.passwordinput.click()
    await this.passwordinput.fill(password)
    await this.singupbutton.click()
}

}
