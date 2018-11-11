<template>
<!-- 	<div class="top-nav">
            <div class="container">
                <div class="row d-flex">
                    <span v-if="isNotDash" class="align-self-center d-none d-md-block">Fix your Business Information across the web!</span>
                    <ul v-if="" class="ml-auto d-flex align-self-center">
                        <li v-if="!isLoggedIn" class="align-middle">
                            <router-link to="login">Sign in</router-link>
                        </li>
                        <li class="align-middle">
                            <a href="">Support</a>
                        </li>
                        <li v-if="isLoggedIn && isNotDash" class="align-middle">
                            <router-link to="dashboard">Dashboard</router-link>
                        </li>
                        <li v-if="isLoggedIn" class="align-middle">
                            <router-link to="logout">Logout</router-link>
                        </li>
                        <li v-if="!isLoggedIn" class="align-middle">
                            <a href="" class="demo-item">Request a Demo</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div> -->
</template>
<script>
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default {
	name: 'TopNav',
    props: {
        inDash: Boolean
    },
    data() {
        return {
            
        }
    },
    computed: {
      isLoggedIn() {
          return this.$store.getters.isLoggedIn;
      },
      isNotDash() {
          return !this.inDash;
      }
    }
};
</script>
<style lang="scss">
  .top-nav {
    position: fixed;
    background: #fff;
    top: 0;
    right: 0;
    left: 0;
    color: #a0a0a0;
    border-bottom: 1px solid #e0e0e0;
    z-index: 99;
    ul {
        margin: 0;
        padding: 0;
        border-left: 1px solid #e0e0e0;
        li {
            list-style-type: none;
            display: inline-block;
            vertical-align: top;
            border-right: 1px solid #e0e0e0;
            a {
                padding-top: 0.5rem;
                padding-bottom: 0.5rem;
                display: block;
                color: inherit;
                font-size: 0.8125rem;
                padding-left: 1rem;
                padding-right: 1rem;
                &.demo-item {
                    background: #81EA59;
                    color: #fff;
                }
            }
        }
    }
}
</style>