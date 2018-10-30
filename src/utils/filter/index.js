import filterWay from './filter.js';
/**
 * @description 过滤器
 * @namespace filter
 * @property {function}  initFilter 初始化VUE全局过滤器
 */
export default {
	initFilter: function(Vue) {
		Object.keys(filterWay).forEach(key => Vue.filter(key, filterWay[key]));
	},
};
