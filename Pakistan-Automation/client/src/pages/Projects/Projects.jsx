import React from "react";
import "./Projects.css";

// import dashboardExample from '../../assets/images/projects/dashboard-ex.webp'
import oeeMangement from "../../assets/images/projects/oeeMangement.png";
// import oeeExample from "../../assets/images/projects/oee.png";
import digitization2 from "../../assets/images/projects/digitization2.png";
import digitalStore from "../../assets/images/projects/digitalStore.png";
import development from "../../assets/images/projects/development.png";
import bi from "../../assets/images/projects/bi.png";

const bgStyle = { backgroundSize: "100%", backgroundRepeat: "no-repeat" };
// const bgStyleAlternate = {
//   backgroundColor: "#d1d1d1",
//   backgroundSize: "100%",
//   backgroundRepeat: "no-repeat",
// };

const Projects = () => {
  const projectsList = [
    {
      id: 1,
      title: "Digital Coverage",

      description: (
        <div>
          Digital Coverage is a leading provider of digital solutions for
          manufacturing excellence. We help manufacturing businesses transcend
          traditional boundaries and achieve unprecedented levels of efficiency,
          quality, and growth. Our solutions are powered by a deep understanding
          of the manufacturing industry and the latest in digital technologies.{" "}
          <br />
          <h5 className="pt-3 mb-1" style={{ textAlign: "left" }}>
            {" "}
            We offer a wide range of solutions, including :{" "}
          </h5>
          <li>Production scheduling and optimization </li>
          <li> Maintenance management</li>
          <li> Product development </li>
          <li> Technical training </li>
          <h5 className="pt-3">Our solutions help businesses to :</h5>
          <li> Improve visibility into operations </li>
          <li> Make better decisions </li>
          <li> Reduce costs </li>
          <li> Increase agility </li>
          <li> Improve sustainability </li>
          <p className="pt-2">
            Digital Coverage is a trusted partner to manufacturing businesses
            around the world. We are committed to helping our customers achieve
            their goals and realize the full potential of digital technology.
          </p>
        </div>
      ),
      srcURL: digitization2,
      projectURL: "",
      animations: "fade-right",
      classes: "row align-items-center ",
      duration: "3000",
      aditionalClasses: "col-lg-7   animated",
    },
    {
      id: 2,
      title: "Manufacturing Excellence",

      description:
        "At Digital Coverage, we go beyond software development by offering comprehensive engineering solutions that facilitate manufacturing excellence. Our primary focus is on enabling manufacturing businesses to surpass conventional limits and attain unparalleled levels of efficiency, quality, and expansion through our unwavering dedication to innovation and cutting-edge technology. With our deep expertise in the industry, we have developed a cloud-based platform that empowers manufacturing organizations to not only monitor production processes in real-time but also analyze critical data to make informed decisions that drive operational excellence. By leveraging the power of our platform, businesses can optimize their manufacturing operations, streamline workflows, and unlock new opportunities for growth and success.",
      srcURL: oeeMangement,

      animations: "fade-up",
      classes: "row align-items-center flex-row-reverse",
      duration: "3000",
      aditionalClasses: "col-lg-7 d-flex justify-content-end  animated",
      // bgClass: "bg-light",
    },
    {
      id: 3,
      title: "IT Services",

      description:
        "Simplify your IT management with our comprehensive suite of managed services, where our commitment to excellence extends to a comprehensive suite of IT services designed to empower and enhance your business operations. With our range of IT expertise, we're your strategic partner in navigating the complex digital landscape and achieving your goals.",
      // "At Pakistan Automation, we have a holistic and integrated approach towards core modernization to experience technological evolution.",
      srcURL: digitalStore,
      projectURL: "",
      animations: "fade-left",
      classes: "row align-items-center ",
      duration: "3000",
      aditionalClasses: "col-lg-7   animated",
    },
    {
      id: 4,
      title: "Website Design & Development",

      description:
        "Experience captivating online journeys with Digital Coverage's expert Website Design and Development. From visually stunning designs that resonate with your brand to seamless, innovative development, we create engaging websites optimized for exceptional performance.",
      // "At Pakistan Automation, we have a holistic and integrated approach towards core modernization to experience technological evolution.",
      srcURL: development,
      projectURL: "",
      animations: "fade-right",
      classes: "row align-items-center flex-row-reverse",
      duration: "3000",
      aditionalClasses: "col-lg-7 d-flex justify-content-end  animated",
      // bgClass: "bg-light",
    },
    {
      id: 5,
      title: "Power Bi Platforms",

      description:
        " Welcome to the realm of Power BI – where data springs to life, insights flourish, and decisions thrive on knowledge. At Digital Coverage, we harness Power BI's capabilities to transform raw data into compelling visual narratives that empower your business. Discover patterns and trends at a glance through interactive visualizations. Dive into dynamic dashboards that consolidate information, for agile strategies. Foster a data-driven culture, foresee trends with predictive analytics, and enhance collaboration with seamless sharing. Our expertise ensures tailored solutions, scalability, and results that drive efficiency and innovation. Elevate your data with Power BI and Digital Coverage, propelling your business towards informed decisions and unparalleled success. Welcome to the era of empowered insights!",
      // "At Pakistan Automation, we have a holistic and integrated approach towards core modernization to experience technological evolution.",
      srcURL: bi,
      projectURL: "",
      animations: "fade-up",
      classes: "row align-items-center ",
      duration: "3000",
      aditionalClasses: "col-lg-7   animated",
    },
  ];
  return (
    <div className="projects-bg projects-space--ptb_100 " id="about">
      {/* section 1 */}
      {projectsList?.map((item) => {
        return (
          <section className={item.bgClass} style={bgStyle} key={item.id}>
            <div className="container p-3" style={bgStyle}>
              <div className={item.classes} style={bgStyle}>
                <div
                  className={item.aditionalClasses}
                  style={{
                    backgroundSize: "100%",
                    backgroundRepeat: "no-repeat",
                    visibility: "visible",
                    animationName: "fadeInUp",
                  }}
                >
                  <img
                    src={item.srcURL}
                    className="anim-up-down img-fluid"
                    alt=""
                    data-aos={item.animations}
                    data-aos-duration={item.duration}
                  />
                </div>
                <div
                  className="col-lg-5  animated"
                  // data-wow-delay=".3s"
                  style={{
                    backgroundSize: "100%",
                    backgroundRepeat: "no-repeat",
                    visibility: "visible",
                    animationDelay: "0.3s",
                    animationName: "fadeInUp",
                  }}
                >
                  <div
                    className="p-sm-30 pb-sm-0 mb-sm-0 no-aos-animation"
                    style={{
                      backgroundSize: "100%",
                      backgroundRepeat: "no-repeat",
                    }}
                    // data-aos="fade-down"
                  >
                    <h2 className="heading-Color mt-4">{item.title} </h2>
                    <p className="mt-3 text-desc">{item.description}</p>

                    <div
                      className="spacer-half"
                      style={{
                        backgroundSize: "100%",
                        backgroundRepeat: "no-repeat",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* closed */}
    </div>
  );
};

export default Projects;
