<template>
	<div class="serach">
		<img src="../../../static/images/logo.png" alt="">
		<div class="sub">
			<input type="text" v-model="subcode" :placeholder="puttips" @keypress="enterToLogin">
			<i @click="handlesub" class="iconfont icon-icon"></i>
		</div>
		<div class="itemselect">
			<div @click="handleitem(index)" class="item" v-for="(items,index) in items" :class="{active:activenow==items.id}">{{items.name}}</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name: "Home",
		data() {
			return {
				puttips: "请输入五位提取码",
				subcode: "",
				activenow: 0,
				items: [{
					name: "英语",
					id: 0
				}, {
					name: "高考",
					id: 1
				}, {
					name: "中考",
					id: 2
				}]
			}
		},
		methods: {
			enterToLogin:function(ev) {
				ev.keyCode === 13 && this.handlesub()
			},
			handlesub: function() {
				if (this.subcode != '' && this.subcode.length == 5) {
					if(this.items[this.activenow].id==0||this.items[this.activenow].id==2){
						window.location.href = 'http://www.e-spy.cn/index.php?item='+this.items[this.activenow].id+"&subcode="+this.subcode
					}else{
						alert("程序员正在努力开发")
					}

				} else {
					alert("您的输入有误！请重新输入哦！")
				}
			},
			handleitem: function(a) {
				this.activenow = a
			}
		}
	}
</script>

<style>
	.serach {
		text-align: center;
	}

	.serach img {
		width: 14rem;
		margin: 4rem auto;
	}

	.sub {
		width: 18rem;
		border-radius: 20rem;
		border: 1px solid #555;
		margin: 0 auto;
		margin-bottom: 1rem;
		position: relative;
	}

	.sub input {
		outline: none;
		border: 0;
		line-height: 2.5rem;
		font-size: 1.2rem;
		background: rgba(0, 0, 0, 0);
		text-indent: 1rem;
		display: inline-block;
	}

	.sub i {
		font-size: 1.8rem;
		padding-right: 1rem;
		position: absolute;
		right: 0.5rem;
		top: 50%;
		transform: translateY(-50%);
	}

	.item {
		border-radius: 10rem;
		width: 2rem;
		height: 2rem;
		text-align: center;
		line-height: 2rem;
		font-size: 0.8rem;
		display: inline-block;
		margin: 1rem 0.5rem;
		background: #e2e2e2;
		color: #555;
		border: .1rem #fff solid;
	}

	.active {
		border: .1rem solid #f60;
		background: lightsalmon;
		color: #fff;
	}
</style>
