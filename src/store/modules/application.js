var state = {
	/*车辆布控 start*/
	vuex_filterData: {}, //车辆布控条件筛选数据
	vuex_flashData: false, //关闭添加或更新布控信息后刷新列表标志
	// vuex_carMonitorDetail: {}, //车辆布控详细信息
	vuex_deleteCarMonitorId: '', //要删除车辆布控的id
	/*车辆布控 end*/
	/*报警管理 start*/
	vuex_isShowMore: true, //报警管理——报警信息中的头部是否显示“更多”字样
	vuex_isShowImageMode: true, //报警管理——报警信息中,当显示所有信息时，是否按图文显示
	vuex_isShowListMode: false, //报警管理——报警信息中,当显示所有信息时，是否按列表显示
	vuex_alarmTypeIndex: 0, //报警管理——报警信息中,报警类型的序号（0表示不限，1表示事件布防，2表示车辆布控，3表示人脸布控）
	vuex_isShowAlarmSelectedCondition: false, //报警管理——报警信息中,是否显示已选条件的面板
	vuex_isShowAlarmSelectedConditionData: {}, //报警管理——报警信息中,已选条件的数据
	vuex_isShowExport: false, //报警管理——报警信息中,是否显示关于“导出”的页面
	/*报警管理 end*/

	vuex_subStructChange: false, // 实时结构化子设备发生变化
	vuex_task_status: { flag: false, id: '' }, // 实时结构化子设备发生变化
	vuex_subHisStructChange: false, // 历史结构化子设备发生变化
};
var actions = {
	//车辆布控条件筛选数据
	SET_FILTERDATA: function(store, param) {
		store.commit('SET_FILTERDATA', param);
	},
	//是否需要刷新车辆数据标志
	IS_FLASHDATA: function(store, param) {
		store.commit('IS_FLASHDATA', param);
	},
	//展示车辆布控详细信息
	// SHOW_CARMONITORDETAIL: function(store, param) {
	//     store.commit("SHOW_CARMONITORDETAIL", param);
	// },
	//删除车辆布控的id
	DELETE_CARMORITORID: function(store, param) {
		store.commit('DELETE_CARMORITORID', param);
	},
	//报警管理——报警信息中的头部是否显示“更多”字样
	ALARM_INFO_MORE_SHOW: function(store, param) {
		store.commit('ALARM_INFO_MORE_SHOW', param);
	},
	//报警管理——报警信息中,当显示所有信息时，是否按图文显示
	ALARM_INFO_IMAGE_SHOW: function(store, param) {
		store.commit('ALARM_INFO_IMAGE_SHOW', param);
	},
	//报警管理——报警信息中,当显示所有信息时，是否按列表显示
	ALARM_INFO_LIST_SHOW: function(store, param) {
		store.commit('ALARM_INFO_LIST_SHOW', param);
	},
	//报警管理——报警信息中,报警类型的序号（0表示不限，1表示事件布防，2表示车辆布控，3表示人脸布控）
	ALARM_TYPE_INDEX: function(store, param) {
		store.commit('ALARM_TYPE_INDEX', param);
	},
	//报警管理——报警信息中,是否显示已选条件的面板
	SHOW_ALARM_SELECTED_CONDITION: function(store, param) {
		store.commit('SHOW_ALARM_SELECTED_CONDITION', param);
	},
	//报警管理——报警信息中,已选条件的数据
	ALARM_SELECTED_CONDITION_DATA: function(store, param) {
		store.commit('ALARM_SELECTED_CONDITION_DATA', param);
	},
	SHOW_ALARM_EXPORT: function(store, param) {
		store.commit('SHOW_ALARM_EXPORT', param);
	},
	//触发事件
	Trigger_SUBSTRUCT_CHANGE: function(store, param) {
		store.commit('Trigger_SUBSTRUCT_CHANGE', param);
	},
	//触发事件
	Trigger_STATUS_CHANGE: function(store, param) {
		store.commit('Trigger_STATUS_CHANGE', param);
	},
	//历史结构化页面触发事件
	Trigger_SUBHISSTRUCT_CHANGE: function(store, param) {
		store.commit('Trigger_SUBHISSTRUCT_CHANGE', param);
	},
};
var mutations = {
	//车辆布控条件筛选数据
	SET_FILTERDATA: function(state, data) {
		state.vuex_filterData = data;
	},
	//是否需要刷新车辆数据标志
	IS_FLASHDATA: function(state, data) {
		state.vuex_flashData = data;
	},
	//展示车辆布控详细信息
	// "SHOW_CARMONITORDETAIL": function (state, data) {
	//     state.vuex_carMonitorDetail = data;
	// },
	DELETE_CARMORITORID: function(state, data) {
		state.vuex_deleteCarMonitorId = data;
	},
	//报警管理——报警信息中的头部是否显示“更多”字样
	ALARM_INFO_MORE_SHOW: function(state, bool) {
		state.vuex_isShowMore = bool;
	},
	//报警管理——报警信息中,当显示所有信息时，是否按图文显示
	ALARM_INFO_IMAGE_SHOW: function(state, bool) {
		state.vuex_isShowImageMode = bool;
	},
	//报警管理——报警信息中,当显示所有信息时，是否按列表显示
	ALARM_INFO_LIST_SHOW: function(state, bool) {
		state.vuex_isShowListMode = bool;
	},
	//报警管理——报警信息中,报警类型的序号（0表示不限，1表示事件布防，2表示车辆布控，3表示人脸布控）
	ALARM_TYPE_INDEX: function(state, data) {
		state.vuex_alarmTypeIndex = data;
	},
	//报警管理——报警信息中,是否显示已选条件的面板
	SHOW_ALARM_SELECTED_CONDITION: function(state, bool) {
		state.vuex_isShowAlarmSelectedCondition = bool;
	},
	//报警管理——报警信息中,已选条件的数据
	ALARM_SELECTED_CONDITION_DATA: function(state, data) {
		state.vuex_isShowAlarmSelectedConditionData = data;
	},
	//报警管理——报警信息中,是否显示“导出”相关页面
	SHOW_ALARM_EXPORT: function(state, bool) {
		state.vuex_isShowExport = bool;
	},
	//实时结构化任务修改
	Trigger_SUBSTRUCT_CHANGE: function(state, bool) {
		state.vuex_subStructChange = !state.vuex_subStructChange;
	},
	//实时所有状态修改
	Trigger_STATUS_CHANGE: function(state, data) {
		state.vuex_task_status.flag = !data.flag;
		state.vuex_task_status.id = data.id;
	},
	//历史结构化任务修改
	Trigger_SUBHISSTRUCT_CHANGE: function(state, bool) {
		state.vuex_subHisStructChange = !state.vuex_subHisStructChange;
	},
};
export default {
	state: state,
	actions: actions,
	mutations: mutations,
};
