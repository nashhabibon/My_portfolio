// import React, { useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Navigation } from "swiper";
// import "swiper/swiper-bundle.css";
// import "swiper/css";

// SwiperCore.use([Navigation]);

// const Swiperskills = () => {
//   useEffect(() => {
//     const swiper = new Swiper(".swiper", {
//       slidesPerView: 3,
//       direction: getDirection(),
//       navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
//       on: {
//         resize: function () {
//           swiper.changeDirection(getDirection());
//         },
//       },
//     });

//     function getDirection() {
//       var windowWidth = window.innerWidth;
//       var direction = window.innerWidth <= 760 ? "vertical" : "horizontal";
//       return direction;
//     }
//   }, []);
//   return (
//     <div className="swiper">
//       <div className="swiper-wrapper">
//         <div className="swiper-slide">Resize me!</div>
//         <div className="swiper-slide">Resize me!</div>
//         <div className="swiper-slide">Resize me!</div>
//         <div className="swiper-slide">Resize me!</div>
//         <div className="swiper-slide">Resize me!</div>
//         <div className="swiper-slide">Resize me!</div>
//         <div className="swiper-slide">Resize me!</div>
//         <div className="swiper-slide">Resize me!</div>
//         <div className="swiper-slide">Resize me!</div>
//         <div className="swiper-slide">Resize me!</div>
//       </div>
//       <div className="swiper-button-next"></div>
//       <div className="swiper-button-prev"></div>
//     </div>
//   );
// };

// export default Swiperskills;
