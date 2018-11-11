<template>
<div class="whitebg login">
    <Navbar whitebg v-if="!loadListingPage" />

    <div class="shadow-box listing-wrapper container">
        <a href="" class="print_link" v-on:click="printThis">Print This page</a>
        <b-row class="top-info">
            <b-col md="5" sm="12" class="text-center">
                <div :class="['graph-container',{'scan-done':scanDone}]">
                    <b-row>
                        <b-col cols="12">
                            <div class="loader" v-if="!scanDone">
                                <svg  xmlns="http://www.w3.org/2000/svg" height="200" width="200" viewBox="0 0 200 200" :data-value="this.progressDone">
                        <path class="bg" stroke="#ccc" d="M41 149.5a77 77 0 1 1 117.93 0"  fill="none"/>
                        <path class="meter" stroke="#09c" d="M41 149.5a77 77 0 1 1 117.93 0" fill="none" stroke-dasharray="350" stroke-dashoffset="350"/>
                      </svg>
                                <div class="loader-text">
                                    <div class="num-count">{{totalsites}}/24</div>
                                    <div class="numer">Scanned</div>
                                </div>
                                <div class="scanning">
                                    Scan in progress...
                                </div>
                            </div>
                        </b-col>
                        <b-col cols="6">
                            <div class="small" v-if="scanDone">
                                <line-chart ref="lineChart" v-if="showChart === true" :chart-data="datacollection" :options="chartOptions"></line-chart>
                            </div>
                        </b-col>
                        <b-col cols="6">
                            <div v-if="scanDone">
                                <div class="error-rate inaccurate">{{errorPercentage}}% <div>Error Rate</div>
                                </div>
                                <div class="fix-now-btn">
                                    <a href="" class="btn btn-primary">Fix now</a>
                                </div>
                            </div>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col cols="12">
                            <p v-if="scanDone === true" class="fix-info inaccurate text-left"><span class="bold">{{errorPercentage}}%</span> of your customers are seeing incorrect information when they search for you online</p>
                        </b-col>
                    </b-row>
                </div>
            </b-col>
            <b-col md="4" sm="12">
                <div class="blocks">
                    <b-row class="d-flex">
                        <b-col cols="6" class="mark-r">
                            <div class="count-wrap">
                                <div class="num inaccurate">{{inaccurate}}</div>
                                <div class="label">Inaccurate</div>
                            </div>
                        </b-col>
                        <b-col cols="6">
                            <div class="count-wrap">
                                <div class="num accurate">{{accurate}}</div>
                                <div class="label">Accurate</div>
                            </div>
                        </b-col>
                    </b-row>
                    <b-row class="d-flex">
                        <b-col cols="6" class="mark-r">
                            <div class="count-wrap">
                                <div class="num not-found">{{notfound}}</div>
                                <div class="label">Not Found</div>
                            </div>
                        </b-col>
                        <b-col cols="6">
                            <div class="count-wrap">
                                <div class="num total">{{accurate + inaccurate}}/24</div>
                                <div class="label">Found/Total</div>
                            </div>
                        </b-col>
                    </b-row>
                </div>
            </b-col>
            <b-col md="3" sm="12">
                <Business class="business-info" :businessName="business.businessName" :businessAddress="business.businessAddess" :businessCity="business.city" :businessState="business.state" :businessZipcode="business.zipCode" :businessPhone="business.businessPhone" />
                <a href="/contact" class="btn btn-try">Request a Demo</a>
            </b-col>
        </b-row>
        <div class="striped">
            <div class="listings">
                <ListingItem v-for="listing in listings" :name="listing.name" :address="listing.address" :phone="listing.phone" :url="listing.url" :siteName="listing.siteName" v-bind:data="listing" v-bind:key="listing.text" :match="getIcon(listing.match)" showStatus>
                </ListingItem>
            </div>
        </div>
        <!-- <Listingshimmer></Listingshimmer> -->
    </div>
    <Footer v-if="!loadListingPage" />
</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import LineChart from './LineChart.js'
import VueResource from 'vue-resource'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
// import VueCircle from 'vue2-circle-progress'
// import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import ListingItem from '@/components/ListingItem'
import Business from '@/components/Business'
Vue.use(VueResource);
export default {
    name: 'Listing',
    components: {
        'ListingItem': ListingItem,
        'Business': Business, // 'Listingshimmer': Listingshimmer
        'Navbar': Navbar,
        'Footer': Footer,
        'LineChart': LineChart,
        // 'VueCircle': VueCircle
    },
    data() {
        return {
            fill: {
                gradient: ["red", "green", "blue"]
            },
            scanDone: false,
            showChart: false,
            datacollection: null,
            searchId: '',
            isPolling: false,
            listings: [],
            user_password: "",
            paid: true,
            token: "",
            userid: "",
            business: {
                businessName: '',
                businessAddess: '',
                city: '',
                state: '',
                zipCode: '',
                businessPhone: ''
            },
            progressDone: 0,
            accurate: 0,
            inaccurate: 0,
            notfound: 0,
            totalsites: 0,
            dataPieces: [],
            chartOptions: {
                responsive: true, // my new default options
                // maintainAspectRatio: false, // my new default options
                legend: {
                    display: false
                }
            }
        }
    },
    props: {
        siteName: {
            type: String
        },
        url: {
            type: String
        },
        name: {
            type: String
        },
        address: {
            type: String
        },
        phone: {
            type: String
        },
        match: {
            type: String
        },
        loadListingPage: false,
        businessId: ''
    },
    created: function () {
        this.searchId = this.$route.params.id;
        console.log(this.businessId)
        if (this.businessId) {
            this.searchId = this.businessId;
        }
    },
    mounted: function () {
        this.getResults();
        this.updateProgress();
        setTimeout(() => {
            if (this.listings.length < 24) {
                this.timer = setInterval(() => {
                    this.getResults();
                    this.updateProgress();
                }, 3000);
            }
            this.updateProgress();
        }, 2000);

        // console.log(this.searchId);
    },
    computed: {
        errorPercentage() {
            return (((this.inaccurate + this.notfound) / this.totalsites) * 100).toFixed();
        }
    },
    methods: {
        getProgress() {
            return (this.listings.length / 24) * 100;
        },
        getTotal() {
            return this.correct + this.incorrect + this.missing;
        },
        getError() {
            return (((this.incorrect + this.missing) / this.getTotal()) * 100).toFixed();
        },
        getIcon(item) {
            if (item == -1) {
                return 'https://s3.us-east-2.amazonaws.com/submitlocal/missing.svg';
            }
            if (item == 0) {
                return 'https://s3.us-east-2.amazonaws.com/submitlocal/incorrect.svg';
            }
            if (item == 1) {
                return 'https://s3.us-east-2.amazonaws.com/submitlocal/correct.svg';
            }
        },
        getResults: function () {
            // if (localStorage.getItem('businessId')) {
            //     this.searchId = localStorage.getItem('businessId')
            // }
            this.dataPieces = [];
            if (this.listings.length >= 24) {
                clearInterval(this.timer);
            }
            this.$http.get('address/' + this.searchId).then(function (response) {
                this.listings = response.data.scan_address;
                this.accurate = response.data.accurate;
                this.inaccurate = response.data.inaccurate;
                this.notfound = response.data.notfound;
                this.totalsites = response.data.scan_address_length;
                this.progressDone = (response.data.scan_address_length / 24) * 100;
                this.updateProgress();
                this.userid = response.data.user_id;
                this.business = response.data.business_address;
                this.listings.map((address, i) => {
                    this.dataPieces.push(address.match)
                    // this.$refs.lineChart.update()
                })
                // this.getRandomInt();
                // this.datacollection.datasets[0].data = [this.correct,this.incorrect,this.missing]
                this.fillData()
                this.showChart = true;
                if (this.listings.length == 24) {
                    this.scanDone = true
                }
            }, function (response) {
                console.log(response)
            });
        },
        printThis: function (e) {
            e.preventDefault()
            window.print();
        },
        fillData() {
            this.datacollection = {
                labels: ['Correct', 'Incorrect', 'Listing Missing'],
                datasets: [{
                    label: 'Data One',
                    backgroundColor: ["#44bd32", "#e84118", "#9E9E9E"],
                    data: [this.accurate, this.inaccurate, this.notfound]
                }]
            }
        },
        getRandomInt() {
            this.missing = 0, this.incorrect = 0, this.correct = 0;
            for (var i = 0; i < this.dataPieces.length; ++i) {
                if (this.dataPieces[i] == -1) {
                    this.missing++;
                }
                if (this.dataPieces[i] == 0) {
                    this.incorrect++;
                }
                if (this.dataPieces[i] == 1) {
                    this.correct++;
                }
            }
        },
        updateProgress() {
            // Get all the Meters
            const meters = document.querySelectorAll('svg[data-value] .meter');

            meters.forEach((path) => {
                // Get the length of the path
                let length = path.getTotalLength();
                // console.log(length) once and hardcode the stroke-dashoffset and stroke-dasharray in the SVG if possible 
                // or uncomment to set it dynamically
                // path.style.strokeDashoffset = length;
                // path.style.strokeDasharray = length;

                // Get the value of the meter
                let value = parseInt(path.parentNode.getAttribute('data-value'));
                // Calculate the percentage of the total length
                let to = length * ((100 - value) / 100);
                // Trigger Layout in Safari hack https://jakearchibald.com/2013/animated-line-drawing-svg/
                path.getBoundingClientRect();
                // Set the Offset
                path.style.strokeDashoffset = Math.max(0, to);
            });
        }
    }
};
</script>

<style lang="scss" scoped>
table {
    border-collapse: separate;
    border-spacing: 0 30px;
}

.name {
    font-size: 21px;
}

.address {
    font-size: 18px;
}

.phone {
    font-size: 18px;
}

.top-info {
    margin-bottom: 24px;

    .business-info {
        padding: 16px 0 26px 0;

        p {
            margin-bottom: 10px !important;
        }
    }
}

.business-logo {
    padding-bottom: 30px;

    img {
        max-width: 240px;
    }
}

.blocks {
    height: 100%;

    .d-flex {
        height: 50%;
        align-items: center;
        justify-content: center;
    }

    .count-wrap {
        height: 100%;

        .label {
            font-size: 18;
        }

        .num {
            font-size: 54px;
            font-weight: 500;
        }
    }
}

.mark-r {
    border-right: 1px solid #E0E0E0;
}

.mark-l {
    border-left: 1px solid #E0E0E0;
}

.mark-b {
    border-bottom: 1px solid #E0E0E0;
}

.inaccurate {
    color: #df0000;
}

.accurate {
    color: #4ec353;
}

.not-found {
    color: #9E9E9E;
}

.total {
    color: #444;
}

.graph-container {
    border-radius: 4px;
    padding: 20px;
    background-color: #ffffff;
    border: 1px solid #E0E0E0;
}

.graph-container.scan-done {

    background-color: rgb(255, 241, 241);
    border: 1px solid rgb(255, 208, 208);
}

.error-rate {
    line-height: normal;
    font-size: 46px;

    &>div {
        font-size: 23px;
        font-weight: 400;
        color: #777;
    }
}

.fix-info {
    margin: 16px 0 0 0;
}

.fix-now-btn {
    margin-top: 16px;

    .btn {
        background-color: #10bc47;
        border-color: #10bc47;
        text-transform: uppercase;
    }
}

.bold {
    font-size: 24px;
    font-weight: 700;
}

.btn-try {
    border: 1px solid #E0E0E0;
    color: #999;

    &:hover {
        background-color: #999;
        color: #fff;
        border-color: #999;
    }
}

svg path {
    will-change: auto;
    stroke-width: 20px;
    stroke-miterlimit: round;
    transition: stroke-dashoffset 850ms ease-in-out;
}

.loader {
    .scanning {
        animation: blinker 2s linear infinite;
        font-size: 18px;
    }

    position: relative;

    .loader-text {
        position: absolute;
        top: 68px;
        left: 0;
        right: 0;
        margin: auto;
        text-align: center;

        img {
            width: 50px;
        }

        .numer {
            font-size: 18px;
        }

        .num-count {
            font-size: 36px;
        }
    }
}

@keyframes blinker {
    50% {
        opacity: 0;
    }
}

.listing-wrapper {
    margin-bottom: 120px;
}
</style>
