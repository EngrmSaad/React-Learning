import React from "react";
import { Button, Form, Input, Select, InputNumber } from "antd";
import { useParams } from "react-router-dom";
import "./SystemForms.css";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { createDemo } from "../../Store/Redux-Api/ProductDemoApi";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 24,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const SystemForms = ({ content }) => {
  const dispatch = useDispatch();
  console.log(content);
  const { page } = useParams();

  const formContent = content.find((item) => item.route === page);

  /* eslint-enable no-template-curly-in-string */

  const onFinish = (values) => {
    console.log(values);
    const res = dispatch(createDemo(values));
    console.log(res);
    toast.success("Submitted Successfully ");
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      style={{
        maxWidth: 500,
        background: "#152434",
      }}
      className="demoForm p-4 rounded"
      validateMessages={validateMessages}
    >
      <Form.Item
        name={["name"]}
        // label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder="Full Name" className="custom-inp" />
      </Form.Item>
      <Form.Item
        name={["email"]}
        // label="Email"
        rules={[
          {
            required: true,
            type: "email",
          },
        ]}
      >
        <Input placeholder="Email Address" className="custom-inp" />
      </Form.Item>
      <Form.Item
        name={["number"]}
        //  label="Contact Number"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <InputNumber
          type="number"
          placeholder="Contact Number"
          className="contact-number custom-inp"
        />
      </Form.Item>
      <Form.Item
        name={["company"]}
        // label="Company"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder="Company Name" className="custom-inp" />
      </Form.Item>
      <Form.Item
        name={["industry"]}
        // label="Industry"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder="Industry" className="custom-inp" />
      </Form.Item>
      <Form.Item
        initialValue={formContent.title}
        name={["demoSystem"]}
        // label="Demo Of  "
      >
        <Select className="custom-inp" placeholder="System Demo">
          <Select.Option value={formContent.title}>
            {formContent.title}
          </Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        className=" d-flex justify-content-center"
        wrSystemFormserCol={{
          ...layout.wrapperCol,
          offset: 8,
        }}
      >
        <Button className="view-demo-btn" htmlType="submit">
          View Demo
        </Button>
      </Form.Item>
    </Form>
  );
};
export default SystemForms;
