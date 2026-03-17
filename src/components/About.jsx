import { motion } from "framer-motion";
import { MapPin, Music, Award } from "lucide-react";

const About = () => {
  const stats = [
    { number: "100+", label: "Shows Played" },
    { number: "30+", label: "Cities" },
    { number: "10+", label: "Years Experience" },
  ];

  return (
    <section
      id="about"
      className="section-padding bg-darker relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side with Purple Overlay */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden">
              {/* Glow Effect Behind */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-primary to-pink-500 rounded-3xl blur opacity-30"></div>

              {/* Image Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-dark">
                <img
                  src="/about-dj.jpg"
                  alt="DJ Sleezy Van Leader"
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1574169208507-84376144848b?w=800&q=80";
                  }}
                />

                {/* Purple Overlay - Main Tint */}
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply pointer-events-none"></div>

                {/* Dual Color Overlay - Cyan Left, Pink Right */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-transparent to-pink-500/20 mix-blend-overlay pointer-events-none"></div>

                {/* Additional Purple Depth Layer */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-primary/10 to-secondary/30 mix-blend-soft-light pointer-events-none"></div>

                {/* Vignette Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/30 pointer-events-none"></div>
              </div>
            </div>

            {/* Corner Decorations */}
            <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-cyan-400 rounded-tl-2xl"></div>
            <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-pink-500 rounded-br-2xl"></div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-primary font-bold tracking-widest text-sm mb-2 uppercase">
              About Me
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Who Is <span className="heading-gradient">DJ Sleezy?</span>
            </h3>

            <p className="text-gray-400 leading-relaxed mb-6 text-base md:text-lg">
              DJ Sleezy Van Leader has been electrifying dance floors and
              festival stages for over a decade. Known for seamless
              genre-blending sets that fuse{" "}
              <span className="text-white font-semibold">
                Deep House, Techno, and Afrobeat
              </span>{" "}
              — every set is a journey crafted to make you move, feel, and lose
              yourself in the music.
            </p>

            <p className="text-gray-400 leading-relaxed mb-8 text-base md:text-lg">
              Based in{" "}
              <span className="text-white font-semibold">
                Johannesburg, South Africa
              </span>
              , he has built his reputation through consistent performances at
              local events and parties. His approach focuses on seamless
              transitions, high-energy builds, and carefully curated playlists.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="text-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-primary/50 transition-colors duration-300"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Info Tags */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-gray-300 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Johannesburg, SA</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <Music className="w-5 h-5 text-primary" />
                <span>House / Afro House</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <Award className="w-5 h-5 text-primary" />
                <span>Professional DJ</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
