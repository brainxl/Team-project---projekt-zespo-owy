import { Page } from '@playwright/test';
import { fakestore } from '../Data/fakestore.json'


export class WIshListPage {

    constructor(private page: Page) { }

    async choseProduct() {

        await this.page.locator(fakestore.wishlist.product).click()

    }

    async clickAddToWishList() {

        await this.page.locator(fakestore.wishlist.addToWishList).click()

    }

    async browsingWishList() {

        await this.page.locator(fakestore.wishlist.browsingWIshList).click()

    }
    async removeFromWishList() {

        await this.page.locator(fakestore.wishlist.removeFromWishList).click()
        await this.page.waitForLoadState('networkidle')

    }

    async addingProductToWishList() {

        await this.choseProduct()
        await this.clickAddToWishList()
        await this.browsingWishList()

    }

    async removeProductFromWishList() {

        await this.choseProduct()
        await this.clickAddToWishList()
        await this.browsingWishList()
        await this.removeFromWishList()

    }

}