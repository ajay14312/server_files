<template>
		<div>
			<loading :active.sync="isLoading" :is-full-page="true" :can-cancel="false"></loading>
			<AdminNav/>
	    <Sidebar />
	    <b-card no-body class="h-100">
	    	<b-tabs pills card vertical nav-wrapper-class="w-20 no-bg">
			  <template v-for="(obj,index) in reviews">
			  	<b-tab :title="index" active>
			   		<div class="review" v-for="review in obj">
			   			<div class="title-wrapper">
			   				<div class="clearfix">
			   					<div class="r-user">{{index}} User</div>
			   					<div class="stars pull-right">
					   				<span v-for="n in review.rating">
					   					<i class="fas fa-star"></i>
					   				</span>
					   			</div>
			   				</div>
			   				<div class="title">
				   				{{review.text}}
				   			</div>
			   			</div>
			   			<div class="date">
			   				<a :href="review.url">{{review.date}}</a>
			   			</div>
			   		</div>
			  	</b-tab>
			  </template>
			  <!-- <b-tab title="second" >
			    <br>I'm the second tab content
			  </b-tab>
			  <b-tab title="disabled" disabled>
			    <br>Disabled tab!
			  </b-tab> -->
			</b-tabs>
	    </b-card>
	    <b-alert v-if="failed" show variant="warning">
	    	<div v-if="!sampleMsg">
	    		Oops! Sorry, seems like Google, Yelp and Foursquare API limit is exceeeded. But you can load sample data to check your reviews look.
	    	<div><a href="#" @click.prevent="loadSampleData()">Load Sample Reviews</a></div>
	    	</div>
	    	<div v-if="sampleMsg">This is Sample Reviews. Please refresh to get real time reviews.</div>
	    </b-alert>
		</div>
</template>
<script>
import Vue from 'vue'
import Vuex from 'vuex'
import AdminNav from '@/components/AdminNav'
import Sidebar from '@/components/Sidebar'
import Loading from 'vue-loading-overlay';
	export default {
		name: "Reviews",
		data() {
			return {
				'isLoading': false,
				'reviews': {},
				sampleMsg: false,
				failed: false,
				sampleReviews: {
        		"google": [
	            {
			                "text": "Bought about a dozen cupcakes to share with coworkers. You pay for each cupcake separately. No deals on half- or full-dozen. Very underwhelmed and coworkers shared similar feelings. The cupcake bottom was not very moist and crumbled apart. The frosting didn't stick to one that I ate which was rather frustrating as you kind of expect the cupcake to stay together. Only not 1 star because the woman who worked there was very nice.",
			                "date": "9 months ago",
			                "url": "https://www.google.com/maps/contrib/111043721922908201717/reviews",
			                "rating": 2
			            },
			            {
			                "text": "I got the birthday cupcake was delicious .I plan to go back this week for the caramel brownie cookie dough pudding !",
			                "date": "10 months ago",
			                "url": "https://www.google.com/maps/contrib/108307267787420504716/reviews",
			                "rating": 5
			            }
			        ],
			        "fourSquare": [
			            {
			                "text": "Feeling the bae craze? Try ube cupcakes here! Also, the magic bar is great if your a coconut fan.",
			                "date": 1466737881,
			                "url": "https://foursquare.com/item/576ca4d9498e87887db39368"
			            }
			        ],
			        "yelp": [
			            {
			                "text": "We stopped by this shop amongst our travels in NYC and was glad we made it by! Overall the variety of items were great and the quality of the treats were...",
			                "date": "2018-04-22 15:51:55",
			                "url": "https://www.yelp.com/biz/buttercup-bake-shop-new-york-8?hrid=9ucJIjkggs1GX8K9JNs-Yw&adjust_creative=vbd2kT-Z-nLkQSzGzSyVsg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=vbd2kT-Z-nLkQSzGzSyVsg",
			                "rating": 4
			            },
			            {
			                "text": "This was my first time at the Madison location. Years ago I frequented the 2nd avenue location and always thought the cupcakes were delicious. \n\nTonight i...",
			                "date": "2018-09-04 18:14:42",
			                "url": "https://www.yelp.com/biz/buttercup-bake-shop-new-york-8?hrid=liVyGdHC8VqzzGhc4__8UQ&adjust_creative=vbd2kT-Z-nLkQSzGzSyVsg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=vbd2kT-Z-nLkQSzGzSyVsg",
			                "rating": 2
			            }
			        ]
			    }
			}
		},
		components: {
			'AdminNav': AdminNav,
	    'Sidebar': Sidebar,
	    'Loading': Loading
		},
		computed: {
			currentLocation() {
	      return this.$store.getters.getCurrentLocation;
	    },
	    getRating(val) {
	    	return val;
	    }
		},
		mounted() {
			this.isLoading = true;
			this.$http.get('reviews/'+this.currentLocation._id).then((response) => {
				this.isLoading = false;
     		console.log(response.data.result);
        this.reviews = response.data.result;
      }).catch(function (error) {
        this.isLoading = false;
        this.failed = true;
        
      });
		},
		methods: {
			loadSampleData() {
				this.reviews = this.sampleReviews;
				this.sampleMsg = true;
			},
			getName(index) {
				console.log(index);
				return this.review_sites[index];
			}
		}
	}
</script>
<style>
	.no-bg ul {
		background: #fff;
	}

	.review {
		border-bottom: 1px solid #E0E0E0;
		padding: 16px 0;
	}

	.review .title {
    padding: 8px 16px 0 16px;
    line-height: 1.77;
	}

	.review .title-wrapper {
		position: relative;
	}

	.review .stars {
		position: absolute;
		right: 0;
		top: 0;
	}

	.review .date {
		font-size: 12px;
		padding: 0 16px 0 16px;
		margin: 4px 0;
	}

	.r-user {
		font-weight: 500;
		padding: 0 16px 0 16px;
	}
</style>