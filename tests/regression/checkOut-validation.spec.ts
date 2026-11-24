import {test, expect} from '../../fixtures/pages.fixtures';
import { CHECKOUT_DATA, ERROR_MESSAGES, TEST_DATA } from '../../constants/messages';


const validationCase = [

{
   id: 'TC-CHK-02',
   title: 'empty first name shows a validation error',
   firstName: '',
   lastName: CHECKOUT_DATA.LAST_NAME,
   postalCode: CHECKOUT_DATA.POSTAL_CODE,
   expectedError: ERROR_MESSAGES.FIRST_NAME_REQUIRED,    
},

{
   id: 'TC-CHK-03',
   title: 'empty last name shows a validation error',
   firstName: CHECKOUT_DATA.FIRST_NAME,
   lastName: '',
   postalCode: CHECKOUT_DATA.POSTAL_CODE,
   expectedError: ERROR_MESSAGES.LAST_NAME_REQUIRED,    
},

{
   id: 'TC-CHK-04',
   title: 'empty postal code shows a validation error',
   firstName: CHECKOUT_DATA.FIRST_NAME,
   lastName: CHECKOUT_DATA.LAST_NAME,
   postalCode: '',
   expectedError: ERROR_MESSAGES.POSTAL_CODE_REQUIRED,    
}
];


test.describe('Checkout - validation', () => {
  for (const { id, title, firstName, lastName, postalCode, expectedError } of validationCase) {
    test(`${id}: ${title}`, async ({ inventoryPage, cartPage, checkoutPage }) => {
      await inventoryPage.addToCart(TEST_DATA.PRODUCT_SLUG);
      await inventoryPage.openCart();
      await cartPage.proceedToCheckout();

      await checkoutPage.fillInformation(firstName, lastName, postalCode);
      await checkoutPage.continue();

      await expect(checkoutPage.errorContainer).toContainText(expectedError);
    });
  }
});