import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay } from "swiper/modules";

<Swiper
  modules={[Autoplay]}
  slidesPerView={4}
  spaceBetween={20}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  loop={true}
>
  <SwiperSlide><img src="/assets/images/brands/brand-logo-1.png" alt="Logo" /></SwiperSlide>
  <SwiperSlide><img src="/assets/images/brands/brand-logo-2.png" alt="Logo" /></SwiperSlide>
  {/* Add more slides */}
</Swiper>

const Funfact = () => {
  return (
    <section className="fun-fact-section">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="fun_fact_wrap">
              <div className="ts_counter style-2">
                <div className="counter_content">
                  <div className="number">
                    <span className="counter">25</span>
                    <span className="suffix">K</span>
                  </div>
                  <h5 className="title">
                    Project
                    <br />
                    Completed
                  </h5>
                </div>
              </div>

              <div className="ts_counter style-2 active">
                <div className="counter_content">
                  <div className="number">
                    <span className="counter">36</span>
                    <span className="suffix">K</span>
                  </div>
                  <h5 className="title">
                    Awards <br /> Fou Winning
                  </h5>
                </div>
              </div>

              <div className="ts_counter style-2 ">
                <div className="counter_content">
                  <div className="number">
                    <span className="counter">17</span>
                    <span className="suffix">K</span>
                  </div>
                  <h5 className="title">
                    Happy <br /> Our Customer
                  </h5>
                </div>
              </div>

              <div className="ts_counter style-2 ">
                <div className="counter_content">
                  <div className="number">
                    <span className="counter">29</span>
                    <span className="suffix">K</span>
                  </div>
                  <h5 className="title">
                    Team <br /> Our Member
                  </h5>
                </div>
              </div>
            </div>

            {/* <!-- trusted client --> */}
            <div className="divider">
              <span className="left"></span>
              <div className="divider_title">Trusted Clients</div>
              <span className="right"></span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="brand_logo_carousel swiper swiper-container"
        id="brandLogo1"
      >
        <div className="swiper-wrapper slide-transition align-items-center">
          <div className="logo_item swiper-slide">
            <a href="#">
              <img
                src="/assets/images/brands/brand-logo-1.png"
                alt="ThemeShala"
              />
            </a>
          </div>
          <div className="logo_item swiper-slide">
            <a href="#">
              <img
                src="/assets/images/brands/brand-logo-2.png"
                alt="ThemeShala"
              />
            </a>
          </div>
          <div className="logo_item swiper-slide">
            <a href="#">
              <img
                src="/assets/images/brands/brand-logo-3.png"
                alt="ThemeShala"
              />
            </a>
          </div>
          <div className="logo_item swiper-slide">
            <a href="#">
              <img
                src="/assets/images/brands/brand-logo-4.png"
                alt="ThemeShala"
              />
            </a>
          </div>
          <div className="logo_item swiper-slide">
            <a href="#">
              <img
                src="/assets/images/brands/brand-logo-5.png"
                alt="ThemeShala"
              />
            </a>
          </div>
          <div className="logo_item swiper-slide">
            <a href="#">
              <img
                src="/assets/images/brands/brand-logo-6.png"
                alt="ThemeShala"
              />
            </a>
          </div>
          <div className="logo_item swiper-slide">
            <a href="#">
              <img
                src="/assets/images/brands/brand-logo-1.png"
                alt="ThemeShala"
              />
            </a>
          </div>
          <div className="logo_item swiper-slide">
            <a href="#">
              <img
                src="/assets/images/brands/brand-logo-2.png"
                alt="ThemeShala"
              />
            </a>
          </div>
          <div className="logo_item swiper-slide">
            <a href="#">
              <img
                src="/assets/images/brands/brand-logo-3.png"
                alt="ThemeShala"
              />
            </a>
          </div>
          <div className="logo_item swiper-slide">
            <a href="#">
              <img
                src="/assets/images/brands/brand-logo-4.png"
                alt="ThemeShala"
              />
            </a>
          </div>
          <div className="logo_item swiper-slide">
            <a href="#">
              <img
                src="/assets/images/brands/brand-logo-5.png"
                alt="ThemeShala"
              />
            </a>
          </div>
          <div className="logo_item swiper-slide">
            <a href="#">
              <img
                src="/assets/images/brands/brand-logo-6.png"
                alt="ThemeShala"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Funfact;
