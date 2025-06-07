"use client";
import React, { useState } from "react";
import { Layout } from "antd";
import HeaderBar from "../components/layout/Header";
import FooterBar from "../components/layout/Footer";
import SiderBar from "../components/layout/Sider";
import MainContent from "../components/layout/Content";

const mockUser = {
  avatar: "https://i.pravatar.cc/150?img=3",
};
const mockInfoCount = 2;

export default function Home() {
  const [drawerVisible, setDrawerVisible] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <HeaderBar
        onMenuClick={() => setDrawerVisible(true)}
        user={mockUser}
        infoCount={mockInfoCount}
      />
      <SiderBar open={drawerVisible} onClose={() => setDrawerVisible(false)} />
      <MainContent>
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <h2>欢迎使用 Ant Design 布局</h2>
          <p>点击左上角菜单按钮打开侧边栏。</p>
        </div>
      </MainContent>
      <FooterBar />
    </Layout>
  );
}
