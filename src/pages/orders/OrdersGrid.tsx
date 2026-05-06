import { OrderHeader } from "./OrderHeader";
import { OrderDetailsGrid } from "./OrderDetailsGrid";

import type { LoadCartType } from "../../types/cart";
import type { OrderType } from "../../types/order";

type OrdersPageProps = {
  orders: OrderType[];
  loadCart: LoadCartType;
};

export function OrdersGrid({ orders, loadCart }: OrdersPageProps) {
  return (
    <div className="orders-grid">
      {orders.map((order) => {
        return (
          <div key={order.id} className="order-container">
            <OrderHeader order={order} />
            <OrderDetailsGrid order={order} loadCart={loadCart} />
          </div>
        );
      })}
    </div>
  );
}
