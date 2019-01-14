<template>
	<div class="tipsHeader">
		<i @click="tipsHeaderhandle" class="iconfont icon-ziyuanldpi"></i>
		<h2>{{contant}}</h2>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				contant:"注册"
			};
		},
		methods:{
			tipsHeaderhandle(){
				alert("click")
			}
		}
	}
</script>

<style>
.tipsHeader{
	padding: 1rem;
}
.tipsHeader i{
	font-size: 1.3rem;
	color: #555;
}
.tipsHeader h2{
	text-align: center;
	line-height: 3rem;
	font-size: 1.8rem;
}
</style>
