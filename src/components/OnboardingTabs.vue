<template>
	<div>
			<ul>
				<li>
					<router-link :class="{'active':businessActive}" to="/onboarding/business">Business Information</router-link>
				</li>
				<li>
					<router-link to="/onboarding/operations">Operations Information</router-link>
				</li>
				<li>
					<router-link to="/onboarding/media">Media Information</router-link>
				</li>
			</ul>
		</div>
</template>
<script>
	export default {
		name: 'OnboardingTabs',
		props: {
			businessActive: {
				type: Boolean,
				default: false
			},
			opsActive: {
				type: Boolean,
				default: false
			},
			mediaActive: {
				type: Boolean,
				default: false
			},
		}
	};
</script>
<style scoped>
	
</style>