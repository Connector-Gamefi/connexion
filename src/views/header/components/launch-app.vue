<template>
    <div class="app BeatriceDisplay-BoldIt">
        GET connect
        <img class="arrow-header" :src="theme === 'dark' ? darkArrow : lightArrow">

    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "launch-app",
    data() {
        return {
            darkArrow: 'https://d2svbor5ih31il.cloudfront.net/images/header/dark-arrow.png',
            lightArrow: 'https://d2svbor5ih31il.cloudfront.net/images/header/light-arrow.png'
        }
    },
    computed: {
        ...mapGetters(['theme'])
    }
}
</script>

<style scoped lang="less">
.app {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--col-white);
    padding: 0 24px;
    background: transparent;
    font-size: 16px;
    line-height: 25px;
    letter-spacing: 0.02em;
    text-transform: uppercase;

    .arrow-header {
        height: 16px;
        margin-left: 13px;
    }

}

@media screen and(max-width: 720px) {
    .app {
        display: none;
    }
}

@media screen and(min-width: 720px) {
    .app {
        //height: 38px;
        font-size: 12px;
    }
}

@media screen and(min-width: 920px) {
    .app {
        //height: 45px;
        font-size: 12px;
    }
}

@media screen and(min-width: 1220px) {
    .app {
        //height: 60px;
        font-size: 14px;
    }
}

@media screen and(min-width: 1440px) {
    .app {
        //height: 60px;
        font-size: 16px;
    }
}
</style>
