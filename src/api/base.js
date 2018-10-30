import axios from "axios";

let cancel;
const promiseArr = {};

const CancelToken = axios.CancelToken;

axios.interceptors.request.use(
  config => {
    if (promiseArr[config.url]) {
      promiseArr[config.url]("操作取消");
      promiseArr[config.url] = cancel;
    } else {
      promiseArr[config.url] = cancel;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截器即异常处理
axios.interceptors.response.use(
  response => {
    return response.data;
  },
  err => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = "错误请求";
          break;
        case 401:
          err.message = "未授权，请重新登录";
          break;
        case 403:
          err.message = "拒绝访问";
          break;
        case 404:
          err.message = "请求错误,未找到该资源";
          break;
        case 500:
          err.message = "服务器端出错";
          break;
        default:
          err.message = `连接错误${err.response.status}`;
      }
    } else {
      err.message = "连接到服务器失败";
    }
    return Promise.reject(err);
  }
);

axios.defaults.timeout = 60000;

export default {
  get(url, param) {
    return new Promise((resolve, reject) => {
      axios({
        method: "get",
        url,
        params: param,
        cancelToken: new CancelToken(c => {
          cancel = c;
        })
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  post(url, param) {
    return new Promise((resolve, reject) => {
      axios({
        method: "post",
        url,
        data: param,
        transformRequest: [
          function(data) {
            let ret = "";
            for (let it in data) {
              ret +=
                encodeURIComponent(it) +
                "=" +
                encodeURIComponent(data[it]) +
                "&";
            }
            return ret;
          }
        ],
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        cancelToken: new CancelToken(c => {
          cancel = c;
        })
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  formPost(url, param) {
    return new Promise((resolve, reject) => {
      axios({
        method: "post",
        url,
        data: param,
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        },
        cancelToken: new CancelToken(c => {
          cancel = c;
        })
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  delete(url, param) {
    return new Promise((resolve, reject) => {
      axios({
        method: "DELETE",
        url,
        data: param,
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        },
        cancelToken: new CancelToken(c => {
          cancel = c;
        })
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};
