import { Page, expect } from "@playwright/test";
import { fakestore } from '../Data/fakestore.json'

export class WishListAssertion {

    constructor(private page: Page) { }

    async assertWhenProducWasAddedToWIshList() {

        const myWIshList = await this.page.locator(fakestore.wishlist.myWIshList).innerText();
        expect(myWIshList).toBe(fakestore.wishlist.myWishListText);

        const welcomeMessage = await this.page.locator(fakestore.wishlist.productName).innerText();
        expect(welcomeMessage).toBe(fakestore.wishlist.productNameText);
    }

    async assertWhenProducWasRemovedFromWIshList() {

        const welcomeMessage = await this.page.locator(fakestore.wishlist.removeMessage).innerText();
        expect(welcomeMessage).toContain(fakestore.wishlist.removeTextMessage);
    }
}