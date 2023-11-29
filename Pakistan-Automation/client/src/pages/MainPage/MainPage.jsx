import React, { Fragment } from "react";
import { Col, Container, Dropdown, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MainPage.css";
// import ReCAPTCHA from "react-google-recaptcha";

const MainPage = () => {
  // function handleRecaptchaChange(value) {
  //   // value contains the reCAPTCHA response
  //   console.log("reCAPTCHA response:", value);
  //   // You can use the response value as needed, such as sending it to the server for verification.
  // }
  return (
    <Fragment>
      <div className=" mainpage-hero  mainpage-bg p-5">
        <Container fluid>
          <Row className="align-items-center">
            {/*baseline*/}
            <Col lg={6} md={6}>
              <div className=" mainpage-hero-text move-up">
                {/* <h6>IT Services &amp; Consulting </h6> */}
                <h1 className="font-weight--reguler mb-15">
                  {/* House of <br /> Digital Operational Excellence Systems{" "} */}
                  We are <br /> Digital Solution & Automation Company You can
                  Rely on
                </h1>
                <p>We are Shaping the Future of Digital Economy, Together</p>
                <p>
                  Highly Tailored IT Design, Management &amp; Support Services.{" "}
                </p>
                <div className="hero-button   mt-30">
                  <Nav.Link className="talk-us-Class px-4" href="#contact">
                    {" "}
                    Talk Us
                  </Nav.Link>
                  {/* <a href="javascript:void"
                   className="ht-btn ht-btn-md">
                    Talk Us
                  </a> */}
                </div>
              </div>
            </Col>

            <Col lg={6} md={6}>
              <div className="main-page-hero-wrapper main-page-hero-space">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 m-auto">
                      <div
                        className="main-page-hero-wrap wow move-up animated"
                        style={{ visibility: "visible" }}
                      >
                        <div className="main-page-hero-text text-center">
                          <h1 className="font-weight--reguler text-dark mb-30">
                            For Services
                          </h1>
                          <div className="main-page-solution-form-wrap me-auto ms-auto">
                            <form action="#" method="post">
                              <div className="hero-select-form">
                                <div className="contact-select">
                                  <div className="form-item contact-inner">
                                    <span className="inquiry">
                                      <Dropdown>
                                        <Dropdown.Toggle
                                          className="select-item w-100 d-flex justify-content-between align-items-center"
                                          id="dropdown-basic"
                                        >
                                          How can we help you?
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                          <Dropdown.Item>
                                            {/* OEE Services */}
                                            <Link
                                              to="oee-services"
                                              className="w-100"
                                            >
                                              Manufacturing Excellence
                                            </Link>
                                          </Dropdown.Item>
                                          <Dropdown.Item>
                                            <Link
                                              to="it-services"
                                              className="w-100"
                                            >
                                              IT Services
                                            </Link>
                                          </Dropdown.Item>
                                          {/* <Dropdown.Item href="oee-services"> */}

                                          <Dropdown.Item>
                                            <Link
                                              to="automation-services"
                                              className="w-100"
                                            >
                                              Automation Services
                                            </Link>
                                          </Dropdown.Item>
                                          {/* remove as pr Awais Latif Requirements */}
                                          {/* <Dropdown.Item>
                                            <Link
                                              to="digital-services"
                                              className="w-100"
                                            >
                                              Digital Services
                                            </Link>
                                          </Dropdown.Item> */}
                                          {/* ////close */}
                                        </Dropdown.Menu>
                                      </Dropdown>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default MainPage;
