<template>
   <div>
 
        <!-- <nav>
            <div class="container">
                <a class="navbar-brand" title="Submitlocal" href="/"></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a title="Features" class="nav-link" href="/features.html">Features</a>
                        </li>
                        <li class="nav-item">
                            <a title="Pricing" class="nav-link" href="/pricing.html">Pricing</a>
                        </li>
                        <li class="nav-item">
                            <a title="Contact" class="nav-link" href="/contact.html">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a title="About" class="nav-link" href="/about.html">About</a>
                        </li>
                        <li class="nav-item" v-if="!isLoggedIn">
                            <router-link class="nav-link" :to="{ name: 'Login' }">Login</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> -->

        <b-container>
                <b-navbar toggleable="md" type="dark" variant="info" :class="'navbar navbar-expand-lg navbar-light ' + `${getwhitebg()}`">

                
              <b-navbar-brand href="/"></b-navbar-brand>
              <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

              <b-collapse is-nav id="nav_collapse">

                <b-navbar-nav class="ml-auto">
                  <b-nav-item title="Features" class="nav-link" href="/features">Features</b-nav-item>
                  <b-nav-item title="Pricing" class="nav-link" href="/pricing">Pricing</b-nav-item>
                  <b-nav-item title="Contact" class="nav-link" href="/contact">Contact</b-nav-item>
                  <b-nav-item title="About" class="nav-link" href="/about">About</b-nav-item>
                  <b-nav-item title="Login" class="nav-link" href="/login">Login</b-nav-item>
                </b-navbar-nav>
                    
              </b-collapse>
              
            </b-navbar>
        </b-container>
   </div>
</template>
<script>
export default {
    name: 'Navbar',
    computed: {
    isLoggedIn() {
        return this.$store.getters.isLoggedIn;
      }
    },
    props: {
        whitebg: {
            type: Boolean,
            default: false
        }
    },  
    mounted: function(){
    },
    methods: {
        getwhitebg() {
            return this.whitebg ? 'nav-lightbg': '';
        }
    }
}
</script>
<style scoped lang="scss">
    nav.navbar.bg-info {
        background: none !important;
    }

    @media screen and (max-width: 768px) {
        .navbar {
            padding: 20px 0;
        }
    }

    .nav-lightbg {
        background: none;
    }

    .red-alert {
        background: #f9e4e4;
        color: red;
        text-align: center;
        padding: 16px;
    }

    .nologo a.navbar-brand {
        display: none;
    }
</style>
