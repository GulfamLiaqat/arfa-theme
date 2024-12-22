import React from "react";
import { Link } from "react-router-dom";

const BreadCrumbs = ({ pageName }: any) => {
  return (
    <section
      className="breadcrumb-section"
      style={{
        backgroundImage:
          "url(https://html.themeshala.com/arfa/demo/assets/images/breadcrumb/breadcrumb-bg.jpg)",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="breadcrumb_content d-flex align-items-center justify-content-center">
              <h1 className="breadcrumb_content_title">{pageName}</h1>

              <div className="breadcrumb_content_navigation">
                <span>
                  <Link to="/" className="home">
                    Home
                  </Link>
                </span>{" "}
                /<span className="current-item">{pageName}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadCrumbs;
