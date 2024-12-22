import React from "react";

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section_title text-center">
              <h6 className="subtitle">Clients Testimonials</h6>
              <h2 className="title">What our client says</h2>
            </div>

            <div className="testimonial_wrap">
              <div className="section_img">
                <img
                  src="/assets/images/h1-testimonial-img.jpg"
                  alt="ThemeShala"
                />
              </div>

              <div className="testimonial_carousel active_testimonial swiper swiper-container">
                <div className="swiper-wrapper">
                  <div className="testimonial_item swiper-slide">
                    <div className="bottom_shape"></div>

                    <div className="arrow"></div>

                    <div className="testimonial_item_ratings">
                      <div className="fill-ratings" style={{ width: "50%" }}>
                        <span>★★★★★</span>
                      </div>
                      <div className="empty-ratings">
                        <span>★★★★★</span>
                      </div>
                    </div>

                    <div className="testimonial_item_review">
                      <q>
                        {" "}
                        To helped the client achieve their goal of calling the
                        attention of mobile network operators. The expert team
                        was also able to develop an app with commendable UI/UX.
                        The client appreciates their flexibility in terms.{" "}
                      </q>
                    </div>
                    <div className="testimonial_item_client">
                      <h4 className="name">Aleesha Brown</h4>
                      <div className="designation">UI UX Designer</div>
                    </div>
                  </div>
                  <div className="testimonial_item swiper-slide">
                    <div className="bottom_shape"></div>

                    <div className="arrow"></div>

                    <div className="testimonial_item_ratings">
                      <div className="fill-ratings" style={{ width: "50%" }}>
                        <span>★★★★★</span>
                      </div>
                      <div className="empty-ratings">
                        <span>★★★★★</span>
                      </div>
                    </div>

                    <div className="testimonial_item_review">
                      <q>
                        {" "}
                        To helped the client achieve their goal of calling the
                        attention of mobile network operators. The expert team
                        was also able to develop an app with commendable UI/UX.
                        The client appreciates their flexibility in terms.{" "}
                      </q>
                    </div>
                    <div className="testimonial_item_client">
                      <h4 className="name">Aleesha Brown</h4>
                      <div className="designation">UI UX Designer</div>
                    </div>
                  </div>
                  <div className="testimonial_item swiper-slide">
                    <div className="bottom_shape"></div>

                    <div className="arrow"></div>

                    <div className="testimonial_item_ratings">
                      <div className="fill-ratings" style={{ width: "50%" }}>
                        <span>★★★★★</span>
                      </div>
                      <div className="empty-ratings">
                        <span>★★★★★</span>
                      </div>
                    </div>

                    <div className="testimonial_item_review">
                      <q>
                        {" "}
                        To helped the client achieve their goal of calling the
                        attention of mobile network operators. The expert team
                        was also able to develop an app with commendable UI/UX.
                        The client appreciates their flexibility in terms.{" "}
                      </q>
                    </div>
                    <div className="testimonial_item_client">
                      <h4 className="name">Aleesha Brown</h4>
                      <div className="designation">UI UX Designer</div>
                    </div>
                  </div>
                </div>

                {/* <!-- navigation --> */}
                <div className="testimonial_navigation">
                  <button className="testimonial_prev">
                    <i className="fa-sharp fa-regular fa-angle-left"></i>
                  </button>
                  <button className="testimonial_next">
                    <i className="fa-sharp fa-regular fa-angle-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonial;
