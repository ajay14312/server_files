<template>
	<div class="whitebg login">
    <TopNav />
    <Navbar whitebg/>
    <div class="login-bg">
      <div class="container">
        <div class="row">
          <b-col md="4" offset-md="4">
            <div class="login-form shadow-box">
            	<h4>Forgot Password</h4>
              <b-alert v-bind:show="alertVis" variant="danger">{{errorMsg}}</b-alert>
              <b-form @submit.prevent="sendReset">
                <b-form-group id="exampleInputGroup1"
                              label="Email address:"
                              label-for="emailaddress">
                  <b-form-input id="emailaddress"
                                type="email"
                                v-model="email"
                                required>
                  </b-form-input>
                </b-form-group>
                <div v-if="success" class="msg text-success">
              		Password sent successfully
              	</div>
                <b-button type="submit" variant="primary">Submit</b-button>
              </b-form>
              
            </div>
          </b-col>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import TopNav from '@/components/TopNav'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
	export default {
		name: 'resetPassword',
		components: {
	    'TopNav': TopNav,
	    'Navbar': Navbar,
	    'Footer': Footer
	  },
	  data() {
	  	return {
	  		success: false,
	  		email: '',
	      errorMsg: '',
	  		alertVis: false
	  	}
	  },
		// computed: {
		// 	emailVal() {
		// 		return this.email;
		// 	}
		// },
		methods: {
			sendReset() {
				this.$http.post('user/forgotPassword', {
					"email": this.email
				}).then(function (response) {
					this.success = true;
					this.email = ''
        // this.isLoading = false;
        // this.imgUrl = response.data.url;
          // this.business = response.data.address[0].address;
          // this.listings = response.data.address[0].scan_address;
        });
			}
		}
	};
</script>
<style scoped>
		.login-bg {
  padding: 180px 0;
}

.login-form {
  background-color: #fff;
  padding: 26px;
  border-radius: 4px;
}

.msg {
	padding-bottom: 16px;
}
</style>