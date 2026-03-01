import { useCart } from '../context/UseCart';
import { useNavigate } from 'react-router-dom';
import EmptyCart from './EmptyCart';
import CartList from './CartList';

function CartContainer() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  return cart.length === 0 ? (
    <EmptyCart onGoShop={() => navigate('/')} />
  ) : (
    <CartList
      cart={cart}
      clearCart={clearCart}
      onCheckout={() => navigate('/checkout')}
    />
  );
}

export default CartContainer;
