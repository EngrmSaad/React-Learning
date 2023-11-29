import React from "react";
import "./Technologies.css";
import nodejs from "../../assets/images/logo/nodejs.png";
import sql from "../../assets/images/logo/sql.png";
import azure from "../../assets/images/logo/azure.png";
import reactjs from "../../assets/images/logo/reactjs.jpg";
import p1 from "../../assets/images/logo/p1.png";
import p2 from "../../assets/images/logo/p2.png";
import p3 from "../../assets/images/logo/p3.png";
import p4 from "../../assets/images/logo/p4.png";
import p5 from "../../assets/images/logo/p5.png";
import p6 from "../../assets/images/logo/p6.png";
import p7 from "../../assets/images/logo/p7.png";
import p9 from "../../assets/images/logo/p9.png";
import p10 from "../../assets/images/logo/p10.png";
import p11 from "../../assets/images/logo/p11.png";
import p12 from "../../assets/images/logo/p12.png";
import p13 from "../../assets/images/logo/p13.png";

export const Technologies = () => {
  const technologList = [
    {
      id: 1,

      description: "Html.js",
      srcURL: p11,

      height: 70,
      width: 80,
    },
    {
      id: 2,

      description: "Css",
      srcURL: p10,
      height: 70,
      width: 80,
    },
    {
      id: 3,

      description: "Javascript",
      srcURL: p9,
      height: 70,
      width: 80,
    },
    {
      id: 4,

      description: "React.js",
      srcURL: reactjs,
      height: 70,
      width: 80,
    },
    {
      id: 5,

      description: "Node.js",
      srcURL: nodejs,
      height: 70,
      width: 80,
    },
    {
      id: 6,

      description: "SQL",
      srcURL: sql,

      height: 70,
      width: 80,
    },
    {
      id: 7,

      description: "Azure",
      srcURL: azure,
      height: 70,
      width: 80,
    },
    {
      id: 8,

      description: "Power BI",
      srcURL: p1,
      height: 70,
      width: 80,
    },
    {
      id: 9,

      description: "Power Apps",
      srcURL: p2,
      height: 70,
      width: 80,
    },
    {
      id: 10,

      description: "Power Virtual Agents",
      srcURL: p3,
      height: 70,
      width: 80,
    },
    {
      id: 11,

      description: "Power Automate",
      srcURL: p4,

      height: 70,
      width: 80,
    },
    {
      id: 12,

      description: "Power Pages",
      srcURL: p5,
      height: 70,
      width: 80,
    },
    {
      id: 13,

      description: "Data Connectors",
      srcURL: p6,
      height: 70,
      width: 80,
    },
    {
      id: 14,

      description: "AI Builder",
      srcURL: p7,
      height: 70,
      width: 80,
    },
    {
      id: 15,

      description: "Redux",
      srcURL: p13,
      height: 70,
      width: 80,
    },
    {
      id: 16,

      description: "Git",
      srcURL: p12,
      height: 70,
      width: 80,
    },
  ];
  return (
    <div className="parent ">
      <section className="container-fluid p-5 tech-section">
        <h4 className="heading-Color d-flex justify-content-center ">
          Technologies
        </h4>
        <div
          className="d-flex justify-content-center "
          style={{ color: "darkgray" }}
        >
          Tools Technologies that we use to enhance Effectiveness, User
          Experience of our App
        </div>
        <div className="boxes justify-content-around parrent row mx-5 ">
          {/* <div className="box-1-parent row "> */}

          {technologList.map((item) => {
            return (
              <div
                key={item.id}
                className="box-1  col-lg-2 col-md-4 col-sm-12 mx-4 mt-3  mt-3  "
                style={{ borderRadius: "20px" }}
              >
                {/* bg-white */}
                <div className="Tech-Boxes p-1 " style={{ borderRadius: "12px" }}>
                  <div className="imageDiv d-flex justify-content-center">
                    <img
                      src={item.srcURL}
                      width={item.width}
                      height={item.height}
                      className="heading-Color d-block justify-content-center"
                      alt=""
                    />
                  </div>
                  <p
                    className=" text-center heading-Color "
                    style={{ fontSize: "13px", fontWeight: "bold" }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}

          {/* </div> */}
        </div>
      </section>
    </div>
  );
};
