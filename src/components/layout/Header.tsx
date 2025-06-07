"use client";
import React from "react";
import { Avatar, Dropdown, Badge } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";
import styles from "../../styles/layout.module.css";

interface HeaderBarProps {
  collapsed: boolean;
  onMenuClick: () => void;
  user?: { avatar?: string };
  infoCount?: number;
}

export default function HeaderBar({ user, infoCount = 0 }: HeaderBarProps) {
  return (
    <header
      className={styles["layout-header"]}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 101,
        background: "#eaf2fb",
        color: "#223354",
        boxShadow: "none",
        borderBottom: "1px solid #dbeafe",
      }}
    >
      <div className={styles["layout-header-left"]}>
        <span className={styles["layout-header-title"]}>AntD 布局示例</span>
      </div>
      <div className={styles["layout-header-right"]}>
        <Badge count={infoCount} size="small">
          <MailOutlined style={{ fontSize: 20, color: "#3a6ea5" }} />
        </Badge>
        <Dropdown
          menu={{
            items: [
              { key: "profile", label: "个人中心" },
              { key: "logout", label: "退出登录" },
            ],
          }}
        >
          <Avatar
            src={user?.avatar}
            icon={<UserOutlined />}
            style={{ cursor: "pointer" }}
          />
        </Dropdown>
      </div>
    </header>
  );
} 