import { test, expect } from '@playwright/test';
import { chromium, BrowserContext, Page } from '@playwright/test';
import { BeforeDoIT } from '../Page/HomePage';
import { RegistrationPage } from '../Page/RegistrationPage';
import { AccountPage } from '../Page/AccountPage';
import { AssertShoppingPage } from '../Assertion/ShoppingCartAssert';
import { ShopppingPage } from '../Page/ShoppingPage';
import { AssertAccountPage } from '../Assertion/AccountPageAssertion';
import { AssertionOfRegistration } from '../Assertion/RegistrationPageAssertion';
import { fakestore } from '../Data/fakestore.json'
import { WIshListPage } from '../Page/WishListPage';
import { WishListAssertion } from '../Assertion/WishListAssertion';
import { SearchingPage } from '../Page/SearchingPage';
import { SearchingAssertion } from '../Assertion/SearchingAssertion';



test.describe('Faksestore page', () => {
  let browser: any;
  let context: BrowserContext;
  let page: Page;


  test.beforeEach(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
    const homePage = new BeforeDoIT(page);
    homePage.navigateTOHomePage()

  });
  // Test Case Nr. 1
  // test('Check registration process', async () => {
  //   const registrationPage = new RegistrationPage(page);
  //   await registrationPage.registrationProcess();
  //   const registrationPageAssertion = new AssertionOfRegistration(page)
  //   await registrationPageAssertion.assertAfterRegistration()

  // });
  // Test Case Nr. 2
  test('Loging Process', async () => {
    const accountPage = new AccountPage(page);
    await accountPage.login();
    const registrationPageAssertion = new AssertionOfRegistration(page)
    await registrationPageAssertion.assertAfterRegistration()
    await accountPage.logOut()
  })

  // Test Case Nr. 15
  test('Wrong Loging  Process', async () => {
    const accountPage = new AccountPage(page);
    await accountPage.incorrectLogin();
    const accountPageAssert = new AssertAccountPage(page)
    await accountPageAssert.assertIncorrectLogin()

  })
  // Test Case Nr. 3
  test('Edit account ', async () => {

    const registrationPage = new RegistrationPage(page);
    await registrationPage.registrationProcess();
    const editAccoutn = new AccountPage(page);
    await editAccoutn.editAccount();
    const assertEditAccount = new AssertAccountPage(page);
    await assertEditAccount.assertEditAccount()

  });
  // Test Case Nr. 4
  test("Buying with out ticket", async () => {

    const number = fakestore.ShoppingCart.creditNumber
    const registrationPage = new RegistrationPage(page);
    await registrationPage.registrationProcess();
    const editAccoutn = new AccountPage(page);
    await editAccoutn.editAccount();
    const buyWithOutTicket = new ShopppingPage(page);
    await buyWithOutTicket.buyWithOutTicket(number)
    const withOurTicketShoppingg = new AssertShoppingPage(page)
    await withOurTicketShoppingg.assertBuyingWithoutTicket()
  });
  // Test Case Nr. 10
  test("When payment is reject", async () => {

    const number = fakestore.ShoppingCart.creditRejectNumber
    const registrationPage = new RegistrationPage(page);
    await registrationPage.registrationProcess();
    const editAccoutn = new AccountPage(page);
    await editAccoutn.editAccount();
    const buyWithOutTicket = new ShopppingPage(page);
    await buyWithOutTicket.buyWithOutTicket(number)
    const withOurTicketShoppingg = new AssertShoppingPage(page)
    await withOurTicketShoppingg.assertWhenPaymentIsReject()
  });
  // Test Case Nr. 5
  test("Using prommo code ", async () => {
    const logIn = new RegistrationPage(page);
    await logIn.logIn();
    const usePromoCode = new ShopppingPage(page);
    await usePromoCode.usingPormoCode();
    const assertPromoCode = new AssertShoppingPage(page);
    await assertPromoCode.assertAddingPromoCodeToShoppingCart()

  });

  // Test Case Nr. 8
  test("Using nore then one prommo code ", async () => {
    const registrationPage = new RegistrationPage(page);
    await registrationPage.registrationProcess();
    const usePromoCode = new ShopppingPage(page);
    await usePromoCode.usingPormoCode2();
    const assertPromoCode = new AssertShoppingPage(page);
    await assertPromoCode.assertAddingPromoCodeToShoppingCart()
    await usePromoCode.cleanAfterAssertion()
  });
  // Test Case Nr. 7
  test("Liniking prommo code is not possible", async () => {
    const registrationPage = new RegistrationPage(page);
    await registrationPage.registrationProcess();
    const usePromoCode = new ShopppingPage(page);
    await usePromoCode.linkingPromoCodeIsImpossible();
    const assertPromoCode = new AssertShoppingPage(page);
    await assertPromoCode.assertWhenLinikingIsNootPossible()
    await usePromoCode.cleanAfterAssertion()
  });
  // Test Case Nr. 6
  test("When pormo code expire", async () => {
    const registrationPage = new RegistrationPage(page);
    await registrationPage.registrationProcess();
    const usePromoCode = new ShopppingPage(page);
    await usePromoCode.proomoCodeExpire();
    const assertPromoCode = new AssertShoppingPage(page);
    await assertPromoCode.assertWhenPromoCodeExpire()
    await usePromoCode.cleanAfterAssertion()
  });
  // Test Case Nr. 13
  test("Adding to wishlist", async () => {
    const wishList = new WIshListPage(page);
    await wishList.addingProductToWishList();
    const assertForWishList = new WishListAssertion(page);
    await assertForWishList.assertWhenProducWasAddedToWIshList();

  })
  // Test Case Nr. 11
  test("Remoing from wishlist", async () => {
    const wishList = new WIshListPage(page);
    await wishList.removeProductFromWishList();
    const assertForWishList = new WishListAssertion(page);
    await assertForWishList.assertWhenProducWasRemovedFromWIshList();

  })
  // Test Case Nr. 12
  test("Searching for a trip", async () => {

    const text = fakestore.searchhing.textOne
    const doIt = new BeforeDoIT(page)
    const search = new SearchingPage(page)
    await search.searching(text)
    const assertSearching = new SearchingAssertion(page)
    await assertSearching.assertSearcherTrip()
    await doIt.reload()

  })
  // Test Case Nr. 14
  test("Searching found more products", async () => {

    const text = fakestore.searchhing.textThree
    const doIt = new BeforeDoIT(page)
    const search = new SearchingPage(page)
    await search.searching(text)
    const assertSearching = new SearchingAssertion(page)
    await assertSearching.assertWhenAreMoreTripThanOne()
    await doIt.reload()

  })
  // Test Case Nr. 15
  test("Searching found anything", async () => {

    const text = fakestore.searchhing.textTwo
    const doIt = new BeforeDoIT(page)
    const search = new SearchingPage(page)
    await search.searching(text)
    const assertSearching = new SearchingAssertion(page)
    await assertSearching.assertWhenSearchingReturnNothing()
    await doIt.reload()
  })

});