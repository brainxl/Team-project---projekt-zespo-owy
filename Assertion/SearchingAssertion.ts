import { Page, expect } from "@playwright/test";
import { fakestore } from '../Data/fakestore.json'

export class SearchingAssertion {

    constructor(private page: Page) { }

    async assertSearcherTrip() {

        const searchedTrip = await this.page.locator(fakestore.searchhing.searchedProduct).innerText()
        expect(searchedTrip).toBe(fakestore.searchhing.textOne)

    }
    async assertWhenSearchingReturnNothing() {

        const searchedTrip = await this.page.locator(fakestore.searchhing.notFoundMessage).innerText()
        expect(searchedTrip).toBe(fakestore.searchhing.notFoundMessageText)

    }

    async assertWhenAreMoreTripThanOne() {

        const elements = await this.page.locator(fakestore.searchhing.moreThanOneTripFound).all();
        let containsExpectedText = false;

        for (const element of elements) {
            const text = await element.innerText();
            if (text.includes(fakestore.searchhing.textThree)) {
                containsExpectedText = true;
                break;
            }
        }

        expect(containsExpectedText).toBeTruthy();
    }
}