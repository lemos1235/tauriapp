import React, { useState } from "react";
import { Layout, Button } from "@douyinfe/semi-ui";
import HomePage from "@/pages/home";
import DownloadPage from "@/pages/download";
import Sidebar from "./components/Sidebar";

const pages = [<HomePage />, <DownloadPage />];

const { Content } = Layout;

export default function MainPage() {
  const [pageIndex, setPageIndex] = useState(0);

  return (
    <Layout className="flex">
      <Sidebar currentIndex={pageIndex} onPageChanged={setPageIndex} />
      <Content>{pages[pageIndex]}</Content>
    </Layout>
  );
}
