<template>
	<div class="contant">
		<p class="back" @click="ShopBackHandle"><i class="iconfont icon-zuo"></i></p>
		<img src="../../../static/cs/kqyt_01.png" alt="">
		<img src="../../../static/cs/kqyt_02.png" alt="">
		<img src="../../../static/cs/kqyt_03.png" alt="">
		<img src="../../../static/cs/kqyt_04.png" alt="">
		<img src="../../../static/cs/kqyt_05.png" alt="">
		<img src="../../../static/cs/kqyt_06.png" alt="">
		<img src="../../../static/cs/kqyt_07.png" alt="">
		<img src="../../../static/cs/kqyt_08.png" alt="">
		<footer class="foot">
			<span @click="ShopSubjectHandle">{{this.subject[this.nowsubjectaim]}}</span>
			<b>《考前一天》2019高考版</b>
			<div @click="ShopBuyHandle" class="buy">立即购买</div>
		</footer>
	</div>	
</template>
<script>
	export default {
		data() {
			return {
				subject:["理科","文科","全科"],
				nowsubjectaim:0
			};
		},
		methods:{
			ShopSubjectHandle:function(){
				this.nowsubjectaim++
				if(this.nowsubjectaim>this.subject.length){
					this.nowsubjectaim =0
				}
			},
			ShopBackHandle:function(){
				alert("YY")
			},
			ShopBuyHandle:function(){				
			}
		}
	}
</script>

<style>
	.foot {
		background-image: -moz-linear-gradient(-11deg, rgb(124, 0, 117) 0%, rgb(19, 0, 138) 100%);
		background-image: linear-gradient(-11deg, rgb(124, 0, 117) 0%, rgb(19, 0, 138) 100%);
		background-image: -webkit-linear-gradient(-11deg, rgb(124, 0, 117) 0%, rgb(19, 0, 138) 100%);
		background-image: -ms-linear-gradient(-11deg, rgb(124, 0, 117) 0%, rgb(19, 0, 138) 100%);
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		height: 4rem;
		display: block;
		line-height: 4rem;
		z-index: 2;
	}
	.foot span {
		background: #f80;
		color: #000;
		border-radius: 100rem;
		padding: .2rem .5rem;
		margin-left: .5rem;
	}
	.foot b {
		color: #fff;
	}
	.buy {
		position: fixed;
		border: .3rem solid rgb(228, 0, 127);
		background-color: rgb(70, 0, 87);
		border-radius: 1rem;
		z-index: 9;
		right: .5rem;
		bottom: .5rem;
		color: #fff;
		font-size: 1.4rem;
		width: 4rem;
		height: 4rem;
		line-height: 1.8rem;
		text-align: center;
	}
	.contant{
		padding: 0;
		margin: 0;
		position: absolute;
		z-index: 1;
		left: 0;
		right: 0;
		top: 0;
	}
	.contant img{
		width: 100%;
	}
	 .back{
		position: fixed;
		top: .5rem;
		left: .5rem;
		background: rgba(0,0,0,0.5);
		color: #fff;
		display: block;
		z-index: 5;
		width: 2rem;
		height: 2rem;
		border-radius: 3rem;
		text-align: center;
		line-height: 2rem;
	}
</style>
