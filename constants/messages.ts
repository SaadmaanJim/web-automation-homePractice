export const ERROR_MESSAGES = {
  INVALID_CREDENTIALS: 'Username and password do not match',
  LOCKED_OUT: 'this user has been locked out',
  USERNAME_REQUIRED: 'Username is required',
  PASSWORD_REQUIRED: 'Password is required',
  FIRST_NAME_REQUIRED: 'First Name is required',
  LAST_NAME_REQUIRED: 'Last Name is required',
  POSTAL_CODE_REQUIRED: 'Postal Code is required',
} as const;

export const ROUTES = {
  LOGIN: '/',
  INVENTORY: '/inventory.html',
  CART: '/cart.html',
} as const;

export const CHECKOUT_DATA = {
  FIRST_NAME: 'Sadman',
  LAST_NAME: 'Jim',
  POSTAL_CODE: '1230',
} as const;

export const EXPECTED_PRICES = {
  ITEM_TOTAL: '$39.98', // Backpack + Bike Light
  TAX: '$3.20',
  TOTAL: '$43.18',
} as const;

export const TEST_DATA = {
  WRONG_PASSWORD: 'wrong_password_123',
  PRODUCT_SLUG: 'sauce-labs-backpack',
  SINGLE_ITEM_COUNT: '1',
  SECOND_PRODUCT_SLUG: 'sauce-labs-bike-light',
} as const;

export const CONFIRMATION_TEXT = 'Thank you for your order!';