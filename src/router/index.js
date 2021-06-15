import React, { Component } from "react";
import { connect } from "react-redux";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";

import { getUserInfo } from "@/store/actions";
import Login from "@/views/login";
import Layout from "@/views/layout";

class Router extends Component {
  render() {
    const { token, role, getUserInfo } = this.props;
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/login" component={Login}></Route>
          <Route
            path="/"
            render={() => {
              if (!token) {
                return <Redirect to="/login"></Redirect>;
              } else {
                if (role) {
                  return <Layout />;
                } else {
                  getUserInfo(token).then(() => <Layout />);
                }
              }
            }}
          ></Route>
        </Switch>
      </HashRouter>
    );
  }
}

export default connect((state) => state.user, { getUserInfo })(Router);
