"use client";

import theme from "@/theme/themeConfig";
import { ConfigProvider, Layout, Menu } from "antd";
import Image from "next/image";
import HomeHeader from "../components/HomeHeader";
import HomeFooter from "../components/HomeFooter";

const { Header, Content, Footer } = Layout;
export default function HomePage() {
  return (
    <ConfigProvider theme={theme}>
      <Layout style={{ display: "flex", height: "100vh" }}>
        <HomeHeader />
        <Content
          style={{
            padding: "0 50px",
            height: "100vh",
            flexDirection: "column",
          }}
        ></Content>
        <HomeFooter />
      </Layout>
    </ConfigProvider>
  );
}
