const Footer = () => {
  return (
    <footer className="footer-area">
      <div
        className="footer-area-bg"
        data-bg-image="/assets/images/footer/h1-footer-bg.jpg"
      ></div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="footer_wrapper">
              {/* <!-- top --> */}
              <div className="footer_wrapper_top">
                <div className="footer_logo">
                  <a href="index.html" className="logo">
                    <img
                      src="/assets/images/logos/primary-logo.png"
                      alt="ThemeShala"
                    />
                  </a>
                </div>

                <div className="footer_description">
                  Their team's technical expertise is truly outstanding. They
                  took the time to thoroughly understand our goals and
                  requirements and then designed and implemented solutions...
                </div>
              </div>

              {/* <!-- middle --> */}
              <div className="footer_wrapper_middle">
                <div className="row justify-content-center g-4">
                  <div className="col-xl-3 col-lg-4 col-md-6 text-center">
                    <div className="footer_contact">
                      <div className="footer_contact_icon">
                        <i className="flaticon-phone-call"></i>
                      </div>
                      <h6 className="footer_contact_title">Phone</h6>
                      <div className="footer_contact_text">
                        <span>
                          Phone:{" "}
                          <a target="_blank" href="tel:+01234567890">
                            +(012) 3456 78901
                          </a>
                        </span>
                        <span>Fax: +04 642 021 332</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-lg-4 col-md-6 text-center">
                    <div className="footer_contact">
                      <div className="footer_contact_icon">
                        <i className="flaticon-email"></i>
                      </div>
                      <h6 className="footer_contact_title">Email</h6>
                      <div className="footer_contact_text">
                        <span>
                          <a target="_blank" href="mailto:info@arfa.com">
                            info@arfa.com
                          </a>
                        </span>
                        <span>
                          <a target="_blank" href="mailto:support@arfa.com">
                            support@arfa.com
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-lg-4 col-md-6 text-center">
                    <div className="footer_contact">
                      <div className="footer_contact_icon">
                        <i className="flaticon-pin"></i>
                      </div>
                      <h6 className="footer_contact_title">Address</h6>
                      <div className="footer_contact_text">
                        <span>
                          220 Petersham town, Wardell street, Australia PA 6550.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-lg-4 col-md-6 text-center">
                    <div className="footer_contact">
                      <div className="footer_contact_icon">
                        <i className="flaticon-share"></i>
                      </div>
                      <h6 className="footer_contact_title">Follow</h6>
                      <ul className="footer_contact_socials">
                        <li>
                          <a href="#" target="_blank">
                            <i className="fa-brands fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i className="fa-brands fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i className="fa-brands fa-vimeo-v"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- bottom --> */}
              <div className="footer_wrapper_bottom d-flex flex-wrap align-items-center justify-content-xl-between justify-content-center">
                <div className="footer_menu">
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="about.html">about us</a>
                    </li>
                    <li>
                      <a href="services.html">services</a>
                    </li>
                    <li>
                      <a href="portfolio.html">portfolio</a>
                    </li>
                    <li>
                      <a href="contact.html">contact us</a>
                    </li>
                  </ul>
                </div>

                <div className="footer_copyright_text">
                  copyright 2024{" "}
                  <a
                    href="https://themeforest.net/user/themeshala"
                    target="_blank"
                  >
                    ThemeShala
                  </a>
                  . All Rights Reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
