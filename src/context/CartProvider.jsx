import { CartContext } from "./CartContext";
import { useState } from "react";

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const addToCart = product => {
    const isInCart = cart.some(item => item.id === product.id);
      if (!isInCart) {
      setCart([...cart, product]);
      }else {
        const cartCopy = cart.map(item => {
          if (item.id === product.id) {
            return { ...item, count: item.count + product.count }
          }
          return item;
        });
        setCart(cartCopy);
      }
    }

    const getProductQuantity = () =>  cart.reduce ((acc,current) => acc + current.count, 0);
    
  return (
    <CartContext.Provider value={{addToCart, getProductQuantity, cart}}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;