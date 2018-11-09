<template>
<div>
    <Loading :active.sync="isLoading" :is-full-page="true" :can-cancel="false"></Loading>
    <AdminNav />
    <div class="main-content fixed-layout">
        <div class="tab-view">
            <ul class="tabs">
                <li>
                    <a href="" :class="{'active':screen === 'business'}" @click.prevent="changeTab('business')"><span>1</span>Business</a>
                </li>
                <li>
                    <a href="" :class="{'active':screen === 'ops'}" @click.prevent="changeTab('ops')"><span>2</span>Operations</a>
                </li>
                <li>
                    <a href="" :class="{'active':screen === 'media'}" @click.prevent="changeTab('media')"><span>3</span>Media</a>
                </li>
            </ul>
        </div>
        <OnboardingBusiness v-if="screen === 'business'" v-on:isSubmittedBussInfo="getData($event)" />
        <OnboardingOperations v-if="screen === 'ops'" v-on:isSubmittedOpInfo="getData($event)" />
        <OnboardingMedia v-if="screen === 'media'" />
    </div>
</div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
import AdminNav from '@/components/AdminNav'
import OnboardingTabs from '@/components/OnboardingTabs'
import OnboardingBusiness from '@/components/OnboardingBusiness'
import OnboardingOperations from '@/components/OnboardingOperations'
import OnboardingMedia from '@/components/OnboardingMedia'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.min.css';
Vue.use(Vuex)
Vue.use(Loading);
export default {
    name: 'Onboarding',
    components: {
        AdminNav,
        Loading,
        OnboardingBusiness,
        OnboardingOperations,
        OnboardingMedia,
        OnboardingTabs
    },
    data() {
        return {
            'screen': '',
            'isLoading': false
        }
    },
    watch: {
        screen(val) {
            // this.isLoading = true;
        }
    },
    mounted() {
        // this.isLoading = true;
        this.screen = 'business';
    },
    methods: {
        changeTab(screenName) {
            this.screen = screenName
        },
        getData: function (data) {
            this.screen = data;
        }
    }
};
</script>

<style scoped>
.main-content {
    padding-bottom: 60px;
}

.tab-view {
    padding: 0;
    margin: 0;
    position: fixed;
    left: 0;
    right: 0;
    top: 80px;
    z-index: 98;
    background-color: #1162A2;
}

.tabs {
    padding: 0;
    margin: 0;
    max-width: 1200px;
    margin: auto;
}

.tabs li {
    display: inline-block;
    vertical-align: top;
}

.tabs li a {
    display: block;
    padding: 15px;
    line-height: 1.6;
    color: #fff;
    opacity: 0.56;
    font-size: 16px;
}

.tabs li a:hover {
    text-decoration: none;
}

.tabs li a.active {
    opacity: 1;
    font-weight: 500;
}

.tabs li a>span {
    display: inline-block;
    vertical-align: top;
    margin-right: 8px;
    position: relative;
    width: 26px;
    height: 26px;
    text-align: center;
    font-weight: 500;
}

.tabs li a>span:before {
    content: "";
    position: absolute;
    left: 0;
    top: -1px;
    right: 0;
    width: 100%;
    height: 100%;
    border: 2px solid #fff;
    border-radius: 50%;
}

.tabs li a {}
</style>
