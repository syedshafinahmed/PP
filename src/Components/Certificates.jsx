import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Swal from "sweetalert2";
import { FiExternalLink, FiInfo } from "react-icons/fi";

import "swiper/css";
import "swiper/css/pagination";
import "sweetalert2/dist/sweetalert2.min.css";

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    fetch("/certificates.json")
      .then((res) => res.json())
      .then((data) => setCertificates(data))
      .catch((err) =>
        console.error("Failed to load certificates:", err)
      );
  }, []);

  const showCertificate = (index) => {
    const cert = certificates[index];

    Swal.fire({
      html: `
        <div style="text-align:center;font-family:sans-serif;">
          <h3 style="margin-top:12px;font-size:24px;font-weight:bold;color:#F4A24C;">
            ${cert.title}
          </h3>
          <p style="color:#ccc;font-size:14px;margin-top:8px">
            Issued by: <b>${cert.issuer}</b> | ${cert.date}
          </p>
          <p style="margin-top:30px;color:#ddd;font-size:12px;text-align:justify;">
            ${cert.description}
          </p>
          
        </div>
      `,
      background: "#181a1b",
      showConfirmButton: false,
      showCloseButton: true,
      width: "50vw",
    });
  };

  if (!certificates.length) {
    return (
      <div className="text-center text-gray-400 py-16">
        Loading certificates...
      </div>
    );
  }

  return (
    <div id="certificates" className="max-w-7xl mx-auto py-30 px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#F4A24C]">
        My Certificates
      </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {certificates.map((cert, index) => (
          <SwiperSlide key={cert.id}>
            <div className="flex flex-col items-center group">
              {/* Card */}
              <div
                className="relative overflow-hidden rounded-2xl
                shadow-lg border border-gray-700
                w-[300px] h-[200px]"
              >
                {/* Image */}
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="w-full h-full object-cover
                  transition-transform duration-500
                  group-hover:scale-110"
                />

                {/* Glassmorphism Overlay (White → Black) */}
                <div
                  className="absolute inset-0
                  bg-linear-to-b from-white/1 to-black/90                  
                  backdrop-blur-xs
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                  flex items-center justify-center gap-4"
                >
                  {/* Details Button */}
                  <div className="relative group/icon">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        showCertificate(index);
                      }}
                      className="h-10 w-10 flex items-center justify-center
                      rounded-full backdrop-blur
                      text-[#F4A24C]
                      transition-all duration-300"
                      aria-label="View details"
                    >
                      <FiInfo size={25} />
                    </button>

                    <span
                      className="pointer-events-none absolute -top-9 left-1/2
                      -translate-x-1/2 whitespace-nowrap
                      rounded-md bg-black px-2 py-1 text-xs text-white
                      opacity-0 group-hover/icon:opacity-100
                      transition-opacity duration-200"
                    >
                      Details
                    </span>
                  </div>

                  {/* External Link */}
                  <div className="relative group/icon">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="h-10 w-10 flex items-center justify-center
                      rounded-full backdrop-blur
                      text-[#F4A24C]
                      transition-all duration-300"
                      aria-label="View certificate"
                    >
                      <FiExternalLink size={25} />
                    </a>

                    <span
                      className="pointer-events-none absolute -top-9 left-1/2
                      -translate-x-1/2 whitespace-nowrap
                      rounded-md bg-black px-2 py-1 text-xs text-white
                      opacity-0 group-hover/icon:opacity-100
                      transition-opacity duration-200"
                    >
                      View Certificate
                    </span>
                  </div>
                </div>
              </div>

              {/* Title */}
              <p
                className="text-xs mt-4 font-semibold text-center
                text-gray-200 group-hover:text-[#F4A24C]
                transition-colors duration-300"
              >
                {cert.title}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Certificates;
