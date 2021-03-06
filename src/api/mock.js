import Mock from 'mockjs';

Mock.mock('/mock/about', {
	code: 200,
	msg: '',
	data: [{ name: '关于我们', component: 'About', path: '/about' }],
});

Mock.mock('/zhsq/system/login', {
	resultCode: 200,
	msg: '',
	data: {
		status: 'success',
		user: {
			id: 7,
			account: 'chendm',
			password: 'd094de8bce8ce370976e251b1e70c228',
			showName: 'chendm',
			orgId: 1,
			orgName: '南昌市',
			loginStatus: 1,
			status: 1,
			mrowTime: '2018-09-27 17:06:08.0',
			userTheme: 'default',
			menuList: [
				{
					menuCode: '1',
					menuName: '首页',
					parentCode: '-1',
					menuType: 1,
					menuUrl: '#/index/home/',
					deleteFlag: 0,
					mrowTime: 1537362290000,
					children: null,
				},
				{
					menuCode: '2',
					menuName: '一标六实',
					parentCode: '-1',
					menuType: 1,
					menuUrl: '#/index/communityAllNew/',
					deleteFlag: 0,
					mrowTime: 1537362290000,
					children: null,
				},
				{
					menuCode: '3',
					menuName: '云搜索',
					parentCode: '-1',
					menuType: 1,
					menuUrl: '#/index/search/',
					deleteFlag: 0,
					mrowTime: 1537362290000,
					children: null,
				},
				{
					menuCode: '4',
					menuName: '一人一档',
					parentCode: '-1',
					menuType: 1,
					menuUrl: '#/index/peoplefile/',
					deleteFlag: 0,
					mrowTime: 1537362290000,
					children: null,
				},
				{
					menuCode: '5',
					menuName: '一屋一档',
					parentCode: '-1',
					menuType: 1,
					menuUrl: '#/index/houseFile/',
					deleteFlag: 0,
					mrowTime: 1537362290000,
					children: null,
				},
				{
					menuCode: '55',
					menuName: '一车一档',
					parentCode: '-1',
					menuType: 1,
					menuUrl: '#/index/carFile/',
					deleteFlag: 0,
					mrowTime: 1537362291000,
					children: null,
				},
				{
					menuCode: '6',
					menuName: '三维地图',
					parentCode: '-1',
					menuType: 1,
					menuUrl: '#/index/communityNew/',
					deleteFlag: 0,
					mrowTime: 1537362290000,
					children: null,
				},
				{
					menuCode: '7',
					menuName: '轨迹刻画',
					parentCode: '-1',
					menuType: 1,
					menuUrl: '#/index/trackShow/faceTrack/',
					deleteFlag: 0,
					mrowTime: 1537362290000,
					children: null,
				},
				{
					menuCode: '71',
					menuName: '人脸轨迹',
					parentCode: '7',
					menuType: 1,
					menuUrl: '#/index/trackShow/faceTrack/',
					deleteFlag: 0,
					mrowTime: 1537362290000,
					children: null,
				},
				{
					menuCode: '72',
					menuName: 'MAC轨迹',
					parentCode: '7',
					menuType: 1,
					menuUrl: '#/index/trackShow/macTrack/',
					deleteFlag: 0,
					mrowTime: 1537362290000,
					children: null,
				},
				{
					menuCode: '73',
					menuName: '车辆轨迹',
					parentCode: '7',
					menuType: 1,
					menuUrl: '#/index/trackShow/carTrack/',
					deleteFlag: 0,
					mrowTime: 1537362291000,
					children: null,
				},
				{
					menuCode: '8',
					menuName: '数据仓',
					parentCode: '-1',
					menuType: 1,
					menuUrl: '#/index/dataWarehouse/',
					deleteFlag: 0,
					mrowTime: 1537362291000,
					children: null,
				},
				{
					menuCode: '9',
					menuName: '系统管理',
					parentCode: '-1',
					menuType: 1,
					menuUrl: '#/index/platform/0',
					deleteFlag: 0,
					mrowTime: 1537362291000,
					children: null,
				},
				{
					menuCode: '91',
					menuName: '用户中心',
					parentCode: '9',
					menuType: 1,
					menuUrl: '#/index/platform/0',
					deleteFlag: 0,
					mrowTime: 1537362291000,
					children: null,
				},
				{
					menuCode: '9101',
					menuName: '机构管理',
					parentCode: '91',
					menuType: 3,
					menuUrl: '#/index/platform/0',
					deleteFlag: 0,
					mrowTime: 1537362291000,
					children: null,
				},
				{
					menuCode: '9102',
					menuName: '角色管理',
					parentCode: '91',
					menuType: 3,
					menuUrl: '#/index/platform/1',
					deleteFlag: 0,
					mrowTime: 1537362291000,
					children: null,
				},
				{
					menuCode: '9103',
					menuName: '用户管理',
					parentCode: '91',
					menuType: 3,
					menuUrl: '#/index/platform/2',
					deleteFlag: 0,
					mrowTime: 1537362291000,
					children: null,
				},
				{
					menuCode: '92',
					menuName: '运维管理',
					parentCode: '9',
					menuType: 1,
					menuUrl: '#/index/operation/',
					deleteFlag: 0,
					mrowTime: 1537362291000,
					children: null,
				},
				{
					menuCode: '9201',
					menuName: '服务监测',
					parentCode: '92',
					menuType: 3,
					menuUrl: '#',
					deleteFlag: 0,
					mrowTime: 1537362291000,
					children: null,
				},
				{
					menuCode: '9202',
					menuName: '资源管理',
					parentCode: '92',
					menuType: 3,
					menuUrl: '#',
					deleteFlag: 0,
					mrowTime: 1537362291000,
					children: null,
				},
				{
					menuCode: '9203',
					menuName: '系统参数配置',
					parentCode: '92',
					menuType: 3,
					menuUrl: '#',
					deleteFlag: 0,
					mrowTime: 1537362291000,
					children: null,
				},
				{
					menuCode: '9204',
					menuName: '接入管理',
					parentCode: '92',
					menuType: 3,
					menuUrl: '#',
					deleteFlag: 0,
					mrowTime: 1537362291000,
					children: null,
				},
				{
					menuCode: '9205',
					menuName: '战法库',
					parentCode: '92',
					menuType: 3,
					menuUrl: '#',
					deleteFlag: 0,
					mrowTime: 1537362291000,
					children: null,
				},
				{
					menuCode: '93',
					menuName: '日志管理',
					parentCode: '9',
					menuType: 1,
					menuUrl: '#/index/log/',
					deleteFlag: 0,
					mrowTime: 1537362291000,
					children: null,
				},
			],
			roleList: [
				{
					id: 1,
					name: '系统管理员',
					remark: '超级管理员权限',
					deleteFlag: 0,
					type: 1,
					mrowTime: 1537362291000,
				},
			],
			admin: true,
		},
	},
});

Mock.mock('/zhsq/system/getSysParams', {
	resultCode: 200,
	msg: '',
	data: [
		{
			doorPlayIp: 'http://15.128.21.154:7777',
			systemName: '南昌市智能安防社区系统',
			ocxConfig: {
				type: 1,
				user: 'admin',
				passwd: 'admin',
				ip: '172.16.90.151',
				port: '2100',
				path: '',
				title: '',
				displayMode: 0,
				hwdecoder: -1,
			},
			mapCenter: '115.89130196273776,28.648830273291452',
			websocketIP: 'ws://172.16.90.167:28081/zhsq/websocket',
			communityCodeToName: {
				'360102001001': '莱茵半岛',
				'360103001002': '锦苑春天',
				'360103001003': '中大青山湖',
				'360112001002': '汇景新城',
			},
			coverageMenu: [
				{ id: 0, name: '小区', isChecked: 2, hasChild: 'false' },
				{
					id: 1,
					name: '动态感知',
					isChecked: 2,
					hasChild: 'true',
					child: [
						{ id: 11, name: '人脸抓拍', isChecked: 2 },
						{ id: 12, name: '车辆过车', isChecked: 2 },
						{ id: 23, name: '实时警情', isChecked: 2 },
					],
				},
				{
					id: 2,
					name: '实有力量',
					isChecked: 2,
					hasChild: 'true',
					child: [
						{ id: 21, name: '实有力量', isChecked: 2 },
						{ id: 22, name: '实时警力', isChecked: 2 },
					],
				},
				{ id: 3, name: '实有房屋', isChecked: 0 },
				{ id: 4, name: '实有单位', isChecked: 0 },
				{
					id: 5,
					name: '实有安防设施',
					isChecked: 0,
					hasChild: 'true',
					child: [
						{
							id: 52,
							name: '卡口',
							isMouseOn: 'false',
							isChecked: 0,
						},
						{
							id: 53,
							name: 'wifi',
							isMouseOn: 'false',
							isChecked: 0,
						},
						{
							id: 54,
							name: '门禁',
							isMouseOn: 'false',
							isChecked: 0,
						},
						{
							id: 51,
							name: '监控',
							isMouseOn: 'false',
							isChecked: 0,
							hasChild: 'true',
							child: [
								{
									id: 511,
									name: '小区监控',
									isMouseOn: 'false',
									isChecked: 0,
								},
								{
									id: 512,
									name: '道路监控',
									isMouseOn: 'false',
									isChecked: 0,
								},
							],
						},
						{
							id: 55,
							name: '消防',
							isMouseOn: 'false',
							isChecked: 0,
							hasChild: 'true',
							child: [
								{ id: 551, name: '烟感', isChecked: 0 },
								{ id: 552, name: '电气', isChecked: 0 },
								{ id: 553, name: '消防栓', isChecked: 0 },
							],
						},
					],
				},
				{ id: 6, name: '小区出入口', isChecked: 0 },
				{ id: 7, name: '窨井盖', isChecked: 0 },
			],
			orgId: '3',
		},
	],
});
Mock.mock('/zhsq/system/listMenuTree', {
	resultCode: 200,
	msg: '',
	data: [
		{
			menuCode: '1',
			menuName: '首页',
			parentCode: '-1',
			menuType: 1,
			menuUrl: '#/index/home/',
			deleteFlag: 0,
			mrowTime: 1537362290000,
			children: null,
		},
		{
			menuCode: '2',
			menuName: '一标六实',
			parentCode: '-1',
			menuType: 1,
			menuUrl: '#/index/communityAllNew/',
			deleteFlag: 0,
			mrowTime: 1537362290000,
			children: null,
		},
		{
			menuCode: '3',
			menuName: '云搜索',
			parentCode: '-1',
			menuType: 1,
			menuUrl: '#/index/search/',
			deleteFlag: 0,
			mrowTime: 1537362290000,
			children: null,
		},
		{
			menuCode: '4',
			menuName: '一人一档',
			parentCode: '-1',
			menuType: 1,
			menuUrl: '#/index/peoplefile/',
			deleteFlag: 0,
			mrowTime: 1537362290000,
			children: null,
		},
		{
			menuCode: '5',
			menuName: '一屋一档',
			parentCode: '-1',
			menuType: 1,
			menuUrl: '#/index/houseFile/',
			deleteFlag: 0,
			mrowTime: 1537362290000,
			children: null,
		},
		{
			menuCode: '55',
			menuName: '一车一档',
			parentCode: '-1',
			menuType: 1,
			menuUrl: '#/index/carFile/',
			deleteFlag: 0,
			mrowTime: 1537362291000,
			children: null,
		},
		{
			menuCode: '6',
			menuName: '三维地图',
			parentCode: '-1',
			menuType: 1,
			menuUrl: '#/index/communityNew/',
			deleteFlag: 0,
			mrowTime: 1537362290000,
			children: null,
		},
		{
			menuCode: '7',
			menuName: '轨迹刻画',
			parentCode: '-1',
			menuType: 1,
			menuUrl: '#/index/trackShow/faceTrack/',
			deleteFlag: 0,
			mrowTime: 1537362290000,
			children: null,
		},
		{
			menuCode: '71',
			menuName: '人脸轨迹',
			parentCode: '7',
			menuType: 1,
			menuUrl: '#/index/trackShow/faceTrack/',
			deleteFlag: 0,
			mrowTime: 1537362290000,
			children: null,
		},
		{
			menuCode: '72',
			menuName: 'MAC轨迹',
			parentCode: '7',
			menuType: 1,
			menuUrl: '#/index/trackShow/macTrack/',
			deleteFlag: 0,
			mrowTime: 1537362290000,
			children: null,
		},
		{
			menuCode: '73',
			menuName: '车辆轨迹',
			parentCode: '7',
			menuType: 1,
			menuUrl: '#/index/trackShow/carTrack/',
			deleteFlag: 0,
			mrowTime: 1537362291000,
			children: null,
		},
		{
			menuCode: '8',
			menuName: '数据仓',
			parentCode: '-1',
			menuType: 1,
			menuUrl: '#/index/dataWarehouse/',
			deleteFlag: 0,
			mrowTime: 1537362291000,
			children: null,
		},
		{
			menuCode: '9',
			menuName: '系统管理',
			parentCode: '-1',
			menuType: 1,
			menuUrl: '#/index/platform/0',
			deleteFlag: 0,
			mrowTime: 1537362291000,
			children: null,
		},
		{
			menuCode: '91',
			menuName: '用户中心',
			parentCode: '9',
			menuType: 1,
			menuUrl: '#/index/platform/0',
			deleteFlag: 0,
			mrowTime: 1537362291000,
			children: null,
		},
		{
			menuCode: '9101',
			menuName: '机构管理',
			parentCode: '91',
			menuType: 3,
			menuUrl: '#/index/platform/0',
			deleteFlag: 0,
			mrowTime: 1537362291000,
			children: null,
		},
		{
			menuCode: '9102',
			menuName: '角色管理',
			parentCode: '91',
			menuType: 3,
			menuUrl: '#/index/platform/1',
			deleteFlag: 0,
			mrowTime: 1537362291000,
			children: null,
		},
		{
			menuCode: '9103',
			menuName: '用户管理',
			parentCode: '91',
			menuType: 3,
			menuUrl: '#/index/platform/2',
			deleteFlag: 0,
			mrowTime: 1537362291000,
			children: null,
		},
		{
			menuCode: '92',
			menuName: '运维管理',
			parentCode: '9',
			menuType: 1,
			menuUrl: '#/index/operation/',
			deleteFlag: 0,
			mrowTime: 1537362291000,
			children: null,
		},
		{
			menuCode: '9201',
			menuName: '服务监测',
			parentCode: '92',
			menuType: 3,
			menuUrl: '#',
			deleteFlag: 0,
			mrowTime: 1537362291000,
			children: null,
		},
		{
			menuCode: '9202',
			menuName: '资源管理',
			parentCode: '92',
			menuType: 3,
			menuUrl: '#',
			deleteFlag: 0,
			mrowTime: 1537362291000,
			children: null,
		},
		{
			menuCode: '9203',
			menuName: '系统参数配置',
			parentCode: '92',
			menuType: 3,
			menuUrl: '#',
			deleteFlag: 0,
			mrowTime: 1537362291000,
			children: null,
		},
		{
			menuCode: '9204',
			menuName: '接入管理',
			parentCode: '92',
			menuType: 3,
			menuUrl: '#',
			deleteFlag: 0,
			mrowTime: 1537362291000,
			children: null,
		},
		{
			menuCode: '9205',
			menuName: '战法库',
			parentCode: '92',
			menuType: 3,
			menuUrl: '#',
			deleteFlag: 0,
			mrowTime: 1537362291000,
			children: null,
		},
		{
			menuCode: '93',
			menuName: '日志管理',
			parentCode: '9',
			menuType: 1,
			menuUrl: '#/index/log/',
			deleteFlag: 0,
			mrowTime: 1537362291000,
			children: null,
		},
	],
});
