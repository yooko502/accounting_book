"use client";
import React, { useState } from "react";
import { Layout } from "antd";
import HeaderBar from "../components/layout/Header";
import SiderBar from "../components/layout/Sider";
import SiderTrigger from "../components/layout/SiderTrigger";
import MainContent from "../components/layout/Content";
import FooterBar from "../components/layout/Footer";

const mockUser = {
  avatar: "https://i.pravatar.cc/150?img=3",
};
const mockInfoCount = 2;

export default function Home() {
  const [collapsed, setCollapsed] = useState(false);
  const siderWidth = collapsed ? 80 : 200;

  return (
    <Layout style={{ minHeight: "100vh", background: "#ffffff" }}>
      <HeaderBar
        collapsed={collapsed}
        onMenuClick={() => {}}
        user={mockUser}
        infoCount={mockInfoCount}
      />
      <SiderBar collapsed={collapsed} onCollapse={() => {}} />
      <SiderTrigger collapsed={collapsed} onClick={() => setCollapsed(!collapsed)} siderWidth={siderWidth} />
      <Layout style={{ marginLeft: siderWidth, marginTop: 64, transition: "margin-left 0.2s", background: "#ffffff" }}>
        <MainContent>
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <h2>欢迎使用 Ant Design 布局</h2>
            <p>点击侧边栏蓝色按钮折叠/展开侧边栏。</p>
          </div>
        </MainContent>
        <FooterBar />
      </Layout>
    </Layout>
  );
}
