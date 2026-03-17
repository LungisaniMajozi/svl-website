import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Bookings", href: "#contact" },
    { name: "Gallery", href: "#gallery" },
    { name: "Shop", href: "#shop" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-500 ${
        scrolled
          ? "bg-darker/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Image - INCREASED SIZE */}
          <a href="#" className="flex-shrink-0">
            <img
              src="/logo.png"
              alt="SVL Logo"
              className="h-16 w-auto object-contain drop-shadow-lg" // ← Changed from h-12 to h-16
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-primary transition-colors duration-300 font-medium text-sm tracking-wide"
                >
                  {link.name}
                </a>
              ))}
              {/* Cart Icon */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative text-white hover:text-primary transition-colors"
              >
                <ShoppingBag className="w-6 h-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {totalItems}
                  </span>
                )}
              </button>
              <a
                href="#contact"
                className="bg-primary hover:bg-violet-600 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 text-sm tracking-wider"
              >
                BOOK NOW
              </a>
            </div>
          </div>

          {/* Mobile Menu Button + Cart */}
          <div className="md:hidden flex items-center gap-4">
            {/* Cart Icon Mobile */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative text-white hover:text-primary transition-colors"
            >
              <ShoppingBag className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </button>
            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary focus:outline-none"
            >
              {isOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden border-t border-white/10 overflow-hidden ${
              scrolled ? "bg-darker" : "bg-darker/95 backdrop-blur-md"
            }`}
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-white hover:text-primary hover:bg-white/5 rounded-lg transition-all"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#bookings"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-primary hover:bg-violet-600 text-white font-bold py-3 px-6 rounded-full mt-4 transition-all"
              >
                BOOK NOW
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
