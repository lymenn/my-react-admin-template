import React from "react";
import { connect } from "react-redux";

import { toggleSiderBar } from "@/store/actions";
import { Layout, Icon } from "antd";
const Hamburger = (props) => {
    const { toggleSiderBar, sidebarCollapsed } = props;

    return (
        <Icon
            className="trigger"
            type={sidebarCollapsed ? "menu-unfold" : "menu-fold"}
            onClick={toggleSiderBar}
        />
    );
};

export default connect(
    (state) => {
        return state.app;
    },
    { toggleSiderBar }
)(Hamburger);
