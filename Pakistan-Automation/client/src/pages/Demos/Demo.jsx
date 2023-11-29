import React from "react";
import NavBar from "../../components/Header/NavBar/NavBar";
import DemoCard from "../../components/DemoCards/DemoCard";
import assetImage from "../../assets/images/cards/Assetcard.jpg";
import Fiveaudit from "../../assets/images/cards/5saudit.jpg";
import defecthandle from "../../assets/images/cards/defect.jpg";
import Bos from "../../assets/images/cards/Bos.jpg";
import Ofs from "../../assets/images/cards/ofs.jpg";
import HealthCheck from "../../assets/images/cards/Healthcheck.jpg";
import DDS from "../../assets/images/cards/DDS.jpg";
import Cil from "../../assets/images/cards/Cil.jpg";
import CL from "../../assets/images/cards/Cl.jpg";

import "./Demo.css";

const Demo = () => {
  const cards = [
    {
      imgSrc: (
        <img
          src={assetImage}
          alt=""
          className="img-fluid"
          style={{ height: 175, width: 300 }}
        />
      ),
      onlineDemo: "ONLINE DEMO",
      prodName: "Asset Managment",
      prodDetails:
        "An Asset Management System software is a tool for efficiently tracking, maintaining, and optimizing an organization's assets",
      demoBtn: "Explore Demo",
      arrowIcon: "fa-solid fa-arrow-right",
      route: "assetmanagement",
    },
    {
      imgSrc: (
        <img
          src={defecthandle}
          alt=""
          className="img-fluid"
          style={{ height: 175, width: 300 }}
        />
      ),
      onlineDemo: "ONLINE DEMO",
      prodName: "Defect Handling",
      prodDetails:
        "A Defect Handling System software is a tool that helps organizations manage and address defects and issues in products or processes.",
      demoBtn: "Explore Demo",
      arrowIcon: "fa-solid fa-arrow-right",
      route: "defecthandling",
    },
    {
      imgSrc: (
        <img
          src={Bos}
          alt=""
          className="img-fluid"
          style={{ height: 175, width: 300 }}
        />
      ),
      onlineDemo: "ONLINE DEMO",
      prodName: "BOS",
      prodDetails:
        "A Quality and Safety Behavior Observation System software is a tool designed to monitor and improve quality and safety practices within an organization.",
      demoBtn: "Explore Demo",
      arrowIcon: "fa-solid fa-arrow-right",
      route: "bos",
    },
    {
      imgSrc: (
        <img
          src={Ofs}
          alt=""
          className="img-fluid"
          style={{ height: 175, width: 300 }}
        />
      ),
      onlineDemo: "ONLINE DEMO",
      prodName: "OFS",
      prodDetails:
        "An Observation Feedback System software is a tool for collecting and managing feedback and observations.",
      demoBtn: "Explore Demo",
      arrowIcon: "fa-solid fa-arrow-right",
      route: "ofs",
    },
    {
      imgSrc: (
        <img
          src={HealthCheck}
          alt=""
          className="img-fluid"
          style={{ height: 175, width: 300 }}
        />
      ),
      onlineDemo: "ONLINE DEMO",
      prodName: "Health Check",
      prodDetails:
        "A Health Check for Manufacturing Industry System software is a tool designed to assess and optimize the overall health and efficiency of manufacturing processes.",
      demoBtn: "Explore Demo",
      arrowIcon: "fa-solid fa-arrow-right",
      route: "healthcheck",
    },
    {
      imgSrc: (
        <img
          src={Fiveaudit}
          alt=""
          className="img-fluid"
          style={{ height: 175, width: 300 }}
        />
      ),
      onlineDemo: "ONLINE DEMO",
      prodName: "5s Audit",
      prodDetails:
        "1. Sort, 2. Set in Order, 3. Shine, 4. Standardize, 5. Sustain. Remove clutter. Organize.Clean regularly Set standards.",
      demoBtn: "Explore Demo",
      arrowIcon: "fa-solid fa-arrow-right",
      route: "5saudit",
    },
    {
      imgSrc: (
        <img
          src={DDS}
          alt=""
          className="img-fluid"
          style={{ height: 175, width: 300 }}
        />
      ),
      onlineDemo: "ONLINE DEMO",
      prodName: "DDS",
      prodDetails:
        "A Daily Direction System (DDS) software is a tool used to manage and streamline daily tasks and priorities in various contexts.",
      demoBtn: "Explore Demo",
      arrowIcon: "fa-solid fa-arrow-right",
      route: "dds",
    },
    {
      imgSrc: (
        <img
          src={CL}
          alt=""
          className="img-fluid"
          style={{ height: 175, width: 300 }}
        />
      ),
      onlineDemo: "ONLINE DEMO",
      prodName: "Center Line",
      prodDetails:
        "A Center Line System software is a tool designed to establish and maintain centerlines for various manufacturing processes, ensuring consistency and accuracy.",
      demoBtn: "Explore Demo",
      arrowIcon: "fa-solid fa-arrow-right",
      route: "centerline",
    },
    {
      imgSrc: (
        <img
          src={Cil}
          alt=""
          className="img-fluid"
          style={{ height: 175, width: 300 }}
        />
      ),
      onlineDemo: "ONLINE DEMO",
      prodName: "CIL",
      prodDetails:
        "A Control Inspection and Lubrication System software is a tool for monitoring, managing, and optimizing equipment inspections and lubrication processes.",
      demoBtn: "Explore Demo",
      arrowIcon: "fa-solid fa-arrow-right",
      route: "cil",
    },
    {
      imgSrc: (
        <img
          src={DDS}
          alt=""
          className="img-fluid"
          style={{ height: 175, width: 300 }}
        />
      ),
      onlineDemo: "ONLINE DEMO",
      prodName: "OEE",
      prodDetails:
        "Overall Equipment Effectiveness (OEE) System  is a tool for measuring and improving the efficiency of manufacturing equipment and processes.",
      demoBtn: "Explore Demo",
      arrowIcon: "fa-solid fa-arrow-right",
      route: "oee",
    },
  ];
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="demo-heading" style={{ marginTop: "9rem" }}>
        Explore Our Product Demos
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {cards.map((card, index) => (
          <DemoCard key={index} card={card} /> // Pass each card as a prop
        ))}
      </div>
    </div>
  );
};

export default Demo;
