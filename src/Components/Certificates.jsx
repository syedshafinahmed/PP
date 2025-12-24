import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Swal from "sweetalert2";
import "swiper/css";
import "swiper/css/pagination";
import "sweetalert2/dist/sweetalert2.min.css";

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch the JSON from public folder
    fetch("/certificates.json")
      .then((res) => res.json())
      .then((data) => setCertificates(data))
      .catch((err) => console.error("Failed to load certificates:", err));
  }, []);

  const showCertificate = (index) => {
    setCurrentIndex(index);
    const cert = certificates[index];
    Swal.fire({
      html: `
        <div style="text-align:center;font-family:sans-serif;">
          <img src="${cert.img}" alt="${cert.title}" style="width:100%;border-radius:12px;" />
          <h3 style="margin-top:12px;color:#F4A24C;">${cert.title}</h3>
          <p style="color:#ccc;font-size:14px;">Issued by: <b>${cert.issuer}</b> | ${cert.date}</p>
          <p style="margin-top:8px;color:#ddd;font-size:15px;">${cert.description}</p>
          <a href="${cert.link}" target="_blank" style="margin-top:12px;display:inline-block;color:#fff;background:#F4A24C;padding:8px 16px;border-radius:8px;text-decoration:none;">View Certificate</a>
        </div>
      `,
      background: "#181a1b",
      showConfirmButton: false,
      showCloseButton: true,
      width: "70vw",
    });
  };

  if (!certificates.length) {
    return <div className="text-center text-gray-400 py-16">Loading certificates...</div>;
  }

  return (
    <div id="certificates" className="max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-orange-300">
        My Certificates
      </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop
        // pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {certificates.map((cert, index) => (
          <SwiperSlide key={cert.id}>
            <div
              onClick={() => showCertificate(index)}
              className="cursor-pointer flex flex-col items-center group"
            >
              <div className="overflow-hidden rounded-2xl shadow-lg border border-gray-700 w-[300px] h-[200px]">
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <p className="text-xs mt-4 font-semibold text-center text-gray-200 group-hover:text-[#F4A24C]">
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
