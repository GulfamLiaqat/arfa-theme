import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const headerMenu = [
    { title: "home", path: "/" },
    { title: "portfolio", path: "/portfolio" },
    { title: "services", path: "/services" },
    { title: "about us", path: "/about-us" },
    { title: "blog", path: "/blog" },
    { title: "contact us", path: "/contact-us" },
  ];
  return (
    <header className="header header-absolute">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="header_wrap">
              <div className="header_logo">
                <a href="index.html" className="logo">
                  <img src="/assets/images/primary-logo.png" alt="LOGO" />
                </a>
              </div>
              <div
                className="header_menu d-none d-lg-inline-block"
                id="main-menu"
              >
                <ul>
                  {headerMenu.map((menu, i) => (
                    <li key={i}>
                      <NavLink to={menu.path}>{menu.title}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="header_info">
                <button className="header_search">
                  <span>Search</span>
                  <i className="fa-solid fa-search"></i>
                </button>

                <button className="header_hamburger d-lg-none">
                  <span className="hamburger_inner">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </button>

                <button className="header_sidebar d-none d-lg-inline-flex">
                  <span className="sidebar_inner">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
