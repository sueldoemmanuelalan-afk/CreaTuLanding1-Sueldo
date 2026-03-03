function EmptyCart({ onGoShop }) {
  return (
    <div className="mt-20 bg-black text-white flex items-center justify-center px-4 py-10">
      <div className="text-center bg-zinc-900 border border-red-600 rounded-2xl shadow-xl p-8 w-full max-w-5xl">
        <h2 className="text-3xl font-bold mb-4">
          <span className="text-yellow-400">
            Tu carrito está{' '}
          </span>
          <span className="text-red-600">vacío.</span>
        </h2>
        <img
          src="https://media.tenor.com/JbNEIYy1jnQAAAAM/travolta-desert.gif"
          alt="empty cart"
          className="w-[40%] mx-auto"
        />
        <p className="text-gray-400 mb-6">
          Agrega algunos productos para comenzar tu aventura
          de compra.
        </p>
        <button
          onClick={onGoShop}
          className="bg-red-500 text-white px-4 py-1 rounded-xl hover:bg-red-600 mt-4">
          Ir a comprar
        </button>
      </div>
    </div>
  );
}

export default EmptyCart;
