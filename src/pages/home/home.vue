<template>
	<div class="serach">
		<img src="../../../static/images/logo.png" alt="">
		<div class="sub">
			<input type="text" v-model="subcode" placeholder="请输入提取码">
			<i @click="handlesub" class="iconfont icon-icon"></i>
		</div>
		<div class="itemselect">
			<div @click="handleitem(index)" class="item" v-for="(items,index) in items" :class="{active:activenow==items.id}">{{items.name}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:"Home",
		data(){
			return {
				subcode:"",
				activenow:0,
				items:[
					{
						name:"英语",
						id:0
					},{
						name:"高考",
						id:1
					},{
						name:"中考"	,
						id:2		
					}
				]
			}
		},
		methods:{
			handlesub:function(){
				alert(this.subcode)
			},
			handleitem:function(a){
				this.activenow = a
			}
		}
	}
</script>

<style>
.serach{
	text-align: center;
}
.serach img{
	width: 14rem;
	margin: 4rem auto;
}
.sub{
	width: 18rem;
	border-radius: 20rem;
	border:1px solid #555;
	margin: 0 auto;
	margin-bottom: 1rem;
}
.sub input{
	outline: none;
	border: 0;
	line-height: 2.5rem;
	font-size: 1.2rem;
	background: rgba(0,0,0,0);
	text-indent: 1rem;
}
.sub i{
	font-size: 1.8rem;
	padding-right: 1rem;
}
 .item{
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
.active{
	border:.1rem solid #f60;
	background: lightsalmon;
	color: #fff;
}
</style>
