"use client";
import React from "react";
import { Drawer, Menu } from "antd";
import { HomeOutlined, UserOutlined, SettingOutlined } from "@ant-design/icons";
import styles from "../../styles/layout.module.css";

interface SiderBarProps {
  open: boolean;
  onClose: () => void;
}

export default function SiderBar({ open, onClose }: SiderBarProps) {
  return (
    <Drawer
      className={styles["layout-sider"]}
      title="导航菜单"
      placement="left"
      closable={true}
      onClose={onClose}
      open={open}
      styles={{ body: { padding: 0 } }}
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        style={{ height: "100%", borderRight: 0 }}
        items={[
          {
            key: "1",
            icon: <HomeOutlined />,
            label: "首页",
          },
          {
            key: "2",
            icon: <UserOutlined />,
            label: "用户",
          },
          {
            key: "3",
            icon: <SettingOutlined />,
            label: "设置",
          },
        ]}
      />
    </Drawer>
  );
} 