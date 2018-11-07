import Vue from 'nativescript-vue';
import bluetooth from 'nativescript-bluetooth';
import App from './components/App';
import firebase from 'nativescript-plugin-firebase';
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer)
Vue.use('bluetooth', () => require('nativescript-bluetooth').bluetooth);

new Vue({
//  router
  render: h => h('frame', [h(App)])
}).$start()
