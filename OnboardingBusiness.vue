<template>
<div>
    <div class="main-content fixed-layout">
        <div class="container-fluid">
            <tabHeader :title="`Business Information for ` + currentLocation.address.businessName" subTitle="Enter your Business related details" />
            <div class="">
                <b-form @submit.prevent="onSubmit" @reset="onReset">
                    <b-row>
                        <b-col sm="4">
                            <b-form-group id="exampleInputGroup2" label="Business Name" label-for="exampleInput2" label-class="asterisk">
                                <b-form-input id="business_name" type="text" v-model="form.business_name" required>
                                </b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col sm="4" class="margin-right20">
                            <b-form-group id="exampleInputGroup2" label="Business Category" label-for="exampleInput2" label-class="asterisk">
                                <b-form-input id="business_category" type="text" v-model="form.business_category" required>
                                </b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col sm="4">
                            <b-form-group id="exampleInputGroup2" label="Additional Categories" label-for="exampleInput2">
                                <b-form-input id="additional_categories" type="text" v-model="form.additional_categories">
                                </b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>

                    <b-row>
                        <b-col sm="4">
                            <b-form-group id="exampleInputGroup2" label="Business Address" label-for="exampleInput2" label-class="asterisk">
                                <b-form-input id="business_address" type="text" v-model="form.business_address" required>
                                </b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col sm="4" class="margin-right20">
                            <b-form-group id="exampleInputGroup2" label="Country" label-for="exampleInput2" label-class="asterisk">
                                <b-form-input id="country" type="text" v-model="form.country" required>
                                </b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col sm="4">
                            <b-form-group id="exampleInputGroup2" label="State" label-for="exampleInput2" label-class="asterisk">
                                <b-form-input id="state" type="text" v-model="form.state" required>
                                </b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col sm="4" class="margin-right20">
                            <b-form-group id="exampleInputGroup2" label="City" label-for="exampleInput2" label-class="asterisk">
                                <b-form-input id="city" type="text" v-model="form.city" required>
                                </b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col sm="4">
                            <b-form-group id="exampleInputGroup2" label="Zipcode" label-for="exampleInput2" label-class="asterisk">
                                <b-form-input id="zipcode" type="text" v-model="form.zipcode" required>
                                </b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>

                    <b-row>
                        <b-col sm="4" class="margin-right20">
                            <b-form-group id="exampleInputGroup2" label="Business Phone" label-for="exampleInput2" label-class="asterisk">
                                <b-form-input id="business_phone" type="text" v-model="form.business_phone" required>
                                </b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col sm="4">
                            <b-form-group id="exampleInputGroup2" label="Business Website URL" label-for="exampleInput2">
                                <b-form-input id="website_url" type="text" v-model="form.website_url">
                                </b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>

                    <b-form-checkbox id="checkbox1" v-model="form.hideAddress" value="accepted" unchecked-value="not_accepted">
                        Hide Address
                    </b-form-checkbox>
                    <div class="btns">
                        <b-button type="submit" variant="primary">Continue to Operation Info</b-button>
                        <b-button type="reset" variant="danger">Reset</b-button>
                    </div>
                </b-form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Vue from "vue";
import Vuex from "vuex";
import AdminNav from "@/components/AdminNav";
import tabHeader from "@/components/tab-header";
import VeeValidate from "vee-validate";
Vue.use(Vuex);
Vue.use(VeeValidate, {
    events: "",
    enableAutoClasses: true
});

export default {
    name: "OnboardingBusiness",
    props: {
        business: {
            type: Object
        }
    },
    data() {
        return {
            form: {}
        };
    },
    components: {
        AdminNav,
        tabHeader
    },
    computed: {
        currentLocation() {
            return this.$store.getters.getCurrentLocation;
        }
    },
    mounted() {
        this.$http
            .get("user/business_info/" + this.currentLocation._id)
            .then(response => {
                console.log("this response", response.body.business_info);
                this.form = response.body.business_info;
            });
    },
    methods: {
        onSubmit() {
            this.$http
                .post("user/business_info/" + this.currentLocation._id, {
                    business_name: this.form.business_name,
                    business_category: this.form.business_category,
                    additional_categories: this.form.additional_categories,
                    business_address: this.form.business_address,
                    country: this.form.country,
                    state: this.form.state,
                    city: this.form.city,
                    zipcode: this.form.zipcode,
                    hide_address: this.form.hideAddress,
                    business_phone: this.form.business_phone,
                    website_url: this.form.website_url
                })
                .then(function (response) {
                    this.$emit('isSubmittedBussInfo', 'ops')
                    if (this.currentLocation.business_detail_flag.length === 0) {
                        this.$router.push({
                            name: "Dashboard"
                        });
                    }
                });
        },
        onReset() {}
    }
};
</script>

<style scoped>
.btn {
    margin-right: 16px;
    border-radius: .125rem;
}

.btns {
    margin-top: 30px;
}
.btn:focus, .btn-primary:focus {
     -webkit-box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)!important;
      box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)!important; 
}

.margin-right20 {
    margin-right: 20%;
}

.asterisk::after {
    content: "*";
    color: red;
}
</style>
