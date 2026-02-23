import { Link } from "react-router";
import CartItem from "./CartItem";
import { useNavigate } from "react-router";

function CartList({ cart }) {
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );
  const navigate = useNavigate();
  const formattedTotal = total.toFixed(2);

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-8 text-center mt-15 text-yellow-300">
        Tu Lista de Compras
      </h2>
      <div className="space-y-6 mb-10">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="flex flex-col lg:flex-row gap-4 justify-between mt-10 items-center">
        <Link to="/" className="bg-gray-300 px-6 py-3 rounded-xl hover:bg-gray-400">
          Seguir comprando
        </Link>
        <div className="bg-red-500 text-white px-6 py-3 rounded-xl font-bold">
          Total: ${formattedTotal}
        </div>
        <button className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700" onClick={() => navigate("/checkout")}>
          Completar Compra
        </button>
      </div>
    </div>
  );
}

export default CartList;
