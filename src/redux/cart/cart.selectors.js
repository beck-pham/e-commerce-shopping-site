// input selectors doesn't use createSelector
// output selectors use createSelector
import { createSelector } from 'reselect';

// input selector, search through the whole reducer state ("next state in console") and get cart state
const selectCart = state => state.cart;

// output selector, a property on the cart
export const selectCartItems = createSelector(
  [selectCart], //first argument is a collection of input selector
  cart => cart.cartItems // second arguement is a function that return a value of out the selector
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], cartItems =>
  cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);
