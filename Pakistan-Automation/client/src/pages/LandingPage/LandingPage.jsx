import React from "react";
import { Nav } from "react-bootstrap";
import "./LandingPage.css";
import TypingAnimation from "../../components/TypingAnimation/TypingAnimation";
// import { Col, Container, Dropdown, Nav, Row } from "react-bootstrap";
const LandingPage = () => {
  return (
    <div>
      <div className="background  p-5">
        <div className="falling-stars">
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>

          {/* <!-- Add more star elements as needed --> */}
        </div>
        <div className="falling-stars">
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>

          {/* <!-- Add more star elements as needed --> */}
        </div>
        <div className="falling-stars">
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>

          {/* <!-- Add more star elements as needed --> */}
        </div>
        <div className="falling-stars">
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>

          {/* <!-- Add more star elements as needed --> */}
        </div>

        <div className="row ">
          <div className="information d-flex justify-content-start col-lg-7 col-md-6 col-sm-12">
            <div>
              <TypingAnimation />

              <p className="mt-3 text-clr ">
                We Are Shaping the Future of Industrial Digital journey through{" "}
              </p>
              <p className="text-clr">
                Highly Tailored WEB Apps, Dashboards and Support Services.
              </p>
              <div className="hero-button  mt-3">
                <Nav.Link className="talk-us-Class px-4" href="#contact">
                  {" "}
                  Talk Us
                </Nav.Link>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-5 col-sm-12 mt-2 ">
            {/* <div className="main-page-hero-text text-center"></div> */}
            {/* <div className="rotating-background "></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
