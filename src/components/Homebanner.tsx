import { useEffect } from "react";
import { Icon } from "@iconify/react";

const Homebanner = () => {
  useEffect(() => {
    // DOM Manipulation for setting background image and color
    const elementsWithBgImage = document.querySelectorAll("[data-bg-image]");
    elementsWithBgImage.forEach((element) => {
      const bgImage = (element as Element).getAttribute("data-bg-image");
      if (bgImage) {
        (element as HTMLElement).style.backgroundImage = `url(${bgImage})`; // Use backticks here
      }
    });

    const elementsWithBgColor = document.querySelectorAll("[data-bg-color]");
    elementsWithBgColor.forEach((element) => {
      const bgColor = (element as Element).getAttribute("data-bg-color");
      if (bgColor) {
        (element as HTMLElement).style.backgroundColor = bgColor;
      }
    });
  }, []);

  return (
    <section className="hero-banner">
      <div
        className="hero_banner_img"
        // style={{ backgroundImage: "url(/assets/images/h1-hero-image.jpg)" }}
        data-bg-image="/assets/images/h1-hero-image.jpg"
      ></div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="hero_banner_container  d-flex justify-content-sm-end">
              <div className="hero_content_wrap">
                <div className="content_shape"></div>

                <h1 className="hero_title">
                  PASSIONATE WEB <br />
                  <span></span>DESIGN AGENCY
                </h1>

                <div className="video_round">
                  <img src="/assets/images/video-round.png" alt="ThemeShala" />
                  <a
                    href="https://youtu.be/MLpWrANjFbI?si=j_tA6vX-R4ZnciAM"
                    data-maxwidth="1000px"
                    data-autoplay="true"
                    data-vbtype="video"
                    className="video_popup"
                  >
                    <Icon
                      icon="solar:arrow-right-outline"
                      width="44"
                      height="44"
                    />
                  </a>
                </div>

                <div className="hero_counters">
                  <div className="ts_counter">
                    <div className="counter_icon">
                      <img
                        src="/assets/images/icons/reviews.png"
                        className="flaticon-rating"
                      />
                    </div>
                    <div className="counter_content">
                      <div className="number">
                        <span className="counter">80</span>
                        <span className="suffix">K</span>
                      </div>
                      <h6 className="title">Happy Customer</h6>
                    </div>
                  </div>
                  <div className="ts_counter">
                    <div className="counter_icon">
                      <i className="flaticon-layers"></i>
                    </div>
                    <div className="counter_content">
                      <div className="number">
                        <span className="counter">840</span>
                      </div>
                      <h6 className="title">Countries</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homebanner;
