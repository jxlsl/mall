import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

import {request} from "./network/request";

request({
  url:"/home/multidata",
}).then(res =>{
  console.log(res);
}).catch(err =>{
  console.log(err);
})