<template>
    <div :class="['explore-absolute', 'absolute',theme]">
        <div class="row Poppins-Bold">
            <div class="">
                Ecosystem
            </div>
            <div class="">
                Community
                <a-lightpaper :arrow="arrow"></a-lightpaper>
            </div>
        </div>
        <div class="features row Poppins-Bold">
            <div class="" @click="view">
                Games
                <a-lightpaper :arrow="arrow"></a-lightpaper>
            </div>
            <div class="">
                Maker
                <a-lightpaper :arrow="arrow"></a-lightpaper>
            </div>
        </div>

        <div class="get-app BeatriceDisplay-BoldIt">
            GET connect
            <img class="arrow" :src="theme === 'dark' ? darkArrow : lightArrow">
        </div>
        <div class="content Poppins-SemiBold">
            Connecting Traditional Gaming with the Blockchain
        </div>

    </div>
</template>

<script>
import launchApp from './launch-app';
import {mapGetters} from "vuex";

export default {
    name: "explore-absolute",
    components: {
        launchApp
    },
    props:['arrow'],
    data() {
        return {
            darkArrow: 'https://d2svbor5ih31il.cloudfront.net/images/header/dark-arrow.png',
            lightArrow: 'https://d2svbor5ih31il.cloudfront.net/images/header/light-arrow.png'
        }
    },
    computed: {
        ...mapGetters(['theme'])
    },
    methods:{
        view(){
            // window.open('http://connexion.games/dashboard');
        }
    }
}
</script>

<style scoped lang="less">
.explore-absolute {
    position: absolute;
    width: 500px;
    height: 295px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border-radius: 24px;
    padding: 46px 117px 46px 46px;
    color: var(--col-white);
    filter: var(--col-header-filter);
    &.dark {

        background-image: url("https://d2svbor5ih31il.cloudfront.net/images/header/dark-explore-absolute.png");
    }

    &.light {
        background-image: url("https://d2svbor5ih31il.cloudfront.net/images/header/light-explore-absolute.png");
    }

    .row {
        display: flex;
        align-items: center;
        //justify-content: space-between;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -0.02em;
        text-transform: capitalize;

        .image {
            height: 7px;
            margin-left: 3px;
        }
        div{
            width: 50%;
        }
    }

    .features {
        padding-top: 33px;
    }

    .get-app {
        display: flex;
        align-items: center;
        padding: 35px 0 10px 0;
        font-size: 16px;
        line-height: 25px;
        letter-spacing: 0.02em;
        text-transform: uppercase;

        .arrow {
            height: 16px;
            margin-left: 13px;
        }
    }

    .content {
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.02em;
        text-transform: capitalize;
        width: 323px;
    }
}
</style>
