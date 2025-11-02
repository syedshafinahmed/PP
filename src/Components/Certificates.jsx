import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Swal from "sweetalert2";
import "swiper/css";
import "swiper/css/navigation";
import "sweetalert2/dist/sweetalert2.min.css";

import one from '../assets/one.jpg';
import two from '../assets/two.jpg';
import three from '../assets/three.jpg';
import four from '../assets/four.jpg';

const certificates = [
  { id: 1, title: "Data Visualization with Python", img: one, issuer: "Coursera", date: "April 23, 2025", description: "Completed an intensive 12-week course covering HTML, CSS, JavaScript, and responsive design principles for modern web applications.", link: "https://www.coursera.org/account/accomplishments/certificate/XXXXXX" },
  { id: 2, title: "React Advanced Course", img: two, issuer: "Udemy", date: "July 2024", description: "Learned advanced React concepts like hooks, context API, and performance optimization with best coding practices.", link: "https://www.udemy.com/certificate/XXXXXX" },
  { id: 3, title: "UI/UX Design", img: three, issuer: "Google Design", date: "March 2024", description: "Acquired hands-on experience in user research, prototyping, and accessibility design for better digital experiences.", link: "https://www.credential.net/XXXXXX" },
  { id: 4, title: "Machine Learning Basics", img: four, issuer: "Kaggle", date: "August 2024", description: "Built basic ML models with Python, explored supervised and unsupervised learning, and analyzed datasets using scikit-learn.", link: "https://www.kaggle.com/learn/certification/XXXXXX" },
];

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showCertificate = (index) => {
    setCurrentIndex(index);
    showSwal(index);
  };

  const showSwal = (index) => {
    const cert = certificates[index];

    Swal.fire({
      html: `
        <div style="position: relative; text-align: center;">
          <img src="${cert.img}" alt="${cert.title}" style="width:100%;border-radius:12px;"/>
          <h3 style="margin-top:12px;font-weight:700;color:#ffb347;">${cert.title}</h3>
          <p style="margin-top:4px;color:#ddd;font-size:14px;">Issued by: <b>${cert.issuer}</b> | ${cert.date}</p>
          <p style="margin-top:10px;color:#bbb;font-size:15px;">${cert.description}</p>

          <div style="margin-top:15px;">
            <a href="${cert.link}" target="_blank" style="color:#fff;background:#ffb347;padding:8px 16px;border-radius:6px;text-decoration:none;font-weight:600;">🔗 View Certificate</a>
          </div>

          <div style="display:flex;justify-content:space-between;position:absolute;top:50%;width:100%;">
            <button id="prevBtn" class="swal2-confirm" style="background:rgba(255,255,255,0.6);border:none;color:black;font-size:20px;font-weight:bold;margin-left:10px;">❮</button>
            <button id="nextBtn" class="swal2-confirm" style="background:rgba(255,255,255,0.6);border:none;color:black;font-size:20px;font-weight:bold;margin-right:10px;">❯</button>
          </div>
        </div>
      `,
      background: "rgb(24, 26, 27)",
      showConfirmButton: false,
      showCloseButton: true,
      width: "70vw",
      didOpen: () => {
        document.getElementById("nextBtn").addEventListener("click", handleNext);
        document.getElementById("prevBtn").addEventListener("click", handlePrev);
      },
    });
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % certificates.length;
    setCurrentIndex(nextIndex);
    Swal.close();
    showSwal(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + certificates.length) % certificates.length;
    setCurrentIndex(prevIndex);
    Swal.close();
    showSwal(prevIndex);
  };

  return (
    <div id="certificates" className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-orange-300">
        My Certificates
      </h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={1}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
        modules={[Navigation]}
        className="rounded-2xl"
      >
        {certificates.map((cert, index) => (
          <SwiperSlide key={cert.id}>
            <div
              onClick={() => showCertificate(index)}
              className="cursor-pointer flex flex-col items-center"
            >
              <div className="overflow-hidden rounded-xl shadow-lg border border-base-200 w-[330px] h-[255px]">
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="w-full h-full object-cover duration-300"
                />
              </div>
              <p className="text-lg mt-4 font-medium text-base-content text-center">
                {cert.title}
              </p>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Arrows */}
        <div className="swiper-button-prev text-orange-300 -left-10 top-1/2 -translate-y-1/2"></div>
        <div className="swiper-button-next text-orange-300 -left-10 top-1/2 -translate-y-1/2"></div>
      </Swiper>
    </div>
  );
};

export default Certificates;
