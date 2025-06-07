"use client";
import React from "react";
import { Layout, Menu } from "antd";
import { HomeOutlined, UserOutlined, SettingOutlined } from "@ant-design/icons";

const { Sider } = Layout;

interface SiderBarProps {
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
}

export default function SiderBar({ collapsed, onCollapse }: SiderBarProps) {
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      width={200}
      style={{
        height: "auto",
        position: "fixed",
        top: 64,
        bottom: 0,
        left: 0,
        zIndex: 100,
        background: "#eaf2fb",
        color: "#223354",
        borderRight: "1px solid #dbeafe",
        boxShadow: "none",
      }}
      trigger={null}
    >
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["1"]}
        style={{
          background: "#eaf2fb",
          color: "#223354",
          borderRight: "none",
        }}
        items={[
          { key: "1", icon: <HomeOutlined />, label: "首页" },
          { key: "2", icon: <UserOutlined />, label: "用户" },
          { key: "3", icon: <SettingOutlined />, label: "设置" },
        ]}
      />
    </Sider>
  );
} 