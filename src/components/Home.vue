<template>
	<div>
		<b-button v-on:click="goToScan" size="lg" variant="success">
               Get your free Visibility Report
            </b-button>
	</div>
</template>
<script>
	export default {
		name: 'Home',
		methods: {
			goToScan: function(){
				this.$router.push('scan');
			}
		}
	}
</script>