import React, { useState } from "react";
import { Layout } from "@douyinfe/semi-ui";
import HomePage from "@/pages/home";
import SettingPage from "@/pages/setting";
import Sidebar from "./components/Sidebar";

const pages = [<HomePage />, <SettingPage />];

const { Sider, Content } = Layout;

export default function MainPage() {
  const [pageIndex, setPageIndex] = useState(0);

  return (
    <Layout className="flex">
      <Sider style={{ width: "120px" }}>
        <Sidebar onPageChanged={setPageIndex} />
      </Sider>
      <Content>{pages[pageIndex]}</Content>
    </Layout>
  );
}
