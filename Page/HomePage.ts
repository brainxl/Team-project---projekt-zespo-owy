import { Page } from '@playwright/test';
import { fakestore } from '../Data/fakestore.json'

export class BeforeDoIT {

    constructor(private page: Page) { }

    async navigateTOHomePage() {
        await this.page.goto(fakestore.URL)
    }

    async reload() {
        await this.page.reload()
    }

}