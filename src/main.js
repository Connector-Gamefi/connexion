import Vue from "vue";
import "./assets/js/filter/filter";
import ElementUI from "element-ui";
// import vConsole from "vconsole";
import store from "./store/store";
import router from "./router";
import i18n from "./i18n/i18n";
import "./components/index";
import App from "./App";
import "element-ui/lib/theme-chalk/index.css";

import "./assets/less/theme.less";
import "./assets/less/base.less";
import "./assets/less/ui_reset.less";
import "./assets/less/animation.css"
import "./assets/less/front.less";
import "./assets/less/animation.css";
import "./assets/less/flex.less";
import "animate.css"
import 'flex.css';
import animated from 'animate.css';

Vue.use(animated)
import vueAwesomeCountdown from "vue-awesome-countdown";

Vue.use(vueAwesomeCountdown, "vac");

Vue.config.devtools = process.env.NODE_ENV !== "production";

if (Vue.config.devtools || process.env.NODE_ENV === "prerelease") {
    // new vConsole();
} else {
    // Vue.config.productionTip = false;
}
Object.defineProperty(Vue.prototype, "$link", {
    value: 'https://d2svbor5ih31il.cloudfront.net/media2/',
    writable: false
});
Object.defineProperty(Vue.prototype, "$linkImg", {
    value: 'https://d2svbor5ih31il.cloudfront.net',
    writable: false
});

Vue.use(ElementUI);


new Vue({
    render: h => h(App),
    router,
    store,
    i18n
}).$mount("#app");
