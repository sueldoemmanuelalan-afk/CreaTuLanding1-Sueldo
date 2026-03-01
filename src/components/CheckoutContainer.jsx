import { useCart } from '../context/UseCart';
import { createOrder } from '../firebase/db';
import { serverTimestamp } from 'firebase/firestore';
import { Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Checkout from './Checkout';

function CheckoutContainer() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return <Navigate to="/" />;
  }
  const handleSubmit = async (formData) => {
    try {
      const orderData = {
        ...formData,
        cart,
        time: serverTimestamp(),
      };

      const orderId = await createOrder(orderData);

      await Swal.fire({
        title: '¡Muchas gracias por tu compra!',
        html: `
          <p>Tu orden fue creada con éxito.</p>
          <p style="margin-top:10px;">ID de compra:</p>
          <strong style="color:#ffff;">${orderId}</strong>
        `,
        icon: 'success',
        background: '#0f0f0f',
        color: '#facc15',
        confirmButtonColor: '#dc2626',
        customClass: {
          popup: 'swal-gamer',
        },
      });

      clearCart();
      navigate('/');
    } catch (error) {
      Swal.fire({
        title: 'Error al procesar la compra',
        text: 'Ocurrió un problema. Intenta nuevamente.',
        icon: 'error',
        background: '#0f0f0f',
        color: '#facc15',
        confirmButtonColor: '#dc2626',
        customClass: {
          popup: 'swal-gamer',
        },
      });
      console.error(error);
    }
  };

  return <Checkout onSubmit={handleSubmit} />;
}

export default CheckoutContainer;
