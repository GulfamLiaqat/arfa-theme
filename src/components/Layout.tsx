import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: any) => {
  return (
    <div>
      <Header />
      <main id="content" className="site-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
