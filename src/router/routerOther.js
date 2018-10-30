/**
 * @description 路由配置
 * @namespace routerOther
 */
export default {
	1: {
		component: 'home/home.vue',
		path: '/home',
	},
	2: {
		component: 'communityAllNew/communityAllNew.vue',
		path: '/communityAllNew/:villageCode',
	},
	3: {
		component: 'search/search.vue',
		path: '/search',
	},
	4: {
		component: 'peopleFile/peopleFile.vue',
		path: '/peopleFile/:idcardNo?',
	},
	5: {
		component: 'houseFile/index.vue',
		path: '/houseFile',
	},
	6: {
		component: 'communityNew/index.vue',
		path: '/communityNew/:villageCode?',
	},
	7: {
		component: 'trackShow/trackShow.vue',
		path: '/trackShow',
	},
	71: {
		component: 'trackShow/faceTrack.vue',
		path: '/trackShow/faceTrack',
	},
	72: {
		component: 'trackShow/carTrack.vue',
		path: '/trackShow/carTrack',
	},
	73: {
		component: 'trackShow/macTrack.vue',
		path: '/trackShow/macTrack',
	},
	8: {
		component: 'dataWarehouse/dataWarehouse.vue',
		path: '/dataWarehouse',
	},
	9: {
		component: 'system/system.vue',
		path: '/system',
	},
	91: {
		component: 'system/userCenter/userCenter.vue',
		path: '/system/userCenter',
	},
	92: {
		component: 'system/operation/operation.vue',
		path: '/system/operation',
	},
	93: {
		component: 'system/log/log.vue',
		path: '/system/log',
	},
	zidingyi2: {
		component: 'communityAllNewChart/communityAllNewChart.vue',
		path: '/communityAllNewChart/:type',
	},
	fui: {
		component: 'fui.vue',
		path: '/fui',
	},
	factpeople: {
		component: 'factPeople/factPeople.vue',
		path: '/factpeople/:villageCode',
	},
	securitypower: {
		component: 'securityPower/securityPower.vue',
		path: '/securityPower/:villageCode',
	},
	smoke: {
		component: 'smoke/smoke.vue',
		path: '/smoke/:villageCode',
	},
	factCompany: {
		component: 'factCompany/factCompany.vue',
		path: '/factCompany/:villageCode',
	},
	employeeDetail: {
		component: 'employeeDetail/employeeDetail.vue',
		path: '/employeeDetail/:villageCode/:companyId',
	},
	facthouse: {
		component: 'factHouse/factHouse.vue',
		path: '/factHouse/:villageCode',
	},
	factPower: {
		component: 'factPower/factPower.vue',
		path: '/factPower/:villageCode',
	},
	factEquipment: {
		component: 'factEquipment/factEquipment.vue',
		path: '/factEquipment/:villageCode',
	},
	doorRecord: {
		component: 'doorRecord/doorRecord.vue',
		path: '/doorRecord/:villageCode/:credentialNo?',
	},
	communityMac: {
		component: 'communityMac/communityMac.vue',
		path: '/communityMac/:villageCode',
	},
	communityCar: {
		component: 'communityCar/communityCar.vue',
		path: '/communityCar/:villageCode/:plateNumber?',
	},
	factEvent: {
		component: 'factEvent/factEvent.vue',
		path: '/factEvent',
	},
	deploy: {
		component: 'factEvent/deploy/deploy.vue',
		path: '/factEvent/deploy',
	},
	reported: {
		component: 'factEvent/reported/reported.vue',
		path: '/factEvent/reported',
	},
	people: {
		component: 'factEvent/people/people.vue',
		path: '/factEvent/people',
	},
	vehicle: {
		component: 'factEvent/vehicle/vehicle.vue',
		path: '/factEvent/vehicle',
	},
	sensor: {
		component: 'factEvent/sensor/sensor.vue',
		path: '/factEvent/sensor ',
	},
	monitoringList: {
		component: 'monitoringList/monitoringList.vue',
		path: '/monitoringList/:villageCode',
	},
	faceCapture: {
		component: 'faceCapture/faceCapture.vue',
		path: '/faceCapture/:villageCode',
	},
};