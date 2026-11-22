import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const AddToCart = (product) => {
    if (cartItems.some((item) => item.id === product.id)) {
      //some method return = true or false
      // swal

      Swal.fire({
        title: "Already in Your List!",
        html: `
    <p style="color:#6b7280; font-size:15px; margin-top:4px;">
      This product has already been added. You can't add it twice.
    </p>
  `,
        icon: "warning",
        iconColor: "#f59e0b",
        background: "#ffffff",
        color: "#111827",
        width: 420,
        padding: "2rem 1.5rem",
        showConfirmButton: true,
        confirmButtonText: "Got it",
        confirmButtonColor: "#9f0712",
        showCloseButton: true,
        timer: 3500,
        timerProgressBar: true,
        backdrop: `rgba(17, 24, 39, 0.55)`,
        customClass: {
          popup: "rounded-2xl shadow-2xl",
          title: "font-bold text-2xl",
          confirmButton: "px-6 py-2 rounded-lg font-semibold",
          timerProgressBar: "bg-red-700",
        },
        showClass: {
          popup: "swal2-show",
        },
      });
    } else {
      setCartItems((prev) => [...prev, product]);

      Swal.fire({
        title: "Product Added!",
        html: `
    <p style="color:#6b7280; font-size:15px; margin-top:4px;">
      Congratulations, your product has been added successfully.
    </p>
  `,
        icon: "success",
        iconColor: "#16a34a",
        background: "#ffffff",
        color: "#111827",
        width: 420,
        padding: "2rem 1.5rem",
        showConfirmButton: true,
        confirmButtonText: "Awesome",
        confirmButtonColor: "#0d542b",
        showCloseButton: true,
        timer: 3500,
        timerProgressBar: true,
        backdrop: `rgba(17, 24, 39, 0.55)`,
        customClass: {
          popup: "rounded-2xl shadow-2xl",
          title: "font-bold text-2xl",
          confirmButton: "px-6 py-2 rounded-lg font-semibold",
          timerProgressBar: "bg-green-700",
        },
      });
    }
  };

  const cartCount = cartItems.length;

  return (
    <CartContext.Provider value={{ AddToCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};
