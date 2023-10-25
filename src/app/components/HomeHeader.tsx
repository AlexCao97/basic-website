import { Layout, Menu } from "antd";
import Image from "next/image";
import React from "react";

const { Header, Content, Footer } = Layout;
const logo = "assets/img/vercel.svg";

export default function HomeHeader() {
  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Image src={logo} alt="Vercel logo" width={100} height={50} />
      <Menu
        style={{ flex: "auto", justifyContent: "flex-end" }}
        mode="horizontal"
        items={[
          { key: 1, label: "Showcase" },
          { key: 2, label: "Docs" },
          { key: 3, label: "Blog" },
          { key: 4, label: "Analytics" },
          { key: 5, label: "Templates" },
        ]}
      />
    </Header>
  );
}
