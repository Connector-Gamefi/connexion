<template>
    <div class="main-comp">
        <header-comp></header-comp>
        <connector-banner></connector-banner>
        <game-list></game-list>
        <metaverse></metaverse>
        <dashboard></dashboard>
        <guilder></guilder>
        <one-place></one-place>
        <footer-wrap></footer-wrap>
    </div>
</template>
<script>
import gameList from '../game-list/game-list';
import headerComp from '../header/header-comp';
import connectorBanner from '../connector-banner/connector-banner';
import metaverse from "../metaverse/metaverse";
import dashboard from "../dashboard/dashboard";
import guilder from "../guilder/guilder";
import onePlace from '../one-place/one-place';
import footerWrap from '../footer-wrap/footer-wrap';

export default {
    components: {
        headerComp,
        connectorBanner,
        metaverse,
        dashboard,
        guilder,
        onePlace,
        footerWrap,
        gameList
    },
    name: "main-comp",
    data() {
        return {}
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('scroll', lozyLoad);
            // let video = document.querySelectorAll('video');


            function lozyLoad() {
                // let video = document.querySelectorAll('video');
                // const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
                // const winHeight = window.innerHeight;
                // const h = scrollTop + winHeight;
                // console.log('h', h);
                // for (let i = 0; i < video.length; i++) {
                //     if (video[i].offsetTop < h) {
                //         video[i].src = video[i].getAttribute('data-src')
                //     }
                //
                // }
            }
        })

    },
    methods: {},
}
</script>
<style scoped lang="less">
.main-comp {
    //padding-bottom: 120px;
}
</style>
