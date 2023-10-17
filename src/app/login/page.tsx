"use client";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

import theme from "@/theme/themeConfig";
import {
  Button,
  Checkbox,
  ConfigProvider,
  Form,
  Input,
  Layout,
  Space,
  Typography,
} from "antd";
import "./page.module.css";

const { Text, Link, Title } = Typography;

const background = "assets/img/login-bg.png";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

export default function LoginPage() {
  return (
    <ConfigProvider theme={theme}>
      <Layout
        style={{
          backgroundImage: `url(${background})`,
          height: "100vh",
          width: "100vw",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Form
          name="basic"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          style={{
            maxWidth: 600,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            paddingTop: "30px",
            paddingBottom: "30px",
            paddingLeft: "30px",
            paddingRight: "30px",
          }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Title style={{ fontSize: "24px" }}>Login</Title>
          <Form.Item<FieldType>
            name="username"
            rules={[{ required: true, message: "Please input your user id!" }]}
          >
            <Input
              size="large"
              placeholder="User ID"
              prefix={<UserOutlined />}
            />
          </Form.Item>

          <Form.Item<FieldType>
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              size="large"
              placeholder="Password"
              prefix={<LockOutlined />}
            />
          </Form.Item>
          <Space
            style={{
              width: "100%",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <Form.Item<FieldType> name="remember" valuePropName="checked">
              <Checkbox>
                <Text
                  style={{
                    color: "rgba(255, 255, 255, 0.8)",
                  }}
                >
                  Remember me
                </Text>
              </Checkbox>
            </Form.Item>
            <Form.Item>
              <Link
                style={{
                  fontStyle: "italic",
                  textDecorationLine: "underline",
                  color: "rgba(255, 255, 255, 0.8)",
                }}
                onClick={() => {
                  console.log("ahihi");
                }}
              >
                Forgot Password?
              </Link>
            </Form.Item>
          </Space>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            style={{
              width: "100%",
            }}
          >
            <Text
              style={{
                textTransform: "uppercase",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Login
            </Text>
          </Button>
        </Form>
      </Layout>
    </ConfigProvider>
  );
}
