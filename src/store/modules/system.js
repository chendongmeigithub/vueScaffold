var state = {
	loginStatus: true,
	sysParams: {},
};
var actions = {
	SET_LOGINSTATUS: function(store, param) {
		store.commit('SET_LOGINSTATUS', param);
	},
	SET_SYSPARAMS: function(store, param) {
		store.commit('SET_SYSPARAMS', param);
	},
};
var mutations = {
	SET_LOGINSTATUS: function(state, status) {
		state.loginStatus = status;
	},
	SET_SYSPARAMS: function(state, params) {
		state.sysParams = params;
	},
};
export default {
	state: state,
	actions: actions,
	mutations: mutations,
};
