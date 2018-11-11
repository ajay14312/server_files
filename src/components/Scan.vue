<template>
  <div class="homepage">
        <!-- <TopNav/> -->
        <Navbar/>
        <section class="hero">
            <div class="container">
                <div class="hero-wrapper">
                    <div class="row">
                        <div class="col-12">
                        <!-- <a class="btn btn-primary" href="">Check your Business Listing</a> -->
                          <div>
                            <h1 class="hero-title">Spark up your business <br>with a comprehensive package for your local marketing needs<span>List your business on Google, Facebook, Yelp and 60+ directories</span></h1>
                          <h5 class="intro-text">Check your online presence</h5>
                            <b-form @submit="onEmailSubmit" class="email-form" inline>
                              <label class="sr-only" for="inlineFormInputName2">Email Address</label>
                              <b-input v-model="emailID" size="lg" class="mb-2 mr-sm-2 mb-sm-0" id="inlineFormInputName2" placeholder="Enter Business Email" />
                              <b-button type="submit" size="lg" variant="primary">FREE SCAN</b-button>
                            </b-form>
                            <!-- <p class="helptext">Scanning is fast, free and easy</p> -->
                          </div>
                        </div>
                        <div class="graphic">
                          <img src="https://s3.us-east-2.amazonaws.com/submitlocal/art2.svg" alt="">
                        </div>
                    </div>

                </div>
                <div class="container show-off shadow-box">
                  <div class="row d-flex">
                    <div class="col-12">
                      <div class="tagline">
                      One platform scaled to fit for all type of business
                    </div>
                    </div>
                  </div>
                  <div class="row d-flex">
                    <div class="col-12 col-md-4 hero-f hero-f1">
                        <div class="hero-icon">
                            <img src="https://s3.us-east-2.amazonaws.com/submitlocal/single.svg" alt="">
                        </div>
                        <h2>Single Location Business</h2>
                        <p>
                            Grow your online presence to leverage local competition
                        </p>
                    </div>
                    <div class="col-12 col-md-4 hero-f hero-f2">
                        <div class="hero-icon">
                            <img src="https://s3.us-east-2.amazonaws.com/submitlocal/multi-loc.svg" alt="">
                        </div>
                        <h2>Multi Location Business</h2>
                        <p>
                            Manage multiple locations under one dashboard 
                        </p>
                    </div>
                    <div class="col-12 col-md-4 hero-f hero-f3">
                        <div class="hero-icon">
                            <img src="https://s3.us-east-2.amazonaws.com/submitlocal/agency.svg" alt="">
                        </div>
                        <h2>Marketing Agency</h2>
                        <p>
                            We have the right set of tools to uplift your agency portfolio
                        </p>
                    </div>
                  </div>
                </div>
            </div>
        </section>
        <section class="works">
            <div class="container">
              <div class="works-wrapper row d-flex">
                  <div class="col-12 order-md-1 order-sm-2 col-md-6">
                      <h2>How it works?</h2>
                      <p>Help Drive Revenue online and offline.</p>
                      <ul>
                          <li><img src="https://s3.us-east-2.amazonaws.com/submitlocal/orange-tick.svg" alt=""> We support you to increase your revenue business model</li>
                          <li><img src="https://s3.us-east-2.amazonaws.com/submitlocal/orange-tick.svg" alt=""> Premium listing on major traffic sitesg</li>
                          <li><img src="https://s3.us-east-2.amazonaws.com/submitlocal/orange-tick.svg" alt=""> Monitoring your review & ranking updates</li>
                          <li><img src="https://s3.us-east-2.amazonaws.com/submitlocal/orange-tick.svg" alt=""> Generate organic reviews</li>
                          <li><img src="https://s3.us-east-2.amazonaws.com/submitlocal/orange-tick.svg" alt=""> Insightful analytical dashboard</li>
                          <li><img src="https://s3.us-east-2.amazonaws.com/submitlocal/orange-tick.svg" alt=""> Automated monthly reports</li>
                      </ul>
                      <div>
                          <router-link to="/scan" class="btn btn-primary" href="">Get started now</router-link>
                      </div>
                  </div>
                  <div class="col-12 order-md-2 order-sm-1 col-md-6 text-center">
                      <img class="business-img" src="https://s3.us-east-2.amazonaws.com/submitlocal/business1.png" alt="">
                  </div>
              </div>
            </div>
        </section>
        <section class="works features-home">
            <div class="container">
              <div class="works-wrapper row d-flex">
                  <div class="col-12 order-sm-1 col-md-6 text-center">
                      <img class="business-img" src="https://s3.us-east-2.amazonaws.com/submitlocal/dashboard_art.svg" alt="">
                  </div>
                  <div class="col-12 order-sm-2 col-md-6">
                      <h2>Comprehensive Local Marketing Application</h2>
                      <p>Make Local Search Fast, Accurate and Easy to Manage</p>
                      <ul>
                          <li><img src="https://s3.us-east-2.amazonaws.com/submitlocal/orange-tick.svg" alt=""> Location Management</li>
                          <li><img src="https://s3.us-east-2.amazonaws.com/submitlocal/orange-tick.svg" alt=""> Improve Star Ratings</li>
                          <li><img src="https://s3.us-east-2.amazonaws.com/submitlocal/orange-tick.svg" alt=""> Monitor Interactions</li>
                          <li><img src="https://s3.us-east-2.amazonaws.com/submitlocal/orange-tick.svg" alt=""> Instant-sync</li>
                          <li><img src="https://s3.us-east-2.amazonaws.com/submitlocal/orange-tick.svg" alt=""> Analytics</li>
                      </ul>
                  </div>
              </div>
            </div>
        </section>
        <section class="getit">
          <div class="container">
            <div class="row d-flex">
              <div class="col-md-2">
                <img src="https://s3.us-east-2.amazonaws.com/submitlocal/rocket-launch.svg" alt="">
              </div>
              <div class="col-md-8">
                <h2>Get your submitlocal dashboard now</h2>
                <p>Managing your local marketing made simple with submitlocal dashboard</p>
              </div>
              <div class="col-md-2">
                <router-link to="/scan" class="btn btn-primary" href="">Get Started now</router-link>
              </div>
            </div>
          </div>
        </section>
        <!-- <section class="video-demo">
            <div class="container">
                <div class="row d-flex">
                    <div class="col-12 text-center">
                        <h2>List management via dashboard</h2>
                        <p>Update information with just one-click on your dashboard and our team will make sure it is updated.</p>
                        <div class="video">
                            <img src="../assets/img/video-scr.jpg" alt="">
                        </div>
                        <h4>Try it for free. No credit card required.</h4>
                    </div>
                </div>
            </div>
        </section> -->
        <Footer/>
  </div>
</template>
<script>
// var Vue = require('vue');
import Vue from 'vue'
import axios from 'axios'
import VueResource from 'vue-resource'
import qs from 'qs'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
Vue.use(VueResource);
import Vuex from 'vuex'
Vue.use(Vuex)
export default {
  name: 'Scan',
  components: {
    // 'Listing': Listing,
    // 'TopNav': TopNav,
    'Navbar': Navbar,
    'Footer': Footer
  },
  metaInfo: {
    title: 'Local Business Listings & Citation Services | Free Tools | SubmitLocal',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'title', content: 'Local Business Listings & Citation Services | Free Tools | SubmitLocal'
      },
      { name: 'description', content: 'Free Local Business Listings Scan Tool from SubmitLocal help your local business to check all your local listings and analytics at one place. SubmitLocal list your business in 100+ online business directories including Google, Yelp, Bing, Yahoo etc., Run a FREE Scan Now.' }
    ]
  },
  // metaInfo() {
  //   return {
  //     title: this.post && this.post.title,
  //   };
  // },
  computed: {
    isLoggedIn() {
        return this.$store.getters.isLoggedIn;
      }
    },
  data () {
    return {
      emailID: '',
      listingid: '',
      user_name: '',
      user_phone: '',
      user_mail: '',
      loc_num: '',
      business_name: '',
      business_address: '',
      business_phone: '',
      city: '',
      state: 'null',
      zipcode: '',
      loc_nums: {
        null : 'Please select an option',
        '1-5': '1-5',
        '6-50': '6-50',
        '50+': '50+'
      },
      businessId: '',
      states: {
        'null': 'Select State',
        'AL': 'Alabama',
        'AK': 'Alaska',
        'AS': 'American Samoa',
        'AZ': 'Arizona',
        'AR': 'Arkansas',
        'CA': 'California',
        'CO': 'Colorado',
        'CT': 'Connecticut',
        'DE': 'Delaware',
        'DC': 'District Of Columbia',
        'FM': 'Federated States Of Micronesia',
        'FL': 'Florida',
        'GA': 'Georgia',
        'GU': 'Guam',
        'HI': 'Hawaii',
        'ID': 'Idaho',
        'IL': 'Illinois',
        'IN': 'Indiana',
        'IA': 'Iowa',
        'KS': 'Kansas',
        'KY': 'Kentucky',
        'LA': 'Louisiana',
        'ME': 'Maine',
        'MH': 'Marshall Islands',
        'MD': 'Maryland',
        'MA': 'Massachusetts',
        'MI': 'Michigan',
        'MN': 'Minnesota',
        'MS': 'Mississippi',
        'MO': 'Missouri',
        'MT': 'Montana',
        'NE': 'Nebraska',
        'NV': 'Nevada',
        'NH': 'New Hampshire',
        'NJ': 'New Jersey',
        'NM': 'New Mexico',
        'NY': 'New York',
        'NC': 'North Carolina',
        'ND': 'North Dakota',
        'MP': 'Northern Mariana Islands',
        'OH': 'Ohio',
        'OK': 'Oklahoma',
        'OR': 'Oregon',
        'PW': 'Palau',
        'PA': 'Pennsylvania',
        'PR': 'Puerto Rico',
        'RI': 'Rhode Island',
        'SC': 'South Carolina',
        'SD': 'South Dakota',
        'TN': 'Tennessee',
        'TX': 'Texas',
        'UT': 'Utah',
        'VT': 'Vermont',
        'VI': 'Virgin Islands',
        'VA': 'Virginia',
        'WA': 'Washington',
        'WV': 'West Virginia',
        'WI': 'Wisconsin',
        'WY': 'Wyoming'
      },
      msg: 'Lookup Found',
      listings: []
    }
  },
  methods: {
    onEmailSubmit: function (event) {
      event.preventDefault()
      console.log(this.emailID);
      // this.$router.push({name:'ScanTool'});
      this.$router.push({name: 'ScanTool', params: {email:this.emailID }});
    },
    onSubmit: function (event) {
      // alert(this.fname);
      event.preventDefault()
      this.$http.post('address', {
        "businessName": this.business_name,
        "businessPhone": this.business_phone,
        "businessAddess": this.business_address,
        "city": this.city,
        "state": this.state,
        "zipCode": this.zipcode
      }).then(function (response) {
          this.businessId = response.data._id;
          this.$refs.myModalRef.show()
      });
    },
    hideModal () {
      this.$refs.myModalRef.hide()
    },
    onUserSubmit (event) {
      event.preventDefault()
      this.$http.post('user', {
        "name": this.user_name,
        "phoneNo": this.user_phone,
        "email": this.user_mail,
        "address": this.businessId
      }).then(function (response) {
        this.$refs.myModalRef.hide()
        this.$router.push({name: 'Listing', params: {id:this.businessId }});
      });
    }
  }
};
</script>
<style lang="scss">
  form.email-form {
    background: #fff;
    width: 470px;
    padding: 10px;
    border-radius: 4px;
    margin: 0 !important;
    input {
      border: none;
    }
    button {
      text-transform: uppercase;
      font-size: 14px;
      letter-spacing: 2px;
    }
  }
  .helptext {
    margin-top: 5px;
    font-weight: 300;
    letter-spacing: 0.5px;
  }

  form.email-form {
    max-width: 435px !important;
    width: 100% !important;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        button[type="submit"] {
          width: 100% !important;
        }
    }
  }
  .intro-text {
    font-weight: 300;
    font-size: 18px;
    opacity: 0.7;
  }
  .hero-wrapper {
    @media (max-width: 768px) {
        margin-left: 0 !important;
    }
  }
  .hero-title {
    font-family: 'Quicksand', sans-serif;
  }
  .graphic {
    position: absolute;
    right: 0;
    @media screen and (max-width: 768px) {
      display: none;
    }
    img {
      max-width: 100%;
    }
  }
</style>
