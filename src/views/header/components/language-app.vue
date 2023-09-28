<template>
    <div :class="['language', 'BeatriceDisplay-BoldIt']">
        <a-icon class="icon-en" type="icon-en"></a-icon>
        <span class="lang">
            English
        </span>
        <a-icon class="icon-block" type="icon-block"></a-icon>

    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "language-app",
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
.language {
    height: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--col-white);
    padding: 0 24px;
    background: transparent;

    .lang {
        font-size: 20px;
        text-transform: capitalize;
    }

    .icon-block {
        font-size: 12px;
    }

    .lang {
        padding: 0 8px 0 12px;
    }

    .icon-en {
        font-size: 30px;
    }
}

@media screen and(max-width: 720px) {
    .language {
        display: none;
    }
}

@media screen and(min-width: 720px) {

}

@media screen and(min-width: 920px) {

}

@media screen and(min-width: 1220px) {

}

@media screen and(min-width: 1440px) {

}
</style>
