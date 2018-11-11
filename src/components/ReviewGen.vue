<template>
	<div>
		<AdminNav />
    <Sidebar />
    <div class="main-content">
    	<div class="container-fluid">
    	<b-form>
	      <b-form-group label="Email address:"
	                    label-for="emailIds"
	                    description="We'll never share your email with anyone else.">
	        <b-form-input id="emailIds"
	                      type="text"
	                      v-model="emailIds"
	                      required
	                      placeholder="Enter email">
	        </b-form-input>
	      </b-form-group>
	      <b-form-group label="Enter Email Body"
	                    label-for="emailBody"
	                    description="It accepts HTML.">
	        <!-- <b-form-textarea id="emailBody"
	                      rows="10"
	                      :v-model="links"
	                      required
	                      placeholder="Enter email">
	        </b-form-textarea> -->
	        <div contenteditable="" class="emailBody" name="emailBody" id="emailBody" cols="30" rows="10">
	        	Hello ,
	        		Please leave a review on these sites
	        	<ul>
	        	 	<li v-for="link in links"><a v-bind:href="link">{{link}}</a></li>
	        	</ul>
	        	<div>
	        		Regards,<br>
	        		Site Owner
	        	</div>
	        </div>
	      </b-form-group>
	      <div class="reviewLink form-group" v-for="(reviewLink, index) in reviewLinks" :key="index">
	      	<b-form-checkbox @click.native="addtoEmailBody" :id="index + 'a' ">
			      {{reviewLink}}
			    </b-form-checkbox>
	      </div>
	      <b-button @click="sendEmail">Send Emails</b-button>
	    </b-form>
    </div>
    </div>
	</div>
</template>
<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
import Sidebar from '@/components/Sidebar'
import AdminNav from '@/components/AdminNav'
Vue.use(VueResource);
	export default {
		name: 'ReviewGen',
		data() {
			return {
				links: [],
				emailIds: "",
				emailBody: "",
				reviewLinks: "",
				listings: "",
				respns: ""
			}
		},
		components: {
			'AdminNav': AdminNav,
			'Sidebar': Sidebar
		},
		// mounted: function () {
		// 	let self = this;
		// 	this.$http.get('user/dashboard').then(function (response) {
  // 			self.listings = response.data.address[0].scan_address;
  // 			self.reviewLinks = self.genReviews(self.listings);
  // 			// console.log(this.reviewLinks)
	 //    });
		// },
		methods: {
			getlinks: function () {
				console.log(this.links)
			},
			addtoEmailBody: function (e) {
				// console.log(e);
				if (e.currentTarget.childNodes[0].checked == true) {
					this.links.push(e.currentTarget.childNodes[1].textContent.trim()); 
				} else {
					this.links = this.links.filter(j => j !== e.currentTarget.childNodes[1].textContent.trim());
				}
				console.log(this.links);
				// if (yourArray.indexOf(e.currentTarget.childNodes[1].textContent.trim()) > -1) {
				//     this.links = this.links.filter(j => j !== e.currentTarget.childNodes[1].textContent.trim());
				// } else {
				//  	this.links.push(e.currentTarget.childNodes[1].textContent.trim());   
				// }
			},
			sendEmail: function () {
				this.$http.post('user/custEmail',{
					"email": this.emailIds.split(","),
					"body": document.getElementById('emailBody').innerHTML
				}).then(function (response) {
	        console.log(response.data)
	      },function (response) {
	        console.log(response)
	      });
			},
			genReviews: function (listings) {
				return listings.map(x => x.url)
			}
		}
	}
</script>
<style lang="scss" scoped>
form {
	    padding: 16px;
    background: #f5f5f5;
}
	.reviewLink {
		input[type="checkbox"] {
			margin-right: 5px;
		}
	}
	.emailBody {
		background: #fff;
		border: 1px solid #ced4da;
		border-radius: .25rem;
		    padding: .375rem .75rem;
		    -webkit-transition: border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
    transition: border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
		ul {
			li {
				font-size: 12px;
			}
		}
	}
</style>