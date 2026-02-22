import { useCart } from "../context/UseCart";

function CartItem({ item }) {
  const { increaseQuantity, decreaseQuantity, removeItem } = useCart();

  return (
    <div className="flex items-center gap-6 border border-yellow-300 rounded-2xl p-6 shadow-md">
      <img
        src={item.url}
        alt={item.name}
        className="w-35 h-50 object-cover rounded-xl"/>
      <div className="flex-1">
        <h3 className="text-xl font-semibold bg-yellow-100 p-2 rounded-lg">
          {item.name}
        </h3>
        <p className="text-yellow-500 text-sm">
          {item.description}
        </p>
        <p className="font-bold text-lg mt-2 text-green-600">
          ${item.price * item.count}
        </p>
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center gap-3">
          <button onClick={() => decreaseQuantity(item.id)} disabled={item.count <= 1} className="bg-gray-200 px-3 py-1 rounded">
            -
          </button>
          <span className="font-bold bg-yellow-100 px-3 py-1 rounded">
            {item.count}
          </span>
          <button onClick={() => increaseQuantity(item.id)} disabled={item.count >= item.stock} className="bg-gray-200 px-3 py-1 rounded disabled:bg-gray-400">
            +
          </button>
        </div>
        <button onClick={() => removeItem(item.id)} className="bg-red-500 text-white px-4 py-2 rounded-xl">
            Quitar
        </button>
      </div>
    </div>
  );
}

export default CartItem;
