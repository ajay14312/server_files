<template>
<div>
    <Navbar whitebg />
    <!--   <section class='hero'>
    <div class='container'>
      <div class='hero-wrapper'>
        <div class='row d-flex'>
          <div class='col-12 text-center'>
            <h1 class='hero-title text-center'>We would love to hear from you</h1>
          </div>
        </div>
      </div>
    </div>
  </section> -->
    <div class='top-submitlocal'>
        <div class='container'>
            <h1>When are we talking?</h1>
            <p>Call us on +1(855) 909-8909</p>
        </div>
    </div>
    <section class='text-center'>
        <!-- <div class='container abt-cont'>
      <div class='row d-flex'>
        <div class='col-12'>
          <h2 class='txt-green'>What we do</h2>
          <p> We founded Submit Local in early 2015 after being unsatisfied with resolutions in local marketing. Our early objective was to create software that could solve problems we were facing ourselves.</p>
          <p>Our software tracks hundreds of thousands of business profiles & monitors millions of interactions to provide businesses with automated marketing as well as insights that they would otherwise not get.</p>
        </div>
      </div>
    </div>
    <div class='light-gray-bg abt-cont'>
      <div class='container'>
        <div class='row d-flex'>
          <div class='col-12'>
            <h2 class='txt-red'>Our Culture</h2>
            <p>We create products that businesses love. This has come about through a culture bred by the smart and fun people at Submit Local that think outside the box.</p>
            <p>Everyone at Submit Local is encouraged to focus on ideas and projects that have mass impact and adoption. We offer a fun, chilled-out work atmosphere where anything goes as long as you are getting stuff done.</p>
          </div>
        </div>
      </div>
    </div>
    <div class='container abt-cont'>
      <div class='row d-flex'>
        <div class='col-12'>
          <h2 class='txt-blue'>We are hiring!</h2>
          <p>
            Submit Local is looking out for smart, driven people to join us in building great products.
          </p>
          <p>Hit us on at <a href='mailto:careers@submitlocal.com'>careers@submitlocal.com</a></p>
        </div>
      </div>
    </div> -->
        <div class='container text-left contact-page'>
            <div class='row'>
                <div class='contact-container col-md-8'>
                    <div class='contact-form'>
                        <div class='spinner-bg' v-if='showSpinner'>
                            <div class='spinner-bg-wrap'>
                                <Spinner></Spinner>
                                <div>Loading...</div>
                            </div>
                        </div>
                        <div class='contact-header'>
                            <h2 class=''>
                                Get in Touch
                            </h2>
                            <p>
                                Please fill out the quick form and we will be in touch with lightening speed.
                            </p>
                        </div>
                        <form id='contactForm' method='POST' v-on:submit.prevent='sendContact'>
                            <div class='row'>
                                <div class='col-md-6'>
                                    <div class='form-group'>
                                        <label for=''>First Name</label>
                                        <input v-validate='{ required: true, min: 3 }' v-model='firstname' type='text' name='firstname' class='form-control'>
                                        <span class='error-msg text-danger' v-show='errors.has('firstname')'>{{ errors.first('firstname') }}</span>
                                    </div>
                                </div>
                                <div class='col-md-6'>
                                    <div class='form-group'>
                                        <label for=''>Last Name</label>
                                        <input v-validate='{ required: true, min: 3 }' v-model='lastname' type='text' name='lastname' class='form-control'>
                                        <span class='error-msg text-danger' v-show='errors.has('lastname')'>{{ errors.first('lastname') }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class='row'>
                                <div class='col-md-12'>
                                    <div class='form-group'>
                                        <label for=''>Phone Number</label>
                                        <input v-validate='{ required: true, min: 10, regex: /^\d{10}$/ }' v-model='phoneNo' type='number' name='phoneNo' class='form-control'>
                                        <span class='error-msg text-danger' v-show='errors.has('phoneNo')'>{{ errors.first('phoneNo') }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class='row'>
                                <div class='col-md-12'>
                                    <div class='form-group'>
                                        <label for='email'>Email</label>
                                        <input v-validate='{ required: true, email: true }' v-model='email' type='email' class='form-control' id='email' name='email'>
                                        <span class='error-msg text-danger' v-show='errors.has('email')'>{{ errors.first('email') }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class='row'>
                                <div class='col-md-6'>
                                    <div class='form-group'>
                                        <label for='country'>Country</label>
                                        <select v-validate='{ required: true }' v-model='country' class='form-control' name='country' id='country'>
                  <option value='americas' selected>USA</option>
                  <option value='canada'>CANADA</option>
                  <option value='Australia'>AUSTRALIA</option>
                </select>
                                        <span class='error-msg text-danger' v-show='errors.has('country')'>{{ errors.first('country') }}</span>
                                    </div>
                                </div>
                                <div class='col-md-6'>
                                    <div class='form-group'>
                                        <label for='requesttype'>Request for</label>
                                        <select data-vv-as='Request Type' v-validate='{ required: true }' v-model='requesttype' class='form-control' name='requesttype' id='requesttype'>
                  <option value='sales' selected>Sales</option>
                  <option value='tech'>Tech Support</option>
                </select>
                                        <span class='error-msg text-danger' v-show='errors.has('requesttype')'>{{ errors.first('requesttype') }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class='form'>
                                <div class='row'>
                                    <div class='col-md-12'>
                                        <div class='form-group'>
                                            <label for='message'>Your Message</label>
                                            <textarea v-validate='{ required: true }' v-model='message' id='message' name='message' class='form-control' cols='30' rows='5'></textarea>
                                            <span class='error-msg text-danger' v-show='errors.has('message')'>{{ errors.first('message') }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type='submit' class='btn btn-primary'>Submit</button>
                            <div class='success-msg' v-if='success'>
                                <div class='success-msg-wrap'>
                                    <div class='success-img'>
                                        <img src='../assets/img/verified.svg'>
              </div>
                                        Message Sent Successfully.<br> We will get back to you shortly.
            </div>
                                    </div>
                        </form>
                    </div>
                </div>
                <div class='col-md-4 map'>
                    <div class='map_box'>
                        <div style='width: 100%'><iframe width='100%' height='145px' src='https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=1013%20Center%20Rd%2C%20Suite%20403S%20Wilmington%2C%20DE%2019805+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed' frameborder='0' scrolling='no' marginheight='0' marginwidth='0'><a href='https://www.maps.ie/create-google-map/'>Add map to website</a></iframe></div><br />
                        <div class='white_box'>
                            <div class='row'>
                                <div class='col-md-3 norightpadding'> <img alt='Acqiure usa' src='https://s3.us-east-2.amazonaws.com/submitlocal/delaware.svg' height='76px'></div>
                                    <div class='col-md-8'>
                                        <p class='head'>Wilmington, DE</p>
                                        <p>1013 Center Rd, Suite 403S Wilmington, DE 19805</p>
                                    </div>
                                </div>
                                <div class='clearfix'></div>
                                <div class='map_bottom'>
                                    <div class='row'>
                                        <div class='col-md-12 mlB'> <span class='email'>help@submitlocal.com</span></div>
                                        <div class='col-md-12'>
                                            <div class=''>
                                                <div class='ph'>+1(855) 909-8909</div>
                                            </div>
                                        </div>
                                        <div class='clearfix'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    <section class='getit'>
        <div class='container'>
            <div class='row d-flex'>
                <div class='col-sm-2'>
                    <img src='https://s3.us-east-2.amazonaws.com/submitlocal/rocket-launch.svg' alt=''>
          </div>
                    <div class='col-sm-8'>
                        <h2>Get your submitlocal dashboard now</h2>
                        <p>Managing your local marketing made simple with submitlocal dashboard</p>
                    </div>
                    <div class='col-sm-2'>
                        <router-link to='/scan' class='btn btn-primary' href=''>Get Started now</router-link>
                    </div>
                </div>
            </div>
    </section>
    <Footer colorBg />
</div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import Spinner from '@/components/Spinner';
import VeeValidate from 'vee-validate';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PhoneNumber from 'awesome-phonenumber';
Vue.use(VeeValidate, {
  events: '',
  enableAutoClasses: true
});
export default {
  name: 'Contact',
  data() {
    return {
      success: false,
      showSpinner: true,
      firstname: '',
      lastname: '',
      email: '',
      phoneNo: '',
      company: '',
      country: '',
      // businesstype: '',
      requesttype: '',
      message: ''
    };
  },
  components: {
    // 'Listing': Listing,
    // 'TopNav': TopNav,
    Navbar: Navbar,
    Footer: Footer,
    Spinner: Spinner
  },
  mounted: function () {
    this.showSpinner = false;
  },
  methods: {
    sendContact: function (e) {
      this.showSpinner = true;
      let self = this;
      this.$validator.validate().then(result => {
        if (!result) {
          // do stuff if not valid.
          // setTimeout(()=>{
          this.showSpinner = false;
          // }, 1000)
        } else {
          self.$http
            .post('contact', {
              firstname: self.firstname,
              lastname: self.lastname,
              email: self.email,
              phoneNo: self.phoneNo,
              country: self.country,
              // businesstype: this.businesstype,
              requesttype: self.requesttype,
              message: self.message
            })
            .then(function(response) {
              setTimeout(() => {
                this.showSpinner = false;
                this.success = true;
              }, 500);
              console.log(response);
            })
            .catch(function(error) {
              console.log(error);
            });
        }
      });
    }
  }
};
</script>

<style scoped>
.contact {
  background: #f2f5f8 !important;
}

.contact-page {
  margin: 40px auto;
  margin-top: 53px;
  margin-bottom: 100px;
}

.hero {
  margin-top: 30px;
}

.hero .hero-wrapper .hero-title {
  width: 100% !important;
}

.hero .hero-wrapper {
  padding: 60px 0 !important;
  background: none !important;
}

.hero-title {
  margin-bottom: 0 !important;
}

.contact-header {
  padding: 30px 0;
}

.contact-form {
  position: relative;
  padding: 3px 68px 30px 68px;
  background: #fff;
  border: 1px solid #ddddeb;
  border-radius: 4px;
  -webkit-box-shadow: 1px 0 32px 6px #e3e3e3;
  -moz-box-shadow: 1px 0 32px 6px #e3e3e3;
  box-shadow: 1px 0 32px 6px #e3e3e3;
}

.contact-container {
  /*width: 830px;*/
  /*max-width: 100%;*/
  /*margin-top: 53px;*/
  /*margin-bottom: 30px;*/
}

.map {
  /*margin-top: 53px;*/
  /*margin-bottom: 30px;*/
  border-radius: 4px;
}

.map .map_box {
  border-radius: 4px;
  overflow: hidden;
  -webkit-box-shadow: 1px 0 32px 6px #e3e3e3;
  -moz-box-shadow: 1px 0 32px 6px #e3e3e3;
  box-shadow: 1px 0 32px 6px #e3e3e3;
}

@media screen and (max-width: 768px) {
  .top-submitlocal {
    padding: 20px;
  }

  .map .map_box {
    margin-top: 40px;
  }

  .contact-form {
    padding: 0 20px;
  }

  .map .white_box .norightpadding {
    padding-bottom: 20px;
  }
}

.map .white_box {
  background: #fff;
  display: inline-block;
  width: 100%;
  padding: 21px 15px;
  margin-top: -6px;
}

.map .white_box p.head {
  font-weight: 700;
  font-size: 18px;
  color: #323c47;
  line-height: 14.04px;
  margin-top: 0;
}

.map .white_box p {
  font-size: 16px;
  color: #8197b1;
  line-height: 22px;
}

.map .white_box .map_bottom {
  margin-top: 19px;
}

.map .white_box .map_bottom .email {
  font-size: 14px;
  color: #8197b1;
  letter-spacing: 0;
  line-height: 13px;
  background: url(https://s3.us-east-2.amazonaws.com/submitlocal/email.svg);
  background-position: left center;
  background-repeat: no-repeat;
  padding-left: 25px;
}

.map .white_box .map_bottom .ph {
  background: url(https://s3.us-east-2.amazonaws.com/submitlocal/phone.svg);
  background-position: left center;
  background-repeat: no-repeat;
  padding-left: 25px;
  font-size: 14px;
  color: #8197b1;
  letter-spacing: 0;
  line-height: 18px;
  min-height: 20px;
}

.mlB {
  margin-bottom: 20px;
}

footer {
  background: linear-gradient(87deg, #2d008e, #006cff) !important;
}

.spinner-bg {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background: rgba(255, 255, 255, 0.8);
  z-index: 1;
  /*height: 100px;*/
}

.spinner-bg-wrap {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100px;
  text-align: center;
  margin: auto;
}

.success-msg {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background: rgba(255, 255, 255, 0.8);
  z-index: 1;
}

.success-msg-wrap {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100px;
  text-align: center;
  margin: auto;
}

.success-img {
  text-align: center;
  margin-bottom: 8px;
}

.success-img img {
  width: 36px;
  height: 36px;
}
</style>
