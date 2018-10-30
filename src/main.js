import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router/router";
import MenuUtils from "./utils/MenuUtils";
import modules from "./store/store.js";

Vue.use(Vuex);
let store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: modules
});

// 引入模拟数据
// import './api/mock';

// 引入全局过滤器
import filter from "./utils/filter/index";
filter.initFilter(Vue);

// 引入全局方法
import baseFun from "./utils/baseFun";
Vue.use(baseFun);

Vue.config.productionTip = false;

import { getLocalStorage, removeLocalStorage } from "./utils/utils";

router.beforeEach((route, redirect, next) => {
  let data = getLocalStorage("sysRouters");
  if (data && route.name == "login") {
    //这里不使用router进行跳转，是因为，跳转到登录页面的时候，是需要重新登录，获取数据的，这个时候，会再次向router实例里面add路由规则，
    //而next()跳转过去之后，没有刷新页面，之前的规则还是存在的，但是使用location的话，可以刷新页面，当刷新页面的时候，整个app会重新加载
    //而我们在刷新之前已经把sessionStorage里的user移除了，所以上面的添加路由也不行执行
    removeLocalStorage("sysRouters");
    removeLocalStorage("USER");
    removeLocalStorage("zhsq_SysParams");
    removeLocalStorage("isLoadNodes");
    next();
  }
  if (!data && route.name != "login") {
    next({ path: "/login" });
  } else {
    if (route.path) {
      // 设置store数据
      let sysParams = getLocalStorage("zhsq_SysParams");
      store.state.system.sysParams = sysParams;
      next();
    } else {
      next({ path: "/login" });
    }
  }
});

let data = getLocalStorage("sysRouters");
if (data) {
  //这里是防止用户手动刷新页面，整个app要重新加载,动态新增的路由，会消失，所以我们重新add一次
  let routes = [];
  MenuUtils(routes, data);
  router.addRoutes(routes);
  removeLocalStorage("isLoadNodes");
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
