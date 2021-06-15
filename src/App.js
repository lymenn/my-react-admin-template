import React from "react";
import { Provider } from "react-redux";

import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import store from "./store";
import Route from "./router";
function App() {
  console.log(store);
  return (
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <Route></Route>
      </Provider>
    </ConfigProvider>
  );
}

export default App;
