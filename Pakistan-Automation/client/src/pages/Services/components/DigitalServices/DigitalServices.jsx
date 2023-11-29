import React from "react";
import { Container, Row } from "react-bootstrap";
import BreadCrumb from "../../../../components/Breadcrumb/BreadCrumb";
import HeaderTop from "../../../../components/Header/HeaderTop/HeaderTop";
import SubServicesCard from "../../../../components/sub-services-card/SubServicesCard";
import "../ITServices/ITServices.css";

// import digBgImage from '../../../../assets/images/services/digital-services/1.jpg'
import digBgImage from "../../../../assets/images/services/digital-services/2.png";
// import digBgImage from '../../../../assets/images/services/digital-services/3.jpg'
// import digBgImage from '../../../../assets/images/services/digital-services/4.jpg'

const DigitalServices = () => {
  const subServicesData = [
    {
      title: "Digital Design",
      text: "We provide the most responsive and functional IT design for companies and businesses worldwide.",
      icon: <i className="fa-solid fa-spray-can"></i>,
    },
    {
      title: "Digital Management",
      text: "It’s possible to simultaneously manage and transform information from one server to another.",
      icon: <i className="fa-solid fa-tachograph-digital"></i>,
    },
    {
      title: "Digital Infrastructure Plan",
      text: "Digital Coverage takes into account all conditions and budgets needed for building infrastructure plan.",
      icon: <i className="fa-solid fa-archway"></i>,
    },
  ];
  return (
    <div>
      {/* Header Top start =======================> */}
      <HeaderTop />
      {/* Header Top end =======================> */}
      {/* breadcrumb-area start =======================> */}
      <BreadCrumb text="Digital Services" bg={digBgImage} />
      {/* breadcrumb-area end =======================> */}

      {/* feature-images-wrapper  Start =============*/}
      <div className="IT-services-one-space-padding">
        <Container>
          <Row>
            <div className="col-lg-12">
              {/* section-title-wrap Start */}
              <div className="text-center">
                <h3 className="heading">
                  Preparing for your success, <br /> we provide{" "}
                  <span className="text--primary">
                    {" "}
                    truly prominent Digital Services.
                  </span>
                </h3>
              </div>
              {/* section-title-wrap Start */}
            </div>
          </Row>
          <Row>
            <div className="col-12">
              <div className="feature-images__one">
                <Row>
                  {subServicesData.map((item, i) => (
                    <SubServicesCard text={item.text} title={item.title} icon={item.icon} />
                  ))}
                </Row>
              </div>
              <div className="IT-services-under-heading text-center IT-services-two-space-padding">
                Challenges are just opportunities in disguise.{" "}
                {/* <a href="javascript:void">Take the challenge!</a> */}
                <span style={{cursor:"pointer"}}>Take the challenge!</span>

              </div>
            </div>
          </Row>
        </Container>
      </div>
      {/* feature-images-wrapper  End =============*/}
    </div>
  );
};
export default DigitalServices;
