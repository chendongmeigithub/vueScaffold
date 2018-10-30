import axios from "./base";

/**
 * 用户相关接口
 * @exports userApi
 */
export default {
  /**
   * @description 用户登录
   * <pre>
   * /zhsq/system/login
   * </pre>
   * @function login
   * @param {Object} params - 用户登录信息
   * @param {string} params.account - 账号
   * @param {string} params.password - 密码
   * @return {Promise} Promise
   */
  login(params) {
    return axios.post("/zhsq/system/login", params);
  }
};
