import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import router from './router/index.js';
Vue.prototype.$http=axios;
import Vuex from 'vuex';
Vue.use(Vuex);

let store=new Vuex.Store({
	state:{
		question:null,
		selected_question:[],
		school:{},
		show:true,
		percent:0,
	},
	mutations:{
		set_question:function(state,data){
			state.question=data
		},
		set_selected_question:function(state,type){

			let arr=[];
			let {question}=state;

			function getFore(arr){
	            let brr=[];
	            for(let i=0;i<4;i++){
	              let tmp=random(0,arr.length);
	              if(brr.indexOf(tmp)==-1){
	                brr.push(tmp)
	              }else{
	                i--;
	              }
	            }
	           // console.log(brr)
	            return [arr[brr[0]],arr[brr[1]],arr[brr[2]],arr[brr[3]]]
	        }
	        function random(min,max){
	            return Math.floor(Math.random()*(max-min))
	        }

			if(type=='liberal'){				
				Object.values(question).forEach((val,idx)=>{
					if(val.type!==1){
						arr.push(val)
					}
				})

			}
			if(type=='science'){
				Object.values(question).forEach((val,idx)=>{
					if(val.type==1 || val.type==2){
						arr.push(val)
					}
				})
				//return arr;
			}
			//console.log(getFore(arr))
			state.selected_question = getFore(arr);
		},
		set_school(state,data){//这里！！！！
			let school_list = Object.values(data);
	        let num = Math.floor(Math.random()*school_list.length);
	        state.school = school_list[num];
		}
	},
	actions:{
		get_question:function({commit},data){
			commit('set_question',data)
		},
		get_school({commit},data){
	        commit('set_school',data)
	    }
	}
})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  mounted:function(){
  	this.$http.get('./src/service/question.json').then((res)=>{
  		//console.log(res.data)
  		this.$store.dispatch('get_question',res.data)
  	})
  },
  watch:{
    '$route':function(n,o){
        if(n.path == '/result'){
            this.$store.state.percent=0;
            
            let timer = setInterval(()=>{
                this.$store.state.percent++;
                if(this.$store.state.percent >= 100){
                    clearInterval(timer);
                    this.$store.state.show = false; 
                }
            },20)
        }
    }
  }
})
