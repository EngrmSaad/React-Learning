import React from "react";
import { Container } from "react-bootstrap";
import BreadCrumb from "../../../../components/Breadcrumb/BreadCrumb";
import HeaderTop from "../../../../components/Header/HeaderTop/HeaderTop";
import "../ITServices/ITServices.css";

// import oeeBgImage from '../../../../assets/images/services/oee-services/1.webp'
// import oeeBgImage from '../../../../assets/images/services/oee-services/2.jpg'
import oeeBgImage from "../../../../assets/images/services/oee-services/3.jpg";

const OEEServices = () => {
  //   const subServicesData = [
  //     {
  //       title: "OEE- Machine",
  //       text: `Consistent Production Volume.
  //       More Efficient Manufacturing Processes.
  //       Reduced Waste, Scrap and Rework.
  //       Minimal Idling Time and ShortStops.
  //       Greater Shop Floor Accountability
  //       `,
  //       // text: "We provide the most responsive and functional IT design for companies and businesses worldwide.",
  //       // icon: <i className="fa-solid fa-falafel"></i>,
  //       // icon: <i className="fa-brands fa-sketch"></i>,
  //       icon: <i className="fa-solid fa-gear"></i>,
  //     },
  //     {
  //       title: "Department score KPI Digitization",
  //       text: `Paperless department board.
  //       Prepare and publish, no effort on printing or setting.
  //        Access to digital board from anywhere
  //       `,
  //       // text: "It’s possible to simultaneously manage and transform information from one server to another.",
  //       icon: <i className="fa-solid fa-gears"></i>,
  //     },
  //     {
  //       title: "Asset registration/ QR tagging",
  //       text: `Know your asset details at the dashboard by registering it to the asset management system.
  //       Optimize your asset.
  //       Get rid of ghost assets by better visibility.
  //       `,
  //       // text: "Back up your database, store in a safe and secure place while still maintaining its accessibility.",
  //       icon: <i className="fa-solid fa-user-gear"></i>,
  //     },
  //     {
  //       title: "Autonomous Maintenance",
  //       text: `*Defect handling ,  System 5S Audit System ,  Machine Clean Inspect & Lubrication Tracking System , Machine Centerline Tracking System`,
  //       icon: <i className="fa-solid fa-user-gear"></i>,
  //     },
  //     {
  //       title: "Preventive Maintenance:",
  //       text: `Maintenance task and Work order management.
  //       Function location Management.
  //       Time base & condition base monitoring system
  //      `,
  //       // text: "Back up your database, store in a safe and secure place while still maintaining its accessibility.",
  //       icon: <i className="fa-solid fa-user-gear"></i>,
  //     },
  //     {
  //       title: "Change control system",
  //       text: `
  //       Provide a single platform for great ideas/Kazein.

  //       Fully equipped with review and approval process

  //      `,
  //       // text: "Back up your database, store in a safe and secure place while still maintaining its accessibility.",
  //       icon: <i className="fa-solid fa-user-gear"></i>,
  //     },
  //     {
  //       title: "IT Help desk",
  //       text: `
  //       IT supports ticket tracking.
  // IT complaints dashboard .
  // Optimize issue to resolution
  //  `,
  //       // text: "Back up your database, store in a safe and secure place while still maintaining its accessibility.",
  //       icon: <i className="fa-solid fa-user-gear"></i>,
  //     },
  //     {
  //       title: "Trigger system",
  //       text: `
  //       Quality & Safety Feedback System.
  //  Quality & Safety Behavior observation System

  //      `,
  //       // text: "Back up your database, store in a safe and secure place while still maintaining its accessibility.",
  //       icon: <i className="fa-solid fa-user-gear"></i>,
  //     },
  //   ];
  return (
    <div>
      {/* Header Top start =======================> */}
      <HeaderTop />
      {/* Header Top end =======================> */}
      {/* breadcrumb-area start =======================> */}
      <BreadCrumb text="MES Services" bg={oeeBgImage} />
      {/* breadcrumb-area end =======================> */}

      {/* feature-images-wrapper  Start =============*/}
      <div className="IT-services-one-space-padding">
        <Container className="bg-light">Mes Services</Container>
      </div>
      {/* feature-images-wrapper  End =============*/}
    </div>
  );
};

export default OEEServices;
