import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue3 from 'bootstrap-vue-3'
import { library } from '@fortawesome/fontawesome-svg-core'
import {  faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import VueToast from 'vue-toast-notification';
import Unicon from 'vue-unicons'
import { uniLinkedinAltThinline, uniInstagram ,uniTelegramAltThinline, uniGithubAltThinline , uniCalender , uniMapMarkerAlt , uniEnvelopeAlt , uniMultiplyThinline , uniPhoneAlt} from 'vue-unicons/dist/icons'

import BaseDialog from "./components/UI/BaseDialog.vue"

import 'vue-toast-notification/dist/theme-sugar.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
library.add(faQuoteLeft)
Unicon.add([uniLinkedinAltThinline, uniTelegramAltThinline, uniGithubAltThinline , uniInstagram , uniCalender , uniMapMarkerAlt , uniEnvelopeAlt , uniMultiplyThinline , uniPhoneAlt])



const app = createApp(App)
app.component('base-dialog', BaseDialog)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(store)
app.use(router)
app.use(BootstrapVue3)
app.use(VueToast)
app.use(Unicon)
app.mount('#app')
