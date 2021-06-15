import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import menuConfig from "@/config/menuConfig";

const { SubMenu } = Menu;

class LayoutMenu extends Component {
  state = {
    openKey: [],
  };
  handleMenuSelect = (menu) => {
    console.log(menu);
  };
  generateMenu = (menu) => {
    const path = this.props.location.pathname;
    if (menu.children && menu.children.length) {
      return (
        <SubMenu
          key={menu.path}
          title={
            <span>
              {menu.icon ? <Icon type={menu.icon} /> : null}
              <span>{menu.title}</span>
            </span>
          }
        >
          {menu.children.map((childMenu) => this.generateMenu(childMenu))}
        </SubMenu>
      );
    }
    return (
      <Menu.Item key={menu.path}>
        <Link to={menu.path}>
          {menu.icon ? <Icon type={menu.icon} /> : null}
          <span>{menu.title}</span>
        </Link>
      </Menu.Item>
    );
  };
  componentWillMount() {
    let temp = [];
    const path = this.props.location.pathname;
    menuConfig.forEach((menu) => {
      if (path.indexOf(menu.path) !== -1) {
        temp.push(menu.path);
      }
    });
    this.setState({
      openKey: [...temp],
    });
  }
  render() {
    const path = this.props.location.pathname;
    const openKey = this.state.openKey;
    return (
      <Menu
        theme="dark"
        mode="inline"
        onSelect={this.handleMenuSelect}
        selectedKeys={[path]}
        defaultOpenKeys={openKey}
      >
        {menuConfig.map((menu) => this.generateMenu(menu))}
      </Menu>
    );
  }
}

export default connect((state) => state.user)(withRouter(LayoutMenu));
