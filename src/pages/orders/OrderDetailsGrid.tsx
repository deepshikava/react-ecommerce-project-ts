import type { LoadCartType } from "../../types/cart";
import type { OrderType } from "../../types/order";
import { OrderProduct } from "./OrderProduct";

type OrderDetailsGridProps = {
  order: OrderType;
  loadCart: LoadCartType;
};

export function OrderDetailsGrid({ order, loadCart }: OrderDetailsGridProps) {
  return (
    <div className="order-details-grid">
      {order.products.map((orderProduct) => {
        return (
          <OrderProduct
            key={orderProduct.productId}
            order={order}
            orderProduct={orderProduct}
            loadCart={loadCart}
          />
        );
      })}
    </div>
  );
}
