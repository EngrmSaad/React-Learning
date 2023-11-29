import React from "react";
import { Container, Row } from "react-bootstrap";
import ServicesCard from "../../components/services-card/ServicesCard";
import "./services.css";

const ITServicesIcon = (
  <svg
    style={{ color: "#2B5A93" }}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width={54}
    height={54}
    fill="none"
  >
    <style
      dangerouslySetInnerHTML={{
        __html:
          "@keyframes pulsate{0%,to{transform:scale(1)}50%{transform:scale(.9)}}",
      }}
    />
    <g
      style={{
        animation: "pulsate .5s ease-in-out infinite both",
        transformOrigin: "center center",
      }}
      strokeWidth="1.5"
    >
      <path
        stroke="#0A0A30"
        d="M11.515 6.269l.134.132a.5.5 0 00.702 0l.133-.132A4.44 4.44 0 0115.599 5c.578 0 1.15.112 1.684.33a4.41 4.41 0 011.429.939c.408.402.733.88.954 1.406a4.274 4.274 0 010 3.316 4.331 4.331 0 01-.954 1.405l-6.36 6.259a.5.5 0 01-.702 0l-6.36-6.259A4.298 4.298 0 014 9.333c0-1.15.464-2.252 1.29-3.064A4.439 4.439 0 018.401 5c1.168 0 2.288.456 3.114 1.269z"
      />
      <path
        stroke="#265BFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.5 7.5c.802.304 1.862 1.43 2 2"
      />
    </g>
  </svg>
);

const OEEServicesIcon = (
  <svg
    style={{ color: "#2B5A93" }}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width={54}
    height={54}
    fill="none"
  >
    <style
      dangerouslySetInnerHTML={{
        __html:
          "@keyframes rotate{0%{transform:rotateZ(0)}to{transform:rotateZ(360deg)}}",
      }}
    />
    <g
      style={{
        animation: "rotate 3s cubic-bezier(.7,-.03,.26,1.05) both infinite",
        transformOrigin: "center center",
      }}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    >
      <path
        stroke="#0A0A30"
        d="M5.262 15.329l.486.842a1.49 1.49 0 002.035.55 1.486 1.486 0 012.036.529c.128.216.197.463.2.714a1.493 1.493 0 001.493 1.536h.979a1.486 1.486 0 001.485-1.493 1.493 1.493 0 011.493-1.471c.252.002.498.071.714.2a1.493 1.493 0 002.036-.55l.521-.857a1.493 1.493 0 00-.542-2.036 1.493 1.493 0 010-2.586c.71-.41.952-1.318.543-2.028l-.493-.85a1.493 1.493 0 00-2.036-.579 1.479 1.479 0 01-2.029-.543 1.428 1.428 0 01-.2-.714c0-.825-.668-1.493-1.492-1.493h-.98c-.82 0-1.488.664-1.492 1.486a1.485 1.485 0 01-1.493 1.493 1.521 1.521 0 01-.714-.2 1.493 1.493 0 00-2.036.542l-.514.858a1.486 1.486 0 00.543 2.035 1.486 1.486 0 01.543 2.036c-.13.226-.317.413-.543.543a1.493 1.493 0 00-.543 2.028v.008z"
        clipRule="evenodd"
      />
      <path
        stroke="#265BFF"
        d="M12.044 10.147a1.853 1.853 0 100 3.706 1.853 1.853 0 000-3.706z"
      />
    </g>
  </svg>
);

const AutomationServicesIcon = (
  <svg
    style={{ color: "#2B5A93" }}
    xmlns="http://www.w3.org/2000/svg"
    width={54}
    height={54}
    fill="none"
    viewBox="0 0 24 24"
  >
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n  .sliders {\n\tanimation: sliders 1.5s cubic-bezier(0.860, 0.000, 0.070, 1.000) infinite alternate both;\n}\n@keyframes sliders {\n  0% {\n    transform: translateX(0px); \n  }\n  100% {\n    transform: translateX(10px); \n  }\n}\n  .sliders-2 {\n\tanimation: sliders-2 1.5s cubic-bezier(0.860, 0.000, 0.070, 1.000) infinite alternate both;\n}\n@keyframes sliders-2 {\n  0% {\n    transform: translateX(0px); \n  }\n  100% {\n    transform: translateX(-10px); \n  }\n}\n",
      }}
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M6 8.746h12M6 15.317h12"
    />
    <circle
      className="sliders"
      cx="7.5"
      cy="8.746"
      r="1.5"
      fill="#fff"
      stroke="#265BFF"
      strokeWidth="1.5"
    />
    <circle
      className="sliders-2"
      cx="16.5"
      cy="15.254"
      r="1.5"
      fill="#fff"
      stroke="#265BFF"
      strokeWidth="1.5"
    />
  </svg>
);

// const DigitalServicesIcon = (
//   <svg
//     style={{ color: "#2B5A93" }}
//     viewBox="0 0 24 24"
//     xmlns="http://www.w3.org/2000/svg"
//     width={54}
//     height={54}
//     fill="none"
//   >
//     <style
//       dangerouslySetInnerHTML={{
//         __html:
//           "@keyframes slide-right{0%{transform:translateY(0)}to{transform:translateY(-2px)}}",
//       }}
//     />
//     <path
//       stroke="#0A0A30"
//       strokeLinecap="round"
//       strokeWidth="1.5"
//       d="M14.508 9.5H17a2.5 2.5 0 012.5 2.5v5a2.5 2.5 0 01-2.5 2.5H7A2.5 2.5 0 014.5 17v-5A2.5 2.5 0 017 9.5h2.563"
//     />
//     <path
//       fill="#fff"
//       d="M12.75 13.667a.75.75 0 01-1.5 0h1.5zm-1.5-8.66a.75.75 0 011.5 0h-1.5zm-1.216 2.551a.75.75 0 11-1.068-1.054l1.068 1.054zM12 4.5l-.534-.527a.75.75 0 011.068 0L12 4.5zm3.034 2.004a.75.75 0 11-1.068 1.054l1.068-1.054zm-3.784 7.163v-8.66h1.5v8.66h-1.5zM8.966 6.504l2.5-2.531 1.068 1.054-2.5 2.531-1.068-1.054zm3.568-2.531l2.5 2.531-1.068 1.054-2.5-2.531 1.068-1.054z"
//       style={{
//         animation:
//           "slide-right 1s cubic-bezier(1,-.17,.29,.99) infinite alternate both",
//       }}
//     />
//   </svg>
// );

const Services = () => {
  return (
    <div id="services">
      <div className="bg-gray services-space-padding">
        <Container>
          <Row>
            <div className="col-lg-12">
              <div className="text-center section-space--mb_40">
                <h6 className="section-sub-title mb-20">Industries we Serve</h6>
                <h1 className="heading">
                  Services We Deliver
                  <br /> we provide{" "}
                  <span className="text--primary">
                    {" "}
                    truly prominent IT solutions.
                  </span>
                </h1>
              </div>
            </div>
          </Row>

          <Row>
            <div className="col-12">
              <div className="services-list">
                <div className="row">
                  <ServicesCard
                    classNameProps="col-lg-6 col-md-6"
                    title="IT Services"
                    text={
                      // "We provide the most responsive and functional IT design for companies and businesses worldwide."
                      "Elevate your performance with our comprehensive IT services for your company infrastructure,covering design, development, security, optimization, and analytics to drive success in the digital landscape."
                      // "We are the master of managing, maintaining, and optimising computer systems, networks, and software applications. Our duties include fixing of technological problems, setting up gear and software, supplying cybersecurity measures, and controlling data backup and storage. To compute in this era, IT services are essential for the efficient and secure operation of the company's technological infrastructure. Our core mission is to assist customers in making the most of their technological investments and to guarantee the secure and reliable operation of their systems. We have a team of technical experts with advanced skills and experience in the field of Information Technology.  We are working with healthcare, finance, retail, government, and more. With us you will not only get technical proficiency but also strong project management abilities, outstanding communication skills, and the capacity to modify their services to meet the changing demands of their clients. Customers need to know they can rely on their IT services provider to fix issues swiftly and effectively because IT difficulties can frequently result in severe disruptions to business operations."

                    }
                    btnText="Discover now"
                    srcURL={ITServicesIcon}
                  />
                  <ServicesCard
                    classNameProps="col-lg-6 col-md-6"
                    // title="OEE Services"
                    title="Manufacturing Excellence"
                    text={
                      "Leveraging Manufacturing Excellence to optimize processes, reduce the effort loss,  improve user experiences, and drive operational efficiency in the manufacturing sector."
                      // "It’s possible to simultaneously manage and transform information from one server to another."
                    }
                    btnText="Discover now"
                    srcURL={OEEServicesIcon}
                  />
                  <ServicesCard
                    classNameProps="col-lg-6 col-md-6"
                    title="Automation Services"
                    text={
                      "Automation Services streamline processes and implement tools to automate tasks, improve efficiency, and enhance user experiences across various aspects of business operations."
                      // "We provide the most responsive and functional IT design for companies and businesses worldwide."
                    }
                    btnText="Discover now"
                    srcURL={AutomationServicesIcon}
                  />
                  {/* <ServicesCard
                    classNameProps="col-lg-6 col-md-6"
                    title="Digital Services"
                    text={
                      "We provide the most responsive and functional IT design for companies and businesses worldwide."
                    }
                    btnText="Discover now"
                    srcURL={DigitalServicesIcon}
                  /> */}
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="feature-list-button-box mt-5 text-center">
                <a
                  href="https://www.linkedin.com/company/pakistan-automation"
                  target={"_blank"}
                  rel="noreferrer"
                  className="ht-btn ht-btn-md my-1"
                >
                  Talk to a consultant
                </a>
                <a
                  href="mailto:info@digitalcoverage.com.pk"
                  className="ht-btn ht-btn-md my-1 ht-btn--outline"
                >
                  Contact us now{" "}
                </a>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Services;
