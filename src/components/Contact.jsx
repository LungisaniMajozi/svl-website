import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Instagram,
  Facebook,
  Music,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";

// Custom TikTok Icon Component (in case lucide-react doesn't have it)
const TikTok = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // ⚙️ CONFIGURATION: Replace with DJ Sleezy's actual WhatsApp number
  // Format: Country code (27 for SA) + number without leading 0
  // Example: 082 123 4567 → 27821234567
  const whatsappNumber = "27835444192";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format message for WhatsApp
    const message =
      `🎧 *NEW BOOKING REQUEST*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Message:* ${formData.message}\n\n` +
      `Please confirm availability. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Simulate short delay then open WhatsApp
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Open WhatsApp
      window.open(whatsappUrl, "_blank");

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "djsleezysa@gmail.com",
      href: "mailto:djsleezysa@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+27 835 444 192",
      href: "tel:+27835444192",
    },
    {
      icon: MapPin,
      label: "Based In",
      value: "Johannesburg, South Africa",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/real_sleezy_van_leader/?hl=en",
      label: "Instagram",
    },
    {
      icon: TikTok,
      href: "https://www.tiktok.com/@sleezyvanleader",
      label: "TikTok",
      isCustom: true,
    }, // ← Added TikTok
    {
      icon: Facebook,
      href: "https://www.facebook.com/Djsleezyurdj/",
      label: "Facebook",
    },
    {
      icon: Music,
      href: "https://soundcloud.com/william-d-ddy-moswana/dj-sleezy-van-leader",
      label: "SoundCloud",
    },
  ];

  return (
    <section
      id="contact"
      className="section-padding bg-darker relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

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
            Get In Touch
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's <span className="heading-gradient">Connect</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Book DJ Sleezy Van Leader for your next event, festival, or club
            night. Available worldwide for performances.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card rounded-2xl p-8 border border-white/10">
              <h4 className="text-2xl font-bold text-white mb-6">
                Send a Message
              </h4>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                    placeholder="Tell me about your event..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary py-4 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>

                {/* Success Message */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400 text-center flex items-center justify-center gap-2"
                  >
                    <CheckCircle className="w-5 h-5" />
                    Redirecting to WhatsApp...
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Booking Info Cards */}
            <div className="space-y-4">
              <h4 className="text-2xl font-bold text-white mb-6">
                Booking Information
              </h4>

              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 glass-card rounded-xl border border-white/10 hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="bg-primary/20 p-3 rounded-xl group-hover:bg-primary/30 transition-colors">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Genre & Availability */}
            <div className="glass-card rounded-2xl p-6 border border-white/10">
              <h5 className="text-lg font-bold text-white mb-4">
                Performance Details
              </h5>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Genre</span>
                  <span className="text-white font-medium">
                    House / Afro House
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Location</span>
                  <span className="text-white font-medium">
                    Johannesburg, SA
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Availability</span>
                  <span className="text-green-400 font-medium">
                    Available Worldwide
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Experience</span>
                  <span className="text-white font-medium">10+ Years</span>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <h5 className="text-lg font-bold text-white mb-4">Follow Me</h5>
              <div className="flex gap-4 flex-wrap">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary hover:bg-primary/20 transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.isCustom ? (
                      <social.icon />
                    ) : (
                      <social.icon className="w-5 h-5" />
                    )}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
