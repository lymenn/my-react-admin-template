import React, { Component } from "react";
import { Layout } from "antd";
export default class Content extends Component {
  render() {
    return (
      <Layout.Content
        style={{
          margin: "24px 16px",
          padding: 24,
          background: "#fff",
          minHeight: 280,
        }}
      >
        Content
      </Layout.Content>
    );
  }
}