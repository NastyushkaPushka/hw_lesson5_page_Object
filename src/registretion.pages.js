export class RegistrationPage {
    constructor(page){
        this.page = page;
        this.nameinput = page.getByRole('textbox', { name: 'Your Name' }).describe('Инпут  с именем');
        this.emailinput = page.getByRole('textbox', { name: 'Email' }).describe('Инпут   с email');
        this.passwordinput = page.getByRole('textbox', { name: 'Password' }).describe('Инпут  с паролем');
        this.singupbutton = page.getByRole('button', { name: 'Sign up' }).describe('Кнопка Сохранить');
    }
async focusname (){
    await this.nameinput.click();
}
async fillname(name){
    await this.nameinput.fill(name);
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
async registretion(){
    await this.singupbutton.click();
}
}
