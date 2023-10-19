"use client";

import { Button, Col, Divider, Form, Row } from "antd";
import editImage from "../../../../../../assests/Mobile login-pana.svg";
import Image from "next/image";

const EditProfile: React.FC = () => {
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
          <form>
            <div>
              <input type="text" />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <input type="text" />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </Col>
    </Row>
  );
};

export default EditProfile;
