import * as types from "../action-types";
import defaultSetting from "@/defaultSetting"
const { showSettings, sidebarLogo, fixedHeader, tagsView } = defaultSetting;

const initState = {
    showSettings,
    sidebarLogo,
    fixedHeader,
    tagsView,
};
export default function setting (state = initState, action) {
    switch (action.type) {
        case types.SETTINGS_CHANGE_SETTINGS:
            const { key, value } = action;
            if (state.hasOwnProperty(key))
                return {
                    ...state,
                    [key]: value
                };
        default:
            return state;
    }
}
