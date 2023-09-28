import Vue from 'vue';
import Vuex from 'vuex';
import {Ajax} from "../axios/http";

const API = process.env.VUE_APP_HTTP;
Vue.use(Vuex);


export default new Vuex.Store({
    modules: {},
    state: {
        theme: localStorage.getItem('theme') || 'dark',
        rootEl: document.documentElement,
        bodyEl: document.body,
    },
    getters: {
        theme(state) {
            return state.theme;
        },
    },
    mutations: {
        theme(state, val) {
            state.theme = val;
            localStorage.setItem('theme', val);
        },
    },
    actions: {
        subScriptEmail({commit}, data) {
            return Ajax('POST', API + 'web/subscribe', data);
        }
    }
});
