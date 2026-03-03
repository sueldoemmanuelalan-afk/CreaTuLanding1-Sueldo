import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import toast from 'react-hot-toast';

function ItemCount({ item }) {
  const [count, setCount] = useState(1);
  const { addToCart } = useContext(CartContext);
  const handleIncrement = () => {
    if (count < item.stock) {
      setCount((prev) => prev + 1);
    } else {
      toast.error('No hay suficiente stock disponible 🚫');
    }
  };

  const handleDecrement = () => {
    if (count === 1) return;
    setCount((prev) => prev - 1);
  };

  const handleAddToCart = () => {
    addToCart({ ...item, count: count });
    toast.success(
      `${item.name} , ${count} unidades agregado al carrito!`
    );
  };
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="mt-4 mb-4">
        <button
          onClick={handleDecrement}
          className="px-2 bg-yellow-500 text-black mr-1">
          -
        </button>
        <span className="px-3 bg-gray-200 text-black">
          {count}
        </span>
        <button
          onClick={handleIncrement}
          className="px-2 bg-yellow-500 text-black ml-1 disabled:bg-gray-400">
          +
        </button>
        <button
          onClick={handleAddToCart}
          disabled={count > item?.stock}
          className="bg-red-500 hover:bg-yellow-300 hover:text-black text-white rounded-lg px-3 py-1 ml-4 mt-3 cursor-pointer">
          Añadir al 🛒
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
