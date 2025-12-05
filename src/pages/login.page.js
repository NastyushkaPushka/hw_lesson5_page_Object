export class LoginPage {
    constructor(page){
        this.page = page;
        this.emailinput = page.getByRole('textbox', { name: 'Email' }).describe('Инпут   с email');
        this.passwordinput = page.getByRole('textbox', { name: 'Password' }).describe('Инпут  с паролем');
        this.loginbutton = page.getByRole('button', { name: 'Login' }).describe('Кнопка login');
    }

async focusemail (){
    await this.emailinput.click();
}
async fillemail(email){
    await this.emailinput.fill(email);
}
async focuspassword (){
    await this.passwordinput.click();
}
async fillpassword (password){
    await this.passwordinput.fill(password);
}
async entrance(){
    await this.loginbutton.click();
}
}