import React from "react";
import "./vedioSection.css";
import factory from "../../assets/images/projects/factory.png";
import interactive from "../../assets/images/projects/interactive.png";
import network from "../../assets/images/projects/network.png";
import Aiinteligence from "../../assets/images/projects/Aiinteligence.png";
import Technology from "../OurProducts/OurProducts";

export const VedioSection = () => {
  return (
    <div className="vedio-parrent pt-5" id="about">
      <div className="w-100 d-flex justify-content-center ">
        <video
          width="500px"
          className="rounded-3  bg-light"
          height="240"
          controls
        >
          <source
            className="w-100"
            src="/vedios/animation.mp4"
            type="video/mp4"
          />
          <source src="/vedios/animation.webm" type="video/webm" controls />
        </video>
      </div>
    </div>
  );
};
