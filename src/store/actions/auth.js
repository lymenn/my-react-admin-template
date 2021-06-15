import { reqLogin, reqLogout } from "@/api/login";
import { setToken, removeToken } from "@/utils/auth";
import { setUserToken, resetUser } from "@/store/actions";
export const login = (username, password) => (dispatch) => {
  return new Promise((resolve, reject) => {
    reqLogin({
      username: username.trim(),
      password,
    })
      .then((response) => {
        const { data } = response;
        if (data.status === 0) {
          const token = data.token;
          dispatch(setUserToken(token));
          setToken(token);
          resolve(data);
        } else {
          const msg = response.message;
          reject(msg);
        }
        console.log(response, 90980);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

export const logout = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    reqLogout().then((response) => {
      const { data } = response;
      if (data.status === 0) {
        dispatch(resetUser());
        removeToken();
        resolve(data);
      }
    });
  });
};
