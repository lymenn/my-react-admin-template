import React, { Component } from "react";
import { Layout } from "antd";
import { connect } from 'react-redux'
import { Redirect, withRouter, Route, Switch } from "react-router-dom"
import routeMap from '@/config/routeMap'
const Content = (props) => {
    return (
        <Layout.Content
            style={{
                margin: "24px 16px",
                padding: 24,
                background: "#fff",
                minHeight: 280,
            }}
        >
            <Switch>
                <Redirect exact from="/" to="/dashboard"></Redirect>
                {
                    routeMap.map(route => {
                        return (
                            <Route
                                component={route.component}
                                key={route.path}
                                path={route.path} />
                        )
                    })
                }
            </Switch>
        </Layout.Content>
    );
}

export default connect(state => state.user)(withRouter(Content))