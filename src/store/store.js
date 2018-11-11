import Vue from 'vue'
import router from '../router'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
import Vuex from 'vuex'
Vue.use(Vuex)

// import axios from 'axios'
// Vue.prototype.http = axios;

const state = {
  isLoggedIn: !!localStorage.getItem("token"),
  isAdminLoggedIn: !!localStorage.getItem("admintoken"),
  authToken: '',
  currentLocation: {},
  locations: []
  // business_logo: {}
}

// const getters = {
//  isLoggedIn: loggedInStatus 
// }

const getters = {
  // getBusinessLogo: state => {
  //   return state.business_logo;
  // },
  isLoggedIn: state => {
    return state.isLoggedIn
  },
  isAdminLoggedIn: state => {
    return state.isLoggedIn
  },
  getCurrentLocation: state => {
    return state.currentLocation;
  },
  getAllLocations: state => {
    return state.locations;
  }
}

const mutations = {
  // setBusinessLogo: function(state, business_logo) {
  //   state.business_logo = business_logo;
  // },
  addCurrentLocation: function(state, currentLocation) {
    state.currentLocation = currentLocation;
  },
  addLocations: function(state, locations) {
    state.locations = locations;
  },
  addWebToken: function(state, authToken) {
    state.authToken = authToken;
    state.isLoggedIn = true;
  },
  removeWebToken: function(state) {
    state.authToken = '';
    state.isLoggedIn = false;
    state.currentLocation = {};
    state.locations = [];
  },
  removeLogo: function(state) {
    state.business_logo = {};
  }
}

const actions = {
  // refreshLogo: function(context) {
  //   context.commit('removeLogo');
  // },
  // logo: function(context, business_logo) {
  //   context.commit('setBusinessLogo', business_logo);
  // },
  all_locations: function(context,locations) {
    context.commit('addLocations', locations)
  },
  location: function(context, currentLocation) {
    context.commit('addCurrentLocation', currentLocation);
  },
  login: function(context, user) {
    return new Promise((resolve,reject) => {
      Vue.http.post('user/login', {
        "email": user.email,
        "password": user.password
      }).then(function(response) {
        if (response.data.auth === true) {
          context.commit('addWebToken', response.data.token);
          router.push('/dashboard')
          resolve(response);
        }else {
          reject("Incorrect username or password.");
        }
      },(err) => {
          reject("Incorrect username or password.");
      }).catch((e) => {
        console.log("Caught", e);
      })
    })
  },
  logout: function(context) {
    Vue.http.get('user/logout').then(function(response) {
      context.commit('removeWebToken');
    });
  }
}

const plugins = [createPersistedState()];

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  plugins
})
