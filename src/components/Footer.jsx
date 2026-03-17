import { motion } from "framer-motion";
import { Instagram, Facebook, Music, Heart } from "lucide-react";

// Custom TikTok Icon Component
const TikTokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/real_sleezy_van_leader/?hl=en",
      label: "Instagram",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/Djsleezyurdj/",
      label: "Facebook",
    },
    {
      icon: TikTokIcon,
      href: "https://www.tiktok.com/@sleezyvanleader",
      label: "TikTok",
      isCustom: true,
    }, // Custom icon
    {
      icon: Music,
      href: "https://soundcloud.com/william-d-ddy-moswana/dj-sleezy-van-leader",
      label: "SoundCloud",
    },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Bookings", href: "#bookings" },
    { name: "Gallery", href: "#gallery" },
    { name: "Shop", href: "#shop" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-darker border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-primary to-secondary p-2 rounded-lg">
                <Music className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">SVL</span>
            </div>
            <p className="text-gray-400 mb-6">
              DJ Sleezy Van Leader - The sound that moves you. Bringing energy
              to dance floors worldwide.
            </p>
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary hover:bg-primary/20 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.isCustom ? (
                    <social.icon />
                  ) : (
                    <social.icon className="w-4 h-4" />
                  )}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Johannesburg, South Africa</li>
              <li>Available Worldwide</li>
              <li>bookings@djsleezyvanleader.com</li>
              <li>+27 82 123 4567</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-gray-500 text-sm text-center md:text-left"
          >
            © {currentYear} DJ SLEEZY VAN LEADER. All rights reserved.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 text-sm flex items-center gap-1"
          >
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> by
            Heiven Tech
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
