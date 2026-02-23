import { CartContext } from "./CartContext";
import { useState } from "react";

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
  const existingProduct = cart.find(item => item.id === product.id);

    if (!existingProduct) {
      setCart([...cart, { ...product, count: product.count || 1 }]);
      } else {
      const newCount = existingProduct.count + (product.count || 1);

      if (newCount > existingProduct.stock) return;
      const updatedCart = cart.map(item =>
      item.id === product.id
        ? { ...item, count: newCount }
        : item
      );

      setCart(updatedCart);
    }
  };

  const increaseQuantity = (id) => {
    setCart(cart.map(item =>
      item.id === id && item.count < item.stock
        ? { ...item, count: item.count + 1 }
        : item
    ));
  };

  const decreaseQuantity = (id) => {
    setCart(cart.map(item =>
      item.id === id && item.count > 1
        ? { ...item, count: item.count - 1 }
        : item
    ));
  };
  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };
  const getProductQuantity = () =>
    cart.reduce((acc, current) => acc + (current.count || 0), 0);

  return (
    <CartContext.Provider
      value={{cart,addToCart, increaseQuantity, decreaseQuantity, removeItem, getProductQuantity}}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;