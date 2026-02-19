export function calculateCartTotalQuantity(cart) {
  let totalQuantity = 0;

  cart &&
    cart.forEach((cartItem) => {
      totalQuantity += cartItem.quantity;
    });
  return totalQuantity;
}
