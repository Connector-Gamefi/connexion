<template>
    <div id="app">
        <a-icon-store/>
        <router-view/>
    </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    components: {},
    name: 'App',
    provide() {
        return {};
    },
    watch: {
        theme: {
            handler() {
                this.init();
            },
            immediate: true
        }
    },
    data() {
        return {};
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            const THEME = {dark: 'global__dark_theme', light: 'global__light_theme'};
            this.$store.state.rootEl.classList.remove(this.theme === 'light' ? THEME.dark : THEME.light);
            this.$store.state.rootEl.classList.add(this.theme === 'light' ? THEME.light : THEME.dark);

        }
    },
    computed: {
        ...mapState([
            'theme'
        ])
    },
    destroyed() {
    },
};
</script>

<style lang="less" scoped>
#app {
    width: 100%;
    height: 100%;
}
</style>
