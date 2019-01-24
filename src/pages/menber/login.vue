<template>
	<div class="login">
		<div class="logo">
			<img src="../../assets/logo2.png" alt="">
		</div>
		<div class="logintext">
			<div class="item">
				<i class="iconfont icon-yonghu"></i>
				<input type="text" name="username" placeholder="请输入手机号"/>
			</div>
			<div class="item">
				<i class="iconfont icon-mimasuo"></i>
				<input type="password" name="password" placeholder="请输入密码"/>
			</div>
			<div class="subbox">
				<input class="sub" type="submit" value="登录">

			</div>
			<span class="l">注册</span>
			<span class="r">忘记密码</span>
		</div>
	</div>
	
</template>

<script>
	export default {
		name:"Login",
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.login{
		background: #ebf2f8;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
	}
	.login .logo{
		text-align: center;
		padding: 3rem 0;
	}
	.login .logo img{
		width: 10rem;
	}
	.logintext{
	}
	.logintext .item{
		font-size: 1.2rem;
		background: #fff;
		width: 16rem;
		padding: .5rem 1rem;
		margin: 1.5rem auto;
		border-radius: 100rem;
		box-shadow: 0px 1px 4px rgba(0,0,0,0.3),0px 0px 0px rgba(0,0,0,0.3),0px 0px 20px rgba(0,0,0,0.1) inset ;

	}
	.logintext .subbox{
		text-align: center;
	}
	.logintext .sub{
		font-size: 1.2rem;
		background: #fff;
		width: 16rem;
		padding: .5rem 1rem;
		margin: 1.5rem auto;
		border-radius: 100rem;
		background: #f60;
		border: 0;
		outline: none;
		color: #fff;
	}

	.logintext .item input{
		border: 0;
		outline: none;
		font-size: 1.0rem;
	}
	.logintext .item i{
		font-weight: 1000;
		font-size: 1.2rem;
	}
</style>
