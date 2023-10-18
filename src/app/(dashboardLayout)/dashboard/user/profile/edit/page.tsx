"use client";

import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import { Button, Col, Divider, Form, Row } from "antd";
import editImage from "../../../../../../assests/Mobile login-pana.svg";
import Image from "next/image";

type FormValues = {
  id: string;
  password: string;
};

const EditProfile: React.FC = () => {

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    console.log(data);
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
      }}
    >
      <Col sm={12} md={16} lg={10}>
        <Image src={editImage} width={500} alt="edite image" />
      </Col>
      <Col sm={12} md={8} lg={8}>
        <h1
          style={{
            margin: "15px 0px",
          }}
        >
          edit your profile
        </h1>
        <div>
          <Form submitHandler={onSubmit}>
            <div>
              <FormInput name="id" type="text" size="large" label="User Id" />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                name="password"
                type="text"
                size="large"
                label="User Password"
              />
            </div>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default EditProfile;
