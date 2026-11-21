export const ERROR_MESSAGES = {
  INVALID_CREDENTIALS: 'Username and password do not match',
  LOCKED_OUT: 'this user has been locked out',
  USERNAME_REQUIRED: 'Username is required',
  PASSWORD_REQUIRED: 'Password is required',
} as const;

export const ROUTES = {
  LOGIN: '/',
  INVENTORY: '/inventory.html',
  CART: '/cart.html',
} as const;
export const TEST_DATA = {
  WRONG_PASSWORD: 'wrong_password_123',
  PRODUCT_SLUG: 'sauce-labs-backpack',
  SINGLE_ITEM_COUNT: '1',
} as const;