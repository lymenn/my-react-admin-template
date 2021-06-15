import React from "react";
import { connect } from "react-redux";
import { Modal, Icon, Dropdown, Avatar, Menu } from "antd";
import { logout } from "@/store/actions";
import "./index.less";
const { confirm } = Modal;
const User = (props) => {
  const { logout } = props;
  function handleMenuClick(val) {
    const { key } = val;
    switch (key) {
      case "1":
        break;
      case "2":
        break;
      case "3":
        confirm({
          title: "注销",
          content: "确定要退出系统吗?",
          onOk() {
            logout();
          },
          onCancel() {
            console.log("Cancel");
          },
        });
        break;
    }
  }
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">首页</Menu.Item>
      <Menu.Item key="2">项目地址</Menu.Item>
      <Menu.Item key="3">注销</Menu.Item>
    </Menu>
  );
  return (
    <div className="user-container">
      <Dropdown overlay={menu} class="right-item">
        <div>
          <Avatar
            shape="square"
            size="medium"
            src="https://s1.ax1x.com/2020/04/28/J5hUaT.jpg"
          />
          <Icon
            type="caret-down"
            style={{
              color: "rgba(0,0,0,.3)",
              paddingBottom: "10px",
              verticalAlign: "bottom",
            }}
          />
        </div>
      </Dropdown>
    </div>
  );
};

export default connect(null, { logout })(User);
