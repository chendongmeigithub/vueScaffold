import userApi from "@/api/user";
import resData from "./resData";

export default {
  userLogin(params) {
    let newResData = Object.assign({}, resData);
    return new Promise(function(resolve, reject) {
      userApi.login(params).then(res => {
        if (res.data) {
          newResData.data = res.data;
          newResData.router = [];
          resolve(newResData);
        } else {
          newResData.msg = res.message;
          reject(newResData);
        }
      });
    });
  }
};
