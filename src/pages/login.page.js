export class LoginPage {
    constructor(page){
        this.page = page;
        this.emailinput = page.getByRole('textbox', { name: 'Email' }).describe('Инпут   с email');
        this.passwordinput = page.getByRole('textbox', { name: 'Password' }).describe('Инпут  с паролем');
        this.loginbutton = page.getByRole('button', { name: 'Login' }).describe('Кнопка login');
    }

async login (email, password){
    await this.emailinput.waitFor({ state: 'visible' });
    await this.emailinput.click()
    await this.emailinput.fill(email)
    await this.passwordinput.click()
    await this.passwordinput.fill(password)
    await this.loginbutton.click()
}

}