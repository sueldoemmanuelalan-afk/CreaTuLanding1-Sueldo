import { useCart } from "../context/UseCart";
import CartList from "./Cartlist";

function CartContainer() {
  const {cart}= useCart();
  return (
    <CartList cart={cart} />
  );
}

export default CartContainer;