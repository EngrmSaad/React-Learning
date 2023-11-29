import React, { useState } from "react";

import { Container, Row } from "react-bootstrap";
import "./footer.css";
import logo from "../../assets/images/logo/Pakistan-Automation.png";
import { Input, Modal } from "antd";
import Loader1 from "../../components/Loader/Loader1";
import { useDispatch } from "react-redux";
import { creatCunsultation } from "../../Store/Redux-Api/CunsultantSubmition";
import { toast } from "react-toastify";
import { message } from "antd";
const initialValues = {
  userName: "",
  userEmail: "",
  companyName: "",
  contectNumber: "",
  message: "",
  projectType: "",
  projectBudget: "",
};
// import { Link } from "react-router-dom";

const Footer = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = React.useState(initialValues);
  const [isMessage, setIsMessage] = React.useState("");
  // console.log("data>>>>>", data);
  const dispatch = useDispatch();
  const { TextArea } = Input;

  const category = [
    "Custom Software Development",
    "Web Application Development",
    "Mobile Application Development",
    "Automation",
    "IT Support",
  ];
  const budget = [
    "$250-$500",
    "$500-$1000",
    "$1000-$2000",
    "$2000-$5000",
    "$1000-$15000",
    "$15000-$20000",
    "$20000-above",
  ];
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Your Request has been Proceed",
      duration: 2,
    });
  };
  const handleChange = (e) => {
    // console.log("e>>>>>", e);
    const { name, value } = e.target;
    // console.log("e>>>>>", value);
    // console.log("e>>>>>", name);
    if (name === "userEmail") {
      if (
        !value.toString().includes("@") ||
        !value.toString().includes(".com")
      ) {
        setIsMessage("Please Insert Your correct 'Email' ");
        // console.log("data.userEmail>>", data.userEmail);
      } else {
        setIsMessage("");
      }
    }

    // console.log("e>>>>>", value);
    setData({
      ...data,
      [name]: value,
      // || (e.target.files[0]),
    });
  };
  const handleSubmit = async () => {
    if (
      !data.companyName ||
      !data.contectNumber ||
      !data.message ||
      !data.projectBudget ||
      !data.userEmail ||
      !data.projectType
    ) {
      // console.log("ok>>");
      toast.warn("All Information is Necessary");
    } else {
      const res = await creatCunsultation(dispatch, data);
      setIsLoading(true);

      // console.log("res>>>>", res);
      if (res.status === 200) {
        setData(initialValues);
        // toast.success("your Request")
        setTimeout(() => {
          success();
          setIsLoading(false);
          setOpen(false);
        }, 3000);
      } else {
        toast.error("Some Thing Went Wrong try again later");
      }
    }
  };

  let newDate = String(new Date().getFullYear());
  let exprerience = Number(newDate.split("").slice(2, 4).join(""));
  return (
    <div className="footer-container">
      <div className="footer-space-padding">
        <Container>
          <Row className="footer-widget-wrapper p-2">
            <div className="col-lg-6 col-md-8 col-sm-8 footer-widget">
              <div className="footer-widget__logo mb-4">
                <img
                  src={logo}
                  width={260}
                  height={88}
                  className="img-fluid"
                  alt=""
                />
              </div>
              <ul className="footer-widget__list">
                <li>
                  <i className="fa-solid fa-location-dot"></i> Office # 804, 8th
                  Floor, Noor trade Center, Block 13 A Gulshan-e-Iqbal, Karachi,
                  75300, Pakistan{" "}
                  <a
                    className="text-primary"
                    target={"_blank"}
                    rel="noopener noreferrer"
                    href={
                      "https://maps.app.goo.gl/zZdtLCVUuELrmfTy5"
                    }
                  >
                    {" "}
                    <i className="fa-solid fa-location-arrow"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@pakistanautomation.com.pk"
                    className="hover-style-link"
                  >
                    <i className="fa-solid fa-envelope"></i>{" "}
                    info@pakistanautomation.com.pk
                  </a>
                </li>
                <li>
                  <a href="tel:+923369753046" className="hover-style-link">
                    <i className="fa-solid fa-square-phone"></i> +92 336 9753046
                  </a>
                </li>
                <li>
                  <a
                    href="https://pakistanautomation.com.pk/"
                    className="hover-style-link text--primary"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-solid fa-globe"></i>{" "}
                    pakistanautomation.com.pk
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-4 footer-widget">
              <h5 className="footer-widget__title mb-3">Services</h5>
              <ul className="footer-widget__list">
                <li>
                  <span className="hover-style-link">IT Services</span>
                </li>
                <li>
                  <span className="hover-style-link">MES Services</span>
                </li>
                {/* <li>
                  <span className="hover-style-link">
                    Automation Services
                  </span>
                </li>
                <li>
                  <span  className="hover-style-link">
                    Digital Services
                  </span>
                  
                </li> */}
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-4 footer-widget">
              <h5 className="footer-widget__title mb-3">Quick links</h5>
              <ul className="footer-widget__list">
                <li>
                  <a
                    target={"_blank"}
                    rel="noopener noreferrer"
                    href={
                      "https://www.google.com/maps/place/St+10,+Gulshan+e+Jamal,+Karachi,+Karachi+City,+Sindh,+Pakistan/@24.8992242,67.1133332,17z/data=!3m1!4b1!4m5!3m4!1s0x3eb33922f6f104cb:0xdc580733c7803030!8m2!3d24.8992242!4d67.1155219"
                    }
                    className="hover-style-link"
                  >
                    Location
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/digital-coverage-technology"
                    className="hover-style-link"
                    target="_blank"
                  >
                    Where to Find Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-4 footer-widget">
              <h5 className="footer-widget__title mb-3">Support</h5>
              <ul className="footer-widget__list">
                <li>
                  <a
                    href="mailto:info@digitalcoverage.com.pk"
                    className="hover-style-link"
                  >
                    Forum Support
                  </a>
                </li>

                <li>
                  <a className="hover-style-link" onClick={() => setOpen(true)}>
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </Row>
        </Container>
      </div>
      <div className="footer-copyright-area footer-end-space-padding">
        <Container>
          <Row className="align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <span className="copyright-text">
                © {new Date().getFullYear()} Digital Coverage{" "}
                <a href="https://www.pakistanautomation.com.pk/">
                  All Rights Reserved.
                </a>
              </span>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <ul className="list ht-social-networks solid-rounded-icon">
                {/* by saad bhai requirement */}
                {/* <li className="item">
                  <a
                    href="https://www.facebook.com/PakistanAutomation"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="social-link hint--bounce hint--top hint--primary"
                  >
                    <i className="fab fa-facebook-f link-icon" />
                  </a>
                </li> */}
                {/* by saime/ */}
                <li className="item">
                  <a
                    href="https://www.linkedin.com/company/digital-coverage-technology"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Linkedin"
                    className="social-link hint--bounce hint--top hint--primary"
                  >
                    <i className="fab fa-linkedin link-icon" />
                  </a>
                </li>
              </ul>
            </div>
          </Row>
        </Container>
        <Modal
          title="Request a Free Consultation"
          centered
          open={open}
          onOk={handleSubmit}
          onCancel={() => setOpen(false)}
          width={1000}
          okButtonProps={isLoading ? { disabled: true } : { disabled: false }}
        >
          {isLoading ? (
            <div className="flex w-full justify-content">
              <div
                className="d-flex justify-content-center align-items-center w-100"
                style={{ height: "30vh" }}
              >
                <Loader1 />
              </div>
            </div>
          ) : (
            <div className="Input-Parrent row p-3">
              <div className="child-1-Input col-lg-6 col-md-12 col-sm-12 p-2">
                <Input
                  onChange={handleChange}
                  value={data.userName}
                  name="userName"
                  placeholder="Full Name"
                />
              </div>
              <div className="child-2-Input col-lg-6 col-md-12 col-sm-12 p-2">
                <Input
                  onChange={handleChange}
                  name="userEmail"
                  value={data.userEmail}
                  placeholder="Email"
                  type="email"
                />
                <span className="for-FontStyling">{isMessage}</span>
              </div>
              <div className="child-3-Input col-lg-6 col-md-12 col-sm-12 p-2">
                <Input
                  onChange={handleChange}
                  name="companyName"
                  value={data.companyName}
                  placeholder="Company Name"
                />
              </div>
              <div className="child-4-Input col-lg-6 col-md-12 col-sm-12 p-2">
                <Input
                  onChange={handleChange}
                  name="contectNumber"
                  value={data.contectNumber}
                  placeholder="Contact Number"
                  type="number"
                />
              </div>
              <div className="child-5-Input col-lg-6 col-md-12 col-sm-12 p-2">
                {/* <Input placeholder="Project Type" /> */}

                <select
                  className="form-select my-2 border rounded form-control "
                  name="projectType"
                  value={data.projectType}
                  onChange={handleChange}
                >
                  <option value="" style={{ color: "grey" }}>
                    Project Type
                  </option>

                  {category?.map((item) => {
                    return (
                      <option
                        style={{ color: "black" }}
                        key={item.category}
                        value={item.category}
                      >
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="child-5-Input col-lg-6 col-md-12 col-sm-12 p-2">
                {/* <Input placeholder="Project Type" /> */}
                {/* <Select
                      showSearch
                      style={
                        {
                          //  width: 200,
                        }
                      }
                      // onChange={handleCategory}
                      placeholder="Select Catogory"
                      optionFilterProp="children"
                      // optionFilterProp="children"
                      // filterOption={(input, option) =>
                      //   option.children.includes(input)
                      // }
                      // filterSort={(optionA, optionB) =>
                      //   optionA.children
                      //     .toLowerCase()
                      //     .localeCompare(optionB.children.toLowerCase())
                      // }
                    >
                      {category.map((item) => {
                        return (
                          <option value={item.category}>{item.category}</option>
                        );
                      })}
                    </Select> */}
                <select
                  className="form-select my-2 border rounded form-control "
                  name="projectBudget"
                  value={data.projectBudget}
                  onChange={handleChange}
                >
                  <option value="" style={{ color: "grey" }}>
                    Project Budget
                  </option>

                  {budget?.map((item) => {
                    return (
                      <option
                        style={{ color: "black" }}
                        key={item.category}
                        value={item.category}
                      >
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="child-6-textArea p-2 d-flex justify-content-center">
                <TextArea
                  placeholder="Your Message"
                  value={data.message}
                  name="message"
                  allowClear
                  onChange={handleChange}
                />
              </div>
              {/* <div className="child-6-textArea p-2 d-flex justify-content-center">
       <ReCAPTCHA sitekey="6LfdVk4fAAAAAAUVQQTc3lXYZzEGGyWMY_TCxmiY" onChange={handleRecaptchaChange} />


      </div> */}
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Footer;
