import { motion } from "framer-motion";
import { ShoppingBag, Star } from "lucide-react";
import { useCart } from "../context/CartContext";

const Shop = () => {
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: "SLEEZY T-SHIRT BLACK",
      price: 549.99,
      image: "/shop/Shop-1.jpeg",
      category: "Apparel",
      rating: 5,
    },
    {
      id: 2,
      name: "SLEEZY BLACK HOODIE",
      price: 599.99,
      image: "/shop/Shop-2.jpeg",
      category: "Apparel",
      rating: 5,
    },
    {
      id: 3,
      name: "BUCKET HAT",
      price: 299.99,
      image: "/shop/Shop-3.jpeg",
      category: "Music",
      rating: 5,
    },
    {
      id: 4,
      name: "SLEEZY T-SHIRT",
      price: 499.99,
      image: "/shop/Shop-4.jpeg",
      category: "Apparel",
      rating: 5,
    },
    {
      id: 5,
      name: "SLEEZY T-SHIRT PINK",
      price: 499.99,
      image: "/shop/Shop 5.jpeg",
      category: "Apparel",
      rating: 5,
    },
    {
      id: 6,
      name: "SLEEZY HOODIE BLACK B",
      price: 599.99,
      image: "/shop/Shop-6.jpeg",
      category: "Apparel",
      rating: 4,
    },
    {
      id: 7,
      name: "SLEEZY T-SHIRT BLACK B",
      price: 549.99,
      image: "/shop/Shop-7.jpeg",
      category: "Accessories",
      rating: 5,
    },

    {
      id: 9,
      name: "SLEEZY T-SHIRT NAVY",
      price: 549.99,
      image: "/shop/Shop-9.jpeg",
      category: "Accessories",
      rating: 4,
    },
    {
      id: 10,
      name: "SLEEZY SHORTS ",
      price: 399.99,
      image: "/shop/Shop-10.jpeg",
      category: "Collectibles",
      rating: 5,
    },
    {
      id: 11,
      name: "BEAT GOES ON T-SHIRT",
      price: 499.99,
      image: "/shop/Shop-11.jpeg",
      category: "Collectibles",
      rating: 5,
    },
    {
      id: 12,
      name: "SLEEZY T-SHIRT WHITE",
      price: 499.99,
      image: "/shop/Shop-12.jpeg",
      category: "Collectibles",
      rating: 5,
    },
    {
      id: 14,
      name: "SLEEZY T-SHIRT KIDS",
      price: 249.99,
      image: "/shop/Shop-14.jpeg",
      category: "Collectibles",
      rating: 5,
    },
    {
      id: 15,
      name: "SLEEZY T-SHIRT WHITE",
      price: 499.99,
      image: "/shop/Shop-15.jpeg",
      category: "Collectibles",
      rating: 5,
    },
  ];

  return (
    <section
      id="shop"
      className="section-padding bg-darker relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-primary font-bold tracking-widest text-sm mb-2 uppercase">
            Merch Store
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Shop <span className="heading-gradient">Exclusive</span> Gear
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Represent the SVL brand with official merchandise. Limited edition
            items available.
          </p>
        </motion.div>

        {/* Products Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden bg-dark">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <button
                      onClick={() => addToCart(product)}
                      className="w-full btn-primary py-3 text-sm flex items-center justify-center gap-2"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      Add to Cart
                    </button>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {product.category}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${i < product.rating ? "fill-primary text-primary" : "text-gray-600"}`}
                    />
                  ))}
                </div>

                {/* Product Name */}
                <h4 className="text-lg font-bold text-white mb-2 truncate">
                  {product.name}
                </h4>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">
                    R{product.price}
                  </span>
                  <span className="text-gray-400 text-xs">Limited Stock</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact for Orders */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a href="#contact" className="inline-block btn-secondary">
            Contact for Bulk Orders
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Shop;
