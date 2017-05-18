<template>
	<div>
		<p>{{ greeting }} world</p>
		<dropdownlist></dropdownlist>
	</div>
</template>

<script>
	import dropdownlist from './dropdownlist.vue';

	export default {
		data(){
			return {
				greeting : 'hello'
			}
		},
		components:{
			dropdownlist : dropdownlist
		}
	}
</script>

<style scoped>
	p{
		font-size: 2em;
		text-align: center;
	}
</style>