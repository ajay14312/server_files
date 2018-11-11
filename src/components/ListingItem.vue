<template>
	<div class="listing d-flex">
     <!-- <b-col sm="12" md="4" lg="4" class="listing"> -->
        <div class="imgHolder show-mobile"><img class="matchImg" :src="match" alt=""></div>
        <b-row>
            <b-col sm="12" md="3">
                <div class="brandinfo">
                    <img class="brandLogo" v-bind:src="imgsrc" alt="">
                    <!-- <div>{{siteName}}</div> -->
                </div>
            </b-col>
            <b-col sm="12" md="4">
                <div class="card-text">
                  {{address}}
                </div>
            </b-col>
            <b-col sm="12" md="2">
                <div class="phone">{{phone}}</div>
            </b-col>
<!--             <b-col sm="12" md="1">
                <div v-if="showState">{{status}}</div>
            </b-col> -->
            <b-col sm="12" md="1">
                <div>
                    <div class="imgHolder show-desktop"><img class="matchImg" :src="match" alt=""></div>
                </div>
            </b-col>
            <b-col sm="12" md="2">
                <div class="linksnstat"><a :href="url" :class="this.getClass()">{{this.found()}}</a></div>
            </b-col>
        </b-row>
        
      <!-- <b-card :title="name"
              img-alt="Image"
              img-top
              tag="article"
              class=""> -->
        

        
        
        
		
        <!-- <b-button  target="_blank" variant="primary">Go to Listing</b-button> -->
      <!-- </b-card> -->
      <!-- <pulse-loader :loading="loading" :color="color" :size="size"></pulse-loader> -->
    <!-- </b-col>    -->
    </div>
</template>
<script>
    // import axios from 'axios';
    import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
    // import ListingItem from '@/components/ListingItem';
    import Listingshimmer from '@/components/Listingshimmer';
    export default {
        name: 'ListingItem',
        components: {
        	PulseLoader,
        	'Listingshimmer': Listingshimmer
        },
        data() {
            return {
                searchId: '',
                color: '#5dc596',
                size: '15px',
                loading : true,
                listings: [],
                imgsrc: 'https://s3.us-east-2.amazonaws.com/submitlocal/'+this.siteName+'.png',
                matchImg: this.matchCal()
            }
        },
        computed: {
          showState: function () {
            return !this.showStatus;
          }
        },
        props: {
            showStatus: Boolean,
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
            status: {
              type: String
            }
        },
        mounted: function() {
        	this.loading = false;
        },
        methods: {
            getClass() {
                if(!this.url) {
                    return "inaccurate"
                }
            },
            found() {
                if(this.url) {
                    return "VIEW LISTING"
                }else {
                    return "NOT FOUND"
                }
            },
            matchCal() {
                if (this.match === "true") {
                    return "https://s3.us-east-2.amazonaws.com/submitlocal/checked.png"
                } else {
                    return "https://s3.us-east-2.amazonaws.com/submitlocal/cancel.png"
                }
            }
        }
    }
</script>
<style scoped lang="scss">
	.listing {
		text-align: center;
        flex-grow: 1;
        flex-basis: 0;
        min-height: 120px;
        padding: 16px 0;
        box-shadow: 0 1px 4px rgba(41,51,57,.5);
        border-radius: 6px;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
        >div {
            flex: 1;
            align-items: center;
      justify-content: center;
        }
	}
	.siteName {
		display: inline-block;
		// background: #f5f5f5;
		font-size: 16px;
		font-weight: 500;
		padding: 10px 20px;
		border-top-left-radius: 4px;
		border-top-right-radius: 4px;
	}
	.card {
		margin: auto;
	}
    .matchImg {
        width: 25px;
    }
    .brandLogo {
        max-height: 35px;
        max-width: 200px;
    }
    .brandinfo {
        padding: 16px;
        // background: #ccc;
        img {
            max-width: 100%;
        }
    }
    tr {
    		
        td {
            // border: 1px solid rgba(19,102,166,0.16);
            background: none;
            padding-left: 16px;
            padding-right: 16px;
            &:first-child {
                background: rgba(51,51,51,0.5);
                text-align: center;
                border-top-left-radius: 6px;
                border-bottom-left-radius: 6px;
            }
            &.linksnstat {
              position: relative;
              color: #ffffff;
              a {
                color: #007bff !important;
              }
              .imgHolder {
                
                background: #fff;
                img {
                  width: 30px;
                }
              }
            }
        }
    }

    .linksnstat {
        padding: 16px;
    }

    .inaccurate {
        color: #df0000 !important;
    }

    .show-desktop {
        display: block;
    }
    .show-mobile {
        display: none;
    }

    @media screen and (max-width: 768px) {
        .brandinfo {
            padding-top: 5px;
            // margin-bottom: 16px;
            padding-right: 46px;
            padding-left: 0;
        }
        .show-desktop {
            display: none;
        }
        .show-mobile {
            display: block;
        }
        .card-text {
            width: 100%;
            // padding: 0 16px;
        }
        .phone {
            // padding: 0 16px;
        }
        .listing {
            text-align: left;
            height: auto;
            padding: 16px;
            position: relative;
            .imgHolder {
                position: absolute;
                right: 16px;
                top: 16px;
            }
        }
        .blocks {
            margin-top: 16px;
            padding-bottom: 16px;
        }
        .linksnstat {
            padding-left: 0;
            padding-bottom: 0;
        }
    }

</style>
