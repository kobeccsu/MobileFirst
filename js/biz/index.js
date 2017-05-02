
// alert('hello');
// require('./req1.js');
require('!style-loader!css-loader!../../css/index.css');

import Vue from 'vue';
// import app from '../../tpl/useIt.vue';
// import app1 from './routeTest';
import dropdownlist from '../../tpl/dropdownlist.vue';

// new Vue({el:'#app1', render(h){return h(app)}});
new Vue(dropdownlist).$mount('#app2');
// export default{
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
// });