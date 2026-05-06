import { DeliveryOptions } from "./DeliveryOptions";
import { CartItemDetails } from "./CartItemDetails";
import { DeliveryDate } from "./DeliveryDate";
import type { CartType, LoadCartType } from "../../types/cart";
import type { DeliveryOptionsType } from "../../types/deliveryOptions";

type OrderSummaryProps = {
  cart: CartType;
  deliveryOptions: DeliveryOptionsType;
  loadCart: LoadCartType;
};

export function OrderSummary({
  cart,
  deliveryOptions,
  loadCart,
}: OrderSummaryProps) {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 &&
        cart.map((cartItem) => {
          return (
            <div key={cartItem.productId} className="cart-item-container">
              <DeliveryDate
                deliveryOptions={deliveryOptions}
                cartItem={cartItem}
              />
              <div className="cart-item-details-grid">
                <CartItemDetails cartItem={cartItem} loadCart={loadCart} />
                <DeliveryOptions
                  deliveryOptions={deliveryOptions}
                  cartItem={cartItem}
                  loadCart={loadCart}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
}
