import { createStore } from 'vuex'

import HomeData from "./home/index.js"
import ContactData from "./contact/index.js"
 
const store = createStore({
  state() {
    return{
    }
  },
  mutations: {

  },
  actions: {

  },
  modules: {
    ContactData : ContactData,
    HomeData : HomeData,
  }
})
export default store