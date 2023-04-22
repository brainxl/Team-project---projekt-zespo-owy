import { Page, expect } from "@playwright/test";
import { fakestore } from '../Data/fakestore.json'
export class AssertionOfRegistration {

    constructor(private page: Page) { }

    async assertAfterRegistration(): Promise<void> {
        const title = (await this.page.title()).toString();
        expect(title).toBe(fakestore.accountPage.accountTile);

        const welcomeMessage = await this.page.locator(fakestore.accountPage.welcomeMessage).innerText();
        expect(welcomeMessage).toBe(fakestore.accountPage.WelomeTextMessage);

        const cocpit = await this.page.locator(fakestore.accountPage.cocpit).innerText()
        expect(cocpit).toBe(fakestore.accountPage.cocpitName)

        const myOrder = await this.page.locator(fakestore.accountPage.myOrder).innerText()
        expect(myOrder).toBe(fakestore.accountPage.myOrderName)

        const editAccount = await this.page.locator(fakestore.accountPage.editAccount).innerText()
        expect(editAccount).toBe(fakestore.accountPage.editAccountName)

        const address = await this.page.locator(fakestore.accountPage.address).innerText()
        expect(address).toBe(fakestore.accountPage.addressName)

        const logOut = await this.page.locator(fakestore.accountPage.logOut).innerText()
        expect(logOut).toBe(fakestore.accountPage.logOutName)

    }
}
