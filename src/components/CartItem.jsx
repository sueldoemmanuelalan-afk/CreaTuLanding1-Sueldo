function CartItem({ item }) {
  return (
    <div className="flex items-center gap-6 border border-yellow-300 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src={item.thumbnail}
        alt="Producto"
        className="w-28 h-28 object-cover rounded-xl"/>
      <div className="flex-1">
        <h3 className="text-xl font-semibold bg-yellow-100 p-2 rounded-lg">{item.title}</h3>
        <p className="text-yellow-500 text-sm">
        {item.description}
        </p>
        <p className="font-bold text-lg mt-2 text-green-600">${item.price * item.count}</p>
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center gap-3">
          <button className="bg-gray-200 px-3 py-1 rounded">-</button>
          <span className="font-bold bg-yellow-100 px-3 py-1 rounded">{item.count}</span>
          <button className="bg-gray-200 px-3 py-1 rounded">+</button>
        </div>
        <button className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600">
          Quitar
        </button>
      </div>
    </div>
    
  );
}

export default CartItem;