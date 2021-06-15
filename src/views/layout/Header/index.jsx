import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout } from "antd";

import BreadCrumb from "@/components/BreadCrumb";
import Hamburger from "@/components/Hamburger";
import FullScreen from "@/components/FullScreen";
import Settings from "@/components/Settings";
import User from "@/components/User";
import "./index.less";
const LayoutHeader = (props) => {
  return (
    <Layout.Header style={{ background: "#fff", padding: 0 }}>
      <Hamburger></Hamburger>
      <BreadCrumb></BreadCrumb>
      <div className="header-right">
        <FullScreen></FullScreen>
        <Settings></Settings>
        <User></User>
      </div>
    </Layout.Header>
  );
};

export default connect()(LayoutHeader);
