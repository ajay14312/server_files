import Vue from 'vue'
import Vuex from 'vuex'
import store from '../store/store'


import Router from 'vue-router'
import Meta from 'vue-meta'
import About from '@/components/About'
import Features from '@/components/Features'
import Pricing from '@/components/Pricing'
import Contact from '@/components/Contact'
import Scan from '@/components/Scan'
import ScanTool from '@/components/ScanTool'
import Home from '@/components/Home'
import Listing from '@/components/Listing'
import Login from '@/components/Login'
import AdminLogin from '@/components/admin/AdminLogin'
import Logout from '@/components/Logout'
import Dashboard from '@/components/Dashboard'
import resetPassword from '@/components/resetPassword'
import ReviewGen from '@/components/ReviewGen'
import RankChecker from '@/components/RankChecker'
import Reviews from '@/components/Reviews'
import NotFoundComponent from '@/components/NotFoundComponent'
import PrivacyPolicy from '@/components/PrivacyPolicy';
Vue.use(Router)
Vue.use(Meta)

Vue.use(Vuex)

export default new Router({
  mode: 'history',
  history: true,
  hashbang: false,
  linkActiveClass: 'active',
  routes: [
  { path: '*', component: NotFoundComponent },
  {
      path: '/',
      name: 'Scan',
      component: Scan
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/features',
      name: 'Features',
      component: Features
    },
    {
      path: '/pricing',
      name: 'Pricing',
      component: Pricing
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/search/:id',
      name: 'Listing',
      component: Listing
    },
    {
      path: '/scan',
      name: 'ScanTool',
      component: ScanTool    
    },
    {
      path: '/admin',
      name: 'Admin',
      component: AdminLogin
    },
    {
      path: '/forgot-password',
      name: 'resetPassword',
      component: resetPassword
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: Reviews
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: (to, from, next) => {
        if(store.state.isLoggedIn) {
          next({name: 'Dashboard'})
        }else {
          next()
        }
      }
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout,
      beforeEnter: (to, from, next) => {
        if(store.state.isLoggedIn) {
          store.dispatch('logout');
          next({name: 'Scan'})
        }else {
          next()
        }
      }
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: { auth: true },
      beforeEnter: (to, from, next) => {
        if(store.state.isLoggedIn) {
          next()
        }else {
          next({name:'Scan'})
        }
      }
    },
    {
      path: '/reviewGen',
      name: 'ReviewGen',
      component: ReviewGen,
      meta: { auth: true },
      beforeEnter: (to, from, next) => {
        if(store.state.isLoggedIn) {
          next()
        }else {
          next({name:'Scan'})
        }
      }
    },
    {
      path: '/rankChecker',
      name: 'RankChecker',
      component: RankChecker,
      meta: { auth: true },
      beforeEnter: (to, from, next) => {
        if(store.state.isLoggedIn) {
          next()
        }else {
          next({name:'Scan'})
        }
      }
    },
    {
      path: '/privacy-policy',
      name: 'PrivacyPolicy',
      component: PrivacyPolicy
    },
    // {
    //   path: '*',
    //   name: '404',
    //   component: Vue.extend({
    //       template: "",
    //       created: function() {
    //           window.location.href = "/404.html";
    //       }
    //   })
    // }
  ]
})

// Router.beforeEach((to, from, next) => {
//     if(to.path != '/login') {
//         if(checkToken()) { 
//             logger('There is a token, resume. (' + to.path + ')');
//             next();
//         } else {
//             logger('There is no token, redirect to login. (' + to.path + ')');
//             next('login');
//         }
//     } else {
//         logger('You\'re on the login page');
//         next(); // This is where it should have been
//     }
//     // next(); - This is in the wrong place
// });
