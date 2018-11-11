<template>
<div class="whitebg login">
    <div class="container">
        <Navbar whitebg v-if="!loadedFromDashboard" />

        <b-row align-h="center" class="">
            <b-col md="7" lg="6" sm="12">
                <div class="scanForm">
                    <div class="spinner-bg" v-if="showSpinner">
                        <div class="spinner-bg-wrap">
                            <Spinner></Spinner>
                            <div>Loading...</div>
                        </div>
                    </div>
                    <template v-if="screen === 'step1'">
                        <div class="form_container animated bounceInLeft">
                            <header><span class="num">1</span> Your Business Information</header>
                            <!-- <h1 v-model="listingid">{{listingid}}</h1> -->
                            <b-form v-on:submit.prevent="onSubmit" method="POST" name="lookupForm">
                                <b-form-group id="fname_group">
                                    <b-form-input v-validate="{ required: true, min: 3 }" id="business_name" data-vv-as="Business Name" v-model="business_name" name="business_name" type="text" placeholder="Business Name">
                                    </b-form-input>
                                    <span class="error-msg text-danger" v-show="errors.has('business_name')">{{ errors.first('business_name') }}</span>
                                </b-form-group>
                                <b-form-group id="address_group">
                                    <b-form-input v-validate="{ required: true, min: 3 }" id="business_address" v-model="business_address" name="business_address" data-vv-as="Business Address" type="text" placeholder="Business Address">
                                    </b-form-input>
                                    <span class="error-msg text-danger" v-show="errors.has('business_address')">{{ errors.first('business_address') }}</span>
                                </b-form-group>
                                <div class="row">
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <b-form-group>
                                            <b-input-group prepend="+1">
                                                <b-form-input data-vv-as="Phone Number" v-validate="{ required: true, min: 10, regex: /^\d{10}$/ }" id="business_phone" v-model="business_phone" name="business_phone" placeholder="Phone Number"></b-form-input>
                                            </b-input-group>
                                            <span class="error-msg text-danger" v-show="errors.has('business_phone')">{{ errors.first('business_phone') }}</span>
                                        </b-form-group>
                                    </div>
                                    <div class="col-6">
                                        <b-form-input v-validate="{ required: true, min: 3 }" id="city" v-model="city" data-vv-as="City" name="city" type="text" placeholder="City"></b-form-input>
                                        <span class="error-msg text-danger" v-show="errors.has('city')">{{ errors.first('city') }}</span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <b-form-group>
                                            <!-- <b-form-select name="state" v-model="state" ref="state" class="mb-2 mr-sm-2 mb-sm-0" :value="null" :options="this.states" id="state"> -->
                                            <!-- <option slot="first" :value="null">State</option> -->
                                            <!-- </b-form-select> -->
                                            <b-form-select id="state" name="state" v-validate="'required'" v-model="state" data-vv-as="State" :options="this.states" class="mb-3" />
                                            <span class="error-msg text-danger" v-show="errors.has('state')">{{ errors.first('state') }}</span>
                                        </b-form-group>
                                    </div>
                                    <div class="col-6">
                                        <b-form-input data-vv-as="Zipcode" v-validate="{ required: true, min: 3 }" id="zipcode" v-model="zipcode" name="zipcode" type="text" placeholder="zipcode">
                                        </b-form-input>
                                        <span class="error-msg text-danger" v-show="errors.has('zipcode')">{{ errors.first('zipcode') }}</span>
                                    </div>
                                </div>
                                <b-row>
                                    <div class="col-12">
                                        <div class="form-group">
                                            <b-form-checkbox id="agency" v-model="is_agency" value="accepted" unchecked-value="not_accepted">
                                                I'm an agency
                                            </b-form-checkbox>
                                        </div>
                                    </div>
                                </b-row>
                                <b-button type="submit" variant="primary" class="submit-btn">Submit</b-button>
                            </b-form>
                        </div>
                    </template>
                    <template v-if="screen === 'step2'">
                        <div class="form_container animated bounceInLeft">
                            <header><span class="num">2</span> Your Information</header>
                            <div class="d-block text-center">
                                <b-form v-on:submit.prevent="onUserSubmit" name="userData">
                                    <div class="row">
                                        <div class="col-12">
                                            <b-form-group id="name_group">
                                                <b-form-input data-vv-as="Full name" v-validate="{ required: true, min: 3 }" id="user_name" v-model="user_name" name="user_name" type="text" placeholder="Full Name">
                                                </b-form-input>
                                                <span class="error-msg text-danger" v-show="errors.has('user_name')">{{ errors.first('user_name') }}</span>
                                            </b-form-group>
                                        </div>
                                    </div>
                                    <b-form-group id="mail_group">
                                        <b-form-input data-vv-as="Email" v-validate="{ required: true, email: true }" id="user_mail" v-model="user_mail" name="user_mail" type="text" placeholder="Email Address"></b-form-input>
                                        <span class="error-msg text-danger" v-show="errors.has('user_mail')">{{ errors.first('user_mail') }}</span>
                                    </b-form-group>
                                    <div class="row">
                                        <div class="col-6">
                                            <b-form-group>
                                                <b-form-select data-vv-as="Locations" v-validate="'required'" name="no_loc" v-model="no_loc" ref="loc_nums" class="mb-2 mr-sm-2 mb-sm-0" :value="null" :options="this.loc_nums" id="no_loc">
                                                    <option slot="first" :value="null">Number of Locations</option>
                                                </b-form-select>
                                                <span class="error-msg text-danger" v-show="errors.has('no_loc')">{{ errors.first('no_loc') }}</span>
                                            </b-form-group>
                                        </div>
                                        <div class="col-6">
                                            <b-form-group>
                                                <b-input-group prepend="+1">
                                                    <b-form-input data-vv-as="Phone Number" v-validate="{ required: true, min: 10, regex: /^\d{10}$/ }" v-model="user_phone" id="user_phone" name="user_phone" placeholder="Phone Number"></b-form-input>
                                                </b-input-group>
                                                <span class="error-msg text-danger" v-show="errors.has('user_phone')">{{ errors.first('user_phone') }}</span>
                                            </b-form-group>
                                        </div>
                                    </div>
                                    <b-button type="submit" class="mt-3" variant="success">Show Results</b-button>
                                </b-form>
                            </div>
                        </div>
                    </template>
                    <!--             <b-modal ref="myModalRef" hide-footer title="Your contact information?">
              
            </b-modal> -->
                </div>
            </b-col>
        </b-row>

    </div>
    <Footer v-if="!loadedFromDashboard" />
</div>
</template>

<script>
// var Vue = require('vue');
import Vue from 'vue'
import axios from 'axios'
import VueResource from 'vue-resource'
import Spinner from '@/components/Spinner'
import VeeValidate from 'vee-validate';
import qs from 'qs'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
Vue.use(VueResource);
import Vuex from 'vuex'
Vue.use(Vuex)
Vue.use(VeeValidate, {
    events: '',
    enableAutoClasses: true
})

export default {
    name: 'ScanTool',
    props: {
        loadedFromDashboard: false
    },
    components: {
        // 'Listing': Listing,
        // 'TopNav': TopNav,
        'Navbar': Navbar,
        'Footer': Footer,
        'Spinner': Spinner
    },
    metaInfo() {
        return {
            title: this.post && this.post.title,
        };
    },
    computed: {
        isLoggedIn() {
            return this.$store.getters.isLoggedIn;
        }
    },
    data() {
        return {
            screen: 'step1',
            success: true,
            showSpinner: false,
            options: [{
                text: "I'm an Agency",
                value: '0'
            }],
            emailID: '',
            is_agency: "not_accepted",
            listingid: '',
            user_name: '',
            user_phone: '',
            user_mail: '',
            business_name: '',
            business_address: '',
            business_phone: '',
            city: '',
            state: null,
            zipcode: '',
            loc_nums: {
                null: 'Please select an option',
                '1-5': '1-5',
                '6-50': '6-50',
                '50+': '50+'
            },
            no_loc: '',
            businessId: '',
            states: {
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
            this.$router.push({
                name: 'ScanTool',
                params: {
                    email: this.emailID
                }
            });
        },
        onSubmit: function (event) {
            this.showSpinner = true;
            // alert(this.fname);
            // event.preventDefault()
            // this.$http.post('address', {
            //   "businessName": this.business_name,
            //   "businessPhone": this.business_phone,
            //   "businessAddess": this.business_address,
            //   "city": this.city,
            //   "state": this.state,
            //   "zipCode": this.zipcode,
            //   "is_agency": this.is_agency
            // }).then(function (response) {
            //     this.businessId = response.data._id;
            //     this.$refs.myModalRef.show()
            // });
            let self = this;
            this.$validator.validate().then(result => {
                if (!result) {
                    // do stuff if not valid.
                    // setTimeout(()=>{
                    this.showSpinner = false
                    // }, 1000) 
                } else if (this.state !== null) {
                    
                    setTimeout(() => {
                        if (!this.loadedFromDashboard) {
                            this.screen = "step2";
                        }
                        this.showSpinner = false;
                    }, 500)
                    self.$http.post('address', {
                        "businessName": this.business_name,
                        "businessPhone": this.business_phone,
                        "businessAddess": this.business_address,
                        "city": this.city,
                        "state": this.state,
                        "zipCode": this.zipcode,
                        "is_agency": this.is_agency
                    }).then(function (response) {
                        this.businessId = response.data._id;
                        this.$emit('getListingPage', {'loadListingPage': true, 'businessId': response.data._id})
                        // this.$refs.myModalRef.show()
                        setTimeout(() => {
                            this.showSpinner = false;
                            this.success = true;
                        }, 500)
                        console.log(response);
                    }).catch(function (error) {
                        console.log(error);
                    })
                }
            });
        },
        // hideModal () {
        //   this.$refs.myModalRef.hide()
        // },
        onUserSubmit(event) {
            this.showSpinner = true;
            let self = this;
            this.$validator.validate().then(result => {
                if (!result) {
                    // do stuff if not valid.
                    // setTimeout(()=>{
                    this.showSpinner = false
                    // }, 1000) 
                } else {
                    self.$http.post('user', {
                        "name": this.user_name,
                        "phoneNo": this.user_phone,
                        "email": this.user_mail,
                        "address": this.businessId,
                        "no_loc": this.no_loc
                    }).then(function (response) {
                        this.$router.push({
                            name: 'Listing',
                            params: {
                                id: this.businessId
                            }
                        });
                        this.success = true;
                    }).catch(function (error) {
                        this.showSpinner = false
                        console.log(error);
                    })
                }
            });
        }
    }
};
</script>

<style lang="scss">
form.email-form {
    background: #fff;
    width: 470px;
    margin: auto;
    padding: 10px;
    border-radius: 4px;

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

.scanForm {
    .form_container {
        background: #fff;
    }

    // background: #ffffff;
    //padding: 16px;
    margin: 100px 0;

    header {
        font-size: 18px;
        padding: 15px;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        font-weight: 400;
        box-shadow: -6px 1px 26px -5px rgba(0, 0, 0, 0.08);
        background: #ececec;

        .num {
            background: #27AE60;
            color: #fff;
            margin-right: 5px;
            padding: 2px;
            width: 30px;
            display: inline-block;
            text-align: center;
            border-radius: 3px;
        }
    }
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

.error-msg {
    display: block;
    text-align: left;
}
</style>
