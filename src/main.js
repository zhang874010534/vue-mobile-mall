import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import app from './App.vue'

import 'mint-ui/lib/style.css'
import MintUI from 'mint-ui'
Vue.use(MintUI)

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/fonts/mui-icons-extra.ttf'

//导入router
import router from './router.js'

//导入Vuex
import Vuex from 'vuex'
Vue.use(Vuex)
var shopCart=JSON.parse(localStorage.getItem('car')|| '[]');
var result=JSON.parse(localStorage.getItem('result')|| '[]');
var store=new Vuex.Store({
	state:{
		count:0,
		shopCart:shopCart,
		result:result
	},
	mutations:{
		increment(state){
			state.count++
		},
		//将商品添加进购物车
		addGoods(state,goodsObj){
			state.shopCart.push(goodsObj)
			localStorage.setItem('car',JSON.stringify(state.shopCart))
		},
		del(state,i){
			state.shopCart.some((item,index)=>{
				console.log(1);
				if(index==i){
					state.shopCart.splice(i,1)
					return true;
				}
			})
			localStorage.setItem('car',state.shopCart)
		},
		changeCheck(state,i){
			let indexing;
			let flag=state.result.some((item,index)=>{
				if(item==i){
					indexing=index;
					return true
				}
			})
			if(flag){
				state.result.splice(indexing,1)
			}else{
				state.result.push(i)
			}
			localStorage.setItem('result',JSON.stringify(state.result))
			
		}
	},
	getters:{
		backCount(state){
			return state.count++
		}
	}
})

//引入axios
import axios from 'axios'
Vue.prototype.HOST="/douban_api"
Vue.prototype.$axios = axios
// $axios.defaults.baseUrl=''


// //导入moment
// import moment from 'moment'
// Vue.filter('dateFormat',function(date,pattern="YYYY-MM-DD HH:mm:ss"){
// 	return moment(date).format(pattern)
// })

//导入vant
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

var vm = new Vue({
	el: '#app',
	data: {

	},
	render(c) {
		return c(app)
	},
	router,
	store
})
