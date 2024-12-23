import React from "react";
import { useCart } from "./CartContext";
import "./Shopping.css";

const ShoppingCart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart(); // Thêm clearCart vào hook

  const handleQuantityChange = (productId, size, change) => {
    const currentQuantity = cart.find(
      (item) => item.product.id === productId && item.size === size
    )?.quantity;

    if (currentQuantity + change > 0) {
      updateQuantity(productId, size, currentQuantity + change);
    }
  };

  const handleRemoveProduct = (productId, size) => {
    removeFromCart(productId, size);
  };

  const calculateSubtotal = () => {
    return cart
      .reduce(
        (total, { product, quantity }) => total + product.newPrice * quantity,
        0
      )
      .toFixed(2);
  };

  const calculateShipping = () => 0.0;

  const calculateTotal = () => {
    const subtotal = parseFloat(calculateSubtotal());
    const discount = subtotal > 100 ? 10 : 0;
    return (subtotal - discount + calculateShipping()).toFixed(2);
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h4>You can choose 3 products to get a direct discount</h4>
      {/* Thông tin giao hàng */}
      <div className="shipping-contentb3">
        {[
          {
            imgSrc: "../img/illustrative-bag-delivery.svg",
            text: "Free shipping with any $50 order",
            alt: "Delivery Bag",
          },
          {
            imgSrc: "../img/C2.svg",
            text: "Earn 10 points per dollar and redeem for rewards",
            alt: "Earn Points",
          },
          {
            imgSrc: "../img/c3.webp",
            text: "Choose 3 free samples with any order",
            alt: "Free Samples",
          },
          {
            imgSrc: "../img/c4.svg",
            text: "Subscribe for 10% off and free shipping",
            alt: "Subscribe for Discount",
          },
        ].map((item, index) => (
          <div className="shipping-infob3" key={index}>
            <img src={item.imgSrc} alt={item.alt} />
            <span>{item.text}</span>
          </div>
        ))}
      </div>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <h3>Selected Products</h3>
          {cart.map(({ product, quantity, size }) => (
            <div
              key={`${product.id}-${size}`}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <img
                  src={product.imgSrc}
                  alt={product.name}
                  style={{ width: "50px", height: "50px" }}
                />
                <div style={{ flex: 1, marginLeft: "20px" }}>
                  <h4>{product.name}</h4>
                  <p>Size: {size}</p>
                </div>
                <div>
                  <button
                    onClick={() => handleQuantityChange(product.id, size, -1)}
                    className="pink-button"
                  >
                    -
                  </button>
                  <span style={{ margin: "0 10px" }}>{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(product.id, size, 1)}
                    className="pink-button"
                  >
                    +
                  </button>
                </div>
                <div style={{ marginLeft: "20px", fontWeight: "bold" }}>
                  ${(product.newPrice * quantity).toFixed(2)}
                </div>
                <button
                  onClick={() => handleRemoveProduct(product.id, size)}
                  className="pink-button"
                  style={{ marginLeft: "10px" }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div
            style={{
              marginTop: "20px",
              border: "1px solid #ccc",
              padding: "10px",
            }}
          >
            <h3>Order Summary</h3>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Subtotal:</span>
              <span>${calculateSubtotal()}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Shipping:</span>
              <span>${calculateShipping()}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Discount:</span>
              <span>${parseFloat(calculateSubtotal()) > 100 ? 10 : 0}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Estimated Total:</span>
              <span>${calculateTotal()}</span>
            </div>
            <button
              style={{
                marginTop: "20px",
                padding: "10px",
                width: "100%",
                backgroundColor: "red",
                color: "white",
                border: "none",
                cursor: "pointer", // Thêm hiệu ứng con trỏ khi hover
              }}
              onClick={() => {
                // Hiển thị bảng thông báo xác nhận
                alert("Thank you for your successful order!");

                // Xóa toàn bộ giỏ hàng
                clearCart();

                // Chuyển hướng về trang Home
                window.location.href = "/";
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
