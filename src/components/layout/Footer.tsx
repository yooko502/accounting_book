import React from "react";
import { Layout } from "antd";
import styles from "../../styles/layout.module.css";

const { Footer } = Layout;

export default function FooterBar() {
  return (
    <Footer
      className={styles["layout-footer"]}
      style={{
        position: "fixed",
        zIndex: 101,
        width: "100%",
        bottom: 0,
        left: 0,
        right: 0,
        textAlign: "center",
        background: "#eaf2fb",
        color: "#223354",
        boxShadow: "none",
        borderTop: "1px solid #dbeafe",
        padding: "12px 24px",
      }}
    >
      AntD 示例页 ©2024 Created by 你的名字
    </Footer>
  );
} 