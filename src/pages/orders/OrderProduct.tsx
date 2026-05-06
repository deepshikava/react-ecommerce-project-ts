import dayjs from "dayjs";
import axios from "axios";
import { Link } from "react-router";
import BuyAgainIcon from "../../assets/images/icons/buy-again.png";
import type { OrderType } from "../../types/order";
import type { LoadCartType } from "../../types/cart";

type OrderProductProps = {
  order: OrderType;
  orderProduct: {
    productId: "string";
    quantity: number;
    estimatedDeliveryTimeMs: number;
    product: {
      id: string;
      image: string;
      name: string;
      rating: {
        stars: number;
        count: number;
      };
      priceCents: number;
      keywords: string[];
    };
  };
  loadCart: LoadCartType;
};

export function OrderProduct({
  order,
  orderProduct,
  loadCart,
}: OrderProductProps) {
  const addToCart = async () => {
    await axios.post("/api/cart-items", {
      productId: orderProduct.product.id,
      quantity: 1,
    });
    await loadCart();
  };

  return (
    <>
      <div className="product-image-container">
        <img src={orderProduct.product.image} />
      </div>

      <div className="product-details">
        <div className="product-name">{orderProduct.product.name}</div>
        <div className="product-delivery-date">
          Arriving on:{" "}
          {dayjs(orderProduct.estimatedDeliveryTimeMs).format("MMMM D")}
        </div>
        <div className="product-quantity">
          Quantity: {orderProduct.quantity}
        </div>
        <button className="buy-again-button button-primary">
          <img className="buy-again-icon" src={BuyAgainIcon} />
          <span className="buy-again-message" onClick={addToCart}>
            Add to Cart
          </span>
        </button>
      </div>

      <div className="product-actions">
        <Link to={`/tracking/${order.id}/${orderProduct.product.id}`}>
          <button className="track-package-button button-secondary">
            Track package
          </button>
        </Link>
      </div>
    </>
  );
}
