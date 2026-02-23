import { useCart } from "../context/UseCart";
import { createOrder } from "../firebase/db";
import { serverTimestamp } from "firebase/firestore";

function Checkout() {
  const { cart } = useCart();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const address = form.address.value;
    
    createOrder({email, name, phone, address, cart, time: serverTimestamp()});
    } 

  return (
    <div className="h-100 mt-20 bg-black text-white flex items-center justify-center">  
      <form className="fieldset bg-base-200 border-base-300 rounded-box border-red-500 border p-4 flex flex-col w-[80%] justify-center mt-20"
      onSubmit={handleSubmit}>
        <legend className="fieldset-legend font-bold bg-yellow-500 text-black flex justify-center">Datos necesarios para finalizar compra:</legend>

        <label className="label">Nombre Completo</label>
        <input id="name" type="text" className="input bg-gray-800 text-white" placeholder="  Escribe tu Nombre Completo" />

        <label className="label">Email</label>
        <input id="email" type="email" className="input bg-gray-800 text-white" placeholder="  Escribe tu Email" />

        <label className="label">Telefono</label>
        <input id="phone" type="tel" className="input bg-gray-800 text-white" placeholder="  Escribe tu Telefono" />

        <label className="label">Dirección</label>
        <input id="address" type="text" className="input bg-gray-800 text-white" placeholder="  Escribe tu Dirección" />
          <div className="flex justify-center">
            <button className="btn btn-success bg-green-600 w-50 mt-4">Finalizar Compra 🛍️</button>
          </div>
      </form>
    </div>
    );
  }

export default Checkout;
