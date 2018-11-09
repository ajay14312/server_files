<template>
<div>
    <div class="main-content fixed-layout">
        <div class="container-fluid">
            <tabHeader :title="`Media Information for ` + currentLocation.address.businessName" subTitle="Enter your Media related details" />
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
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate, {
    events: '',
    enableAutoClasses: true
})

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
            }
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

        }
    }
};
</script>

<style scoped>

</style>
