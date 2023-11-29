import React from "react";
import "./sub-services-card.css";

const SubServicesCard = ({ classNameProps, title, text, srcURL, icon }) => {
  return (
    <div className="col-lg-4 col-md-6 wow move-up">
      <div className="sub-services-box style-01">
        <div className="image-box-wrap">
          {/* <div className="box-image">{srcURL}</div> */}
          <div className={`content ${classNameProps ? "limit-content-height": ""}`}>
            <h5 className="heading">{title} </h5>
            <div className="text">{text}</div>
            <div className="circle-arrow">
              <div className="middle-dot" />
              <div className="middle-dot" />
              <span>
                
                {/* <i className="fa-solid fa-arrow-right-long" /> */}
                {icon}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubServicesCard;
