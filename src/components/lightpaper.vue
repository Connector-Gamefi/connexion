<template>
    <img class="image" :src="arrow ? darkLightpaper : theme==='dark' ? darkLightpaper : lightLightpaper" alt="">
</template>

<script>
import {mapState} from 'vuex';

export default {
    name: "lightpaper",
    props: {
        arrow: {
            type: Boolean,
            default: () => false
        }
    },
    computed: {
        ...mapState(['theme'])
    },
    data() {
        return {
            darkLightpaper: 'https://d2svbor5ih31il.cloudfront.net/images/header/dark-lightpaper.png',
            lightLightpaper: 'https://d2svbor5ih31il.cloudfront.net/images/header/light-lightpaper.png'
        }
    }
}
</script>

<style scoped lang="less">
.image {
    height: 7px;
    margin-left: 3px;
}
</style>
