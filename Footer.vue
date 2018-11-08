<template>
    <footer v-bind:class="classObject" role="contentinfo">
            <div class="footer-middle">
                <div class="container">
                    <div class="row">
                        <!-- <div class="col-md-6 text-right col-sm-6">
                            <div class="footer-pad">
                                <img class="logo" src="../assets/img/logo-inverted.svg" alt="">
                                <address>
                                    <ul class="list-unstyled">
                                        <li>
                                            1013 Center Rd, Suite 403S Wilmington, DE 19805 USA
                                        </li>
                                        <li>help@submitlocal.com</li>
                                    </ul>
                                </address>
                            </div>
                        </div> -->
                        <div class="col-md-6 text-left col-sm-6">
                            <p class="text-xs-center">&copy; Copyright 2018 - Submitlocal LLC - All rights reserved.</p>
                        </div>
                        <div class="col-md-6 col-sm-6 text-right">
                            <!--Column1-->
                            <div class="footer-pad">
                                <!-- <h4></h4> -->
                                <ul class="list-unstyled">
                                <li><router-link to="/features">Features</router-link></li>
                                <li><router-link to="/pricing">Pricing</router-link></li>
                                <li><router-link to="/contact">Contact</router-link></li>
                                <li><router-link to="/about">About</router-link></li>
                                <!-- <li><a href="#">Free Scan</a></li> -->
                                <li><a href="http://blog.submitlocal.com/">blog</a></li>
                                <li><router-link to="/privacy-policy">Privacy Policy</router-link></li>
                                <!-- <li><a href="https://docs.google.com/document/d/1KUFALWLRCncTiRVQ40q6VuSPjBm8sVqslPnuqcCbCgM/edit?usp=sharing">Privacy Policy</a></li> -->
                              </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
<!--             <div class="footer-bottom">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <p class="text-xs-center">&copy; Copyright 2018 - Submitlocal LLC - All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div> -->
        </footer>
</template>
<script>
    export default {
        name: 'Footer',
        data() {
            return {
                defaultClass: true
            }
        },
        props: {
            colorBg: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            classObject: function () {
                return {
                    'mainfooter': this.defaultClass,
                    'colorBg': this.colorBg
                }
            }
        }
    }
</script>
<style scoped>
    footer.colorBg {
        background: linear-gradient(87deg, #2d008e, #006cff) !important;
    }
</style>
