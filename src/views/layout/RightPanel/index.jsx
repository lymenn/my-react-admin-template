import React from "react";
import { connect } from "react-redux";
import { Drawer } from "antd";
import { toggleSettingPanel } from "@/store/actions";
const RightPanel = (props) => {
  const { settingPanelVisible, toggleSettingPanel } = props;
  return (
    <Drawer
      onClose={toggleSettingPanel}
      title="系统设置"
      placement="right"
      visible={settingPanelVisible}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
};
const state = (state) => {
  return {
    ...state.app,
    ...state.setting,
  };
};
export default connect(state, { toggleSettingPanel })(RightPanel);
