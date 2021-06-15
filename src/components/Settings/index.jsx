import React, { useState } from "react";
import { connect } from "react-redux";
import { Icon, Tooltip } from "antd";
import { toggleSettingPanel } from "@/store/actions";
import "./index.less";
const Settings = (props) => {
  const { toggleSettingPanel } = props;
  return (
    <span className="setting-container">
      <Tooltip placement="bottom" title="设置">
        <Icon
          onClick={toggleSettingPanel}
          type="setting"
          style={{
            fontSize: "25px",
          }}
        />
      </Tooltip>
    </span>
  );
};

export default connect(null, { toggleSettingPanel })(Settings);
