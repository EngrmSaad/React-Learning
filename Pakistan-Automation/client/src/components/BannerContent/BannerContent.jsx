import React from "react";
import { Nav } from "react-bootstrap";
import "./BannerContent.css";

const BannerContent = () => {
  return (
    <div className="p-3 ">
      <div>
        {/* <TypingAnimation /> */}
        <div className="main-title text-white text-capitalize main-title ">
          <h5 className="company-name">Pakistan Automation</h5>
          <h1 className="empower banner-text text-uppercase">Empowering</h1>
          <h1 className="banner-text">
            Industries Through Digital Transformation
          </h1>
        </div>

        <p className="mt-3 text-black text-capitalize banner-text  ">
          We Are Shaping the Future of Industrial Digital journey through Highly
          Tailored WEB Apps,{" "}
        </p>
        <p className="text-black text-capitalize banner-text ">
          Dashboards and Support Services.
        </p>
        <div className="hero-btn  mt-3">
          <Nav.Link
            className="talk-us px-4 banner-text  text-center"
            href="#contact"
          >
            {" "}
            Contact Us
          </Nav.Link>
        </div>
      </div>
    </div>
  );
};

export default BannerContent;
