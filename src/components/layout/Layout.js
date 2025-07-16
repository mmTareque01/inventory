import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ minHeight: "80vh" }} className="px-5 py-3">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
