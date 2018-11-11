<template>
	<div v-if="!dashboard">
		<header>BUSINESS DETAILS</header>
		<p class="">{{businessName}}</p>
		<p>{{businessAddress}}</p>
		<p>{{businessCity}} {{businessState}} {{businessZipcode}}</p>
		<p>{{businessPhone}}</p>
	</div>
	<div v-else class="dash">
		<div class="title">{{businessName}}</div>
		<div class="address">
			<header>BUSINESS DETAILS</header>
			<div class="">{{businessAddress}}</div>
			<div class="">{{businessCity}} {{businessState}} {{businessZipcode}}</div>
			<div class="phone"><i class="fas fa-phone"></i>{{businessPhone}}</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'Business',
		props: {
			dashboard: {
				type: Boolean,
				default: false
			},
			businessName: {
				type: String
			},
			businessAddress: {
				type: String
			},
			businessCity: {
				type: String
			},
			businessState: {
				type: String
			},
			businessZipcode: '',
			businessPhone: ''
		}
	}
</script>
<style lang="scss" scoped>
header {
	font-size: 14px;
	font-weight: 500;
	letter-spacing: 0.25px;
	margin-bottom: 5px;
}
	p {
		margin: 0;
		line-height: normal;
		letter-spacing: 0.15px;
		font-size: 14px;
		margin-bottom: 3px;
	}

	.dash {
		.title {
			font-size: 28px;
			font-weight: 500;
		}
		.address {
			margin-top: 24px;
			font-size: 18px;
			.phone {
				background: #1ba94c;
		    border-radius: 16px;
		    color: #fff;
		    padding: 5px 17px;
		    display: inline-block;
		    vertical-align: top;
		    font-size: 16px;
		    letter-spacing: 0.8px;
		    margin-top: 14px;
			}
			i {
				margin-right: 10px;
			}
		}
	}
</style>