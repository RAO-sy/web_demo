<template>
	<section>
		<nav class="navbar is-info">
		  <div class="container">
		    <div class="navbar-brand">
		      <a class="navbar-item">
		        <div>
					<router-link :to="{name:'HelloWorld'}">
						<h1 class="title" 
		        		style='color:rgb(255, 255, 255)'>Fast-DetectGPT</h1>
					</router-link>
		        </div>
		      </a>
		      <span class="navbar-burger" data-target="navbarMenuHeroB">
		        <span></span>
		        <span></span>
		        <span></span>
		      </span>
		    </div>
		    <div id="navbarMenuHeroB" class="navbar-menu">
		      <div class="navbar-end">
		        <a class="navbar-item" @click='openPage'>
		          Home
		        </a>
				<a class="navbar-item" @click="openExample">
					Examples
				</a>
		        <a class="navbar-item" href="https://arxiv.org/pdf/2310.05130.pdf" target="_blank">
		          Documentation
		        </a>
		      </div>
			  <span class="navbar-item">
		      <a class="button is-info is-inverted" href="https://github.com/baoguangsheng/fast-detect-gpt">
		        <span class="icon">
				  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
		          <i class="fab fa-github"></i>
		        </span>
		        <span>Github</span>
		      </a>
		    </span>
		    </div>
		  </div>
		</nav>
		
		<div class="input-container">
			<div class="tile is-ancestor">
			  <div class="tile is-parent is-7">
			    <article class="tile is-child box">	
			      <span class="input-title">Method</span>
				  
				  <div class="left-block">
					  <span class="left-block-text">reference model:</span>
					  <div class="left-block-radio">
						<b-radio v-model="reference"
						  name="name"
						  native-value="gpt2-xl"
						  disabled>
						  gpt2-xl
						</b-radio>
					  	<b-radio v-model="reference"
						  name="name"
						  native-value="gpt-neo-2.7B"
						  disabled>
						  gpt-neo-2.7B
						</b-radio>
						<b-radio v-model="reference"
						  name="name"
						  native-value="gpt-j-6B">
						  gpt-j-6B
						</b-radio>
					  </div>
				  </div>
					 
				  <div class="right-block">
					  <span class="left-block-text">scoring model:</span>
					  <div class="left-block-radio"
						   style="padding-left:34px;">
						<b-radio v-model="scoring"
						  name="name1"
						  native-value="gpt2-xl"
						  disabled>
						  gpt2-xl
						</b-radio>
						<b-radio v-model="scoring"
						  name="name1"
						  native-value="gpt-neo-2.7B">
						  gpt-neo-2.7B
						</b-radio>
						<b-radio v-model="scoring"
						  name="name1"
						  native-value="gpt-j-6B"
						  disabled>
						  gpt-j-6B
						</b-radio>
					  </div>
				  </div>
			      <div class="content-input">
			        <b-field class='input-text-field'>
						<b-input type="textarea"
							minlength="1"
							maxlength="2000"
							placeholder="Enter the text to be detected"
							v-model="sentence">
						</b-input>
					</b-field>
					<b-button 
						type="is-info" 
						class='input-buttom' 
						@click="getdata"
						>Submit</b-button>
					<b-loading v-model="isLoading" :can-cancel="false"></b-loading>
			      </div>
			    </article>
			  </div>
			  
			  <div class="tile is-parent">
			    <article class="tile is-child box">
			      <p class="title">Results</p>
			      <div class="content">
					<div style="width:350px;height:350px;display: block;margin: auto;" id="mychart"></div>
			        
					<div style="width: 300px;display: block;margin: auto;">
						<div v-if="prob>70">
							Fast-DetectGPT criterion is <b-tag type="is-info is-light">{{crit}}</b-tag>, suggesting that the text has a probability of <b-tag type="is-danger is-light">{{prob}}%</b-tag> to be fake.
						</div>
						<div v-else-if="prob>40">
							Fast-DetectGPT criterion is <b-tag type="is-info is-light">{{crit}}</b-tag>, suggesting that the text has a probability of <b-tag type="is-warning is-light">{{prob}}%</b-tag> to be fake.
						</div>
						<div v-else>
							Fast-DetectGPT criterion is <b-tag type="is-info is-light">{{crit}}</b-tag>, suggesting that the text has a probability of <b-tag type="is-success is-light">{{prob}}%</b-tag> to be fake.
						</div>
					</div>
			      </div>
			    </article>
			  </div>
			</div>
		</div>
		
	</section>
   
  
   
</template>

<script>	
import * as echarts from 'echarts';
import axios from 'axios';
import { currentGET } from '@/api/modules'
import { currentPOST } from '../api/modules';

export default {
	data() {
		return {
			reference:"gpt-j-6B",
			scoring:"gpt-neo-2.7B",
			isLoading: false,
			prob:0,
			crit:0,
			data:{},
			sentence:"",
			optionData:[
			  {
				value: 0,
				name: 'AI generated',
				 title: {
					  offsetCenter: ['0%', '40%']
					},
				detail: {
				  valueAnimation: true,
				  offsetCenter: ['0%', '10%']
				}
			},
		  ],
		  }
		 
	},
	onLoad(){
		this.getdata();
	},
	mounted(){
		
		this.draw();
		
	},
	methods:{
		openPage(){
			this.$router.push('/')
		},
		openExample(){
			let routeUrl = this.$router.resolve({
			     path: "/example",
			   });
			   window.open(routeUrl.href, '_blank');
		},
		getdata(){
			this.isLoading = true;
			const ref = this.reference.split('-')[1];
			const scor = this.scoring.split('-')[1];
			const api = "result_"+ref+"_"+scor;
			console.log(api);
			currentPOST(api, this.sentence).then(response =>{
				console.log("success",response)
				this.data = response.data
				this.prob = response.data["prob"]
				this.crit = response.data["crit"]
				this.isLoading = false
				this.draw()
			})
			.catch(error =>{
				this.isLoading = false
				console.log("failed!:",error.message)
				
			})
		},
		draw () {
			console.log(this.prob)
			this.optionData[0]["value"] = this.prob
			let myChart = echarts.init(document.getElementById('mychart'));
			let option = {
				  series: [
					{
					  type: 'gauge',
					  startAngle: -90,
					  endAngle: 270,
					  pointer: {
						show: false
					  },
					  progress: {
						show: true,
						overlap: false,
						roundCap: true,
						clip: false,
						itemStyle: {
						  borderWidth: 1,
						  borderColor: '#464646'
						}
					  },
					  axisLine: {
						lineStyle: {
						  width: 20
						}
					  },
					  splitLine: {
						show: false,
						distance: 0,
						length: 5
					  },
					  axisTick: {
						show: false
					  },
					  axisLabel: {
						show: false,
						distance: 50
					  },
					  data: this.optionData,
					  title: {
						fontSize: 14
					  },
					  detail: {
						width: 50,
						height: 14,
						fontSize:14,
						borderWidth: 1,
						borderRadius: 20,
						color: 'inherit',
						borderColor: 'inherit',
						formatter: '{value}%'
					  }
					}
				  ]
				};
			myChart.setOption(option, true) 
		},
	},
};
</script>

<style scoped>
.navbar.is-info {
    padding-top: 7px;
	margin-bottom: 6px;
	padding-bottom: 5px;
}
.input-container{
	margin-top: 30px;
	margin-left: 40px;
	margin-right: 40px;
}
.tile.is-ancestor:last-child {
    margin-bottom: -0.75rem;
    height: 730px;
}
.content-input{
	height:550px;
	margin-top: 10px;
}
.input-title{
	font-size: 1.25rem;
	font-weight: bold;
	margin-right: 5px;
}
.input-buttom{
	margin-right: 7px;
}
.input-title, .input-buttom{
	vertical-align: middle;
}
.input-text-field{
	height: 500px;
}
::v-deep .textarea:not([rows]) {
    max-height: 40em;
    min-height: 31em;
}
.left-block{
	align-items: start;
	width: 490px;
	padding-top:10px;
	height: 30px;
}
.right-block{
	align-items: start;
	width: 490px;
	padding-top:10px;
	height: 30px;
}
.left-block-text{
	float: left;
	padding-left: 10px;
	font-weight: 200px;
	font-weight: bold;
}
.left-block-radio{
	float: left;
	padding-left: 20px;
}
.left-block-text, .left-block-radio{
	vertical-align: middle;
}
</style>

