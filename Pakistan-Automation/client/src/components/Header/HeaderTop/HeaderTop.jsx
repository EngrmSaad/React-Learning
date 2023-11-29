import React from "react";
import { Container, Row } from "react-bootstrap";
import "./HeaderTop.css";

const HeaderTop = () => {
  return (
    <div className="color-For-Top text-white" id="home">
      <Container fluid>
        <Row>
          <div className="col-lg-7 col-md-10 col-sm-10 col-10">
            <div className="d-flex justify-content-evenly flex-wrap align-items-center">
              <div className="">
                <p className="mb-0 text-center top-message">
                  <i className="fa-solid fa-location-dot"></i> Karachi, Pakistan
                </p>
              </div>
              <div className="">
                <p className="mb-0 text-center top-message">
                  <i className="fa-solid fa-phone"></i>{" "}
                  <a href="tel:+92 336 9753046">+92 336 9753046</a>
                </p>
              </div>
              <div className="">
                <p className="mb-0 text-center top-message">
                  <i className="fa-solid fa-envelope"></i>{" "}
                  <a href="mailto:info@digitalcoverage.com.pk">
                    info@digitalcoverage.com.pk
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-2 col-sm-2 col-2">
            <div className="d-flex justify-content-end align-items-center h-100">
              {/* for social icons */}
              {/* as pr saad sidduiqui requirement */}
              {/* <div className="px-2 h-100 d-flex justify-content-end align-items-center">
                <a
                  href="https://www.facebook.com/PakistanAutomation"
                  target={"_blank"}
                  rel="noreferrer"
                  className="d-flex justify-content-end align-items-center text-dark"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </div> */}

              {/* by saime */}
              <div className="px-2 h-100 d-flex justify-content-end align-items-center">
                <a
                  href="https://www.linkedin.com/company/digital-coverage-technology"
                  // href="https://www.linkedin.com/company/pakistan-automation/?viewAsMember=true"
                  target={"_blank"}
                  rel="noreferrer"
                  className="d-flex justify-content-end align-items-center text-dark"
                >
                  <i className="fa-brands fa-linkedin fa-linkedin-top"></i>
                </a>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderTop;
