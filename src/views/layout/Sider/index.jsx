import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout } from "antd";
import Menu from "./Menu";
const LayoutSider = (props) => {
  const { sidebarCollapsed } = props;
  return (
    <Layout.Sider trigger={null} collapsible collapsed={sidebarCollapsed}>
      <Menu></Menu>
    </Layout.Sider>
  );
};

export default connect((state) => state.app)(LayoutSider);
