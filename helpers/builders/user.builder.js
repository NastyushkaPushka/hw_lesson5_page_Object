import { faker } from '@faker-js/faker';
export class UserBuilder {
    withEmail(email) {
        this.email = email ?? faker.internet.email()
        return this;
    }

    withName (name) {
        this.name = name ?? faker.person.firstName()
        return this;
    }

    withPassword (){
        this.password = faker.internet.password()
        return this;
    }
    build(){
        const result = {...this};
        return result;
    }

}
