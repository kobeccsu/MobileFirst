<template>
	<div class="dropdown-main">
		<div class="show-text-wrap" ref="showText" @click="showDown()">显示默认值</div>
		<div class="popdown" ref="downWrap" style="display:none;">
			<ul>
				<li data-selval="1" @click="itemClick()">1</li>
				<li data-selval="2" @click="itemClick()">2</li>
				<li data-selval="3" @click="itemClick()">3</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {myword: 'nothing'};
		},
		methods: {
			itemClick(e){
				console.log(this.$refs.showText);
				this.$refs.showText.innerHTML = event.target.getAttribute('data-selval');
			},
			showDown(e){
				console.log(this.$refs.downWrap);
				this.$refs.downWrap.style.display = 'block';
			}
		}
	};
</script>

<style scoped>
	.dropdown-main{
		background: #e4e4e4;
		cursor: pointer;
	}
	.popdown{
		position: absolute;
	}

</style>