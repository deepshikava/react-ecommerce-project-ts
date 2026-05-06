import Header from "../components/Header";
import "./NotFoundPage.css";
import type { CartType } from "../types/cart";

type NotFoundPageProps = {
  cart: CartType;
};

const NotFound = ({ cart }: NotFoundPageProps) => (
  <>
    <title>404 Page Not Found</title>
    <link rel="icon" type="image/svg+xml" href="home-favicon.png" />

    <Header cart={cart} />

    <div className="not-found-message">Page Not Found</div>
  </>
);

export default NotFound;
