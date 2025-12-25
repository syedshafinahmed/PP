import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TiSocialFacebook } from "react-icons/ti";

const socials = [
  {
    name: "Facebook",
    icon: <TiSocialFacebook size={24} />,
    link: "https://www.facebook.com/share/1D5Tt4jQW8/",
    color: "hover:text-blue-500",
    bgColor: "hover:bg-blue-500/10",
  },
  {
    name: "Instagram",
    icon: <FaInstagram size={24} />,
    link: "https://www.instagram.com/__shafin__ahmed?igsh=mta0agj0odbqawv2yq==",
    color: "hover:text-pink-500",
    bgColor: "hover:bg-pink-500/10",
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp size={24} />,
    link: "https://wa.me/+8801630216932",
    color: "hover:text-green-500",
    bgColor: "hover:bg-green-500/10",
  },
];

const Connect = () => {
  const [loading, setLoading] = useState(false);
  const [shake, setShake] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState({ name: false, email: false, message: false });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send("_shafin_ahmed", "template_ganv7yr", formData, "grJOfmcREmwlm0GQl")
      .then(() => {
        setLoading(false);
        setFormData({ name: "", email: "", message: "" });
        setFocused({ name: false, email: false, message: false });

        toast.success("Message Sent Successfully!", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      })
      .catch(() => {
        setLoading(false);
        setShake(true);
        setTimeout(() => setShake(false), 600);
        toast.error("Failed to send message. Please try again.", {
          position: "bottom-right",
          autoClose: 3000,
        });
      });
  };

  return (
    <section id="connect" className="py-20 px-6 max-w-7xl mx-auto relative">
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-300/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-linear-to-r from-orange-300 via-orange-400 to-orange-300 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you.
            Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start" data-aos="fade-up" data-aos-delay="100">
          {/* Left Side - Contact Info & Socials */}
          <div className="space-y-8">
            {/* Contact Information Cards */}
            <div className="space-y-4">
              <div className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-orange-300/30 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-orange-300/20 to-orange-400/20 flex items-center justify-center text-orange-300 group-hover:scale-110 transition-transform duration-300">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Email</p>
                    <a href="mailto:your.email@example.com" className="text-white hover:text-orange-300 transition-colors">
                      shafinahmed.cse@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-orange-300/30 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-orange-300/20 to-orange-400/20 flex items-center justify-center text-orange-300 group-hover:scale-110 transition-transform duration-300">
                    <FaPhone size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Phone</p>
                    <a href="tel:+8801630216932" className="text-white hover:text-orange-300 transition-colors">
                      +880 1630 216932
                    </a>
                  </div>
                </div>
              </div>

              <div className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-orange-300/30 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-orange-300/20 to-orange-400/20 flex items-center justify-center text-orange-300 group-hover:scale-110 transition-transform duration-300">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Location</p>
                    <p className="text-white">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                {socials.map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative w-14 h-14 flex items-center justify-center rounded-xl border border-white/10 backdrop-blur-xl bg-white/5 text-gray-400 ${item.color} ${item.bgColor} hover:border-current/30 hover:scale-110 transition-all duration-300`}
                    aria-label={item.name}
                  >
                    <span className="transition-transform duration-300 group-hover:scale-110">
                      {item.icon}
                    </span>
                    <span className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs whitespace-nowrap bg-black/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-white pointer-events-none z-30">
                      {item.name}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <form
            onSubmit={handleSubmit}
            className={`backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10 shadow-xl transition-all duration-300 ${shake ? "animate-[shake_0.4s_ease-in-out]" : ""
              }`}
          >
            <div className="space-y-6">
              {/* Name Input */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocused({ ...focused, name: true })}
                  onBlur={() => setFocused({ ...focused, name: formData.name !== "" })}
                  className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-300/50 focus:bg-white/10 focus:ring-2 focus:ring-orange-300/20 transition-all duration-300"
                  placeholder="Your Name"
                />
                {focused.name && (
                  <label className="absolute -top-3 left-4 px-2 text-xs text-orange-300 bg-black/50 rounded">
                    Name
                  </label>
                )}
              </div>

              {/* Email Input */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocused({ ...focused, email: true })}
                  onBlur={() => setFocused({ ...focused, email: formData.email !== "" })}
                  className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-300/50 focus:bg-white/10 focus:ring-2 focus:ring-orange-300/20 transition-all duration-300"
                  placeholder="Your Email"
                />
                {focused.email && (
                  <label className="absolute -top-3 left-4 px-2 text-xs text-orange-300 bg-black/50 rounded">
                    Email
                  </label>
                )}
              </div>

              {/* Message Textarea */}
              <div className="relative">
                <textarea
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused({ ...focused, message: true })}
                  onBlur={() => setFocused({ ...focused, message: formData.message !== "" })}
                  className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-300/50 focus:bg-white/10 focus:ring-2 focus:ring-orange-300/20 transition-all duration-300 resize-none"
                  placeholder="Your Message"
                ></textarea>
                {focused.message && (
                  <label className="absolute -top-3 left-4 px-2 text-xs text-orange-300 bg-black/50 rounded">
                    Message
                  </label>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="w-full py-4 px-6 bg-linear-to-r from-orange-300 to-orange-400 text-black font-semibold rounded-xl hover:from-orange-400 hover:to-orange-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FaEnvelope size={16} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Connect;
