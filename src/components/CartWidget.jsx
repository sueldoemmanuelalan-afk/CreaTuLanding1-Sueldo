import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function CartWidget() {
  const { getProductQuantity } = useContext(CartContext);
  const getTotalProducts = getProductQuantity();
  const navigate = useNavigate();
  
  return (
    <div className="relative">
      <button onClick={() => navigate("/cart")} className="p-2">
      <span className="text-2xl">🛒</span>
      <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
        {getTotalProducts}
      </span>
      </button>
    </div>
  );
}

export default CartWidget;
