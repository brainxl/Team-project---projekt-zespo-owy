import { Page } from '@playwright/test';
import { fakestore } from '../Data/fakestore.json'


export class RegistrationPage {

    constructor(private page: Page) { }

    async clickOnMyAccount() {
        await this.page.locator(fakestore.myAccount).click()
    }

    async generateEmail(): Promise<string> {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        let email = '';

        // Generate a random prefix of 8 characters
        for (let i = 0; i < 8; i++) {
            email += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        }

        // Add a random number between 1000 and 9999
        email += Math.floor(Math.random() * 9000) + 1000;

        // Add a random top-level domain
        const tlds = ['.com', '.net', '.org'];
        email += `@test${tlds[Math.floor(Math.random() * tlds.length)]}`;

        return email;
    }
    async fillEmail() {
        await this.page.locator(fakestore.registration.inputEmail).type(await this.generateEmail())
    }
    async fillLoginEmail() {
        await this.page.locator(fakestore.accountPage.inputEmailLogin).type(fakestore.accountPage.login)
    }
    async fillLoginPassword(): Promise<void> {
        await this.page.locator(fakestore.accountPage.inputPasswordLogin).type(fakestore.accountPage.password)
    }
    async clickLogIn() {

        await this.page.locator(fakestore.accountPage.loginButton).click()
        await this.page.waitForLoadState("networkidle")

    }

    async fiillPassword() {

        const password = fakestore.registration.password
        await this.page.locator(fakestore.registration.inputPassword).type(password)

    }

    async clickRegisterNow() {

        await this.page.locator(fakestore.registration.registerNow).click()
        await this.page.waitForLoadState("networkidle")

    }

    async logOut() {
        await this.page.locator(fakestore.accountPage.logOut).click()
    }

    async registrationProcess() {

        await this.clickOnMyAccount()
        await this.fillEmail()
        await this.fiillPassword()
        await this.clickRegisterNow()

    }

    async logIn() {

        await this.clickOnMyAccount()
        await this.fillLoginEmail()
        await this.fillLoginPassword()
        await this.clickLogIn()

    }

}

