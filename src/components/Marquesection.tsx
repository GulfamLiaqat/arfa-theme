// @ts-nocheck

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Marquesection = () => {
  return (
    <section className="marquee-section">
      <Swiper
        className="marquee_wrap swiper swiper-container"
        loop={true}
        freeMode
        slidesPerView="auto"
        spaceBetween={30}
        centeredSlides={true}
        allowTouchMove={false}
        speed={7000}
        autoplay={{
          delay: 0,
          disableOnInteraction: true,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide className="marquee_item swiper-slide">
          <div className="icon">
            <img src="/assets/images/marquee-icon.png" alt="ThemeShala" />
          </div>
          DIGITAL AGENCY
        </SwiperSlide>
        <SwiperSlide className="marquee_item swiper-slide">
          <div className="icon">
            <img src="/assets/images/marquee-icon.png" alt="ThemeShala" />
          </div>
          EMAIL MARKETING
        </SwiperSlide>
        <SwiperSlide className="marquee_item swiper-slide">
          <div className="icon">
            <img src="/assets/images/marquee-icon.png" alt="ThemeShala" />
          </div>
          SOFTWARE AGENCY
        </SwiperSlide>
        <SwiperSlide className="marquee_item swiper-slide">
          <div className="icon">
            <img src="/assets/images/marquee-icon.png" alt="ThemeShala" />
          </div>
          Web development
        </SwiperSlide>
        <SwiperSlide className="marquee_item swiper-slide">
          <div className="icon">
            <img src="/assets/images/marquee-icon.png" alt="ThemeShala" />
          </div>
          DIGITAL AGENCY
        </SwiperSlide>
        <SwiperSlide className="marquee_item swiper-slide">
          <div className="icon">
            <img src="/assets/images/marquee-icon.png" alt="ThemeShala" />
          </div>
          EMAIL MARKETING
        </SwiperSlide>
        <SwiperSlide className="marquee_item swiper-slide">
          <div className="icon">
            <img src="/assets/images/marquee-icon.png" alt="ThemeShala" />
          </div>
          SOFTWARE AGENCY
        </SwiperSlide>
        <SwiperSlide className="marquee_item swiper-slide">
          <div className="icon">
            <img src="/assets/images/marquee-icon.png" alt="ThemeShala" />
          </div>
          Web development
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Marquesection;
