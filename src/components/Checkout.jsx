function Checkout({ onSubmit }) {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const {
      name,
      email,
      phone,
      address,
      city,
      postalCode,
    } = e.target;
    const formData = {
      name: name.value.trim(),
      email: email.value.trim(),
      phone: phone.value.trim(),
      address: address.value.trim(),
      city: city.value.trim(),
      postalCode: postalCode.value.trim(),
    };
    onSubmit(formData);
  };

  return (
    <div className="min-h-screen mt-20 bg-black text-white flex items-center justify-center px-4 py-10">
      <form
        onSubmit={handleFormSubmit}
        className="w-full max-w-4xl bg-zinc-900 border border-red-600 rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          <span className="text-yellow-400">Finalizar</span>{' '}
          <span className="text-red-600">Compra</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="mb-1 text-yellow-400 font-semibold">
              Nombre Completo
            </label>
            <input
              defaultValue={'Pepito Perez'}
              id="name"
              type="text"
              required
              className="bg-black border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
              placeholder="Ej: Juan Pérez"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-yellow-400 font-semibold">
              Email
            </label>
            <input
              defaultValue={'pepito@gmail.com'}
              id="email"
              type="email"
              required
              className="bg-black border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
              placeholder="ejemplo@email.com"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-yellow-400 font-semibold">
              Teléfono
            </label>
            <input
              defaultValue={'+54 11 1234 5678'}
              id="phone"
              type="tel"
              required
              className="bg-black border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
              placeholder="+54 11 1234 5678"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-yellow-400 font-semibold">
              Dirección
            </label>
            <input
              defaultValue={'Calle Falsa 123'}
              id="address"
              type="text"
              required
              className="bg-black border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
              placeholder="Calle, número, ciudad"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-yellow-400 font-semibold">
              Ciudad
            </label>
            <input
              defaultValue={'Buenos Aires'}
              id="city"
              type="text"
              required
              className="bg-black border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
              placeholder="Buenos Aires"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-yellow-400 font-semibold">
              Código Postal
            </label>
            <input
              defaultValue={'1000'}
              id="postalCode"
              type="text"
              required
              className="bg-black border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
              placeholder="1000"
            />
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <button
            type="submit"
            className="bg-red-600 hover:bg-yellow-400 hover:text-black transition font-bold py-3 px-10 rounded-xl shadow-lg cursor-pointer">
            Confirmar Orden 🛍️
          </button>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
