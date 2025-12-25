import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import Swal from "sweetalert2";
import { FiExternalLink, FiInfo, FiAward } from "react-icons/fi";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
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
        <div style="text-align:center;font-family:'Plus Jakarta Sans',sans-serif;padding:20px;">
          <div style="margin-bottom:20px;">
            <div style="display:inline-flex;align-items:center;justify-content:center;width:60px;height:60px;border-radius:50%;background:linear-linear(135deg, rgba(244,162,76,0.2), rgba(244,162,76,0.1));margin-bottom:16px;">
              <svg style="width:30px;height:30px;color:#F4A24C;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
              </svg>
            </div>
            <h3 style="margin:0;font-size:28px;font-weight:bold;background:linear-linear(135deg, #F4A24C, #FFB84D);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">
              ${cert.title}
            </h3>
          </div>
          <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:24px;padding:16px;background:rgba(255,255,255,0.05);border-radius:12px;border:1px solid rgba(244,162,76,0.2);">
            <p style="margin:0;color:#F4A24C;font-size:14px;font-weight:600;">
              Issued by: <span style="color:#fff;font-weight:700;">${cert.issuer}</span>
            </p>
            <p style="margin:0;color:#ccc;font-size:13px;">
              Date: <span style="color:#fff;">${cert.date}</span>
            </p>
          </div>
          <p style="margin:0;color:#ddd;font-size:14px;text-align:justify;line-height:1.6;padding:0 10px;">
            ${cert.description}
          </p>
        </div>
      `,
      background: "#181a1b",
      showConfirmButton: false,
      showCloseButton: true,
      closeButtonHtml: '<svg style="color:#F4A24C;width:24px;height:24px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>',
      width: "600px",
      customClass: {
        popup: "certificate-modal",
        closeButton: "certificate-close-btn"
      },
      buttonsStyling: false,
    });
  };

  if (!certificates.length) {
    return (
      <div className="text-center text-gray-400 py-16">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#F4A24C]"></div>
        <p className="mt-4">Loading certificates...</p>
      </div>
    );
  }

  return (
    <section id="certificates" className="relative py-20 px-4 max-w-7xl mx-auto">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-20 w-96 h-96 bg-[#F4A24C]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-72 h-72 bg-[#F4A24C]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-[#F4A24C] via-orange-400 to-[#F4A24C] bg-clip-text text-transparent">
              My Certificates
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional achievements and learning milestones that showcase my expertise and dedication
          </p>
        </div>

        {/* Swiper Container */}
        <div data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={24}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            loop={certificates.length > 4}
            // pagination={{ 
            //   clickable: true,
            //   dynamicBullets: true,
            //   bulletClass: "swiper-pagination-bullet !bg-[#F4A24C]/30 !w-2 !h-2 !mx-1",
            //   bulletActiveClass: "swiper-pagination-bullet-active !bg-[#F4A24C] !w-8"
            // }}
            navigation={{
              nextEl: ".swiper-button-next-cert",
              prevEl: ".swiper-button-prev-cert",
            }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 16 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="certificates-swiper"
          >
            {certificates.map((cert, index) => (
              <SwiperSlide key={cert.id}>
                <div className="flex flex-col items-center group h-full">
                  {/* Card Container */}
                  <div className="relative w-full h-60 rounded-2xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-[#F4A24C]/30">
                    {/* Image */}
                    <img
                      src={cert.img}
                      alt={cert.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />

                    {/* linear Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      {/* Issuer Badge */}
                      <div className="mb-3">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4A24C]/20 backdrop-blur-sm border border-[#F4A24C]/30 text-[#F4A24C] text-xs font-semibold">
                          <FiAward size={14} />
                          {cert.issuer}
                        </span>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-3">
                        {/* Details Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            showCertificate(index);
                          }}
                          className="group/btn relative flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#F4A24C]/20 backdrop-blur-sm border border-[#F4A24C]/30 text-[#F4A24C] hover:bg-[#F4A24C] hover:text-black transition-all duration-300 font-semibold text-sm"
                          aria-label="View details"
                        >
                          <FiInfo size={18} className="group-hover/btn:rotate-180 transition-transform duration-300" />
                          <span>Details</span>
                          <span className="absolute -top-12 left-1/2 -translate-x-1/2 w-max px-3 py-1.5 text-xs bg-black/90 backdrop-blur-sm rounded-lg text-white opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-30">
                            View Details
                            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                          </span>
                        </button>

                        {/* External Link Button */}
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="group/link relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#F4A24C]/20 backdrop-blur-sm border border-[#F4A24C]/30 text-[#F4A24C] hover:bg-[#F4A24C] hover:text-black transition-all duration-300 hover:scale-110"
                          aria-label="View certificate"
                        >
                          <FiExternalLink size={20} />
                          <span className="absolute -top-12 left-1 -translate-x-1/2 w-max px-2 py-1 text-xs bg-black/90 backdrop-blur-sm rounded-lg text-white opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-30">
                            Certificate
                            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                          </span>
                        </a>
                      </div>
                    </div>

                    {/* Shine Effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/10 to-transparent"></div>
                  </div>

                  {/* Title */}
                  <div className="mt-4 w-full text-center">
                    <p className="text-sm font-semibold text-gray-300 group-hover:text-[#F4A24C] transition-colors duration-300 line-clamp-2">
                      {cert.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{cert.date}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button className="group/prev swiper-button-prev-cert relative w-12 h-12 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 text-[#F4A24C] hover:bg-[#F4A24C]/10 hover:border-[#F4A24C]/30 transition-all duration-300 flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="absolute -top-12 left-1/2 -translate-x-1/2 w-max px-3 py-1.5 text-xs bg-black/90 backdrop-blur-sm rounded-lg text-white opacity-0 group-hover/prev:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-30">
                Previous
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
              </span>
            </button>
            <button className="group/next swiper-button-next-cert relative w-12 h-12 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 text-[#F4A24C] hover:bg-[#F4A24C]/10 hover:border-[#F4A24C]/30 transition-all duration-300 flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="absolute -top-12 left-1/2 -translate-x-1/2 w-max px-3 py-1.5 text-xs bg-black/90 backdrop-blur-sm rounded-lg text-white opacity-0 group-hover/next:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-30">
                Next
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
