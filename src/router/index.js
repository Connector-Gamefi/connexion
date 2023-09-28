import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const originalPush = Router.prototype.push;

Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};

export const routes = [];

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '',
            name: 'main',
            component: () => import('../views/main/main')
        },
        {
            path: '',
            redirect: ''
        },
        ...routes,
    ],
    scrollBehavior() {
        return {
            x: 0,
            y: 0
        };
    }
});
