import React from "react";
import { Layout } from "antd";
import styles from "../../styles/layout.module.css";

const { Footer } = Layout;

export default function FooterBar() {
  return (
    <Footer className={styles["layout-footer"]}>
      AntD 示例页 ©2024 Created by 你的名字
    </Footer>
  );
} 