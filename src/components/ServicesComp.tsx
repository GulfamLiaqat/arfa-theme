import React from "react";
import { Nav, Tab } from "react-bootstrap";

const ServicesComp = () => {
  return (
    <section className="services-section">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section_title">
              <h6 className="subtitle">Our included service.</h6>
              <h2 className="title">The Best Service For You</h2>
            </div>

            <div className="services_tab">
              <Tab.Container defaultActiveKey="tab-1">
                <div className="services_tab_list">
                  <h3 className="tab_title">Quality Services</h3>
                  <Nav variant="pills" className="flex-column nav">
                    <Nav.Item>
                      <Nav.Link eventKey="tab-1">
                        Branding and Identity
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tab-2">Digital Marketing</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tab-3">Content Creation</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tab-4">Creative Strategy</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tab-5">
                        Advertising and Media
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
                <Tab.Content className="services_tab_container">
                  <Tab.Pane className="tab_content_pane" eventKey="tab-1">
                    <div className="sub_service">
                      <div className="icon">
                        <img
                          src="/assets/images/icons/solution.png"
                          className="flaticon-solution"
                        />
                      </div>
                      <h5 className="service_title">Logo Design</h5>
                      <div className="desc">
                        Create memorable logos that capture your brand’s essence
                        and make a lasting visual impact.
                      </div>

                      <a
                        href="single-service.html"
                        className="service_btn ts-btn-inline"
                      >
                        <span>Read More</span>
                      </a>
                    </div>
                    <div className="sub_service">
                      <div className="icon">
                        <img
                          src="/assets/images/icons/solution.png"
                          className="flaticon-solution"
                        />
                      </div>
                      <h5 className="service_title">Brand Strategy</h5>
                      <div className="desc">
                        Develop a strategic approach to position your brand
                        uniquely within your target market.
                      </div>

                      <a
                        href="single-service.html"
                        className="service_btn ts-btn-inline"
                      >
                        <span>Read More</span>
                      </a>
                    </div>
                    <div className="sub_service">
                      <div className="icon">
                        <img
                          src="/assets/images/icons/solution.png"
                          className="flaticon-solution"
                        />
                      </div>
                      <h5 className="service_title">
                        Visual Identity Creation
                      </h5>
                      <div className="desc">
                        Establish a cohesive visual style, including colors, and
                        typography to strengthen brand recognition.
                      </div>

                      <a
                        href="single-service.html"
                        className="service_btn ts-btn-inline"
                      >
                        <span>Read More</span>
                      </a>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane className="tab_content_pane" eventKey="tab-2">
                    <div className="sub_service">
                      <div className="icon">
                        <img
                          src="/assets/images/icons/solution.png"
                          className="flaticon-solution"
                        />
                      </div>
                      <h5 className="service_title">Social Media Marketing</h5>
                      <div className="desc">
                        Engage audiences with targeted social content, brand
                        awareness and fostering community interaction.
                      </div>

                      <a
                        href="single-service.html"
                        className="service_btn ts-btn-inline"
                      >
                        <span>Read More</span>
                      </a>
                    </div>
                    <div className="sub_service">
                      <div className="icon">
                        <img
                          src="/assets/images/icons/solution.png"
                          className="flaticon-solution"
                        />
                      </div>
                      <h5 className="service_title">Content Marketing</h5>
                      <div className="desc">
                        Create valuable, informative content that attracts and
                        retains your target audience over time.
                      </div>

                      <a
                        href="single-service.html"
                        className="service_btn ts-btn-inline"
                      >
                        <span>Read More</span>
                      </a>
                    </div>
                    <div className="sub_service">
                      <div className="icon">
                        <img
                          src="/assets/images/icons/solution.png"
                          className="flaticon-solution"
                        />
                      </div>
                      <h5 className="service_title">Search Engine Marketing</h5>
                      <div className="desc">
                        Increase visibility on search engines with paid ads that
                        drive traffic and improve brand exposure.
                      </div>

                      <a
                        href="single-service.html"
                        className="service_btn ts-btn-inline"
                      >
                        <span>Read More</span>
                      </a>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane className="tab_content_pane" eventKey="tab-3">
                    <div className="sub_service">
                      <div className="icon">
                        <img
                          src="/assets/images/icons/solution.png"
                          className="flaticon-solution"
                        />
                      </div>
                      <h5 className="service_title">
                        Copywriting and Blogging
                      </h5>
                      <div className="desc">
                        Develop engaging written content that informs,
                        entertains, and aligns with your brand’s messaging.
                      </div>

                      <a
                        href="single-service.html"
                        className="service_btn ts-btn-inline"
                      >
                        <span>Read More</span>
                      </a>
                    </div>
                    <div className="sub_service">
                      <div className="icon">
                        <img
                          src="/assets/images/icons/solution.png"
                          className="flaticon-solution"
                        />
                      </div>
                      <h5 className="service_title">Video Production</h5>
                      <div className="desc">
                        Produce high-quality videos that tell your brand’s story
                        and captivate your target audience.
                      </div>

                      <a
                        href="single-service.html"
                        className="service_btn ts-btn-inline"
                      >
                        <span>Read More</span>
                      </a>
                    </div>
                    <div className="sub_service">
                      <div className="icon">
                        <img
                          src="/assets/images/icons/solution.png"
                          className="flaticon-solution"
                        />
                      </div>
                      <h5 className="service_title">Photography</h5>
                      <div className="desc">
                        Capture professional images that highlight your brand’s
                        products, people, and personality.
                      </div>

                      <a
                        href="single-service.html"
                        className="service_btn ts-btn-inline"
                      >
                        <span>Read More</span>
                      </a>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane className="tab_content_pane" eventKey="tab-4">
                    <div className="sub_service">
                      <div className="icon">
                        <img
                          src="/assets/images/icons/solution.png"
                          className="flaticon-solution"
                        />
                      </div>
                      <h5 className="service_title">Campaign Development</h5>
                      <div className="desc">
                        Plan and execute impactful campaigns that align with
                        brand objectives and capture audience attention.
                      </div>

                      <a
                        href="single-service.html"
                        className="service_btn ts-btn-inline"
                      >
                        <span>Read More</span>
                      </a>
                    </div>
                    <div className="sub_service">
                      <div className="icon">
                        <img
                          src="/assets/images/icons/solution.png"
                          className="flaticon-solution"
                        />
                      </div>
                      <h5 className="service_title">Content Strategy</h5>
                      <div className="desc">
                        Create a cohesive content plan that aligns with brand
                        goals and maximizes engagement.
                      </div>

                      <a
                        href="single-service.html"
                        className="service_btn ts-btn-inline"
                      >
                        <span>Read More</span>
                      </a>
                    </div>
                    <div className="sub_service">
                      <div className="icon">
                        <img
                          src="/assets/images/icons/solution.png"
                          className="flaticon-solution"
                        />
                      </div>
                      <h5 className="service_title">Competitive Analysis</h5>
                      <div className="desc">
                        Analyze competitors’ strengths and weaknesses to refine
                        your brand’s position in the market.
                      </div>

                      <a
                        href="single-service.html"
                        className="service_btn ts-btn-inline"
                      >
                        <span>Read More</span>
                      </a>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane className="tab_content_pane" eventKey="tab-5">
                    <div className="sub_service">
                      <div className="icon">
                        <img
                          src="/assets/images/icons/solution.png"
                          className="flaticon-solution"
                        />
                      </div>
                      <h5 className="service_title">
                        PPC (Pay-Per-Click) Advertising
                      </h5>
                      <div className="desc">
                        Drive immediate traffic and conversions with
                        cost-effective, targeted PPC ad campaigns.
                      </div>

                      <a
                        href="single-service.html"
                        className="service_btn ts-btn-inline"
                      >
                        <span>Read More</span>
                      </a>
                    </div>
                    <div className="sub_service">
                      <div className="icon">
                        <img
                          src="/assets/images/icons/solution.png"
                          className="flaticon-solution"
                        />
                      </div>
                      <h5 className="service_title">Social Media Ads</h5>
                      <div className="desc">
                        Amplify brand visibility with highly targeted social
                        media ads on top platforms.
                      </div>

                      <a
                        href="single-service.html"
                        className="service_btn ts-btn-inline"
                      >
                        <span>Read More</span>
                      </a>
                    </div>
                    <div className="sub_service">
                      <div className="icon">
                        <img
                          src="/assets/images/icons/solution.png"
                          className="flaticon-solution"
                        />
                      </div>
                      <h5 className="service_title">
                        Video and OTT Advertising
                      </h5>
                      <div className="desc">
                        Engage viewers with impactful video ads across digital
                        and streaming platforms.
                      </div>

                      <a
                        href="single-service.html"
                        className="service_btn ts-btn-inline"
                      >
                        <span>Read More</span>
                      </a>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
              {/* <ul className="nav">
                  <li data-tab="tab-1">
                    <button>Branding and Identity</button>
                  </li>
                  <li className="active" data-tab="tab-2">
                    <button>Digital Marketing</button>
                  </li>
                  <li data-tab="tab-3">
                    <button>Content Creation</button>
                  </li>
                  <li data-tab="tab-4">
                    <button>Creative Strategy</button>
                  </li>
                  <li data-tab="tab-5">
                    <button>Advertising and Media</button>
                  </li>
                </ul> */}

              <div className="ready_call">
                <a href="tel:+123-45678910" className="call">
                  Ready To <span> Get Started </span> CALL <br /> +123 4567 8910
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesComp;
