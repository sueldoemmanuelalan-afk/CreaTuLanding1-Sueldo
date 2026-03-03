import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import Swal from 'sweetalert2';

const GamerSwal = Swal.mixin({
  background: '#0f0f0f',
  color: '#facc15',
  backdrop: 'rgba(0,0,0,0.85)',
  confirmButtonColor: '#dc2626',
  cancelButtonColor: '#374151',
  customClass: {
    popup: 'swal-gamer',
  },
});

function CartList({ cart, clearCart, onCheckout }) {
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );
  const formattedTotal = total.toFixed(2);
  const handleClearCart = () => {
    GamerSwal.fire({
      title: '¿Vaciar carrito?',
      text: 'Se eliminarán todos los productos',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, vaciar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();

        GamerSwal.fire({
          title: 'Carrito vacío',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  };

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-8 text-center mt-15 text-yellow-300">
        Tu Lista de Compras
      </h2>
      <Link
        to="/"
        className="bg-gray-300 px-4 py-1 rounded-xl hover:bg-gray-400 text-black font-bold mb-6 inline-block">
        Seguir comprando
      </Link>
      <div className="space-y-6 mb-10">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="flex flex-col lg:flex-row gap-4 justify-between mt-10 items-center">
        <div className="bg-yellow-100 text-black px-4 py-1 rounded-xl font-bold">
          Total: ${formattedTotal}
        </div>
        <button
          onClick={handleClearCart}
          className="bg-red-500 text-white px-4 py-1 rounded-xl hover:bg-red-600 cursor-pointer">
          Vaciar Carrito
        </button>
        <button
          onClick={onCheckout}
          className="bg-green-600 text-white px-4 py-1 rounded-xl hover:bg-green-700 cursor-pointer">
          Completar Compra
        </button>
      </div>
    </div>
  );
}

export default CartList;
