import * as types from "../action-types";

// app
// export const APP_TOGGLE_SIDEBAR = "APP_TOGGLE_SIDEBAR";
// export const APP_TOGGLE_SETTINGPANEL = "APP_TOGGLE_SETTINGPANEL";
const initState = {
  sidebarCollapsed: false,
  settingPanelVisible: false,
};
export default function app(state = initState, action) {
  console.log(789, 9999999999999, state);
  switch (action.type) {
    case types.APP_TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarCollapsed: !state.sidebarCollapsed,
      };
    case types.APP_TOGGLE_SETTINGPANEL:
      return {
        ...state,
        settingPanelVisible: !state.settingPanelVisible,
      };
    default:
      return state;
  }
}
