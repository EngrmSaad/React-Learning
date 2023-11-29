import React from "react";
import { useNavigate } from "react-router-dom";
import "./services-card.css";

const ServicesCard = ({ classNameProps, title, text, btnText, srcURL }) => {

  const navigate = useNavigate()

  const handleNavigate =() =>{
    switch (title) {
      case "IT Services":
        return navigate("/it-services");

      case "OEE Services":
        return navigate("/oee-services");

      case "Automation Services":
        return navigate("/automation-services");

      case "Digital Services":
        return navigate("/digital-services");
      default:
        break;
    }
  }
  return (
    <div className={`${classNameProps} wow move-up`}>
      <div className="service-box-icon box-style single-svg-icon-box">
        <div className="icon-box-wrap">
          <div className="icon">
            <div
              className="svg-icon"
              id="svg-1"
            >
              {srcURL}
            </div>
          </div>
          <div className="content">
            <h5 className="heading text-dark fw-bold">{title} </h5>
            <div className="text">{text}</div>
            <div className="feature-btn">
              <span
                // href="javascript:void"
                className="text-decoration-none d-flex justify-content-start align-items-center "
                onClick={handleNavigate}
              >
                
                <span className="button-text px-1">{btnText}</span>{" "}
                <i className="fa-solid fa-arrow-right-long"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
