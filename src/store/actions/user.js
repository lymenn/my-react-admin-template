import * as types from "../action-types";
import { reqUserInfo } from "@/api/user";
export const getUserInfo = (token) => (dispatch) => {
  return new Promise((resolve, reject) => {
    reqUserInfo(token)
      .then((response) => {
        const { data } = response;
        if (data.status === 0) {
          const userInfo = data.userInfo;
          dispatch(setUserInfo(userInfo));
          resolve(data);
        } else {
          reject(data.message);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};
export function setUserToken(token) {
  return {
    type: types.USER_SET_USER_TOKEN,
    token,
  };
}
export const setUserInfo = (userInfo) => {
  return {
    type: types.USER_SET_USER_INFO,
    ...userInfo,
  };
};

export const resetUser = () => {
  return {
    type: types.USER_RESET_USER,
  };
};
