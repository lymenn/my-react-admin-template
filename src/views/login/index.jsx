import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { Form, Input, Button, Checkbox, Icon, Spin, message } from "antd";
import DocumentTitle from "react-document-title";
import { login, getUserInfo } from "@/store/actions";
import "./index.less";
const Login = (props) => {
  const { form, login, getUserInfo, token } = props;
  const { getFieldDecorator } = form;
  const [loading, setLoading] = useState(false);
  const handleLogin = (username, password) => {
    setLoading(true);
    login(username, password)
      .then((data) => {
        message.success("登录成功");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleUserInfo = (token) => {
    getUserInfo(token)
      .then((data) => {})
      .catch((error) => {
        message.error(error);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        const { username, password } = values;
        handleLogin(username, password);
      } else {
        console.log("校验失败");
      }
    });
  };
  if (token) {
    console.log(123);
    return <Redirect to="/dashboard"></Redirect>;
  }
  return (
    <DocumentTitle title={"用户登录"}>
      <div className="login-container">
        <Form name="basic" className="content">
          <div className="title">
            <h2>用户登录</h2>
          </div>
          <Spin spinning={loading}>
            <Form.Item>
              {getFieldDecorator("username", {
                rules: [
                  {
                    required: true,
                    whitespace: true,
                    message: "请输入用户名",
                  },
                ],
                initialValue: "admin", // 初始值
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="用户名"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [
                  {
                    required: true,
                    whitespace: true,
                    message: "请输入密码",
                  },
                ],
                initialValue: "123456", // 初始值
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="密码"
                />
              )}
            </Form.Item>
            <Form.Item>
              <Button
                onClick={handleSubmit}
                type="primary"
                htmlType="submit"
                className="login-form-buttom"
              >
                登录
              </Button>
            </Form.Item>
            <Form.Item>
              <span>账号 : admin 密码 : 随便填</span>
              <br />
              <span>账号 : editor 密码 : 随便填</span>
              <br />
              <span>账号 : guest 密码 : 随便填</span>
            </Form.Item>
          </Spin>
        </Form>
      </div>
    </DocumentTitle>
  );
};
const WrapLogin = Form.create()(Login);
export default connect((state) => state.user, { login, getUserInfo })(
  WrapLogin
);
