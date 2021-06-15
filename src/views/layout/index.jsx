import React from "react";
import { Layout } from "antd";
import "./index.less";
import Header from "./Header";
import Sider from "./Sider";
import Content from "./Content";
import RightPanel from "./RightPanel";

export default class SiderDemo extends React.Component {
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider></Sider>
        <Layout>
          <Header></Header>
          <Content></Content>
          <RightPanel></RightPanel>
        </Layout>
      </Layout>
    );
  }
}
