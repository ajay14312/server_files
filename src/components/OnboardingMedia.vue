<template>
<div>
    <div class="main-content fixed-layout">
        <div class="container-fluid">
            <tabHeader :title="`Media Information for ` + currentLocation.address.businessName" subTitle="Enter your Media related details" />
            <div v-if="isFormChanged">
                <p>Save the changed form details</p>
            </div>
            <div class="">
                <b-form @submit.prevent="onSubmit" @reset="onReset">
                    <b-row>
                        <b-col sm="6">
                            <b-form-group label="Linkedin Page Link">
                                <b-form-input type="text" v-model="form.linkedin_link">
                                </b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col sm="6">
                            <b-form-group label="Facebook Page Link">
                                <b-form-input type="text" v-model="form.facebook_link">
                                </b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col sm="6">
                            <b-form-group label="Twitter Link">
                                <b-form-textarea type="text" v-model="form.twitter_link"></b-form-textarea>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col sm="6">
                            <b-form-group label="Google Link">
                                <b-form-textarea type="text" v-model="form.google_link"></b-form-textarea>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col sm="6">
                            <b-form-group label="Additional Video Link 1">
                                <b-form-textarea type="text" v-model="form.additional_video_links[0]"></b-form-textarea>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col sm="6">
                            <b-form-group label="Additional Video Link 2">
                                <b-form-textarea type="text" v-model="form.additional_video_links[1]"></b-form-textarea>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col sm="6">
                            <b-form-group label="Additional Video Link 3">
                                <b-form-textarea type="text" v-model="form.additional_video_links[2]"></b-form-textarea>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <div class="btns">
                        <b-button type="submit" variant="primary">Submit</b-button>
                        <b-button type="reset" variant="danger">Reset</b-button>
                    </div>
                </b-form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Vue from 'vue'
import AdminNav from '@/components/AdminNav'
import tabHeader from '@/components/tab-header'
import Vuelidate from 'vuelidate'
import {
    required
} from 'vuelidate/lib/validators'
Vue.use(Vuelidate)

export default {
    name: 'OnboardingMedia',
    props: {
        business: {
            type: Object
        }
    },
    data() {
        return {
            form: {
                "additional_video_links": [],
                "google_link": '',
                "twitter_link": '',
                "facebook_link": '',
                "linkedin_link": ''
            },
            prevFormData: {
                "additional_video_links": [],
                "google_link": '',
                "twitter_link": '',
                "facebook_link": '',
                "linkedin_link": ''
            },
            isFormChanged: false
        }
    },
    components: {
        AdminNav,
        tabHeader
    },
    watch: {
        currentLocation(newval) {
            console.log(newval);
            this.$http.get('user/media_info/' + newval._id).then((response) => {
                console.log("this response", response);
                if (response.body.media_info) {
                    this.form = response.body.media_info;
                    this.prevFormData = JSON.parse(JSON.stringify(response.body.media_info))
                }
                // 
            })
        }
    },
    mounted() {
        this.$http.get('user/media_info/' + this.currentLocation._id).then((response) => {
            console.log("this response", response);
            if (response.body.media_info) {
                this.form = response.body.media_info;
                this.prevFormData = JSON.parse(JSON.stringify(response.body.media_info))
            }
            // 
        })
    },
    computed: {
        currentLocation() {
            return this.$store.getters.getCurrentLocation;
        }
    },
    methods: {
        onSubmit() {
            this.prevFormData = JSON.parse(JSON.stringify(this.form));
            this.$http.post('user/media_info/' + this.currentLocation._id, {
                "additional_video_links": this.form.additional_video_links,
                "google_link": this.form.google_link,
                "twitter_link": this.form.twitter_link,
                "facebook_link": this.form.facebook_link,
                "linkedin_link": this.form.linkedin_link
            }).then(function (response) {
                if (this.currentLocation.business_detail_flag.length === 0) {
                    this.$router.push({
                        name: 'Dashboard'
                    })
                }
            });
        },
        onReset() {

        },
        setValue(value) {
            if (value) {
                var isFormValid = true;
                for (var prop in this.form) {
                    if (Object.prototype.toString.call(this.form[prop]) === "[object Array]") {
                        if (this.form[prop].length !== this.prevFormData[prop].length) {
                            this.isFormChanged = true;
                            isFormValid = false;
                            return false;
                        } else {
                            this.prevFormData[prop] = this.prevFormData[prop].sort();
                            this.form[prop] = this.form[prop].sort();
                            for (let i = 0; i < this.form[prop].length; i++) {
                                if (this.form[prop][i] !== this.prevFormData[prop][i]) {
                                    this.isFormChanged = true;
                                    isFormValid = false;
                                    return false;
                                }
                            }
                        }
                    } else if (this.form[prop] !== this.prevFormData[prop]) {
                        this.isFormChanged = true;
                        isFormValid = false;
                        return false;
                    }
                }
                if (isFormValid) {
                    this.$emit('checkedMediaForm', false)
                } else {
                    this.isFormChanged = true;
                }
            }
        }
    }
};
</script>

<style scoped>

</style>
