// /**
//  * @file 创建状态管理器
//  */
// import Vue from 'vue';
// import Vuex from 'vuex';

// Vue.use(Vuex);

// export default new Vuex.Store({
// 	state: {
// 		leftStatus: false,
// 	},
// 	mutations: {
// 		changeLeftStatus(state) {
// 			state.leftStatus = !this.state.leftStatus;
// 			console.log(state.leftStatus);
// 		},
// 	},
// 	actions: {},
// });

// modulestore.js
// import application from './modules/application.js';
import system from './modules/system.js';
export default {
	// application: application,
	system: system,
};
