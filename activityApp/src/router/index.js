import Vue from 'vue';
import VueRouter from 'vue-router';
import question from '../views/q2/index.vue';
import result from '../views/result/index.vue';
/*import q2 from '../views/q2/index.vue';*/
import home from '../views/home/index.vue';

Vue.use(VueRouter);

let routes=[
	{
		path:"/",
		redirect:'/home'
	},
	{
		name:'home',
		path:"/home",
		component:home
	},
	{
		name:'question',
		path:'/question/:step',
		component:question
	},
	{
		name:'result',
		path:'/result',
		component:result
	}
]

let router=new VueRouter({
	routes
})
router.beforeEach(function(to,from,next){
	//console.log(to)
	next()
})
export default router;
