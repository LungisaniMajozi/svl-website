import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import SmoothScroll from "./components/SmoothScroll";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="bg-darker min-h-screen">
        <SmoothScroll />
        <Navbar />
        <Hero />
        <About />
        <Gallery />
        <Shop />
        <Contact />
        <Footer />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
