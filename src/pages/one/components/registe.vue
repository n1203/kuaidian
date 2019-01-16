<template>
	<div class="registe">
		<div class="logo">
			<img src="../../../assets/logo2.png" />
		</div>
		<div class="tel">
			<img src="" />
			<input type="tel"  placeholder="手机号码"/>
			<img class="close" src="" />
		</div>
		<div class="password">
			<img src="" />
			<input type="password"  placeholder="请输入密码"/>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
	*{
		padding: 0;
		margin: 0;
	}
	.registe{
		width: 100%;
		position: relative;
		background: #ebf2f8;
	}
	.registe .logo{
		width:50%;
		/* height:30rem; */
		margin-top:3rem;
		overflow: hidden;
		margin: 0 auto;
	}
	.registe .logo img{
		width:90%;
		margin-top: 3rem;
	}
	.registe .tel{
		width: 90%;
		height: ;
	}

</style>
