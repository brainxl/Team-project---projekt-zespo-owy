import { Page } from '@playwright/test';
import { fakestore } from '../Data/fakestore.json'


export class ShopppingPage {

    constructor(private page: Page) { }

    async navigateToHOmePage() {

        await this.page.goto(fakestore.URL)
    }

    async choseTripToBuy() {

        await this.page.locator(fakestore.addTripToShoppingCart).click()

    }
    async goToShopppignCart() {

        await this.page.locator(fakestore.seeShoppingCart).click()

    }
    async goTOpayment() {
        await this.page.locator(fakestore.ShoppingCart.goToPayment).click()
        await this.page.waitForLoadState('networkidle')
    }
    async fillStreetInput() {

        await this.page.locator(fakestore.ShoppingCart.streetInput).type(fakestore.ShoppingCart.streetName)
    }
    async fillPostalCode() {

        await this.page.locator(fakestore.ShoppingCart.postalCOdeInput).type(fakestore.ShoppingCart.postalCOde)

    }

    async fillCityInput() {

        await this.page.locator(fakestore.ShoppingCart.cityInput).type(fakestore.ShoppingCart.city)

    }

    async fillPhoneNumber() {

        await this.page.locator(fakestore.ShoppingCart.numberOfPhone).type(fakestore.ShoppingCart.phoneNumber)

    }
    async fillCreditCardNumber(number: string) {

        await this.page.locator(fakestore.ShoppingCart.numberOfCreditCard).click()
        await this.page.locator(fakestore.ShoppingCart.numberOfCreditCard).type(number)

    }
    async fillDateOfExpire() {
        await this.page.locator(fakestore.ShoppingCart.dateOfExpire).click()
        await this.page.locator(fakestore.ShoppingCart.dateOfExpire).type(fakestore.ShoppingCart.expireDate)
        await this.page.waitForLoadState('networkidle')
    }

    async fillCVNumber() {
        await this.page.locator(fakestore.ShoppingCart.CVCElement).click()
        await this.page.locator(fakestore.ShoppingCart.CVCElement).type(fakestore.ShoppingCart.CVC)
        await this.page.waitForLoadState('networkidle')
    }

    async confrimTerms() {

        await this.page.locator(fakestore.ShoppingCart.termsInput).click()
        await this.page.waitForLoadState('networkidle')

    }

    async pressBuyAndPay() {


        await this.page.getByRole('button', { name: 'Kupuję i płacę' }).click();
        await this.page.waitForTimeout(15000)

    }

    async usingPromoCodeNo1() {

        await this.page.locator(fakestore.ShoppingCart.promoCodeInput).click()
        await this.page.locator(fakestore.ShoppingCart.promoCodeInput).type(fakestore.ShoppingCart.promoCodeNo1)
        await this.page.waitForLoadState('networkidle')
    }

    async usingPromoCodeNo2() {

        await this.page.locator(fakestore.ShoppingCart.promoCodeInput).click()
        await this.page.locator(fakestore.ShoppingCart.promoCodeInput).type(fakestore.ShoppingCart.promoCodeNo2)
        await this.page.waitForLoadState('networkidle')
    }
    async usingPromoCodeNo3() {

        await this.page.locator(fakestore.ShoppingCart.promoCodeInput).click()
        await this.page.locator(fakestore.ShoppingCart.promoCodeInput).type(fakestore.ShoppingCart.promoCodeNo3)
        await this.page.waitForLoadState('networkidle')
    }


    async usingPromoCodeNo4() {

        await this.page.locator(fakestore.ShoppingCart.promoCodeInput).click()
        await this.page.locator(fakestore.ShoppingCart.promoCodeInput).type(fakestore.ShoppingCart.promoCodeNo4)
        await this.page.waitForLoadState('networkidle')
    }

    async clickConfirmPromoCode() {

        await this.page.locator(fakestore.ShoppingCart.confirmPromoCode).click()

    }



    async cleanAfterAssertion() {

        await this.page.locator(fakestore.ShoppingCart.removeFromShoppingCart).click()
        await this.page.locator(fakestore.ShoppingCart.backToSHop).click()

    }

    async buyWithOutTicket(number) {

        await this.navigateToHOmePage()
        await this.choseTripToBuy()
        await this.goToShopppignCart()
        await this.goTOpayment()
        await this.fillStreetInput()
        await this.fillCityInput()
        await this.fillPostalCode()
        await this.fillPhoneNumber()
        await this.fillCreditCardNumber(number)
        await this.fillDateOfExpire()
        await this.fillCVNumber()
        await this.confrimTerms()
        await this.pressBuyAndPay()

    }

    async usingPormoCode() {

        await this.navigateToHOmePage()
        await this.choseTripToBuy()
        await this.goToShopppignCart()
        await this.usingPromoCodeNo1()
        await this.clickConfirmPromoCode()

    }

    async usingPormoCode2() {

        await this.navigateToHOmePage()
        await this.choseTripToBuy()
        await this.goToShopppignCart()
        await this.usingPromoCodeNo1()
        await this.clickConfirmPromoCode()
        await this.usingPromoCodeNo2()
        await this.clickConfirmPromoCode()

    }

    async linkingPromoCodeIsImpossible() {

        await this.navigateToHOmePage()
        await this.choseTripToBuy()
        await this.goToShopppignCart()
        await this.usingPromoCodeNo4()
        await this.clickConfirmPromoCode()
        await this.usingPromoCodeNo1()
        await this.clickConfirmPromoCode()

    }


    async proomoCodeExpire() {

        await this.navigateToHOmePage()
        await this.choseTripToBuy()
        await this.goToShopppignCart()
        await this.usingPromoCodeNo3()
        await this.clickConfirmPromoCode()


    }



}