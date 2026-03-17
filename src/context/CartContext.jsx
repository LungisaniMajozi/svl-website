import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Add item to cart
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  // Update quantity
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity } : item,
      ),
    );
  };

  // Clear cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Get total items
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Get total price
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  // Send order to WhatsApp WITH IMAGE LINKS
  const sendToWhatsApp = (phoneNumber = "27123456789") => {
    if (cartItems.length === 0) return;

    let message = "*🎧 NEW ORDER - DJ SLEEZY VAN LEADER*\n\n";
    message += "*Order Details:*\n";
    message += "─────────────────\n\n";

    cartItems.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*\n`;
      message += `   Qty: ${item.quantity} × R${item.price}\n`;
      message += `   Subtotal: R${item.price * item.quantity}\n`;

      // Add product image link (if available)
      if (item.image) {
        // Convert relative URL to absolute URL for WhatsApp
        const imageUrl = item.image.startsWith("http")
          ? item.image
          : `${window.location.origin}${item.image}`;
        message += `   📷 View: ${imageUrl}\n`;
      }

      message += "\n";
    });

    message += "─────────────────\n";
    message += `*Total Items:* ${totalItems}\n`;
    message += `*TOTAL: R${totalPrice}*\n`;
    message += "─────────────────\n\n";
    message += "Please confirm my order. Thank you! 🙏";

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Clear cart after sending
    clearCart();
    setIsCartOpen(false);

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        sendToWhatsApp,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
