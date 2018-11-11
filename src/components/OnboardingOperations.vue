<template>
<div>
    <div class="main-content fixed-layout">
        <div class="container-fluid">
            <tabHeader :title="`Operations Information for ` + currentLocation.address.businessName" subTitle="Enter your Operations related details" />
            <div v-if="isFormChanged">
                <p>Save the changed form details</p>
            </div>
            <div class="">
                <b-form @submit.prevent="onSubmit" @reset="onReset">
                    <b-row>
                        <b-col sm="4" class="margin-right20">
                            <b-form-group id="exampleInputGroup2" label="Owner's Name" label-for="exampleInput2">
                                <b-form-input id="owners_name" type="text" v-model="form.owners_name">
                                </b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col sm="4">
                            <b-form-group id="exampleInputGroup2" label="Owner's Email" label-for="exampleInput2">
                                <b-form-input id="business_address" type="email" v-model="form.owners_email" :class="{ 'is-invalid': $v.form.owners_email.$error }">
                                </b-form-input>
                                <div class="invalid-feedback" v-if="!$v.form.owners_email.required">Owner's E-mail is required</div>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col sm="4">
                            <b-form-group id="exampleInputGroup2" label="Business Tag Line" label-for="exampleInput2">
                                <b-form-input id="additional_categories" type="text" v-model="form.business_tag_line">
                                </b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col sm="4">
                            <b-form-group id="exampleInputGroup2" label="Year of Incorporation" label-for="exampleInput2">
                                <b-form-input id="year_of_incorporation" type="text" v-model="form.year_of_incorporation">
                                </b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col sm="4">
                            <b-form-group id="exampleInputGroup2" label="Description" label-for="exampleInput2">
                                <b-form-textarea id="description" v-model="form.description" :class="{ 'is-invalid': $v.form.description.$error }"></b-form-textarea>
                                <div class="invalid-feedback" v-if="!$v.form.description.required">Owner's E-mail is required</div>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <h5>Payment Types</h5>
                    <b-form-checkbox id="checkbox1" v-model="form.payment_methods[0]" value="accepted" unchecked-value="not_accepted">
                        Visa
                    </b-form-checkbox>
                    <b-form-checkbox id="checkbox2" v-model="form.payment_methods[1]" value="accepted" unchecked-value="not_accepted">
                        Mastercard
                    </b-form-checkbox>
                    <div class="btns">
                        <b-button type="submit" variant="primary">Continue to Media Info</b-button>
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
    name: 'OnboardingOperations',
    props: {
        business: {
            type: Object
        }
    },
    data() {
        return {
            form: {
                "owners_name": '',
                "owners_email": '',
                "business_tag_line": '',
                "description": '',
                "year_of_incorporation": '',
                "payment_methods": [],
                "hours_of_operation": {}
            },
            prevFormData: {
                "owners_name": '',
                "owners_email": '',
                "business_tag_line": '',
                "description": '',
                "year_of_incorporation": '',
                "payment_methods": [],
                "hours_of_operation": {}
            },
            isFormChanged: false
        }
    },
    validations: {
        form: {
            owners_email: {
                required
            },
            description: {
                required
            }
        }
    },
    components: {
        AdminNav,
        tabHeader
    },
    mounted() {
        this.$http.get('user/operations_info/' + this.currentLocation._id).then((response) => {
            if (response.body.operation_info) {
                this.form = response.body.operation_info;
                this.prevFormData = JSON.parse(JSON.stringify(response.body.operation_info));
            }
        })
    },
    computed: {
        currentLocation() {
            return this.$store.getters.getCurrentLocation;
        },
        getPaymentStatus() {
            var arr = [];
            arr.push(this.form.payment_methods[0]);
            arr.push(this.form.payment_methods[1]);
            return arr;
        }
    },
    methods: {
        onSubmit() {
            this.$v.$touch();
            if (!this.$v.$invalid) {
                this.prevFormData = JSON.parse(JSON.stringify(this.form));
                this.$http.post('user/operations_info/' + this.currentLocation._id, {
                    "owners_name": this.form.owners_name,
                    "owners_email": this.form.owners_email,
                    "business_tag_line": this.form.business_tag_line,
                    "description": this.form.description,
                    "year_of_incorporation": this.form.year_of_incorporation,
                    "payment_methods": this.getPaymentStatus,
                    "hours_of_operation": {}
                }).then(function (response) {
                    this.$emit('isSubmittedOpInfo', 'media')
                    // if (this.currentLocation.business_detail_flag.length === 0) {
                    //     this.$router.push({
                    //         name: 'Dashboard'
                    //     })
                    // }
                });
            }
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
                    this.isFormChanged = false;
                    this.$v.$touch();
                    if (!this.$v.$invalid) {
                        this.$emit('checkedOperationsForm', this.$v.$invalid)
                    }
                } else {
                    this.isFormChanged = true;
                }
            }
        }
    }
};
</script>

<style scoped>
.btn {
    margin-right: 16px;
}

.btns {
    margin-top: 30px;
}

.margin-right20 {
    margin-right: 20%;
}

.is-valid {
    border-color: lightgray;
}

.form-control.is-valid:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    -webkit-box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, .25);
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, .25);
}
</style>
