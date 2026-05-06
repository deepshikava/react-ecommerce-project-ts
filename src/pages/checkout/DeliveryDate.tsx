import dayjs from "dayjs";
import type { DeliveryOptionsType } from "../../types/deliveryOptions";
import type { CartItemType } from "../../types/cart";

type DeliveryDateProps = {
  deliveryOptions: DeliveryOptionsType;
  cartItem: CartItemType;
};

export function DeliveryDate({ deliveryOptions, cartItem }: DeliveryDateProps) {
  const selectedDeliveryOption = deliveryOptions.find(
    (deliveryOption) => deliveryOption.id === cartItem.deliveryOptionId,
  );

  if (!selectedDeliveryOption) {
    return <div className="delivery-date">Delivery date: N/A</div>;
  }

  return (
    <div className="delivery-date">
      Delivery date:{" "}
      {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format(
        "dddd, MMMM D",
      )}
    </div>
  );
}
