import React from "react";
import { withRouter } from "react-router-dom";
import { Breadcrumb } from "antd";

import menuConfig from "@/config/menuConfig";
import "./index.less";
const BreadCrumb = (props) => {
  const { pathname } = props.location;
  const breadItems = [
    {
      title: "首页",
      path: "/dashboard",
      icon: "home",
      roles: ["admin", "editor", "guest"],
    },
  ];
  function getItems(menus) {
    for (let i = 0; i < menus.length; i++) {
      if (pathname === menus[i].path) {
        breadItems.push(menus[i]);
        return true;
      } else if (pathname.indexOf(menus[i].path) !== -1) {
        breadItems.push(menus[i]);
        if (menus[i].children && getItems(menus[i].children)) {
          return true;
        }
        breadItems.pop();
      }
    }
    return false;
  }
  if (pathname !== "/dashboard") {
    getItems(menuConfig);
  }
  return (
    <div className="breadcrumb-container">
      <Breadcrumb>
        {breadItems.map((breadItem) => {
          return (
            <Breadcrumb.Item key={breadItem.path}>
              {breadItem.title}
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    </div>
  );
};

export default withRouter(BreadCrumb);
