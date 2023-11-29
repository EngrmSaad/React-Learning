import React, { useState } from "react";
import "./OurProduct.css";
import Marquee from "react-fast-marquee";
import { Input, Modal } from "antd";
import Loader1 from "../../components/Loader/Loader1";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { message } from "antd";
import { DatePicker } from "antd";
import moment from "moment";

import { creatDemoRequest } from "../../Store/Redux-Api/DemoRequest";
import Products from "../Products/Products";

const initialValues = {
  firstName: "",
  email: "",

  dateAndTime: "",
  lastName: "",
};
export default function OurProducts() {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = React.useState(initialValues);
  const [isMessage, setIsMessage] = React.useState("");

  // console.log("data>>>>>", data);
  const dispatch = useDispatch();
  // const { TextArea } = Input;

  // const category = [
  //   "Custom Software Development",
  //   "Web Application Development",
  //   "Mobile Application Development",
  //   "Automation",
  //   "IT Support",
  // ];
  // const budget = [
  //   "$250-$500",
  //   "$500-$1000",
  //   "$1000-$2000",
  //   "$2000-$5000",
  //   "$1000-$15000",
  //   "$15000-$20000",
  //   "$20000-above",
  // ];
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
    if (name === "email") {
      if (
        !value.toString().includes("@") ||
        !value.toString().includes(".com")
      ) {
        setIsMessage("Please Insert Your correct 'Email' ");
        // console.log("data.email>>", data.email);
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
    if (!data.firstName || !data.email || !data.dateAndTime || !data.lastName) {
      // console.log("ok>>");
      toast.warn("All Information is Necessary");
    } else {
      const res = await creatDemoRequest(dispatch, data);
      setIsLoading(true);

      console.log("res>>>>", res);
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
    <div
      className="product-Section p-5 "
      id="products"
      style={{ height: "750px"}}
    >
      {contextHolder}
      <h4
        className="heading-Color d-flex justify-content-center "
        style={{ fontSize: "24px" }}
      >
        Products
      </h4>
      <div
        className="d-flex justify-content-center "
        style={{ color: "darkgray" }}
      >
        Explore Our Diverse Range of Quality Products
      </div>
      <div className="App p-0 ">
        <Marquee
          gradient={false}
          className="marquee "
          // style={{ height: "590px" }}
          pauseOnHover={true}
        >
          <div className="boxespart parrent  d-flex">
            <div className="box-1-parent d-flex mt-2">
              <Products
                data={data}
                setData={setData}
                open={open}
                setOpen={setOpen}
              />
            </div>
          </div>
        </Marquee>
        <Modal
          title="Request a Demo"
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
                  value={data.firstName}
                  name="firstName"
                  placeholder="First Name"
                />
              </div>
              <div className="child-2-Input col-lg-6 col-md-12 col-sm-12 p-2">
                <Input
                  className="custom-input"
                  onChange={handleChange}
                  name="lastName"
                  value={data.lastName}
                  placeholder="Last Name"
                  type="text"
                />
                <span className="for-FontStyling">{isMessage}</span>
              </div>
              <div className="child-2-Input col-lg-6 col-md-12 col-sm-12 p-2">
                <Input
                  className="custom-input"
                  onChange={handleChange}
                  name="email"
                  value={data.email}
                  placeholder="Email"
                  type="email"
                />
                <span className="for-FontStyling">{isMessage}</span>
              </div>
              <div className="child-2-Input col-lg-6 col-md-12 col-sm-12 p-2">
                <DatePicker
                  className="w-100 picker"
                  style={{
                    height: "48px",
                  }}
                  onChange={(e) => {
                    const purchaseDate = moment(e.$d).format(
                      "YYYY-MM-DD hh:mm"
                    );
                    console.log("e", purchaseDate);

                    setData({ ...data, dateAndTime: purchaseDate });
                  }}
                  showTime={{
                    format: "YYYY-MM-DD hh:mm",
                  }}
                />
                <span className="for-FontStyling">{isMessage}</span>
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
}
