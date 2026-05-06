import type { CartType } from "../types/cart";

export function calculateCartTotalQuantity(cart: CartType = []) {
  let totalQuantity = 0;

  cart.forEach((cartItem) => {
    totalQuantity += cartItem.quantity;
  });
  return totalQuantity;
}
