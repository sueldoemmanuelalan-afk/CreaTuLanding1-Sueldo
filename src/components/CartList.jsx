import CartItem from "./CartItem";

function CartList({ cart }) {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-8 text-center text-yellow-300">
        Tu Lista de Compras
      </h2>
      <div className="space-y-6 mb-10">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="flex justify-between mt-10">
        <button className="bg-gray-300 px-6 py-3 rounded-xl hover:bg-gray-400">
          Seguir comprando
        </button>
        <input className="bg-red-500 text-white px-6 py-3 rounded-xl hover:bg-red-600" readOnly value={`Total: $${cart.reduce((total, item) => total + (item.price * item.count), 0)}`} />
        <button className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700">
          Finalizar compra
        </button>
      </div>
    </div>
  );
}

export default CartList;