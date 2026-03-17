import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-darker">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            // 🔹 Use your local image here
            backgroundImage: "url('/hero-bg.jpg')",
          }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      </div>

      {/* Lighting Effects - Changed to Purple/Violet */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl mix-blend-screen"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl mix-blend-screen"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto pt-20">
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary tracking-[0.35em] text-xs sm:text-sm md:text-base mb-6 font-semibold uppercase"
        >
          THE SOUND THAT MOVES YOU
        </motion.p>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-8 leading-none"
        >
          <span className="block text-white drop-shadow-2xl">SLEEZY</span>
          <span className="block text-primary drop-shadow-2xl">VAN LEADER</span>
        </motion.h1>

        {/* Book Now Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="#contact"
            className="inline-block bg-primary hover:bg-violet-600 text-white font-bold py-4 px-12 rounded-full transition-all duration-300 transform hover:scale-105 tracking-widest shadow-lg shadow-primary/50"
          >
            BOOK NOW
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <ChevronDown className="w-10 h-10 text-primary animate-bounce mx-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
