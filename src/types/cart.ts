export type CartItemType = {
  productId: string;
  quantity: number;
  deliveryOptionId: string;
  product: {
    image: string;
    name: string;
    priceCents: number;
  };
};

export type CartType = CartItemType[];

export type LoadCartType = () => Promise<void>;
