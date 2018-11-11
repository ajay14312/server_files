<template>
	<b-row>
		<b-col cols="12">
			<div class="header">
				<h1>{{title}}</h1>
				<p>{{subTitle}}</p>
			</div>
		</b-col>
	</b-row>
</template>
<script>
	export default {
		name: 'tabHeader',
		props: {
			title: {
				type: String,
				default: ''
			},
			subTitle: {
				type: String,
				default: ''
			}
		}
	};
</script>
<style scoped>
	.header {
		padding: 24px 0;
	}
	.header h1 {
		font-size: 34px;
		line-height: normal;
		margin: 0;
	}
	.header p {
		margin: 0;
		font-size: 18px;
	}
</style>