<template>
    <img class="logo" src="https://d2svbor5ih31il.cloudfront.net/images/logo/dark-logo.png">
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    name: 'dark-logo',
    data() {
        return {

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
        height: 36px;
    }
}

@media screen and(min-width: 920px) {
    .logo {
        width: 180px;
        height: 36px;
    }
}

@media screen and(min-width: 1220px) {
    .logo {
        width: 180px;
        height: 32px;
    }
}

@media screen and(min-width: 1440px) {
    .logo {
        width: 200px;
        height: 35px;
    }
}
</style>
