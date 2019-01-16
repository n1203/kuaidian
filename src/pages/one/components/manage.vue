<template>
	<div class="release">
		<div class="logo">
			<img src="../../../../static/images/logo.png" />
		</div>
		<div class="center">
			<div class="release-L">
				<ul>
					<li v-for="(item,index) of list" :key="item.id">
						<span>{{item.name}}</span>
						<input type="text" :placeholder=item.tip />
					</li>
					<li>
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
						<li @click="handleright(index)" v-for="(chose,index) in right" :class="{active:activenow==chose.id}">{{chose.name}}</li>
				</ul>
			</div>
		</div>
		<div @click="handleclick()" class="sub">
			<input type="submit" />
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activenow:0,
				list:[
				{ name:"名称",
					id:1,
					tip:"资料的名称"},{
					name:"编号",
					id:2,
					tip:"资料的编号"
				},{
					name:"URL",
					id:3,
					tip:"微信分享UR"
				}
				],
				right:[
					{name:"英语知识技巧",
					id:0},
					{name:"高中知识技巧",
					id:1},
					{name:"初中知识技巧",
					id:2},
				]
			};
		},
		methods:{
			handleclick:function(){
				alert("success")
			},
			handleright:function(a){
				this.activenow = a
			}
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
		margin-top:100px ;
		box-shadow:0px 0px 20px 2px rgba(0,0,0,0.1);
	}
	.release .logo{
		height: 90px;
		overflow: hidden;
		margin-left:30px ;
		padding-top:30px ;
	}
	.release .logo img{
		height: 80%;
		padding: 20px;
	}
	.release .center{
		width: 100%;
		height: 400px;
		/* border: 1px solid red; */
		position: relative;
		margin-top:60px ;
		margin-left:30px ;
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
		height: 32px;
		line-height: 32px;
		width: 320px;
		border: 1px solid #7E8C8D;
		outline: 0;
		background: #fff;
		border-radius: 32px;
		margin-left: 30px;
		color: #b4b4b4;
		font-size: 17px;
		opacity: 0.5;
	}
	.release .center .release-L li select{
		text-indent: 10px;
		height: 40px;
		line-height: 40px;
		width: 320px;
		border: 1px solid #7E8C8D;
		background: #fff;
		border-radius: 40px;
		margin-left: 30px;
		color: #999;
		outline: none;
		opacity: 0.5;
		font-size: 17px;
	}
	.release .center .release-R{
		width: 300px;
		height:200px;
		padding-left:130px ;
		/* border: 1px solid green; */
		position: absolute;
		right: 0;
		top: 0;
		border-left: 2px solid #e1e1e1;
		margin-right:80px ;

	}
	.release .center .release-R li{
		list-style: none;
		width: 180px;
		height: 40px;
		border-radius: 40px;
		/* margin-top: 20px; */
		text-align: center;
		line-height:40px;
		background:#FFFFFF;
		color: #FF6600;
		font-weight: 520;
		font-size: 18px;
		margin-bottom:35px;
		border: 1px solid #FF6600;
		cursor: pointer;
	}
	.release .center .release-R li.active{
		list-style: none;
		width: 180px;
		height: 40px;
		border-radius: 40px;
		/* margin-top: 20px; */
		text-align: center;
		line-height:40px;
		background: #ffad00;
		color: #FFFFFF;
		font-weight: 520;
		font-size: 18px;
		margin-bottom:35px;
		border: none;
	}
	.release .sub{
		display: block;
		text-align: center;
	}
	.release .sub input{
		width: 270px;
		height: 60px;
		background: #FFAD00;
		color: #FFFFFF;
		text-align: center;
		border: 0;
		outline: none;
		border-radius: 50px;
		font-size: 25px;
		font-weight: 500;
		margin-bottom: 50px;
	}
	
	
	
</style>
