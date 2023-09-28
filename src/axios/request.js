import axios from 'axios';
import Vue from 'vue';

//axios.defaults.timeout = 30000;
//axios.defaults.retry = 3;
//axios.defaults.retryDelay = 1000;

if (process.env.NODE_ENV === 'development') {

    axios.defaults.baseURL = 'http://localhost';
} else if (process.env.NODE_ENV === 'production'){

    axios.defaults.baseURL = window.location.origin;
}

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';


window.$axios = Vue.prototype.$axios = axios;
