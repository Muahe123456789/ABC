import React, { createContext, useContext, useState, useEffect } from "react";

// Khởi tạo context giỏ hàng
const CartContext = createContext();

// Hook để sử dụng context giỏ hàng
export const useCart = () => useContext(CartContext);

// Provider của CartContext
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, size, quantity) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (item) => item.product.id === product.id && item.size === size
      );

      if (existingItemIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += quantity;
        return updatedCart;
      } else {
        return [...prevCart, { product, size, quantity }];
      }
    });
  };

  const removeFromCart = (productId, size) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) => item.product.id !== productId || item.size !== size
      )
    );
  };

  const updateQuantity = (productId, size, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId && item.size === size
          ? { ...item, quantity }
          : item
      )
    );
  };

  // Thêm hàm clearCart để xóa toàn bộ giỏ hàng
  const clearCart = () => {
    setCart([]); // Đặt giỏ hàng thành mảng rỗng
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
