import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./BreadCrumb.css";

const BreadCrumb = ({ text, bg }) => {
  return (
    <div
      className="breadcrumb-area"
      style={{
        backgroundImage: `url(${bg})`,
        // backgroundAttachment: "fixed",
        // backgroundClip: "content-box",
        backgroundRepeat: "no-repeat",
        backgroundSize:"cover",
        // filter: "blur(2px)"
      }}
    >
      <Container>
        <Row>
          <div className="col-12">
            {/* <div className="text-center"> */}
            <div className="">
              {/* <h2>{text}</h2> */}
              <h2 className="text-white">{text}</h2>
              {/* breadcrumb-list start */}
              <ul className="breadcrumb-list">
                <li className="breadcrumb-item">
                  <Link to="/" className="text-white">Home</Link>
                  {/* <Link to="/">Home</Link> */}
                </li>
                <li className="breadcrumb-item active">{text}</li>
              </ul>
              {/* breadcrumb-list end */}
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default BreadCrumb;
