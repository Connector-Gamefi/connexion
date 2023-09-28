<template>
    <div :class="['build-absolute', 'absolute',theme]">
        <div class="lightpaper Poppins-Bold">
            <div class="" @click="view('https://github.com/Connector-Gamefi')">
                Github
                <a-lightpaper :arrow="arrow"></a-lightpaper>
            </div>
            <div class="">
                Documentation
            </div>
        </div>

        <div class="features">
            <div>
                <div class="features-title Poppins-Bold pointer"
                     @click="view('https://github.com/binance-chain/BEPs/pull/129')">
                    <span>NFT standard</span>
                    <a-lightpaper :arrow="arrow"></a-lightpaper>
                </div>
            </div>
            <div class="pointer">

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
    name: "build-absolute",
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
    methods: {
        view(url) {
            window.open(url);
        }
    }
}
</script>

<style scoped lang="less">
.build-absolute {
    position: absolute;
    width: 500px;
    min-height: 230px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border-radius: 24px;
    padding: 46px 117px 46px 46px;
    color: var(--col-white);
    filter: var(--col-header-filter);

    &.dark {
        background-image: url("https://d2svbor5ih31il.cloudfront.net/images/header/dark-build-absolute.png");

    }

    &.light {
        background-image: url("https://d2svbor5ih31il.cloudfront.net/images/header/light-build-absolute.png");
    }

    .lightpaper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -0.02em;
        text-transform: capitalize;

        .image {
            height: 7px;
            margin-left: 3px;
        }
    }

    .features {
        padding-top: 33px;
        display: flex;
        justify-content: space-between;

        .features-title {
            display: flex;
            align-items: center;
            padding-bottom: 16px;

            span {
                margin-right: 6px;
            }

            .image-block {
                height: 8px;
                transition: all .4s;
                transform: rotate(-90deg);
                transform-origin: center center;

                &.active {
                    transform: rotate(0deg);
                }
            }
        }

        .view {
            font-size: 12px;
            line-height: 12px;
            letter-spacing: -0.02em;
            text-transform: capitalize;
            height: 50px;
            overflow: hidden;
            transition: all 1s;

            &.active {
                .row {
                    opacity: 1;
                }
            }

            .row {
                transition: all 1s;
                padding: 5px 0;
                display: flex;
                align-items: center;
                opacity: 0;

                .left {
                    width: 100px;
                    padding-right: 64px;
                }

            }
        }
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
