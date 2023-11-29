import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import "./Contact.css";
import "../About/About.css";

import { Input, Modal } from "antd";
import Loader1 from "../../components/Loader/Loader1";
// import { creatCunsultation } from "../../../Store/Redux-Api/CunsultantSubmition";
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

const Contact = () => {
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

  // let newDate = String(new Date().getFullYear());
  // let exprerience = Number(newDate.split("").slice(2, 4).join(""));
  return (
    <div id="contact">
      {contextHolder}
      <div className="contact-bg contact-space-padding">
        <Container>
          <Row className="align-items-center">
            <div className="col-lg-6 ">
              <div className="conact-us-wrap-one">
                <h1 className="heading">
                  Obtain further information by{" "}
                  <span className="text--primary">make a contact</span> with our
                  experienced IT staffs.{" "}
                </h1>
                <div className="sub-heading">
                  Contact to require a detailed analysis and assessment of your
                  plan.
                </div>
              </div>
            </div>
            <div className=" col-lg-6">
              <div className="contact-info-one text-center">
                <div className="icon">
                  <span className="">
                    <i className="fa-solid fa-phone-flip"></i>
                  </span>
                </div>
                <h6 className="heading font-weight--reguler">Reach out now!</h6>
                <h2 className="call-us">
                  <a href="tel:+923369753046">+92 336 9753046</a>
                </h2>
                <div className="contact-us-button mt-3">
                  <button
                    className="btn btn--secondary"
                    onClick={() => setOpen(true)}
                  >
                    Contact us
                  </button>
                </div>
              </div>
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
                  className="custom-input"
                  onChange={handleChange}
                  value={data.userName}
                  name="userName"
                  placeholder="Full Name"
                />
              </div>
              <div className="child-2-Input col-lg-6 col-md-12 col-sm-12 p-2">
                <Input
                  className="custom-input"
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
                  className="custom-input"
                  onChange={handleChange}
                  name="companyName"
                  value={data.companyName}
                  placeholder="Company Name"
                />
              </div>
              <div className="child-4-Input col-lg-6 col-md-12 col-sm-12 p-2">
                <Input
                  className="custom-input"
                  onChange={handleChange}
                  name="contectNumber"
                  value={data.contectNumber}
                  placeholder="Contact Number"
                  type="number"
                />
              </div>
              <div className="child-5-Input col-lg-6 col-md-12 col-sm-12 p-2">
                {/* <Input  className = "custom-input" placeholder="Project Type" /> */}

                <select
                  className="form-select my-2 border-white rounded form-control "
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
                        style={{ background: "white", color: "black" }}
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
                {/* <Input  className = "custom-input" placeholder="Project Type" /> */}
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
                  className="form-select my-2 border-white rounded form-control "
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
                        style={{ background: "white", color: "black" }}
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
                  className="text"
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
      <div></div>

      {/* <Footer /> */}
    </div>
  );
};

export default Contact;
