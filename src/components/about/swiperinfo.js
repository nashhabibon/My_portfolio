import React, { useRef, useState } from "react";
import { BsPersonWorkspace } from "react-icons/bs";
import { TbCertificate } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

export default function Swiperinfo() {
  return (
    <Swiper
      navigation={true}
      pagination={true}
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      spaceBetween={10}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
      }}
      className="info_container"
    >
      <SwiperSlide className="about_box">
        <i className="about_icon">
          <BsPersonWorkspace />
        </i>
        <h3 className="about_title">Experience</h3>
        <span className="about_sub">7 Years of Working</span>
      </SwiperSlide>

      <SwiperSlide className="about_box">
        <i className="about_icon">
          {" "}
          <TbCertificate />
        </i>
        <h3 className="about_title">Education</h3>
        <span className="about_sub">BSIT Degree Holder</span>
      </SwiperSlide>
      <SwiperSlide className="about_box">
        <i className="about_icon">
          {" "}
          <BiSupport />
        </i>
        <h3 className="about_title">Support</h3>
        <span className="about_sub">Online 24/7</span>
      </SwiperSlide>
    </Swiper>
  );
}
