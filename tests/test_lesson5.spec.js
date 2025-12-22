import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { App } from '../src/pages/app.page';
import { UserBuilder } from '../helpers/builders/index.builder'


const url = 'https://realworld.qa.guru/';
const description = faker.lorem.words(3);
const title = faker.lorem.paragraph(3);
const article = faker.lorem.paragraph(5);
const tags = faker.word.adjective(); 
const user = new UserBuilder().withEmail().withName().withPassword().build();
const {email, password, name} = user;

test('Пользователь зарегестрироан, применение фильтра', async ({ page } ) => {
    const app = new App(page);

    await app.homePage.goToRegister(url);
    await app.registretionPage.registration(name, email, password);
    await expect(app.homePage.profileName).toContainText(name); // Пользователь зарегестрировался 

    
    await app.profilePage.filterSelect();
    await expect(app.profilePage.filter).toBeVisible(); // Фильтр применился 
});
test('Авторизация и разлогин', async ({ page } ) => {

    const app = new App(page);

    await app.homePage.goToLogin(url);
    await app.loginPage.login(email, password);
    await expect(app.homePage.profileName).toContainText(name); // Пользователь авторизовался 

    await app.profilePage.openMenu();
    await app.profilePage.logOut();
    await expect(app.homePage.mainContentnav).toContainText('Sign up'); // Успешный разлогин 
   
});
test('Создание статьи', async ({ page } ) => {
    const app = new App(page);

    await app.homePage.goToLogin(url);
    await app.loginPage.login(email, password);
    await app.homePage.goToArticle()
    await app.articlePage.addAticle(title, description, article, tags);
    await app.profilePage.openMenu();
    await app.profilePage.goToProfile();
    await expect(app.profilePage.title).toContainText(description); // Успешно добавили cтатьи
  }
);
test('Удаление статьи', async ({ page } ) => {
    const app = new App(page);
    await app.homePage.goToLogin(url);
    await app.loginPage.login(email, password);
    await app.profilePage.openMenu();
    await app.profilePage.goToProfile();
    await app.profilePage.openArticle();
    page.on('dialog', async dialog => {
      expect(dialog.message()).toBe('Want to delete the article?');
      await dialog.accept(); // Нажимаем OK
    });
    await app.openArticlePage.deleteAticle();
    await expect(app.profilePage.noArticles).toBeVisible(); // Успешно удалили cтатью
  }
);
test('Успешно добавили описание', async ({ page } ) => {
    const app = new App(page);

    await app.homePage.goToLogin(url);
    await app.loginPage.login(email, password);
    await app.profilePage.openMenu();
    await app.profilePage.goToProfile();
    await app.settingPage.openEditPage();
    await app.settingPage.changeAboutYou(description);
    await app.profilePage.openMenu();
    await app.profilePage.goToProfile();
    await expect(app.settingPage.mainContent).toContainText(description); // Успешно добавили описание 
 });