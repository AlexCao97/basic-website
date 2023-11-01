"use client";

import { fetchListProvinceStart } from "@/lib/redux";
import { listProvincesSelector } from "@/lib/redux/slices/provinceSlice/selectors";
import theme from "@/theme/themeConfig";
import { ConfigProvider, Layout } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeFooter from "../components/HomeFooter";
import HomeHeader from "../components/HomeHeader";

const { Header, Content, Footer } = Layout;

export default function HomePage() {
  const dispatch = useDispatch();
  const listProvinces = useSelector(listProvincesSelector);
  const getListProvinces = () => {
    dispatch(fetchListProvinceStart());
  };
  useEffect(() => {
    getListProvinces();
  }, []);

  useEffect(() => {
    console.log("listProvinces", listProvinces);
  }, [listProvinces]);

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
