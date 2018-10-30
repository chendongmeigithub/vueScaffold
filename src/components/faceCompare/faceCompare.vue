<script>
export default {
	name: 'faceCompare',
	data() {
		return {
			title: '人脸比对',
			visible: false,
			faceInfo: {
				faceUrl: '',
				targetFaceUrl: '',
				similarity: '',
				name: '',
				gender: '',
				libName: '',
				personId: '',
			},
		};
	},
	created() {},
	methods: {
		openFaceCompare(data) {
			this.faceInfo = data;
			this.visible = true;
		},
		closeDialog() {
			this.faceInfo = {
				faceUrl: '',
				targetFaceUrl: '',
				similarity: '',
				name: '',
				gender: '',
				libName: '',
				personId: '',
			};
			this.visible = false;
		},
	},
};
</script>

<template>
	<el-dialog :title="title" :visible.sync="visible" @close="closeDialog" :modal-append-to-body="false" width="420px" custom-class="custom-popout-box">
		<div class="contrast-face-popup">
			<div class="contrast">
				<div class="left-photo rahmen">
					<div class="img-box">
						<img :src="faceInfo.faceUrl" onerror="javascript:this.src='/images/imgError/default_people.png';" />
					</div>
					<p class="hint">抓拍人脸</p>
				</div>
				<div class="contrast-animation">
					<div class="coverage-one"></div>
					<div class="coverage-two"></div>
					<div class="coverage-three"></div>
					<div class="similarity">
						<p>相识度</p>
						<p><span class="big-font ng-binding">{{ faceInfo.similarity }}</span>%</p>
					</div>
				</div>
				<div class="right-photo rahmen">
					<div class="img-box">
						<img :src="faceInfo.targetFaceUrl" onerror="javascript:this.src='/images/imgError/default_people.png';" />
					</div>
					<p class="hint">比中人脸</p>
				</div>
			</div>
			<ul class="user-info">
				<li>
					<label class="label-text">姓名:</label>
					<span class="span-text">{{ faceInfo.name }}</span>
				</li>
				<li>
					<label class="label-text">性别:</label>
					<span class="span-text">{{ faceInfo.gender }}</span>
				</li>
				<li>
					<label class="label-text">所在库:</label>
					<span class="span-text">{{ faceInfo.libName }}</span>
				</li>
				<li>
					<label class="label-text">证件号:</label>
					<span class="span-text">{{ faceInfo.personId }}</span>
				</li>
			</ul>
		</div>
	</el-dialog>
</template>

<style lang="less">
@-webkit-keyframes cycleRun {
	0% {
		transform: rotate(0deg);
		-webkit-transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
		-webkit-transform: rotate(360deg);
	}
}
@keyframes cycleRun {
	0% {
		transform: rotate(0deg);
		-webkit-transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
		-webkit-transform: rotate(360deg);
	}
}
@-webkit-keyframes cycleRun2 {
	0% {
		transform: rotate(360deg);
		-webkit-transform: rotate(360deg);
	}
	100% {
		transform: rotate(0deg);
		-webkit-transform: rotate(0deg);
	}
}
@keyframes cycleRun2 {
	0% {
		transform: rotate(360deg);
		-webkit-transform: rotate(360deg);
	}
	100% {
		transform: rotate(0deg);
		-webkit-transform: rotate(0deg);
	}
}
.animation(@args) {
	-webkit-animation: @args;
	-moz-animation: @args;
	-ms-animation: @args;
	-o-animation: @args;
	animation: @args;
}
.contrast-face-popup {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.contrast {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		/* 对比图片相框样式 */
		.rahmen {
			width: 107px;
			height: 150px;
			background: rgba(0, 0, 0, 0.9);
			color: #04c2fc;
			box-shadow: 0px 0px 5px 1px #00aeff;
			text-align: center;
			box-sizing: border-box;
			.img-box {
				width: 100%;
				height: 123px;
				line-height: 123px;
				text-align: center;
				img {
					max-width: 100%;
					max-height: 100%;
					vertical-align: middle;
				}
			}
			.hint {
				line-height: 26px;
			}
		}
		/* 对比动画层 */
		.contrast-animation {
			width: 140px;
			height: 140px;
			position: relative;
			> div {
				width: 100%;
				height: 100%;
				position: absolute;
				&.coverage-one {
					background: url(/images/faceCompare/circle-one.png)
						no-repeat center;
				}
				&.coverage-two {
					background: url(/images/faceCompare/circle-two.png)
						no-repeat center;
					.animation(cycleRun2 10s linear 0s infinite);
				}
				&.coverage-three {
					background: url(/images/faceCompare/circle-three.png)
						no-repeat center;
				}
				&.coverage-one,
				&.coverage-three {
					.animation(cycleRun 10s linear 0s infinite);
				}
			}
			.similarity {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				color: #fff;
				.big-font {
					font-size: 22px;
					vertical-align: bottom;
				}
			}
		}
	}
	.user-info {
		width: 100%;
		padding-top: 20px;
		li {
			height: 24px;
			line-height: 24px;
			.label-text {
				color: #04c2fc;
				width: 40px;
				text-align: right;
				margin-right: 10px;
			}
			.span-text {
				color: #fff;
			}
		}
	}
}
</style>