<template>
	<div>
		<!-- <TopNav inDash/> -->
    <loading :active.sync="isLoading" :is-full-page="true" :can-cancel="false"></loading>
		<AdminNav v-on:loadScanTool="loadScanToolBusiness($event)" :disableLocationSwitch="isScanToolLoaded || loadListingPage.loadListingPage"/>
    <Sidebar />
    <ScanTool v-if="isScanToolLoaded"  :loadedFromDashboard="isScanToolLoaded" v-on:getListingPage="getListingPage($event)"/>
    <Listing v-if="loadListingPage" :loadListingPage="loadListingPage.loadListingPage" :businessId="loadListingPage.businessId"/>
		<div class="main-content fixed-layout" v-if="!isScanToolLoaded">
      <div class="container-fluid">
        <b-row class="cards">
          <b-col cols="3">
            <div class="card listed">
              <div class="num">{{accurate}}</div>
              <div class="title listed">
                Accurate Sites
              </div>
              <div class="subtitle">
                across 50+ sites
              </div>
            </div>
          </b-col>
          <b-col cols="3">
            <div class="card unlisted">
              <div class="num">{{notfound}}</div>
              <div class="title unlisted">
                Not Found
              </div>
              <div class="subtitle">
                across 50+ sites
              </div>
            </div>
          </b-col>
          <b-col cols="3">
            <div class="card wrong">
              <div class="num">{{inaccurate}}</div>
              <div class="title wrong">
                WRONG SITES
              </div>
              <div class="subtitle">
                across 50 sites
              </div>
            </div>
          </b-col>
          <b-col cols="3">
            <div class="card duplicate">
              <div class="num">12</div>
              <div class="title duplicate">
                DUPLICATE SITES
              </div>
              <div class="subtitle">
                across 50 sites
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row class="top-info">
            <b-col cols="12">
              <div class="upload-btn-wrapper clearfix">
                <b-row>
                  <b-col cols="6">
                    <b-row>
                      <b-col cols="5">
                      <div class="file-upload">
                        <input id="blogo" type="file" name="myfile" @change="onFileChanged"/>
                        <label for="blogo" class="file-placeholder">
                          <!-- <img v-if="imgUrl==''" src="../assets/company.svg" alt=""> -->
                          <div class="logo-wrapper">
                            <i v-if="!showRemove" class="placeholder fas fa-building"></i>
                          <img v-if="showRemove" :src="imgUrl" alt="">
                          </div>
                          <a href="" v-if="showRemove" class="remove" @click.prevent="removeLogo"><i class="fas fa-times-circle"></i></a>
                        </label>
                        
                        <!-- <button @click="onUpload" class="btn">Upload a file</button> -->
                      </div>
                    </b-col>
                    <b-col cols="7">
                      <Business dashboard class="business-info" :businessName="business.businessName" :businessAddress="business.businessAddess" :businessCity="business.city" :businessState="business.state" :businessZipcode="business.zipCode" :businessPhone="business.businessPhone"></Business>
                    </b-col>
                    </b-row>
                  </b-col>
                  <b-col class="loc-details" cols="6">
                      <header>Photos</header>
                      <ul class="loc-imgs">
                       <!--  <li v-for="img in ">
                          <div class="img-container">
                            <label for="photo1">
                              <input type="file" id="photo1">
                            </label>
                            <div class="close"><i class="fas fa-times-circle"></i></div>
                          </div>
                        </li> -->
                        <!-- <template v-if="loc_images.length<5"> -->
                          <li v-for="(img,index) in loc_images">
                            <div class="img-container">
                              <label :for="img._id">
                                <input type="file" @change="imageChanged" :id="img._id">
                              </label>
                              <div :id="img._id" class="close"><i class="fas fa-times-circle"></i></div>
                            </div>
                            <div class="img-wrapper" :style="'background-image:url('+img.url+')'"></div>
                          </li>
                        <!-- </template> -->
                        <!-- <template v-if="loc_images.length<"> -->
                        <li v-for="(n,index) in leftCount">
                          <div class="img-container">
                            <label :for="'photo'+index">
                              <input @change="imageChanged" :name="'photo'+index" type="file" :id="'photo'+index">
                            </label>
                            <!-- <div class="close"><i class="fas fa-times-circle"></i></div> -->
                          </div>
                        </li>
                        <!-- </template> -->
                        

<!--                         <li>
                          <div class="img-container">
                            <label for="photo2">
                              <input type="file" id="photo2">
                            </label>
                            <div class="close"><i class="fas fa-times-circle"></i></div>
                          </div>
                        </li>
                        <li>
                          <div class="img-container">
                            <label for="photo3">
                              <input type="file" id="photo3">
                            </label>
                            <div class="close"><i class="fas fa-times-circle"></i></div>
                          </div>
                        </li>
                        <li>
                          <div class="img-container">
                            <label for="photo4">
                              <input type="file" id="photo4">
                            </label>
                            <div class="close"><i class="fas fa-times-circle"></i></div>
                          </div>
                        </li>
                        <li>
                          <div class="img-container">
                            <label for="photo5">
                              <input type="file" id="photo5">
                            </label>
                            <div class="close"><i class="fas fa-times-circle"></i></div>
                          </div>
                        </li> -->
                      </ul>
                      <div class="loc-desc">
                        <div v-if="editText">
                          <header>Description</header>
                          <div class="form-group">
                             <textarea v-model="loc_text" class="form-control"></textarea>
                          </div>
                        </div>
                        <div v-else>
                          <header>Description</header>
                          <div @click="descClicked">{{loc_text}}</div>
                          <div class="no-text" @click="descClicked" v-if="loc_text.length===0"><em>Click here to add some description</em></div>
                        </div>
                      </div>
                      <div v-if="editText" class="form-group">
                        <a href="#" @click.prevent="saveText" class="btn btn-primary">Save</a>
                      </div>
                  </b-col>
                </b-row>
              </div>
            </b-col>
            <b-col cols="3">
              
              
            </b-col>
          </b-row>
          <b-tabs>
            <b-tab title="Premium" active>
              <div class="tab-wrapper">
                <ListingItem v-for="listing in listings" :name="listing.name" :address="listing.address" :phone="listing.phone" :url="listing.url" :siteName="listing.siteName" v-bind:data="listing" v-bind:key="listing.text" :match="listing.match" :status="listing.status"></ListingItem>
              </div>
            </b-tab>
            <!-- <b-tab title="Slow">
              
            </b-tab> -->
            <b-tab title="Duplicate">
              <div class="tab-wrapper">
                <ListingItem v-for="duplicate in dupliactes" :name="duplicate.name" :address="duplicate.address" :phone="duplicate.phone" :url="duplicate.url" :siteName="duplicate.siteName" v-bind:data="duplicate" v-bind:key="duplicate.text" :match="duplicate.match" :status="duplicate.status"></ListingItem>
              </div>
            </b-tab>
          </b-tabs>
          
      </div>  
    </div>
	</div>
</template>
<script>
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueResource from 'vue-resource'
import TopNav from '@/components/TopNav'
import Navbar from '@/components/Navbar'
import AdminNav from '@/components/AdminNav'
import ListingItem from '@/components/ListingItem'
import Business from '@/components/Business'
import Sidebar from '@/components/Sidebar'
import ScanTool from '@/components/ScanTool';
import Listing from '@/components/Listing';
// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.min.css';
Vue.use(Vuex)
Vue.use(Loading);
export default {
	name: 'Dashboard',
	components: {
		'TopNav': TopNav,
		'Navbar': Navbar,
		'AdminNav': AdminNav,
		'ListingItem': ListingItem,
    'Business': Business,
    'Sidebar': Sidebar,
    'selectedFile': null,
    'Loading': Loading,
    'ScanTool': ScanTool,
    'Listing': Listing
	},
	data() {
		return {
      editText: false,
      loc_text: '',
      showRemove: false,
      location: '',
      imgUrl: '',
      defaultSrc: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6IzAwODJGRjsiIGQ9Ik00NTEuNTg3LDMwLjE0VjBIMjMwLjkzNHYzMC4yOTNoLTYxLjE4VjQzMS4wNWgwLjE4NWgzNDEuODI0VjMwLjM0NEw0NTEuNTg3LDMwLjE0eiIvPg0KPHBvbHlnb24gc3R5bGU9ImZpbGw6IzAwNUZFNDsiIHBvaW50cz0iNDUxLjU4NywzMC4xNCA0NTEuNTg3LDAgMzQwLjgxMywwIDM0MC44MTMsNDMxLjA1IDUxMS43Niw0MzEuMDUgNTExLjc2LDMwLjM0NCAiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRjY0MUE7IiBkPSJNMTI1LjYxMyw1MTJjMCwwLTQwLjY2OS01OS45MS02OC4yMjItMTA4LjA0N0MxOC45MzMsMzM2Ljc2MSwwLjIzNywyOTAuMzMyLDAuMjM3LDI2Mi4wMTQNCgljMC02OS4xMzMsNTYuMjQ0LTEyNS4zNzcsMTI1LjM3Ny0xMjUuMzc3YzY5LjEzNCwwLDEyNS4zNzgsNTYuMjQ0LDEyNS4zNzgsMTI1LjM3N2MwLDI4LjMxOC0xOC42OTUsNzQuNzQ3LTU3LjE1NCwxNDEuOTM4DQoJQzE2Ni4yODUsNDUyLjA4OSwxMjUuNjEzLDUxMiwxMjUuNjEzLDUxMnoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGMDM4MDA7IiBkPSJNMTI1LjYxMywxMzYuNjM3Yy0wLjA0MiwwLTAuMDg0LDAuMDAxLTAuMTI3LDAuMDAxdjM3NS4xNzNsMC4xMjcsMC4xODgNCgljMCwwLDQwLjY3LTU5LjkxLDY4LjIyMi0xMDguMDQ3YzM4LjQ2LTY3LjE5LDU3LjE1NC0xMTMuNjE5LDU3LjE1NC0xNDEuOTM4QzI1MC45OTIsMTkyLjg4MSwxOTQuNzQ3LDEzNi42MzcsMTI1LjYxMywxMzYuNjM3eiIvPg0KPHJlY3QgeD0iMzI3LjIyIiB5PSIzMzguNzciIHN0eWxlPSJmaWxsOiMwMDVGRTQ7IiB3aWR0aD0iMzAuMDkiIGhlaWdodD0iOTIuMjciLz4NCjxyZWN0IHg9IjI2Ny4wNDkiIHk9IjIxNy4yIiBzdHlsZT0iZmlsbDojRkZEQTJEOyIgd2lkdGg9IjU4LjE3IiBoZWlnaHQ9IjMwLjA5Ii8+DQo8Zz4NCgk8cmVjdCB4PSIyNjcuMDQ5IiB5PSIyNzcuMzgiIHN0eWxlPSJmaWxsOiMwMDVGRTQ7IiB3aWR0aD0iNTguMTciIGhlaWdodD0iMzAuMDkiLz4NCgk8cmVjdCB4PSIyNjcuMDQ5IiB5PSI5OC4yMyIgc3R5bGU9ImZpbGw6IzAwNUZFNDsiIHdpZHRoPSI1OC4xNyIgaGVpZ2h0PSIzMC4wOSIvPg0KCTxyZWN0IHg9IjI2Ny4wNDkiIHk9IjE1OC40IiBzdHlsZT0iZmlsbDojMDA1RkU0OyIgd2lkdGg9IjU4LjE3IiBoZWlnaHQ9IjMwLjA5Ii8+DQo8L2c+DQo8cmVjdCBpZD0iU1ZHQ2xlYW5lcklkXzAiIHg9IjM1OS4zMiIgeT0iMjE3LjIiIHN0eWxlPSJmaWxsOiMwMDMxN0U7IiB3aWR0aD0iNTguMTciIGhlaWdodD0iMzAuMDkiLz4NCjxyZWN0IGlkPSJTVkdDbGVhbmVySWRfMSIgeD0iMzU5LjMyIiB5PSIyNzcuMzgiIHN0eWxlPSJmaWxsOiMwMDMxN0U7IiB3aWR0aD0iNTguMTciIGhlaWdodD0iMzAuMDkiLz4NCjxyZWN0IHg9IjM1OS4zMiIgeT0iOTguMjMiIHN0eWxlPSJmaWxsOiNGRkRBMkQ7IiB3aWR0aD0iNTguMTciIGhlaWdodD0iMzAuMDkiLz4NCjxyZWN0IGlkPSJTVkdDbGVhbmVySWRfMiIgeD0iMzU5LjMyIiB5PSIxNTguNCIgc3R5bGU9ImZpbGw6IzAwMzE3RTsiIHdpZHRoPSI1OC4xNyIgaGVpZ2h0PSIzMC4wOSIvPg0KPHJlY3QgeD0iMzQwLjgxIiB5PSIzMzguNzciIHN0eWxlPSJmaWxsOiMwMDMxN0U7IiB3aWR0aD0iMTYuNSIgaGVpZ2h0PSI5Mi4yNyIvPg0KPGc+DQoJPHJlY3QgaWQ9IlNWR0NsZWFuZXJJZF8wXzFfIiB4PSIzNTkuMzIiIHk9IjIxNy4yIiBzdHlsZT0iZmlsbDojMDAzMTdFOyIgd2lkdGg9IjU4LjE3IiBoZWlnaHQ9IjMwLjA5Ii8+DQo8L2c+DQo8Zz4NCgk8cmVjdCBpZD0iU1ZHQ2xlYW5lcklkXzFfMV8iIHg9IjM1OS4zMiIgeT0iMjc3LjM4IiBzdHlsZT0iZmlsbDojMDAzMTdFOyIgd2lkdGg9IjU4LjE3IiBoZWlnaHQ9IjMwLjA5Ii8+DQo8L2c+DQo8cmVjdCB4PSIzNTkuMzIiIHk9Ijk4LjIzIiBzdHlsZT0iZmlsbDojRkRCRjAwOyIgd2lkdGg9IjU4LjE3IiBoZWlnaHQ9IjMwLjA5Ii8+DQo8Zz4NCgk8cmVjdCBpZD0iU1ZHQ2xlYW5lcklkXzJfMV8iIHg9IjM1OS4zMiIgeT0iMTU4LjQiIHN0eWxlPSJmaWxsOiMwMDMxN0U7IiB3aWR0aD0iNTguMTciIGhlaWdodD0iMzAuMDkiLz4NCjwvZz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRkRBMkQ7IiBkPSJNMTI1LjYxMywzMjIuMTkyYy0zMy4xODIsMC02MC4xNzgtMjYuOTk2LTYwLjE3OC02MC4xNzhzMjYuOTk2LTYwLjE3OCw2MC4xNzgtNjAuMTc4DQoJczYwLjE3OCwyNi45OTYsNjAuMTc4LDYwLjE3OFMxNTguNzk2LDMyMi4xOTIsMTI1LjYxMywzMjIuMTkyeiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZEQkYwMDsiIGQ9Ik0xMjUuNjEzLDIwMS44MzZjLTAuMDQzLDAtMC4wODQsMC4wMDMtMC4xMjcsMC4wMDN2MTIwLjM1YzAuMDQyLDAsMC4wODQsMC4wMDMsMC4xMjcsMC4wMDMNCgljMzMuMTgyLDAsNjAuMTc4LTI2Ljk5Niw2MC4xNzgtNjAuMTc4UzE1OC43OTYsMjAxLjgzNiwxMjUuNjEzLDIwMS44MzZ6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==',
      listings: [],
      dupliactes: [],
      addressId: '',
      isLoading : false,
      accurate: 0,
      business_logo: {},
      notfound: 0,
      this_image: '',
      images: {
        photo0: '',
        photo1: '',
        photo2: '',
        photo3: '',
        photo4: ''
      },
      inaccurate: 0,
      businesses: [],
			business: {
        businessName: '',
        businessAddess: '',
        city: '',
        state: '',
        zipCode: '',
        businessPhone: '',
        _id: ''
      },
      loc_images: [],
      isScanToolLoaded: false,
      loadListingPage: false
		}
	},
  watch: {
    loc_images(val) {
      console.log(this.loc_images);
    },
    currentLocation (newval) {
      console.log(newval);
      this.changeAddress(newval);
    },
    getAllCurrentLocs (newval) {
      var new_logo = {};
    }
  },
	computed: {
    leftCount() {
      return 5 - this.loc_images.length;
    },
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
    currentLocation() {
      return this.$store.getters.getCurrentLocation;
    },
    getAllCurrentLocs() {
      return this.$store.getters.getAllLocations;
    }
  },
  mounted() {
    if(this.getAllCurrentLocs.length === 0) {
      this.updateStore();
    }else {
      this.businesses = this.getAllCurrentLocs;
      this.business = this.currentLocation.address;
      this.listings = this.currentLocation.scan_address;
      this.dupliactes = this.updateDupliates(this.currentLocation.scan_address);
      this.accurate = this.currentLocation.accurate;
      this.inaccurate = this.currentLocation.inaccurate;
      this.notfound = this.currentLocation.notfound;
      this.loc_images = this.currentLocation.images;
      this.loc_text = this.currentLocation.image_text;
      console.log(this.currentLocation.business_logo);
      if(this.currentLocation.business_logo !== null) {
        this.imgUrl = this.currentLocation.business_logo.url;
        this.showRemove = true;
      }else {
        this.imgUrl = this.defaultSrc;
      }
    }
  },
  methods: {
    saveText() {
      this.isLoading = true;
      this.$http.put('user/update_image_text/'+this.currentLocation._id,{
        'image_text': this.loc_text.length == 0 ? null : this.loc_text
      }).then((response) => {
        this.isLoading = false;
        this.descClicked();
      }).catch(function (error) {
        this.isLoading = false;
        alert(error);
      });
    },
    descClicked() {
      this.editText = !this.editText;
    },
    updateStore() {
      this.$http.get('user/dashboard').then((response) => {
        console.log("GET REQUEST===>",response);
        this.$store.dispatch('all_locations', response.data.address).then(response => { });
        
        this.changeAddress(this.getAllCurrentLocs[0]);

        this.businesses = response.data.address;
        this.business = response.data.address[0].address;
        this.listings = response.data.address[0].scan_address;
        this.dupliactes = this.updateDupliates(response.data.address[0].scan_address);
        this.addressId = response.data.address[0]._id;
        this.accurate = response.data.address[0].accurate;
        this.inaccurate = response.data.address[0].inaccurate;
        this.notfound = response.data.address[0].notfound;
        this.loc_images = response.data.address[0].images;
        this.loc_text = response.data.address[0].image_text;
        this.$store.dispatch('location', response.data.address[0]);
        if(response.data.address[0].business_detail_flag.length > 0) {
         this.$nextTick(() => {
            this.$router.push({name:'Onboarding'});
          })
        }
        if(response.data.address[0].hasOwnProperty('business_logo') && response.data.address[0].business_logo !== null ) {
          this.imgUrl = response.data.address[0].business_logo.url;
          this.showRemove = true;
        }

      });
    },
    updateLogo() {
      this.$http.get('user/dashboard').then((response) => {
        this.$store.dispatch('all_locations', response.data.address).then(response => { });
        var currentLoc = {};
        response.data.address.map((el,i) => {
          if(el._id === this.currentLocation._id) {
            currentLoc = el;
          }
        });
        this.$store.dispatch('location',currentLoc).then(response => {
          if(currentLoc.business_logo !== null) {
             this.imgUrl = currentLoc.business_logo.url;
          }
         
          // this.showRemove = true;
        });
      });
    },
    changeAddress(val) {
      this.isLoading = true;
      this.$http.get('user/dashboard').then((response) => {
        this.$store.dispatch('all_locations', response.data.address).then(response => { });
        this.businesses = response.data.address;
        this.isLoading = false;
        // this.loc_images =
      });
      this.businesses.forEach((el, index) => {
        if(el._id === val._id) {
          this.business = el.address;
          this.listings = el.scan_address;
          this.dupliactes = this.updateDupliates(el.scan_address);
          this.accurate = el.accurate;
          this.inaccurate = el.inaccurate;
          this.notfound = el.notfound;
          this.loc_images = el.images;
          this.loc_text = el.image_text;
          if(el.business_logo == null) {
            this.imgUrl = this.defaultSrc;
            this.showRemove = false;
          }else {
            console.log(el.business_logo);
            this.showRemove = true;
            this.imgUrl = el.business_logo.url;
          }
          this.$store.dispatch('location', el).then(response => { console.log("succcess") });
        }
      });
    },
    onFileChanged (event) {
      this.selectedFile = event.target.files[0]
      this.onUpload();
    },
    removeLogo() {
      this.isLoading = true;
      this.$http.post('user/logoDelete', {
        "addressId": this.currentLocation._id
      }).then(function (response) {
        console.log("YO");
        this.isLoading = false;
        this.showRemove = false;
        this.imgUrl = this.defaultSrc;
      });
    },
    onUpload () {
      const formData = new FormData()
      formData.append('image', this.selectedFile);
      formData.append('addressId', this.currentLocation._id);
      this.isLoading = true;
      this.$http.post('user/logoUpload', formData).then((response) => {
        this.isLoading = false;
        this.imgUrl = response.data.business_logo.url;
        this.showRemove = true;
        // this.updateLogo();
      }).catch(function (error) {
              this.isLoading = false;
              alert(error);
            });
    },
    imageChanged(event) {
      this.isLoading = true;
      event.target.files[0];
      var formData2 = new FormData();
     
      // if(event.target.id) {
       // return this.$http.post('user/get_image/'+this.currentLocation._id+'/'+event.target.id, formData2).then((response) => {
       //    this.isLoading = false;
       //    this.loc_images.push(response.data.file);
      this.loc_images.map((el,i)=>{
        if(el._id === event.target.id) {
          formData2.append('image', event.target.files[0]);
          this.$http.put('user/update_image/'+this.currentLocation._id+'/'+event.target.id, formData2).then((response) => {
            this.isLoading = false;
            var newVal = Object.assign({}, this.loc_images[i], response.data.file);
            Vue.set(this.loc_images, i, newVal);
            el = response.data.file;
          }).catch(function (error) {
            this.isLoading = false;
            alert(error);
          });
          return;
        }
      });

      formData2.append('image', event.target.files[0]);
      formData2.append('address_id', this.currentLocation._id);
      formData2.append('image_id',event.target.id);
      this.$http.post('user/imageUpload', formData2).then((response) => {
        this.isLoading = false;
        this.loc_images.push(response.data.file);
      }).catch(function (error) {
        this.isLoading = false;
        alert(error);
      });
    },
    updateDupliates(list) {
      var duplicateArr = []
      list.forEach(function(scan_item){
        if(scan_item.duplicates.length !== 0) {
          scan_item.duplicates.forEach(item => {
            duplicateArr.push(item);
          })
        }
      })
      // var duplicateArr = list.filter(scan_item => {
      //   if(scan_item.duplicates.length !== 0) {
      //     scan_item.duplicates.forEach(item => {
      //       return item;
      //     })
      //   }
      // })
      console.log(duplicateArr);
      return duplicateArr;
    },
    loadScanToolBusiness(event) {
      this.isScanToolLoaded = event
    },
    getListingPage(event) {
      // localStorage.setItem('businessId', event.businessId);
      this.loadListingPage = event;
      this.isScanToolLoaded = !this.isScanToolLoaded;
    }
  }
};
</script>
<style lang="scss" scoped>
  .cards {
    margin-bottom: 24px;
    .card {
      padding: 10px;
      background: #fff;
      margin-top: 20px;
      box-shadow: 0px 1px 4px 1px rgba(0,0,0,0.12);
      border: none;
      .num {
        font-size: 65px;
        font-weight: 400;
        line-height: 1.15;
        color: inherit;
      }
      .title {
        font-size: 18px;
        font-weight: 500;
        color: rgba(0,0,0,0.76);
        text-transform: uppercase;
      }
      .subtitle {
        font-size: 12px;
        color: #9a9a9a;
      }
    }
  }

  .listed {
    color: #27BB50 !important;
  }
  .unlisted {
    color: #EE8141 !important;
  }
  .wrong {
    color: #DB2C32 !important;
  }
  .duplicate {
    color: #3293D1 !important;
  }

  .file-upload {
    // float: left;
    // width: 124px;
    label {
      width: 100%;
      min-height: 200px;
      background: #eaeaea;
      border-radius: 6px;
      padding: 12px;
      position: relative;
      text-align: center;
      .logo-wrapper {
        height: 65%;
        width: 65%;
        margin: auto;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: #fff;
      }
      img {
          max-width: 100%;
          vertical-align: middle;
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          padding: 10px;
      }
    }
  }

  .file-upload input {
    height: 0;
    width: 0;
    overflow: hidden;
    display: none;
  }

  .file-upload input + label {
  
  }

  .upload-btn-wrapper {
    background: #fff;
    border-radius: 6px;
    padding: 16px;
    box-shadow: 0px 1px 4px 1px rgba(0,0,0,0.12);
    margin-bottom: 24px;
    // width: 400px;
  }

  .remove {
    position: absolute;
    right: -6px;
    top: -6px;
    font-size: 14px;
    cursor: pointer;
    color: #000;
  }

  .tab-wrapper {
    background: #fff;
    border-left: 1px solid #dee2e6;
    border-right: 1px solid #dee2e6;
    padding: 24px;
  }

  .file-placeholder i.placeholder {
    font-size: 99px;
    color: rgba(0,0,0,0.54);
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 100px;
  }

  .file-placeholder {
    .remove {
      display: none;
    }
    &:hover {
      .remove {
        display: block;
      }
    }
  }

  .loc-details {
    header {
      font-size: 18px;
      margin-bottom: 8px;
      // margin-top: 16px;
    }
    .loc-imgs {
      list-style-type: none;
      font-size: 0;
      padding: 0;
      position: relative;
      li {
        &:last-child {
          margin-right: 0;
        }
        display: inline-block;
        margin-right: 8px;
        margin-bottom: 8px;
        position: relative;
         .img-container {
          position: relative;
          width: 100px;
          height: 100px;
          background: #eaeaea;
          border-radius: 6px;
          &:after {
            content: "\f03e";
            font-size: 40px;
            font-family: FontAwesome;
            font-style: normal;
            font-weight: normal;
            text-decoration: inherit;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
            height: 58px;
            color: rgba(0,0,0,0.16);
            text-align: center;
          }
          .close {
            display: none;
            font-size: 14px;
            position: absolute;
            right: -4px;
            top: -4px;
            color: #000;
            z-index: 1;
          }
          &:hover {
            .close {
              display: block;
            }
          }
          label {
            width: 100%;
            height: 100%;
            position: relative;
            z-index: 100;
            input {
              // display: none;
              visibility: hidden;
              width: 100%;
              height: 100%;
            }
            img {
              max-width: 100%;
            }
          }
        }
      }
    }
  }

.img-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #fff;
  box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.36);
  border-radius: 6px;
  img {
    max-width: 100%;
  }
}

.no-text {
  color: rgba(0,0,0,0.36);
  font-size: 14px;
}

.close {
  display: none !important;
}
</style>