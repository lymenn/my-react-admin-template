import React from "react";
import { connect } from "react-redux";
import { Drawer, Switch, Divider, Row, Col, Alert, Button, Icon } from "antd";
import { toggleSettingPanel, changeSetting } from "@/store/actions";
const RightPanel = (props) => {
    const {
        changeSetting,
        toggleSettingPanel,
        settingPanelVisible,
        sidebarLogo,
        fixedHeader,
        tagsView,
    } = props;

    function handleCopy () {
        console.log(22);

    }
    function sidebarLogoChange (checked) {
        changeSetting({
            key: 'sidebarLogo',
            value: checked
        })
    }
    function fixHeaderChange (checked) {
        changeSetting({
            key: 'fixedHeader',
            value: checked
        })
    }
    function tagsViewChange (checked) {
        changeSetting({
            key: 'tagsView',
            value: checked
        })
    }

    return (
        <Drawer
            onClose={toggleSettingPanel}
            title="系统设置"
            width="350"
            placement="right"
            visible={settingPanelVisible}
        >
            <Row>
                <Col span={12}>
                    侧边栏 Logo
                </Col>
                <Col span={12}>
                    <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked={sidebarLogo} onChange={sidebarLogoChange} />
                </Col>
            </Row>
            <Divider dashed />
            <Row>
                <Col span={12}>
                    固定 Header
                </Col>
                <Col span={12}>
                    <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked={fixedHeader} onChange={fixHeaderChange} />
                </Col>
            </Row>
            <Divider dashed />
            <Row>
                <Col span={12}>
                    开启 Tags-View
                </Col>
                <Col span={12}>
                    <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked={tagsView} onChange={tagsViewChange} />
                </Col>
            </Row>
            <Divider dashed />
            <Row>
                <Col>
                    <Alert
                        message="开发者请注意:"
                        description="配置栏只在开发环境用于预览，生产环境不会展现，请拷贝后手动修改/src/defaultSettings.js配置文件"
                        type="warning"
                        showIcon
                        icon={<Icon type="notification" />}
                    />
                    <Button icon="copy" style={{ width: "100%", marginTop: '20px' }} onClick={handleCopy}>拷贝配置</Button>
                </Col>
            </Row>


        </Drawer>
    );
};
const state = (state) => {
    return {
        ...state.app,
        ...state.setting,
    };
};
export default connect(state, { toggleSettingPanel, changeSetting })(RightPanel);
