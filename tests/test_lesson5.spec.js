import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { HomePage } from '../src/pages/home.pages';
import { RegistrationPage } from '../src/registretion.pages';
import { ProfilPage } from '../src/pages/profil.page';
import { SettingPage } from '../src/pages/settings.page';
import { LoginPage } from '../src/pages/login.page';


const url = 'https://realworld.qa.guru/';
const description = faker.word.adjective(); 
const filter = 'реклама';
const user = {
    email : faker.internet.email(),
    password : faker.internet.password(),
    name : faker.person.firstName()
};


test.only('Проверки основного функционала сайта', async ({ page } ) => {
    const {email, password, name} = user;

    const homepage = new HomePage(page);
    await homepage.openwebsite(url);
    await homepage.gotoregister();

    const registretionpage = new RegistrationPage(page);
    await registretionpage.focusname();
    await registretionpage.fillname(name);
    await registretionpage.focusemail();
    await registretionpage.fillemail(email);
    await registretionpage.focuspassword();
    await registretionpage.fillpassword(password);
    await registretionpage.registretion();
    await expect(homepage.profileName).toContainText(name); // Пользователь зарегестрировался 
    await expect(homepage.mainContent).toContainText('Articles not available.'); // У нового пользователя нет избранного

    const profilepage = new ProfilPage(page);
    await profilepage.filterselect();
    await expect(profilepage.filter).toBeVisible(); // Фильтр применился 
    
    
    const loginpage = new LoginPage(page);
    await profilepage.openmenu();
    await profilepage.logout();
    await expect(homepage.mainContentnav).toContainText('Sign up'); // Успешный разлогин 
    await homepage.gotologin();
    await loginpage.focusemail();
    await loginpage.fillemail(email);
    await loginpage.focuspassword();
    await loginpage.fillpassword(password);
    await loginpage.entrance();
    await expect(homepage.profileName).toContainText(name); // Пользователь авторизовался 

    const settingpage = new SettingPage(page);
    await profilepage.openmenu();
    await profilepage.gotoprofile();
    await expect(profilepage.mainContent).toContainText('My Articles'); // У нового пользователя нет артиклов
    await settingpage.openeditpage();
    await settingpage.openaboutyou();
    await settingpage.fillaboutyou(description); 
    await settingpage.saveupdatesetting();
    await profilepage.openmenu();
    await profilepage.gotoprofile();
    await expect(settingpage.mainContent).toContainText(description); // Успешно добавили описание 

  });