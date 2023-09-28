<template>
    <img @click="themeClick" class="switch-skin" :src="theme === 'dark' ? darkTheme : lightTheme">
</template>

<script>
import {mapState} from 'vuex';

export default {
    name: "switch-skin",
    data() {
        return {
            darkTheme: 'https://d2svbor5ih31il.cloudfront.net/images/header/dark-theme.png',
            lightTheme: 'https://d2svbor5ih31il.cloudfront.net/images/header/light-theme.png'
        }
    },
    computed: {
        ...mapState(['theme'])
    },
    methods: {
        themeClick() {
            this.$store.commit('theme', this.theme === 'dark' ? 'light' : 'dark');
            window.location.reload();
        }
    }
}
</script>

<style scoped lang="less">
.switch-skin {
    width: 31px;
    height: 33px;
    cursor: pointer;
    border: none;
    margin-left: 20px;
    display: block;
}

@media screen and(max-width: 920px) {
    .switch-skin {
        display: none;
    }
}

@media screen and(min-width: 920px) {
    .switch-skin {
        display: block;
        width: 30px;
        height: 30px;
        margin-left: 15px;
    }
}

@media screen and(min-width: 1220px) {
    .switch-skin {
        display: block;
        width: 32px;
        height: 32px;
        margin-left: 18px;
    }
}

@media screen and(min-width: 1440px) {
    .switch-skin {
        display: block;
        width: 31px;
        height: 33px;
        margin-left: 20px;
    }
}

</style>
