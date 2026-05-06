export type OrderType = {
  id: string;
  orderTimeMs: number;
  totalCostCents: number;
  products: {
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
  }[];
};
