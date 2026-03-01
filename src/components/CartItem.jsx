import { useCart } from "../context/UseCart";
import toast from "react-hot-toast";

function CartItem({ item }) {
  const { increaseQuantity, decreaseQuantity, removeItem } = useCart();
  const handleRemove = () => {
    toast((t) => (
      <div className="flex flex-col gap-3 bg-black p-6 rounded shadow-lg text-white">
        <p>¿Eliminar {item.name}?</p>
        <div className="flex gap-2 justify-end">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="px-3 py-1 bg-gray-300 rounded text-black"
          >
            Cancelar
          </button>
          <button
            onClick={() => {
              removeItem(item.id);
              toast.dismiss(t.id);
              toast.success("Producto eliminado");
            }}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Confirmar
          </button>
        </div>
      </div>
    ));
    };
    const handleIncrease = () => {
      if (item.count >= item.stock) {
        toast("No hay más stock disponible 🚫", {
          icon: "⚠️",
          style: {
          background: "#1f2937",
          color: "#fff",
          border: "1px solid #facc15"
        }
      });
      return;
    }

    increaseQuantity(item.id);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center gap-6 border border-yellow-300 rounded-2xl p-6 shadow-md">
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
      <div className="flex flex-col lg:flex-row items-center gap-3">
        <div className="flex items-center gap-3">
          <button onClick={() => decreaseQuantity(item.id)} disabled={item.count <= 1} className="bg-gray-200 px-3 py-1 rounded">
            -
          </button>
          <span className="font-bold bg-yellow-100 px-3 py-1 rounded">
            {item.count}
          </span>
          <button onClick={handleIncrease} className="bg-gray-200 px-3 py-1 rounded disabled:bg-gray-400">
            +
          </button>
        </div>
        <button onClick={handleRemove} className="bg-red-500 text-white px-4 py-2 rounded-xl">
            Quitar
        </button>
      </div>
    </div>
  );
}

export default CartItem;
