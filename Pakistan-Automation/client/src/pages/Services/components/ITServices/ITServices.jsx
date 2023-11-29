import React from "react";
import { Container, Row } from "react-bootstrap";
import BreadCrumb from "../../../../components/Breadcrumb/BreadCrumb";
import HeaderTop from "../../../../components/Header/HeaderTop/HeaderTop";
// import ServicesCard from "../../../../components/services-card/ServicesCard";
import "./ITServices.css";

// import ITBgImage from '../../../../assets/images/services/IT-services/1.jpg'
// import ITBgImage from '../../../../assets/images/services/IT-services/2.jpg'
// import ITBgImage from '../../../../assets/images/services/IT-services/3.jpg'
// import ITBgImage from '../../../../assets/images/services/IT-services/4.webp'
// import ITBgImage from "../../../../assets/images/services/IT-services/5.jpg";
// import ITBgImage from '../../../../assets/images/services/IT-services/6.jpg'

// const ITDesign = (
//   <svg
//     viewBox="0 0 24 24"
//     xmlns="http://www.w3.org/2000/svg"
//     width={54}
//     height={54}
//     fill="none"
//   >
//     <style
//       dangerouslySetInnerHTML={{
//         __html:
//           "@keyframes pulsate{0%,to{transform:scale(1)}50%{transform:scale(.9)}}",
//       }}
//     />
//     <g
//       style={{
//         animation: "pulsate .5s ease-in-out infinite both",
//         transformOrigin: "center center",
//       }}
//       strokeWidth="1.5"
//     >
//       <path
//         stroke="#0A0A30"
//         d="M11.515 6.269l.134.132a.5.5 0 00.702 0l.133-.132A4.44 4.44 0 0115.599 5c.578 0 1.15.112 1.684.33a4.41 4.41 0 011.429.939c.408.402.733.88.954 1.406a4.274 4.274 0 010 3.316 4.331 4.331 0 01-.954 1.405l-6.36 6.259a.5.5 0 01-.702 0l-6.36-6.259A4.298 4.298 0 014 9.333c0-1.15.464-2.252 1.29-3.064A4.439 4.439 0 018.401 5c1.168 0 2.288.456 3.114 1.269z"
//       />
//       <path
//         stroke="#265BFF"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="M15.5 7.5c.802.304 1.862 1.43 2 2"
//       />
//     </g>
//   </svg>
// );

// const ITManagement = (
//   <svg
//     viewBox="0 0 24 24"
//     xmlns="http://www.w3.org/2000/svg"
//     width={54}
//     height={54}
//     fill="none"
//   >
//     <style
//       dangerouslySetInnerHTML={{
//         __html:
//           "@keyframes gift-open{0%{transform:translateY(0)}to{transform:translateY(-3px)}}",
//       }}
//     />
//     <path
//       stroke="#0A0A30"
//       strokeWidth="1.5"
//       d="M6.921 12.535h12v4a2 2 0 01-2 2h-8a2 2 0 01-2-2v-4z"
//     />
//     <path
//       fill="#265BFF"
//       fillRule="evenodd"
//       d="M10.963 6.487a.717.717 0 011.009.102c.147.18.337.578.428.984.044.2.058.373.044.502-.014.133-.05.165-.051.165 0 0-.038.03-.172.017a1.618 1.618 0 01-.483-.144c-.38-.17-.73-.436-.878-.617a.717.717 0 01.103-1.009zm1.676-.442a1.578 1.578 0 00-2.445 1.996c.211.26.576.538.962.744H8.921a2.75 2.75 0 00-2.75 2.75v1.75h13.5v-1.75a2.75 2.75 0 00-2.75-2.75h-2.235c.386-.206.75-.485.963-.744a1.578 1.578 0 00-2.446-1.996 2.492 2.492 0 00-.282.45 2.497 2.497 0 00-.282-.45zm1.231.544a.717.717 0 011.112.907c-.147.18-.498.446-.878.617a1.619 1.619 0 01-.483.144c-.134.013-.172-.017-.172-.017s-.037-.032-.051-.165c-.014-.13 0-.302.044-.502.091-.406.281-.803.428-.984zm4.301 4.946v.25h-10.5v-.25c0-.69.56-1.25 1.25-1.25h8c.69 0 1.25.56 1.25 1.25z"
//       clipRule="evenodd"
//       style={{
//         animation:
//           "gift-open 1s cubic-bezier(0,.32,.45,1.24) infinite alternate both",
//       }}
//     />
//   </svg>
// );

// const DataSecurity = (
//   <svg
//     viewBox="0 0 24 24"
//     xmlns="http://www.w3.org/2000/svg"
//     width={54}
//     height={54}
//     fill="none"
//   >
//     <style
//       dangerouslySetInnerHTML={{
//         __html:
//           "@keyframes slide-tr{0%{transform:translateY(0) translateX(0)}to{transform:translateY(-2px) translateX(2px)}}",
//       }}
//     />
//     <path
//       stroke="#0A0A30"
//       strokeWidth="1.5"
//       d="M17.82 16.889a7 7 0 001.162-3.39A.473.473 0 0018.5 13h-6a.5.5 0 01-.5-.5v-6a.473.473 0 00-.5-.482 7 7 0 106.32 10.871z"
//     />
//     <path
//       stroke="#265BFF"
//       strokeWidth="1.5"
//       d="M19 11c.552 0 1.009-.45.917-.995a6 6 0 00-4.922-4.922C14.451 4.992 14 5.448 14 6v4a1 1 0 001 1h4z"
//       style={{
//         animation:
//           "slide-tr 1s cubic-bezier(.47,0,.745,.715) infinite alternate-reverse both",
//       }}
//     />
//   </svg>
// );

// const AdminstrativeControl = (
//   <svg
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
//     <g
//       style={{
//         animation:
//           "slide-right 1s cubic-bezier(.75,.02,.2,1.06) infinite alternate both",
//       }}
//       strokeWidth="1.5"
//     >
//       <path
//         stroke="#0A0A30"
//         d="M17 10.193c0 2.867-4.5 8.307-5 8.307s-5-5.44-5-8.307C7 7.325 9.239 5 12 5s5 2.325 5 5.193z"
//       />
//       <circle cx={12} cy={10} r={2} stroke="#265BFF" />
//     </g>
//   </svg>
// );

// const InfrastructurePlan = (
//   <svg
//     viewBox="0 0 24 24"
//     xmlns="http://www.w3.org/2000/svg"
//     width={54}
//     height={54}
//     fill="none"
//   >
//     <style
//       dangerouslySetInnerHTML={{
//         __html:
//           "@keyframes slide-top{0%{transform:translateY(1px)}to{transform:translateY(-2px)}}",
//       }}
//     />
//     <path
//       stroke="#0A0A30"
//       strokeLinecap="round"
//       strokeWidth="1.5"
//       d="M6 8.55v8.334c0 .92.768 1.667 1.714 1.667h8.572c.947 0 1.714-.746 1.714-1.667V8.551m-7 2.899h2"
//     />
//     <path
//       fill="#265BFF"
//       fillRule="evenodd"
//       d="M4.087 5.45H3.87a.533.533 0 00-.533.532v.967c0 .295.238.533.533.533h16.26a.533.533 0 00.533-.533v-.967a.533.533 0 00-.533-.533H4.087z"
//       clipRule="evenodd"
//       style={{
//         animation:
//           "slide-top 1s cubic-bezier(.86,0,.07,1) infinite alternate-reverse both",
//       }}
//     />
//   </svg>
// );

// const FirewallAdvance = (
//   <svg
//     viewBox="0 0 24 24"
//     xmlns="http://www.w3.org/2000/svg"
//     width={54}
//     height={54}
//     fill="none"
//   >
//     <style
//       dangerouslySetInnerHTML={{
//         __html:
//           "@keyframes check {\n      to {\n        stroke-dashoffset: 0;\n      }\n    }",
//       }}
//     />
//     <path
//       stroke="#0A0A30"
//       strokeWidth="1.5"
//       d="M5.9 8.053a2 2 0 011.507-1.938l4.683-1.192 4.517 1.184A2 2 0 0118.1 8.042v3.75a7 7 0 01-3.98 6.314l-.755.361a3 3 0 01-2.557.015l-.856-.398A7 7 0 015.9 11.736V8.053z"
//     />
//     <path
//       stroke="#265BFF"
//       strokeLinecap="round"
//       strokeWidth="1.5"
//       d="M9.215 12.052l1.822 1.805 3.748-3.714"
//       style={{ animation: "check 2s infinite cubic-bezier(.99,-.1,.01,1.02)" }}
//       strokeDashoffset={100}
//       strokeDasharray={100}
//     />
//   </svg>
// );

const ITServices = () => {
  // const subServicesData = [
  //   {
  //     title: "IT Design",
  //     text: "We provide the most responsive and functional IT design for companies and businesses worldwide.",
  //     srcURL: ITDesign,
  //     icon: <i className="fa-brands fa-sketch"></i>,
  //   },
  //   {
  //     title: "IT Management",
  //     text: "It’s possible to simultaneously manage and transform information from one server to another.",
  //     srcURL: ITManagement,
  //     icon: <i className="fa-solid fa-list-check"></i>,
  //   },
  //   {
  //     title: "Data Security",
  //     text: "Back up your database, store in a safe and secure place while still maintaining its accessibility.",
  //     srcURL: DataSecurity,
  //     icon: <i className="fa-solid fa-file-shield"></i>,
  //   },
  //   {
  //     title: "Administrative Control",
  //     text: "We propose feasible & practical plans for successfully transform businesses based on their needs.",
  //     srcURL: AdminstrativeControl,
  //     icon: <i className="fa-solid fa-people-roof"></i>,
  //   },
  //   {
  //     title: "Infrastructure Plan",
  //     text: "Digital Coverage takes into account all conditions and budgets needed for building infrastructure plan.",
  //     srcURL: InfrastructurePlan,
  //     icon: <i className="fa-solid fa-road-bridge"></i>,
  //   },
  //   {
  //     title: "Firewall Advancement",
  //     text: "Enhancing the strength and security of firewalls to protect online data from malicious sources.",
  //     srcURL: FirewallAdvance,
  //     // icon: <i className="fa-solid fa-shield-check"></i>,
  //     // <i class="fa-solid fa-shield-cross"></i>
  //     icon: <i className="fa-solid fa-lock"></i>,

  //   },
  // ];

  return (
    <div>
      {/* Header Top start =======================> */}
      <HeaderTop />
      {/* Header Top end =======================> */}
      {/* breadcrumb-area start =======================> */}
      <BreadCrumb text="IT Services" bg={ITBgImage} />
      {/* breadcrumb-area end =======================> */}

      {/* feature-images-wrapper  Start =============*/}
      <div className="IT-services-one-space-padding">
        <Container className="bg-light">
          <Row>
            <div className="col-lg-12 ">
              {/* section-title-wrap Start */}
              <div className="text-center">
                <h3 className="heading">
                  Preparing for your success, <br /> we provide{" "}
                  <span className="text--primary">
                    {" "}
                    truly prominent IT solutions.
                  </span>
                </h3>
              </div>
              {/* section-title-wrap Start */}
            </div>
          </Row>
        </Container>
      </div>
      {/* feature-images-wrapper  End =============*/}
    </div>
  );
};

export default ITServices;
