<template>
<div class="fixed-top">
    <div class="fixed-layout">
        <b-navbar fixed toggleable="md" type="dark" variant="info">
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

            <b-navbar-brand to="/dashboard" @click="reloadCurrentRote">
            </b-navbar-brand>
            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav>
                    <b-nav-item href="#">
                        <b-form-select class="full" v-model="selectedLoc" :disabled="disableLocationSwitch">
                            <option v-for="project in getAllCurrentLocs" v-bind:value="project._id">{{ project.address.businessName }} - {{ project.address.businessAddess }}, {{ project.address.city }} {{ project.address.state }}, {{ project.address.zipCode }}
                            </option>
                        </b-form-select>
                    </b-nav-item>
                    <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
                </b-navbar-nav>
                <button class="btn btn-success" @click="loadScanTool" :disabled="disableLocationSwitch"><i class="fa fa-location-arrow"></i>Add new location</button>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown right>
                        <!-- Using button-content slot -->
                        <template slot="button-content">
                            <em><i class="fa fa-user" aria-hidden="true"></i></em>
                        </template>
                        <b-dropdown-item to="onboarding" :disabled="disableLocationSwitch">Edit Location</b-dropdown-item>
                        <b-dropdown-item to="dashboard">Dashboard</b-dropdown-item>
                        <b-dropdown-item to="logout">Signout</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</div>
</template>

<script>
import dropdown from 'vue-dropdowns';
export default {
    name: 'AdminNav',
    components: {
        'dropdown': dropdown,
    },
    data() {
        return {
            allLocations: []
        }
    },
    props: {
        disableLocationSwitch: false
    },
    watch: {
        selectedLoc(newval) {
            var current = {};
            this.getAllCurrentLocs.map((el, i) => {
                if (newval === el._id) {
                    return current = el;
                }
            })
            return this.$store.dispatch('location', current).then(response => {}, error => {});
        }
    },
    computed: {
        selectedLoc: {
            get() {
                return this.$store.getters.getCurrentLocation._id;
            },
            set(newval) {
                var current = {};
                this.getAllCurrentLocs.map((el, i) => {
                    if (newval === el._id) {
                        return current = el;
                    }
                })
                return this.$store.dispatch('location', current).then(response => {}, error => {});
            }
        },
        locationIds() {
            this.$store.getters.getCurrentLocation._id;
        },
        // getCurrentLocation: {
        //   set(newval){
        //     return this.$store.dispatch('location', newval).then(response => { console.log("succcess") 
        //     }, error => {});
        //   },
        //   get() {
        //     return this.$store.getters.getCurrentLocation.address.businessName;
        //   }
        // },
        getAllCurrentLocs() {
            return this.$store.getters.getAllLocations;
        }
    },
    mounted() {
        this.buildlocations();
        document.body.className = "home";
        // this.allLocations = this.getAllCurrentLocs;
    },
    methods: {
        getSelected(loc) {
            if (this.getCurrentLocation === loc) {
                return "selected"
            }
        },
        buildlocations() {
            var arr = [];
            var arr = this.getAllCurrentLocs.map((el, i) => {
                return el.address.businessName;
            })
            this.allLocations = arr;
            return arr;
        },
        loadScanTool() {
            this.$emit('loadScanTool', true)
        },
        reloadCurrentRote() {
            if (this.disableLocationSwitch) {
                this.$router.go(this.$router.currentRoute)
            }
            console.log(this.$router.currentRoute)
            // 
        }
        // onLocChange() {
        //   console.log(this.getCurrentLocation);
        //   this.$store.dispatch('location', this.getCurrentLocation).then(response => { console.log("succcess") 
        //   }, error => {
        //     // self.errorMsg = error;
        //     // self.alertVis = true
        //   });
        // }
    }
}
</script>

<style lang="scss" scoped>
.fixed-top {
    top: 0 !important;
    background: #2F8DC4 !important;
    border: none !important;
    position: fixed !important;
    left: 0;
    right: 0;
    z-index: 99;
}

nav {
    background: #2F8DC4 !important;
}

.navbar-dark .navbar-brand {
    background: url(https://s3.us-east-2.amazonaws.com/submitlocal/logo-inverted.svg) !important;
    background-size: contain !important;
    background-repeat: no-repeat !important;

    img {
        width: 180px;
    }
}

.full {
    background-color: #fff;
    height: 44px;
}
</style>
