import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TiSocialFacebook } from "react-icons/ti";

const socials = [
  {
    name: "Facebook",
    icon: <TiSocialFacebook size={20} />,
    hoverImage: "https://i.ibb.co.com/VYFk2Ybk/icons8-facebook-96.png",
    link: "https://www.facebook.com/share/1D5Tt4jQW8/",
  },
  {
    name: "Instagram",
    icon: <FaInstagram size={20} />,
    hoverImage: "https://i.ibb.co.com/v6dQnxfb/icons8-instagram-96.png",
    link: "https://www.instagram.com/__shafin__ahmed?igsh=mta0agj0odbqawv2yq==",
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp size={20} />,
    hoverImage: "https://i.ibb.co.com/0RzkTvrh/whatsapp-4423697.png",
    link: "https://wa.me/+8801630216932",
  },
];

const Connect = () => {
  const [loading, setLoading] = useState(false);
  const [shake, setShake] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

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

        toast.success("Message Sent!", {
          position: "bottom-right",
          autoClose: 1000,
        });
      })
      .catch(() => {
        setLoading(false);
        setShake(true);
        setTimeout(() => setShake(false), 600);
      });
  };

  return (
    <section id="connect" className="py-30 px-6 max-w-7xl mx-auto">
      <ToastContainer />
      <h2 className="text-4xl font-semibold text-center mb-16">Contact</h2>

      <div className="grid md:grid-cols-2 gap-12 items-center" data-aos="fade-right">
        <div className="flex flex-col items-center gap-8">
          <p className="text-gray-400 text-center text-sm max-w-sm">
            Feel free to reach out — I’d love to hear from you.
          </p>

          {/* <div className="flex gap-8 flex-wrap justify-center">
            {socials.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                className="group relative text-gray-400 text-4xl p-6 rounded-full bg-white/10 shadow-md hover:text-orange-300 hover:shadow-[0_0_20px_rgba(255,215,0,0.6)] transition-all duration-300"
              >

                <span className="flex items-center justify-center w-6 h-6 transition-all duration-300 group-hover:opacity-0">
                  {item.icon}
                </span>


                <img
                  src={item.hoverImage}
                  alt={item.name + " hover"}
                  className="absolute inset-0 w-10 m-auto object-cover opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
                />


                <span className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs -bottom-8 left-1/2 -translate-x-1/2 bg-black/70 px-2 py-1 rounded-md">
                  {item.name}
                </span>
              </a>
            ))}
          </div> */}
          <div className="flex gap-5">
            {
              socials.map((item, i) => (
                <a key={i} href={item.link} className="w-12 h-12 flex items-center justify-center rounded-full border border-orange-300 text-orange-300 hover:bg-orange-300 hover:text-black transition-all duration-100">
                  {item.icon}
                </a>
              ))
            }
          </div>
        </div>


        <form
          onSubmit={handleSubmit}
          className={`backdrop-blur-xl bg-white/10 p-8 rounded-xl flex flex-col gap-6 shadow-lg transition-all duration-300 ${shake ? "animate-[shake_0.4s_ease-in-out]" : ""
            }`}
        >

          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            onChange={handleChange}
            value={formData.name}
            className="input input-bordered bg-transparent w-full focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            onChange={handleChange}
            value={formData.email}
            className="input input-bordered bg-transparent w-full focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all"
          />

          <textarea
            name="message"
            rows={4}
            required
            placeholder="Your Message"
            onChange={handleChange}
            value={formData.message}
            className="textarea textarea-bordered bg-transparent w-full focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all"
          ></textarea>


          <button
            type="submit"
            disabled={loading}
            className="btn btn-soft w-full transition-all animate-pulse hover:animate-none hover:shadow-[0_0_18px_rgba(255,215,0,0.6)]"
          >
            {loading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Connect;
