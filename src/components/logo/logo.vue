<template>
    <img class="logo" :src="theme === 'dark' ? darkLogo : lightLogo">
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    name: 'logo',
    data() {
        return {
            // darkLogo: 'https://d2svbor5ih31il.cloudfront.net/images/logo/dark-logo.png',
            // lightLogo: 'https://d2svbor5ih31il.cloudfront.net/images/logo/light-logo.png',

            darkLogo: require('../../assets/images/logo/dark-logo.png'),
            lightLogo: require('../../assets/images/logo/light-logo.png'),
        }
    },
    computed: {
        ...mapGetters(['theme'])
    }
};
</script>

<style scoped lang="less">
.logo {
    width: 249px;
    height: 44px;
}

@media screen and(max-width: 920px) {
    .logo {
        width: 180px;
        height: 42px;
    }
}

@media screen and(min-width: 920px) {
    .logo {
        width: 180px;
        height: 42px;
    }
}

@media screen and(min-width: 1220px) {
    .logo {
        width: 180px;
        height: 42px;
    }
}

@media screen and(min-width: 1440px) {
    .logo {
        width: 200px;
        height: 42px;
    }
}
</style>
