import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  MessageCircle,
} from "lucide-react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    removeFromCart,
    updateQuantity,
    totalItems,
    totalPrice,
    sendToWhatsApp,
  } = useCart();

  // WhatsApp number (Replace with actual DJ Sleezy number)
  const whatsappNumber = "27835444192"; // Format: 27 + number without leading 0

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={() => setIsCartOpen(false)}
          />

          {/* Cart Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-darker border-l border-white/10 z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-bold text-white">Your Cart</h2>
                <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">
                  {totalItems} items
                </span>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cartItems.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingBag className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-400">Your cart is empty</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="mt-4 text-primary hover:underline"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/10"
                  >
                    {/* Product Image */}
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-dark flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src =
                            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&q=80";
                        }}
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-1">
                        {item.name}
                      </h4>
                      <p className="text-primary font-bold">R{item.price}</p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-white w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-400 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer with Total & Checkout */}
            {cartItems.length > 0 && (
              <div className="border-t border-white/10 p-6 space-y-4">
                {/* Total */}
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Subtotal</span>
                  <span className="text-2xl font-bold text-primary">
                    R{totalPrice}
                  </span>
                </div>

                {/* WhatsApp Checkout Button */}
                <button
                  onClick={() => sendToWhatsApp(whatsappNumber)}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Checkout via WhatsApp
                </button>

                <p className="text-center text-gray-500 text-xs">
                  You'll be redirected to WhatsApp to complete your order
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Cart;
