import React, { useEffect } from "react";
import ourservice from "../../assets/images/globeanime/our-service-2.png";
import "./ServiceSection.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServiceSection = () => {
  const services = [
    {
      id: 1,
      title: "IT Services",
      text: "Elevate your performance with our comprehensive IT services for your company infrastructure,covering design, development, security, optimization, and analytics to drive success in the digital landscape.",
      icon: (
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
      ),
    },
    {
      id: 2,
      title: "Manufacturing Excellence",
      text: "Elevate your performance with our comprehensive IT services for your company infrastructure,covering design, development, security, optimization, and analytics to drive success in the digital landscape.",
      icon: (
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
              animation:
                "rotate 3s cubic-bezier(.7,-.03,.26,1.05) both infinite",
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
      ),
    },
    {
      id: 3,
      title: "Automation Services",
      text: "Elevate your performance with our comprehensive IT services for your company infrastructure,covering design, development, security, optimization, and analytics to drive success in the digital landscape.",
      icon: (
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
      ),
    },
    {
      id: 4,
      title: "Digital Services",
      text: "Elevate your performance with our comprehensive IT services for your company infrastructure,covering design, development, security, optimization, and analytics to drive success in the digital landscape.",
      icon: (
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
              animation:
                "rotate 3s cubic-bezier(.7,-.03,.26,1.05) both infinite",
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
      ),
    },
  ];
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div style={{ background: "#f8f8f8" }} id="services">
      <div className="service-img" data-aos="fade-down" data-aos-easing="linear"
     data-aos-duration="1500" 
>
        <img className="img-fluid" src={ourservice} alt="" width={400} />
      </div>
      <div className="row justify-content-center align-items-center ">
        {services.map((item) => {
          return (
            <div
              key={item.id}
              className=" d-flex col-lg-4 mx-1 col-md-5 col-sm-12 mt-5"
            >
              <div className="icon mx-4 mt-2">{item.icon}</div>
              <div>
                <div>
                  {" "}
                  <h5>{item.title}</h5>
                </div>
                <div className="text">{item.text}</div>
              </div>
            </div>
          );
        })}
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
          {/* <a
            href="mailto:info@digitalcoverage.com.pk"
            className="ht-btn ht-btn-md my-1 ht-btn--outline"
          >
            Contact us now{" "}
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
