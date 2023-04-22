import { Page } from '@playwright/test';
import { fakestore } from '../Data/fakestore.json'

export class SearchingPage {

    constructor(private page: Page) { }

    async fillSearrchInput(text: string) {

        await this.page.locator(fakestore.searchhing.searchInput).fill(text)

    }


    async pressEnter() {
        await this.page.press("Input", "Enter")
    }

    async searching(text) {

        await this.fillSearrchInput(text)
        await this.pressEnter()
        await this.page.waitForLoadState('networkidle')

    }

}
