import { Layout } from "@douyinfe/semi-ui";
import { useState } from "react";
import Siderbar from "./components/Siderbar";
import ChatRoom from "@/pages/ChatRoom";
import Home from "@/pages/home";

const pages = [<Home />, <ChatRoom />];

const { Content } = Layout;

export default function MainPage() {
  const [pageIndex, setPageIndex] = useState(1);

  return (
    <Layout className="flex">
      <Siderbar currentIndex={pageIndex} onPageChanged={setPageIndex} />
      <Content>{pages[pageIndex]}</Content>
    </Layout>
  );
}
