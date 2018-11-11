<template>
  <div class="whitebg login">
    <TopNav />
    <!-- <Navbar whitebg class="nologo"/> -->
    <div class="login-bg">
      <div class="container">
        <div class="row">
          <b-col lg="4" sm="6" offset-md="4">
            <div class="login-form shadow-box">
              <div class="logo-bg">
              <a href="" class="navbar-brand"></a>
              </div>
              <div>
                <b-alert v-bind:show="alertVis" variant="danger">{{errorMsg}}</b-alert>
                <b-form @submit="login">
                  <b-form-group class="padded-input" id="exampleInputGroup1"
                                label="Email address:"
                                label-for="emailaddress">
                    <b-form-input id="emailaddress"
                                  type="email"
                                  v-model="email"
                                  required>
                    </b-form-input>
                  </b-form-group>
                  <b-form-group class="padded-input" id="exampleInputGroup1"
                                label="Your Password:"
                                label-for="password">
                    <b-form-input id="password"
                                  type="password"
                                  v-model="password"
                                  required
                                  placeholder="********">
                    </b-form-input>
                  </b-form-group>
                  <div class="help-link padded-input">
                    <router-link to="/forgot-password">Forgot Password?</router-link>
                  </div>
                  <b-button class="fullwidth" type="submit" variant="primary success">Login to Dashboard&nbsp;&nbsp; <i class="fas fa-long-arrow-alt-right"></i></b-button>
                </b-form>
              </div>
            </div>
          </b-col>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Vue from 'vue'
import TopNav from '@/components/TopNav'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export default {
  name: 'Login',
  components: {
    'TopNav': TopNav,
    'Navbar': Navbar,
    'Footer': Footer
  },
  data() {
    return {
      email: '',
      password: '',
      errorMsg: '',
      alertVis: false
    }
  },
  computed: {
  isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    // onSubmit: function(event) {
    //   event.preventDefault();
    //   console.log(this.email);
      
    // },
    login: function (event) {
      event.preventDefault();
      let self = this;
        //passing the username and password in an object as payload to the login action
        this.$store.dispatch('login', {email: this.email, password: this.password}).then(response => { console.log("succcess") 
        }, error => {
          self.errorMsg = error;
          self.alertVis = true
        });
    },
    logout: function(){
        this.$store.dispatch('logout');
    }
  }
};
</script>
<style lang="scss" scoped>
.login-bg {
  padding: 180px 0;
}

.login-form {
  background-color: #fff;
  // padding: 26px;
  padding-top: 24px;
  border-radius: 4px;
}

.help-link {
  padding-bottom: 16px;
}

.navbar-brand {
    display: block;
    margin: auto;
    margin-bottom: 30px;
    width: 200px;
    height: 50px;
    // padding: 50px 0;
    background: url(https://s3.us-east-2.amazonaws.com/submitlocal/logo.svg) no-repeat;
}

.logo-bg {
  // background: rgba(255,255,255,1) 
}

.fullwidth {
  margin-top: 24px;
  padding: 12px 14px;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  // border-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.padded-input {
  padding: 0 16px;  
}
</style>