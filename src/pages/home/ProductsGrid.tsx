import type { LoadCartType } from "../../types/cart";
import type { ProductType } from "../../types/product";
import { Product } from "./Product";

type ProductGridProps = {
  products: ProductType[];
  loadCart: LoadCartType;
};

export function ProductsGrid({ products, loadCart }: ProductGridProps) {
  return (
    <div className="products-grid">
      {products.map((product) => {
        return (
          <Product key={product.id} product={product} loadCart={loadCart} />
        );
      })}
    </div>
  );
}
