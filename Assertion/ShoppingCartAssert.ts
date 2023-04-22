import { Page, expect } from "@playwright/test";
import { fakestore } from '../Data/fakestore.json'

export class AssertShoppingPage {

    constructor(private page: Page) { }




    async assertBuyingWithoutTicket() {

        const shoppingDone = await this.page.locator(fakestore.ShoppingCart.buyingWithOutTicketDoen).innerText()
        expect(shoppingDone).toBe(fakestore.ShoppingCart.shoppingTextMessage)
    }

    async assertAddingPromoCodeToShoppingCart() {

        const messageAccepted = await this.page.locator(fakestore.ShoppingCart.promoCodeAccepted).innerText()
        expect(messageAccepted).toBe(fakestore.ShoppingCart.promoCodeAcceptedMessage)

        const nameOfPormoCodeNo1 = await this.page.locator(fakestore.ShoppingCart.nameOfPromoCodeNo1).innerText()
        expect(nameOfPormoCodeNo1).toBe(fakestore.ShoppingCart.nameOfPromoCodeNo1Text)

    }
    async assertAddingMoreTheOnePromoCodeToShoppingCart() {

        const messageAccepted = await this.page.locator(fakestore.ShoppingCart.promoCodeAccepted).innerText()
        expect(messageAccepted).toBe(fakestore.ShoppingCart.promoCodeAcceptedMessage)

        const nameOfPormoCodeNo1 = await this.page.locator(fakestore.ShoppingCart.nameOfPromoCodeNo1).innerText()
        expect(nameOfPormoCodeNo1).toBe(fakestore.ShoppingCart.nameOfPromoCodeNo1Text)

        const nameOfPormoCodeNo2 = await this.page.locator(fakestore.ShoppingCart.nameOfPromoCodeNo2).innerText()
        expect(nameOfPormoCodeNo2).toBe(fakestore.ShoppingCart.nameOfPromoCodeNo2Text)



    }
    async assertWhenLinikingIsNootPossible() {

        const validMessage = await this.page.locator(fakestore.ShoppingCart.shoppingCartAlert).innerText()
        expect(validMessage).toBe(fakestore.ShoppingCart.linikingIsImposibleMessage)

    }
    async assertWhenPromoCodeExpire() {

        const validMessage = await this.page.locator(fakestore.ShoppingCart.shoppingCartAlert).innerText()
        expect(validMessage).toBe(fakestore.ShoppingCart.promoCodeExpireMessage)

    }
    async assertWhenPaymentIsReject() {
        const validMessage = await this.page.locator(fakestore.ShoppingCart.shoppingCartAlert).innerText()
        expect(validMessage).toBe(fakestore.ShoppingCart.creditCardRejectMessage)

    }

}