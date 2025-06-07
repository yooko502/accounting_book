"use client";
import React from "react";
import { Button, Avatar, Dropdown, Badge } from "antd";
import { MenuOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import styles from "../../styles/layout.module.css";

interface HeaderBarProps {
  onMenuClick: () => void;
  user?: { avatar?: string };
  infoCount?: number;
}

export default function HeaderBar({ onMenuClick, user, infoCount = 0 }: HeaderBarProps) {
  return (
    <header className={styles["layout-header"]}>
      <div className={styles["layout-header-left"]}>
        <Button
          type="text"
          icon={<MenuOutlined />}
          onClick={onMenuClick}
          style={{ marginRight: 16 }}
        />
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