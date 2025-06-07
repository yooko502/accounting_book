import React, { ReactNode } from "react";
import { Layout } from "antd";
import styles from "../../styles/layout.module.css";

const { Content } = Layout;

interface MainContentProps {
  children: ReactNode;
}

export default function MainContent({ children }: MainContentProps) {
  return (
    <Content className={styles["layout-content"]} style={{ background: "#ffffff" }}>
      {children}
    </Content>
  );
} 