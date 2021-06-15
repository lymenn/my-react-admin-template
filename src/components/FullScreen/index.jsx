import React, { useState, useEffect } from "react";
import { Icon, Tooltip, message } from "antd";
import screenfull from "screenfull";
import "./index.less";
const FullScreen = (props) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  useEffect(() => {
    const change = () => {
      setIsFullscreen(screenfull.isFullscreen);
    };
    screenfull.isEnabled && screenfull.on("change", change);
    return () => {
      screenfull.isEnabled && screenfull.off("change", change);
    };
  }, []);
  const handleClick = () => {
    if (!screenfull.isEnabled) {
      message.warning("you browser can not work");
      return false;
    }
    screenfull.toggle();
  };
  return (
    <span className="fullscreen-container">
      <Tooltip placement="bottom" title={isFullscreen ? "取消全屏" : "全屏"}>
        <Icon
          type={isFullscreen ? "fullscreen-exit" : "fullscreen"}
          style={{ fontSize: "25px" }}
          onClick={handleClick}
        />
      </Tooltip>
    </span>
  );
};

export default FullScreen;
