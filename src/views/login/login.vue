<script>
import loginService from '@/services/loginService';
import { setLocalStorage } from '@/utils/utils';
import MenuUtils from '@/utils/MenuUtils';
/**
 * 登录页面实例
 * @module login
 */
export default {
	name: 'login',
	/**
	 * @description 实例数据对象
	 * @returns {Object} form 登录表单数据
	 */
	data() {
		return {
			form: {
				account: '',
				password: '',
			},
			routers: []
		};
	},
	mounted() {
	},
	methods: {
		/**
		 * @description 添加动态路由
		 * @function addRouterInfo
		 * @param {any} data 动态路由数据
		 */
		addRouterInfo(data) {
			setLocalStorage('sysRouters', data);
			MenuUtils(self.routers, data);
		},
		/**
		 * @description form表单提交方法
		 * @function goWebLogin
		 */
		goWebLogin() {
			let self = this;
			if (
				self.form.account.trim() === '' ||
				self.form.account == '请输入用户名'
			) {
				alert('请填写正确的用户名！');
				return;
			}
			if (
				self.form.password.trim() === '' ||
				self.form.password == '请输入密码'
			) {
				alert('密码不为空！');
				return;
			}

			loginService.userLogin(self.form).then(res => {
				if (res) {
					// 设置路由缓存
					let sysRouters = res.router || [];
					let otherRouter = [
						{
							menuCode: 'factEvent',
							menuName: '实有警情',
							children: [
								{
									menuCode: 'deploy',
									menuName: '布控告警',
								},
								{
									menuCode: 'reported',
									menuName: '接报事件',
								},
								},
							],
						},
						{
							menuCode: 'monitoringList',
							menuName: '监控',
						},
					];
					sysRouters = sysRouters.concat(otherRouter);
					self.addRouterInfo(sysRouters);
					self.$router.addRoutes(self.routers);
					self.$router.push({ path: '/' });
				}
			});
		},
	},
};
</script>
<template>
	<div class="login">
		<div class="login-box">
			<div class="user-container inputBg">
				<label for="userName" class="icon-user">账户：</label>
				<input id="userName" class="login-input" type="text" autocomplete="off" placeholder="请输入用户名" v-model="form.account" @keydown="keyEnter($event)" />
			</div>
			<div class="user-container inputBg pB48">
				<label for="pass" class="icon-pass">密码：</label>
				<input id="pass" class="login-input" type="password" autocomplete="off" placeholder="请输入密码" v-model="form.password" @keydown="keyEnter($event)" />
			</div>

			<div class="login-btn" @click="goWebLogin()">
				<div class="logo-text">登录</div>
			</div>
		</div>
	</div>
</template>
