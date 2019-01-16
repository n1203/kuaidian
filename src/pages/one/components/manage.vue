<template>
	<div class="release">
		<div class="logo">
			<img src="../../../assets/logo2.png" />
		</div>
		<div class="center">
			<div class="release-L">
				<ul>
					<li>
						<span>名称</span>
						<input type="text" placeholder="资料的名称" />
					</li>
					<li>
						<span>编号</span>
						<input type="text" placeholder="资料的编号" />
					</li><li>
						<span>URL</span>
						<input type="text" placeholder="微信分享URL" />
					</li><li>
						<span>科目</span>
						<select>
							<option value="volvo">Volvo</option>
							<option value="saab">Saab</option>
							<option value="opel">Opel</option>
							<option value="audi">Audi</option>
						</select>
					</li>
				</ul>
			</div>
			<div class="release-R">
				<ul>
					<li>英语知识技巧</li>
					<li>高中知识技巧</li>
					<li>初中知识技巧</li>
				</ul>
			</div>
		</div>
		<div class="sub">
			<input type="submit" />
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

<style>
	*{
		padding: 0;
		margin: 0;
		font-family: "微软雅黑";
	}
	.release{
		position: relative;
		width: 60%;
		margin: 0 auto;
		/* border: 1px solid black; */
	}
	.release .logo{
		height: 160px;
		overflow: hidden;
		margin-top: 20px;
	}
	.release .logo img{
		height: 80%;
		padding: 20px;
	}
	.release .center{
		width: 100%;
		height: 350px;
		/* border: 1px solid red; */
		position: relative;
		margin-top:50px ;
	}
	.release .center .release-L{
		width: 500px;
		height: 250px;
		margin-left:20px ;
		position: absolute;
		left: 0;
		top: 0;
	}
	.release .center .release-L li{
		list-style: none;
		margin-bottom: 40px;
	}
	.release .center .release-L li span{
		font-size: 20px;
		line-height: 20px;
		color: #7E8C8D;
	}
	.release .center .release-L li input{
		padding: 4px 0;
		text-indent: 10px;
		height: 22px;
		line-height: 22px;
		width: 300px;
		border: 1px solid #7E8C8D;
		outline: 0;
		background: #fff;
		border-radius: 22px;
		margin-left: 30px;
		color: #999;
	}
	.release .center .release-L li select{
		text-indent: 10px;
		height: 30px;
		line-height: 30px;
		width: 300px;
		border: 1px solid #7E8C8D;
		background: #fff;
		border-radius: 30px;
		margin-left: 30px;
		color: #999;
		outline: none;
	}
	.release .center .release-R{
		width: 300px;
		height:200px;
		padding-left:100px ;
		/* border: 1px solid green; */
		position: absolute;
		right: 0;
		top: 0;
		border-left: 2px solid #e1e1e1;
		
	}
	.release .center .release-R li{
		list-style: none;
		width: 150px;
		height: 30px;
		border-radius: 30px;
		/* margin-top: 20px; */
		text-align: center;
		line-height: 30px;
		background: #ffad00;
		color: #FFFFFF;
		font-weight: 500;
		font-size: 17px;
		margin-bottom:30px;
	}
	.release .sub{
		display: block;
		text-align: center;
	}
	.release .sub input{
		width: 220px;
		height: 50px;
		background: #FFAD00;
		color: #FFFFFF;
		text-align: center;
		border: 0;
		outline: none;
		border-radius: 50px;
		font-size: 20px;
		
	}
	
	
	
</style>
