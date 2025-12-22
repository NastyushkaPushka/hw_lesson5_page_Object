export class OpenArticlePage {
    constructor(page){
        this.page = page;
        this.articleDelete =  page.locator('button.btn.btn-sm', { hasText: 'Delete Article' }).first().describe('Кнопка Удалить артикл');
    }
async deleteAticle (){
    await this.articleDelete.click()
}
}