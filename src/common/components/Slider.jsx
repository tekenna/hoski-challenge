import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../../assets/images/slide1.svg";
import slide2 from "../../assets/images/slide2.svg";
import slide3 from "../../assets/images/slide3.svg";
import Icon from "../utilities/Icon";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// function SampleNextArrow(props) {
//   const { className, onClick } = props;
//   return (
//     <div
//       className={
//         className +
//         " next min-h-[44px] min-w-[44px] shadow_  flex items-center justify-center z-[9999] "
//       }
//       onClick={onClick}
//     >
//       <Icon name={"arrow-right"} />
//     </div>
//   );
// }

// const SlideNextButton = () => {
//   const swiper = useSwiper();

//   return (
//     <button onClick={() => swiper.slideNext()}>Slide to the next slide</button>
//   );
// };

// function SamplePrevArrow(props) {
//   const { className, onClick } = props;
//   return (
//     <div
//       className={
//         className +
//         " prev min-h-[44px] min-w-[44px] shadow_  flex items-center justify-center z-[9999] "
//       }
//       onClick={onClick}
//     >
//       <Icon name={"arrow-left"} />
//     </div>
//   );
// }

// const Slider_ = () => {
//   const settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     spaceBetween: 24,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//   };
//   return (
//     <Slider {...settings}>
//       <img className="h-[480px]" src={slide1} alt="" />
//       <img className="h-[480px]" src={slide2} alt="" />
//       <img className="h-[480px]" src={slide3} alt="" />
//       <img className="h-[480px]" src={slide1} alt="" />
//     </Slider>
//   );
// };

const Slider_ = () => {
  const sliderRef = useRef();
  return (
    <div className="relative flex items-center">
      <Swiper
        spaceBetween={24}
        slidesPerView={3}
        // onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => (sliderRef.current = swiper)}
        navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
        loop={true}
        breakpoints={{
          268: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          720: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
      >
        <SwiperSlide>
          <img className="slide " src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="slide " src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="slide  " src={slide3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="slide" src={slide1} alt="" />
        </SwiperSlide>
      </Swiper>
      <div
        className="arrow-left arrow absolute left-[-16px] prev min-h-[44px] min-w-[44px] w-[44px] shadow_  flex items-center justify-center z-[9999] "
        onClick={() => sliderRef.current?.slidePrev()}
      >
        <Icon name={"arrow-left"} />
      </div>
      <div
        className="arrow-right arrow absolute right-[-12px] next min-h-[44px] min-w-[44px] w-[44px] shadow_  flex items-center justify-center z-[9999] "
        onClick={() => sliderRef.current?.slideNext()}
      >
        <Icon name={"arrow-right"} />
      </div>
    </div>
  );
};

export default Slider_;
