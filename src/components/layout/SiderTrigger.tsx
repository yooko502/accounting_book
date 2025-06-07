import React from "react";
import { RightCircleOutlined, LeftCircleOutlined } from "@ant-design/icons";
import styles from "./SiderTrigger.module.css";

interface SiderTriggerProps {
  collapsed: boolean;
  onClick: () => void;
  siderWidth: number;
}

export default function SiderTrigger({ collapsed, onClick, siderWidth }: SiderTriggerProps) {
  return (
    <div
      className={styles["sider-trigger"]}
      style={{ left: siderWidth - 16 }}
      onClick={onClick}
    >
      {collapsed ? (
        <RightCircleOutlined className={styles["sider-trigger-icon"]} />
      ) : (
        <LeftCircleOutlined className={styles["sider-trigger-icon"]} />
      )}
    </div>
  );
} 