// alert('hello');
// require('./req1.js');
require('!style-loader!css-loader!../../css/index.css');

import Vue from 'vue';
import app2 from '../../tpl/useIt.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// import app1 from './routeTest';
// import dropdownlist from '../../tpl/dropdownlist.vue';

// new Vue({el:'#app1', render(h){return h(app)}});
// new Vue(app2).$mount('#app2');
// export default。。。不；      bkb/bb.k/	／															。开心开心≈≈≈／／／／／？？？？？／／／／／／／／／／／	{
// 	component:{
// 		dropdownlist
// 	}
// }

// var Vue = require('vue');
// new Vue({
// 	el:'#head1',
// 	data:{
// 		message:'hello world, vuejs!'
// 	}
// mmj

// test touter
const menu1 = {
	template: '<div>This is menu1</div>'
};
const menu2 = {
	template: '<div>This is menu2</div>'
}

const routes = [{
	path: '/menu1',
	component: menu1
}, {
	path: '/menu2',
	component: menu2
}];

const router = new VueRouter({
	routes
});
const app = new Vue({
	router
}).$mount('#app2');