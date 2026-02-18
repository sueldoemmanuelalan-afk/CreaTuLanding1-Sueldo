import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

function ItemCount({item}) {
  const [count, setCount] = useState(1);
  const { addToCart } = useContext(CartContext);
  const handleIncrement = () => {
    if (count < item.stock) {
      setCount(count + 1);
    }};

  const handleDecrement = () => {
    if (count === 1) return
      setCount(count - 1);
    };
    
    const handleAddToCart = () => {
      addToCart({...item, count: count});
    }

  return (
    <div className="flex justify-center flex-col items-center">
      <div className="mt-4 mb-4">
        <button onClick={handleDecrement} className="px-2 bg-blue-600 text-white mr-1">
          -
        </button>
        <span className="px-3 bg-gray-200 text-black">{count}</span>
        <button onClick={handleIncrement} disabled={count >= item?.stock} className="px-2 bg-blue-600 text-white ml-1 disabled:bg-gray-400">
          +
        </button>
        <button onClick={handleAddToCart} disabled={count > item?.stock} className="bg-red-500 hover:bg-yellow-300 hover:text-black text-white rounded-lg px-3 py-1 ml-4 ">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
