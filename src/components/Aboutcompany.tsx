import React from "react";

const Aboutcompany = () => {
  return (
    <section className="about-company">
      <div
        className="about_company_img"
        data-bg-image="/assets/images/about/h1-about-img.jpg"
      ></div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="company_history">
              <div className="company_history_item">
                <h5 className="history_title">Our Beginnings</h5>
                <div className="history_content">
                  <div className="year">2007</div>
                  <div className="icon">
                    <i className="flaticon-construction"></i>
                  </div>
                  <div className="desc">
                    From the inception of a project to its completion,
                    <br />
                    we employ a comprehensive and holistic approach that
                  </div>
                </div>
              </div>
              <div className="company_history_item">
                <h5 className="history_title">Achievement</h5>
                <div className="history_content">
                  <div className="year">2009</div>
                  <div className="icon">
                    <i className="flaticon-construction"></i>
                  </div>
                  <div className="desc">
                    From the inception of a project to its completion,
                    <br />
                    we employ a comprehensive and holistic approach that
                  </div>
                </div>
              </div>
              <div className="company_history_item">
                <h5 className="history_title">Our Ideas</h5>
                <div className="history_content">
                  <div className="year">2017</div>
                  <div className="icon">
                    <i className="flaticon-construction"></i>
                  </div>
                  <div className="desc">
                    From the inception of a project to its completion,
                    <br />
                    we employ a comprehensive and holistic approach that
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

export default Aboutcompany;
