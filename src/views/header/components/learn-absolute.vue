<template>
    <div :class="['learn-absolute', 'absolute', theme]">
        <div class="lightpaper Poppins-Bold">
            <div @click="lightpaperClick" class="pointer">
                Lightpaper
                <a-lightpaper :arrow="arrow"></a-lightpaper>
            </div>
            <div @click="blogClick" class="pointer">
                Blog
                <a-lightpaper :arrow="arrow"></a-lightpaper>
            </div>
        </div>

        <div class="features">
            <div>
                <div class="features-title Poppins-Bold pointer" @click="active=!active">
                    <span>Features</span>
                    <img :class="['image-block', active ? 'active' : '']"
                         :src="arrow ? darkBlock : theme === 'dark' ? darkBlock : lightBlock">
                </div>
                <div :class="['view', 'Poppins-Medium', active ? 'active' : '']">
                    <div class="row">
                        <div class="left" @click="scrollClick('metaverse')">Developer</div>
                        <div class="right" @click="scrollClick('guilder-wrap')">Designer</div>
                    </div>
                    <div class="row">
                        <div class="left" @click="scrollClick('dashboard')">Publisher</div>
                        <div class="right" @click="scrollClick('one-place')">Player</div>
                    </div>
                </div>
            </div>
            <div class="pointer Poppins-Bold">
                FAQ
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
import $ from 'jquery'
export default {
    name: "learn-absolute",
    props:['arrow'],
    components: {
        launchApp
    },
    data() {
        return {
            darkArrow: 'https://d2svbor5ih31il.cloudfront.net/images/header/dark-arrow.png',
            lightArrow: 'https://d2svbor5ih31il.cloudfront.net/images/header/light-arrow.png',
            darkBlock: 'https://d2svbor5ih31il.cloudfront.net/images/header/dark-block.png',
            lightBlock: 'https://d2svbor5ih31il.cloudfront.net/images/header/light-block.png',
            active: false
        }
    },
    computed: {
        ...mapGetters(['theme'])
    },
    methods: {
        lightpaperClick() {
            window.open('https://mirror.xyz/connexion.eth/a8oMVUsD0mYNyitWxp7IxM_Z3YybWI-6rWQ2vEy-l_c')
        },
        blogClick() {
            window.open('https://mirror.xyz/connexion.eth')
        },
        scrollClick(dom){
            this.$emit('close')
            $('html, body').animate({scrollTop: $('#' + dom+ '').offset().top}, 1000);
        }
    }
}
</script>

<style scoped lang="less">
.learn-absolute {
    position: absolute;
    width: 500px;
    height: 340px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border-radius: 24px;
    padding: 46px 117px 46px 46px;
    color: var(--col-white);
    filter: var(--col-header-filter);
    &.dark {
        background-image: url("https://d2svbor5ih31il.cloudfront.net/images/header/dark-learn-absolute.png");
    }

    &.light {
        background-image: url("https://d2svbor5ih31il.cloudfront.net/images/header/light-learn-absolute.png");
    }

    .pointer {
        cursor: pointer;
    }

    .lightpaper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -0.02em;
        text-transform: capitalize;
        cursor: pointer;

    }

    .features {
        padding-top: 33px;
        display: flex;
        justify-content: space-between;
        font-size: 16px;
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
