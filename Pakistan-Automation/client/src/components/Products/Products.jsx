import React, { useState } from "react";
import assetMan from "../../assets/images/projects/assetManangement.png";
import dgitali from "../../assets/images/projects/dgitali.png";
import meetings from "../../assets/images/projects/meetings.png";
import computer from "../../assets/images/projects/computer.png";
import defect from "../../assets/images/projects/defect.png";
import oeesystem from "../../assets/images/projects/oeesystem.png";
import pm from "../../assets/images/projects/pm.png";
import dd5 from "../../assets/images/projects/dd5.png";
import { Drawer } from "antd";
import asset from "../../assets/images/sidebar/Qr_tagging.png";
import audit from "../../assets/images/sidebar/audit.png";
import dispose from "../../assets/images/sidebar/dispose.png";
import defecthandle from "../../assets/images/sidebar/defect.png";
import s5 from "../../assets/images/sidebar/5s.png";
import cleaning from "../../assets/images/sidebar/cleaning.png";
import machine from "../../assets/images/sidebar/machinetrack.png";
import oee from "../../assets/images/sidebar/oee.png";
import kpi from "../../assets/images/sidebar/kpi.png";
import workorder from "../../assets/images/sidebar/workorder.png";
import plan from "../../assets/images/sidebar/plan.png";
import breakdown from "../../assets/images/sidebar/breakdown.png";
import health from "../../assets/images/sidebar/health.png";
import safety from "../../assets/images/sidebar/safety.png";
import work from "../../assets/images/sidebar/work.png";
import report from "../../assets/images/sidebar/report.png";
import ticket from "../../assets/images/sidebar/ticket.png";
import itasset from "../../assets/images/sidebar/itasset.png";
import softasset from "../../assets/images/sidebar/softasset.png";
import dashboard from "../../assets/images/sidebar/dashboard.png";

import "./Product.css";

const Products = ({ data, setData, open, setOpen }) => {
  //   console.log(data);
  //   console.log(open);

  const products = [
    {
      id: 7,
      pic: <img src={assetMan} alt="" width={200} height={150} />,
      title: "Asset Management",
      desc: "Gain complete asset control, enhance utilization, and eliminate ghost assets with our dashboard-driven asset registration and management system.",
      exploreBtn: "EXPLORE NOW",
      demoBtn: "BOOK A DEMO",
      drawer: {
        project1Title: "ASSET REGISTRATION / QR TAGGING",
        project1Img: (
          <img src={asset} alt="" className="img-fluid drawer-img" />
        ),
        project1Detailpoint1:
          " Know your asset details at dashboard by registering it to asset management system.",
        project1Detailpoint2: " Optimize your asset.",
        project1Detailpoint3: " Get rid of ghost assets by better visibility.",

        project2Title: "ASSET TRACK/AUDIT",
        project2Img: (
          <img src={audit} alt="" className="img-fluid drawer-img" />
        ),
        project2Detailpoint1: " Track your asset by pre define audit plan.",
        project2Detailpoint2: "	A QR scan ease the process",

        project3Title: "ASSET TRANSFER/ DISPOSAL",
        project3Img: (
          <img src={dispose} alt="" className="img-fluid drawer-img" />
        ),
        project3Detailpoint1:
          " Transfer the asset to other department with 100% compliance way.",
        project3Detailpoint2:
          "Keep record of disposed assets with our disposal feature.",
      },
    },

    {
      id: 1,
      pic: <img src={meetings} alt="" width={200} height={150} />,
      title: "Autonomous Maintenance",
      desc: "Gain complete asset control, enhance utilization, and eliminate ghost assets with our dashboard-driven asset registration and management system.",
      exploreBtn: "EXPLORE NOW",
      demoBtn: "BOOK A DEMO",
      drawer: {
        project1Title: " DEFECT HANDLING SYSTEM",
        project1Img: (
          <img src={defecthandle} alt="" className="img-fluid drawer-img " />
        ),
        project1Detailpoint1:
          " Tracking of reported Defects & Resolved Defects",
        project1Detailpoint2:
          " Easy identification of equipment's with repeated defects  .",
        project1Detailpoint3:
          " Provide defect classification for better priority.",

        project2Title: "5S AUDIT SYSTEM",
        project2Img: <img src={s5} alt="" className="img-fluid drawer-img" />,
        project2Detailpoint1:
          " Track outages in maintaining cleanliness of organizational environments.",
        // project2Detailpoint2:
        //   "b. Increase life of equipment by timely ensuring equipment maintenance.",

        project3Title: "MACHINE CLEAN INSPECT & LUBRICATION",
        project3Img: (
          <img src={cleaning} alt="" className="img-fluid drawer-img" />
        ),
        project3Detailpoint1:
          " Use to monitor cleaning & lubrication process of equipment.",
        project3Detailpoint2:
          " Increase life of equipment by timely ensuring equipment maintenance.",

        project4Title: " MACHINE CENTERLINE TRACKING SYSTEM",
        project4Img: (
          <img src={machine} alt="" className="img-fluid drawer-img" />
        ),
        project4Detailpoint1:
          " Health tracking of Equipment's Health by monitoring its key parameters",
        project4Detailpoint2:
          " Help to reduce unplanned downtime by taking early actions to improve health of equipment.",
      },
    },
    {
      id: 2,
      pic: <img src={oeesystem} alt="" width={200} height={150} />,
      title: "Shop Floor digitization",
      desc: "Enhance production efficiency by achieving consistency, optimizing processes, reducing waste, minimizing downtime, and fostering accountability on the factory floor.",
      exploreBtn: "EXPLORE NOW",
      demoBtn: "BOOK A DEMO",
      drawer: {
        project1Title: "  OEE- MACHINE",
        project1Img: <img src={oee} alt="" className="img-fluid drawer-img" />,
        project1Detailpoint1: " Consistent Production Volume",
        project1Detailpoint2: " More Efficient Manufacturing Processes.",
        project1Detailpoint4: " Minimal Idling Time and Short Stops.",
        project1Detailpoint5: " Greater Shop Floor Accountability.",

        project2Title: "  DEPARTMENT SCORE KPI DIGITIZATION",
        project2Img: <img src={kpi} alt="" className="img-fluid drawer-img" />,
        project2Detailpoint1: " Paperless department board.",
        project2Detailpoint2:
          " Prepare and publish, no effort on printing or setting.",
        project2Detailpoint3: " Access to digital board from anywhere.",
      },
    },
    // {
    //   id: 3,
    //   pic: <img src={pm} alt="" width={200} height={150} />,
    //   title: "Progressive Maintenance",
    //   desc: "Optimize asset performance and prevent breakdowns with efficient maintenance, streamlined location management, and advanced equipment monitoring.",
    //   exploreBtn: "EXPLORE NOW",
    //   demoBtn: "BOOK A DEMO",
    //   drawer: {
    //     project1Title: " MASTER MAINTENANCE PLAN",
    //     project1Img: <img src={plan} alt="" className="img-fluid drawer-img" />,
    //     project1Detailpoint1:
    //       " Developing the plant wide maintenance master plan with detail KPI",
    //     project1Detailpoint2: " Checklist for work order.",

    //     project2Title: " WORK ORDER DEPLOYMENT & EXECUTION",
    //     project2Img: (
    //       <img src={workorder} alt="" className="img-fluid drawer-img" />
    //     ),
    //     project2Detailpoint1: " Release of Work order for execution",
    //     project2Detailpoint2: " PM work order execution report submission",

    //     project3Title: "BREAKDOWN",
    //     project3Img: (
    //       <img src={breakdown} alt="" className="img-fluid drawer-img" />
    //     ),
    //     project3Detailpoint1: " Break down reporting.",
    //     project3Detailpoint2: " BD analysis",
    //     project3Detailpoint3: " BD reduction planning",

    //     project4Title: "REPORT AND SYSTEM HEALTH CHECK",
    //     project4Img: (
    //       <img src={health} alt="" className="img-fluid drawer-img" />
    //     ),
    //     project4Detailpoint1: " Dashboard for Maintenance module KPI analysis",
    //   },
    // },
    {
      id: 4,
      pic: <img src={computer} alt="" width={200} height={150} />,
      title: "Trigger System",
      desc: "Establish Quality & Safety Feedback and Behavior Observation Systems to cultivate a culture of continuous improvement.",
      exploreBtn: "EXPLORE NOW",
      demoBtn: "BOOK A DEMO",
      drawer: {
        project1Title: "SAFETY TRIGGER SYSTEM",
        project1Img: (
          <img src={safety} alt="" className="img-fluid drawer-img" />
        ),
        project1Detailpoint1:
          " Make your manufacturing site safe and hazard free with help of our safety feedback system",
        project1Detailpoint2: " Drive safety culture at site",

        project2Title: "INCIDENT REPROTING",
        project2Img: (
          <img src={report} alt="" className="img-fluid drawer-img" />
        ),
        project2Detailpoint1: " Instant reporting of safety & Quality incident",
        project2Detailpoint2:
          " Tracking of CAPA with help of dashboard visualization",
        project3Title: " WORK PERMIT",
        project3Img: <img src={work} alt="" className="img-fluid drawer-img" />,
        project3Detailpoint1:
          " Digital System integrated with Quick risk prediction for task and individual.",
        project3Detailpoint2:
          " Keep track of open, close and in going work permit",
      },
    },
    {
      id: 5,
      pic: <img src={dd5} alt="" width={200} height={150} />,
      title: "Meeting DMS Digitization",
      desc: "Effortlessly shift to a paperless department board, enabling remote access, streamlined communication, and improved visibility of departmental KPIs.",
      exploreBtn: "EXPLORE NOW",
      demoBtn: "BOOK A DEMO",
    },
    // {
    //   id: 6,
    //   pic: <img src={dgitali} alt="" width={200} height={150} />,
    //   title: "Change Control System",
    //   desc: "Enhance innovation and streamline change management through a centralized platform for idea generation and Kaizen with an integrated review and approval process.",
    //   exploreBtn: "EXPLORE NOW",
    //   demoBtn: "BOOK A DEMO",
    // },
    {
      id: 8,
      pic: <img src={defect} alt="" width={200} height={150} />,
      title: "IT Help desk",
      desc: "Monitor IT support tickets, enhance resolution processes, and ensure efficient support for improved user satisfaction.",
      exploreBtn: "EXPLORE NOW",
      demoBtn: "BOOK A DEMO",
      drawer: {
        project1Title: " IT TICKET SYSTEM",
        project1Img: (
          <img src={ticket} alt="" className="img-fluid drawer-img" />
        ),
        project1Detailpoint1:
          " Enable your organization with IT help ticket system.",
        project1Detailpoint2:
          " A comprehensive & and interactive dashboard keep track of all tickets and its status.",
        project2Title: "IT ASSET MANAGMENT",
        project2Img: (
          <img src={itasset} alt="" className="img-fluid drawer-img" />
        ),
        project2Detailpoint1:
          " Provide IT asset tracking system with complete lifecycle.",
        project2Detailpoint2:
          " Provide better visibility of company owned hardware and its utilization",

        project3Title: "SOFTWARE ASSET MANAGMENT",
        project3Img: (
          <img src={softasset} alt="" className="img-fluid drawer-img" />
        ),
        project3Detailpoint1:
          " Provide IT asset tracking system with complete lifecycle.",
        project3Detailpoint2:
          " Provide better visibility of company owned hardware and its utilization.",

        project4Title: "VM HEALTH CHECK DASHBOARD",
        project4Img: (
          <img src={dashboard} alt="" className="img-fluid drawer-img" />
        ),
        project4Detailpoint1:
          " A comprehensive dashboard for VM status of hardware utilization",
      },
    },
  ];

  const [productDrawerVisible, setProductDrawerVisible] = useState({});
  const openProductDrawer = (productId) => {
    // Set the visibility state for the specific product
    setProductDrawerVisible((prevState) => ({
      ...prevState,
      [productId]: true,
    }));
  };

  const closeProductDrawer = (productId) => {
    // Set the visibility state for the specific product
    setProductDrawerVisible((prevState) => ({
      ...prevState,
      [productId]: false,
    }));
  };

  return (
    <>
      {products.map((item) => {
        return (
          <div
            key={item.id}
            className="card "
            // data-aos="zoom-in-right"
            data-aos-duration="2000"
          >
            <div
              className="bg-body box-1  "
              style={{
                borderRadius: "20px",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
              <div className="image-parent picture  d-flex justify-content-center">
                {item.pic}
              </div>
              <div className="description">
                <p
                  className=" mt-1 text-center heading-Color "
                  style={{ fontSize: "16px", fontWeight: "bold" }}
                >
                  {item.title}
                </p>

                <div className=" mb-2 p-2 mx-2 " style={{ fontSize: "12px" }}>
                  <p className="project-info  ">{item.desc}</p>
                </div>
                <div className=" btn-card mx-4">
                  <div
                    className="d-flex justify-content-around w-100  btn-head"
                    onClick={() => {
                      openProductDrawer(item.id); // Pass the product ID
                    }}
                  >
                    <div className="explore-btn w-75 border-0 ">
                      <div className="btn-top-curve  "></div>
                      <div className="btn-bottom-curve  "></div>
                      <div className="btn-txt">{item.exploreBtn}</div>
                    </div>

                    <div className=" w-25 my-1">
                      <i
                        style={{ fontSize: "21px", color: "#007394" }}
                        className="fa-solid fa-chevron-right mt-1"
                      ></i>
                    </div>
                  </div>
                  <div
                    className="d-flex justify-content-around w-100 mt-2 demo-btn-head"
                    onClick={() => {
                      setOpen(true);
                    }}
                  >
                    <div
                      className="w-75 border-0 "
                      style={{ color: "#007394" }}
                    >
                      <div className="demo-btn-top-curve  "></div>
                      <div className="demo-btn-bottom-curve  "></div>
                      <div className="btn-txt">{item.demoBtn}</div>
                    </div>

                    <div className=" w-25 mt-2">
                      <i
                        style={{ fontSize: "21px", color: "white" }}
                        className="fa-solid fa-arrow-pointer"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>

              <Drawer
                style={{ background: "#FFFFF", width: "470px" }}
                title={item.title}
                className="layer1"
                placement="right"
                onClose={() => {
                  closeProductDrawer(item.id); // Pass the product ID
                }}
                visible={productDrawerVisible[item.id] || false} // Use specific product visibility state
                // open={show}
              >
                <div className="w-100 h-100">
                  <div className="">
                    {" "}
                    <h6
                      className={
                        item.drawer?.project1Title ? "offcanvas-title" : ""
                      }
                    >
                      <span className=""> {item.drawer?.project1Title}</span>
                    </h6>
                    <div className="row mt-2">
                      <div
                        className="col-lg-6 col-md-6 col-sm-6"
                        data-aos="fade-down"
                        data-aos-duration="3000"
                      >
                        {item.drawer?.project1Img}
                      </div>
                      <div
                        className="col-lg-6 col-md-6 col-sm-6"
                        data-aos="fade-up"
                        data-aos-duration="3000"
                      >
                        <ul className="text">
                          <li
                            className={
                              item.drawer?.project1Detailpoint1
                                ? " mt-1 liStyle"
                                : "mt-1 "
                            }
                          >
                            {item.drawer?.project1Detailpoint1}
                          </li>
                          <li
                            className={
                              item.drawer?.project1Detailpoint2
                                ? "mt-1 liStyle"
                                : "mt-1 "
                            }
                          >
                            {item.drawer?.project1Detailpoint2}
                          </li>
                          <li
                            className={
                              item.drawer?.project1Detailpoint3
                                ? "mt-1 liStyle"
                                : "mt-1 "
                            }
                          >
                            {item.drawer?.project1Detailpoint3}
                          </li>
                          <li
                            className={
                              item.drawer?.project1Detailpoint4
                                ? "mt-1 liStyle"
                                : "mt-1 "
                            }
                          >
                            {item.drawer?.project1Detailpoint4}
                          </li>
                          <li
                            className={
                              item.drawer?.project1Detailpoint5
                                ? "mt-1 liStyle"
                                : "mt-1 "
                            }
                          >
                            {item.drawer?.project1Detailpoint5}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="  mt-4">
                    {" "}
                    <h6
                      className={
                        item.drawer?.project2Title ? "offcanvas-title" : ""
                      }
                    >
                      <span className="">{item.drawer?.project2Title}</span>
                    </h6>
                    <div className="row mt-2">
                      <div
                        className="col-lg-6 col-md-6 col-sm-6"
                        data-aos="fade-right"
                        data-aos-duration="3000"
                      >
                        <ul className="text">
                          <li
                            className={
                              item.drawer?.project2Detailpoint1
                                ? "mt-1 liStyle"
                                : "mt-1"
                            }
                          >
                            {item.drawer?.project2Detailpoint1}
                          </li>
                          <li
                            className={
                              item.drawer?.project2Detailpoint2
                                ? "mt-1 liStyle"
                                : "mt-1"
                            }
                          >
                            {item.drawer?.project2Detailpoint2}
                          </li>
                          <li
                            className={
                              item.drawer?.project2Detailpoint3
                                ? "mt-1 liStyle"
                                : "mt-1"
                            }
                          >
                            {item.drawer?.project2Detailpoint3}
                          </li>
                        </ul>
                      </div>
                      <div
                        className="col-lg-6 col-md-6 col-sm-6"
                        data-aos="fade-left"
                        data-aos-duration="3000"
                      >
                        {item.drawer?.project2Img}
                      </div>
                    </div>
                  </div>

                  <div className=" mt-4">
                    {" "}
                    <h6
                      className={
                        item.drawer?.project3Title ? "offcanvas-title" : ""
                      }
                    >
                      <span className=""> {item.drawer?.project3Title} </span>
                    </h6>
                    <div className="row mt-2">
                      <div
                        className="col-lg-6 col-md-6 col-sm-6 "
                        data-aos="fade-right"
                        data-aos-duration="3000"
                      >
                        {item.drawer?.project3Img}
                      </div>
                      <div
                        className="col-lg-6 col-md-6 col-sm-6"
                        data-aos="fade-left"
                        data-aos-duration="3000"
                      >
                        <ul className="text">
                          <li
                            className={
                              item.drawer?.project3Detailpoint1
                                ? "mt-1 liStyle"
                                : "mt-1"
                            }
                          >
                            {item.drawer?.project3Detailpoint1}
                          </li>
                          <li
                            className={
                              item.drawer?.project3Detailpoint2
                                ? "mt-1 liStyle"
                                : "mt-1"
                            }
                          >
                            {item.drawer?.project3Detailpoint2}
                          </li>
                          <li
                            className={
                              item.drawer?.project3Detailpoint3
                                ? "mt-1 liStyle"
                                : "mt-1"
                            }
                          >
                            {item.drawer?.project3Detailpoint3}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className=" mt-4">
                    {" "}
                    <h6
                      className={
                        item.drawer?.project4Title ? "offcanvas-title" : ""
                      }
                    >
                      <span className=""> {item.drawer?.project4Title}</span>{" "}
                    </h6>
                    <div className="row mt-2">
                      <div
                        className="col-lg-6 col-md-6 col-sm-6"
                        data-aos="fade-right"
                        data-aos-duration="3000"
                      >
                        <ul className="text">
                          <li
                            className={
                              item.drawer?.project4Detailpoint1
                                ? "mt-1 liStyle"
                                : "mt-1"
                            }
                          >
                            {item.drawer?.project4Detailpoint1}
                          </li>
                          <li
                            className={
                              item.drawer?.project4Detailpoint2
                                ? "mt-1 liStyle"
                                : "mt-1"
                            }
                          >
                            {item.drawer?.project4Detailpoint2}
                          </li>
                        </ul>
                      </div>
                      <div
                        className="col-lg-6 col-md-6 col-sm-6"
                        data-aos="fade-left"
                        data-aos-duration="3000"
                      >
                        {item.drawer?.project4Img}
                      </div>
                    </div>
                  </div>
                </div>
              </Drawer>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Products;
