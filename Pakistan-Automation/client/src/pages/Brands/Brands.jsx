import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Brands.css";

import brandOne from "../../assets/images/brand/logo-01.webp";
import brandOneHover from "../../assets/images/brand/logo-01-hover.webp";

const Brands = () => {
  return (
    <>
      {/*====================  brand area start ====================*/}
      <div className="brands-logo-area py-5">
        <Container>
          <Row>
            <Col lg={12}>
              {/* brand logo  */}
              <div className="brands-area-container brands-log-area-container">
                <div className="swiper-wrapper brand-logo-slider__one d-flex justify-content-around">
                  {[1, 2, 3, 4, 5].map((item, i) => {
                    return (
                      <div key={i} className="swiper-slide brand-logo brand-logo--slider">
                        <span >
                         
                          <div className="brand-logo__image">
                            <img src={brandOne} className="img-fluid" alt="" />
                          </div>
                          <div className="brand-logo__image-hover">
                            <img
                              src={brandOneHover}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/*====================  brand area end  ====================*/}
    </>
  );
};

export default Brands;
