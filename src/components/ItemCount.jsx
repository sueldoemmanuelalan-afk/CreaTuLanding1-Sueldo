import { useState } from "react";

function ItemCount() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex justify-center flex-col items-center">
      <div className="mt-4 mb-4">
        <button onClick={handleDecrement} className="px-2 bg-blue-600 text-white mr-1">
          -
        </button>
        <span className="px-3 bg-gray-200 text-black">{count}</span>
        <button onClick={handleIncrement} className="px-2 bg-blue-600 text-white ml-1">
          +
        </button>
        <button className="bg-red-500 hover:bg-yellow-300 hover:text-black text-white rounded-lg px-3 py-1 ml-4 ">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
