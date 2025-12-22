export class ArticlePage {
    constructor(page){
        this.page = page;
        this.titleInput = page.getByPlaceholder('Article Title').describe('Инпут  с заголовком');
        this.aboutInput = page.getByPlaceholder("What's this article about?").describe('Инпут   с описание');
        this.articleInput = page.getByPlaceholder('Write your article' ).describe('Инпут  с текстом');
        this.tagsInput = page.getByPlaceholder('Enter tags' ).describe('Инпут  с тегами');
        this.publishButton = page.getByRole('button', { name: 'Publish Article' }).describe('Кнопка Опубликовать');
        this.articlePublish = page.getByRole('container');
    }
async addAticle (title, description, article, tags){
    await this.titleInput.click()
    await this.titleInput.fill(description)
    await this.aboutInput.click()
    await this.aboutInput.fill(title)
    await this.articleInput.click()
    await this.articleInput.fill(article)
    await this.tagsInput.click()
    await this.tagsInput.fill(tags)
    await this.publishButton.click()
}
}