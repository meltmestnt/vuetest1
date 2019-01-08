import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCoffee,
  faHome,
  faHandshake,
  faEnvelope,
  faUsers,
  faInfoCircle,
  faBookOpen
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faCoffee,
  faHome,
  faHandshake,
  faEnvelope,
  faUsers,
  faInfoCircle,
  faBookOpen
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;
document.body.style.margin = 0;

new Vue({
  render: h => h(App),
  router,
  components: {
    App
  }
}).$mount("#app");
