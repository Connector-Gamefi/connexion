<template>
    <div class="connector-banner" id="connector-banner">
        <div class="banner-body">
            <div class="__container banner-content">
                <div class="body-ab">
                    <div class="title banner-title
                     Poppins-Bold animate__animated
                    animate__flipInX">
                        HERE YOU ENTER THE METAVERSE
                    </div>
                    <div class="name banner-name BeatriceDisplay-BoldIt
                    animate__animated animate__flipInX">
                        Connexion
                    </div>
                    <div class="quickly banner-quickly Poppins-SemiBold
                    animate__animated animate__flipInX">
                        Connecting Traditional Gaming with the Blockchain
                    </div>
                    <div class="step banner-step Poppins-SemiBold
                    animate__animated animate__flipInX">
                        The Metaverse Infrastructure Platform for Gaming
                    </div>
                    <div style="display: flex">
                        <a-dashboard-button :id="'banner-dashboard-button'" @click="connectClick"
                                            :content="'GET connect'"></a-dashboard-button>
                    </div>
                </div>
            </div>
        </div>
        <video :src="videoLink"
               :data-src="videoLink"
               id="banner-video"
               class="video-bg option-animation animate__animated animate__fadeIn"
               autoplay="autoplay"
               playsinline
               property="none"
               preload=none
               muted
               loop="loop">
        </video>
        <div class="video-bg-cover"></div>
    </div>
</template>

<script>
import launchApp from '../header/components/launch-app';
import {mapState} from 'vuex';

export default {
    name: "connector-banner",
    components: {
        launchApp,
    },
    data() {
        return {
            sell: 0,
            buy: 0,
            widthVideo: 1648,
            heightVideo: 900,
            video: {
                dark: 'Connector_Color_B.mp4',
                light: 'Connector_Single_W.mp4'
            }
        }
    },
    computed: {
        ...mapState(['theme']),
        videoLink() {
            return this.$link + this.video[this.theme];
        }
    },
    mounted() {
        this.$nextTick(() => {
            let myVideo = document.getElementById('banner-video');
            if (myVideo.paused) {
                myVideo.play();
            } else {
                myVideo.pause();
            }

            this.resize();
            window.addEventListener('resize', () => {
                this.resize();
            })
        })
    },
    methods: {
        connectClick() {

        },
        resize() {
            const video = document.getElementById('banner-video');
            const connectorBanner = document.getElementById('connector-banner');
            const bannerTitle = document.getElementsByClassName('banner-title');
            const bannerName = document.getElementsByClassName('banner-name');
            const bannerQuickly = document.getElementsByClassName('banner-quickly');
            const bannerStep = document.getElementsByClassName('banner-step');
            const videoCover = document.getElementsByClassName('video-bg-cover');
            const scree = document.body.clientWidth || document.body.scrollWidth;
            if (scree <= 1290) {

                bannerTitle[0].style.fontSize = this.calc(scree, 21, 12);
                bannerTitle[0].style.paddingTop = this.calc(scree, 134, 10);

                bannerName[0].style.fontSize = this.calc(scree, 100, 30);

                bannerQuickly[0].style.fontSize = this.calc(scree, 24, 14);
                bannerQuickly[0].style.width = this.calc(scree, 658, 255);
                bannerQuickly[0].style.lineHeight = this.calc(scree, 38, 20);

                bannerStep[0].style.fontSize = this.calc(scree, 18, 12);
                bannerStep[0].style.width = this.calc(scree, 560, 300);
                bannerStep[0].style.lineHeight = this.calc(scree, 38, 15);
                bannerStep[0].style.paddingTop = this.calc(scree, 25, 8);
                bannerStep[0].style.paddingBottom = this.calc(scree, 148, 30);

                const width = scree / 0.78;
                video.style.width = width + 'px';
                video.style.height = width * 0.54 + 'px';

                videoCover[0].style.width = width + 'px';
                videoCover[0].style.height = width * 0.54 + 'px';
                if (scree <= 720) {
                    connectorBanner.style.minHeight = this.calc(scree, 900, 300);
                    connectorBanner.style.height = 'auto';
                    video.style.width = '100%';
                } else {
                    connectorBanner.style.height = this.calc(scree, 900, 300);
                }

            } else {
                video.style.width = '1648px';
                video.style.height = '900px';
                videoCover[0].style.width = '1648px';
                videoCover[0].style.height = '900px';
                connectorBanner.style.height = '900px';
                bannerName[0].style.fontSize='100px'
            }
        },
        calc(scree, max, min) {
            return max - (1290 - scree) / ((1290 - 375) / (max - min)) + 'px';
        }
    },

}
</script>

<style scoped lang="less">
.connector-banner {
    position: relative;
    width: 100%;
    height: 900px;
    overflow: hidden;
    background-color: var(--col-body-bg-first);

    .banner-body {
        position: absolute;
        width: 100%;
        height: 100%;
        background: transparent;
        z-index: 2;

        .banner-content {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
    }


    .video-bg {
        position: absolute;
        top: -2%;
        left: 26%;
        width: 1648px;
        height: 900px;
        z-index: -1;
    }

    .video-bg-cover {
        position: absolute;
        top: -2%;
        left: 26%;
        display: block;
        width: 1648px;
        height: 900px;
        background: var(--col-body-bg-cover);
        z-index: 1;
    }

    .title {
        font-size: 20px;
        line-height: 20px;
        letter-spacing: 0.5em;
        text-transform: uppercase;
        color: var(--col-static-title);
        padding-top: 110px;
        padding-bottom: 20px;
    }

    .name {
        font-size: 100px;
        line-height: 100%;
        color: var(--col-white);
    }

    .quickly {
        font-size: 24px;
        line-height: 38px;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: var(--col-white09);
        width: 658px;
        padding-top: 60px;
    }

    .step {
        font-size: 18px;
        line-height: 38px;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: var(--col-white67);
        width: 506px;
        padding-top: 35px;
        padding-bottom: 78px;
    }
}


@media screen and(max-width: 720px) {
    .connector-banner {
        position: relative;
        width: 100%;
        overflow: visible;

        .banner-body {
            position: static;
            width: 100%;
            height: auto;
            background: transparent;
            z-index: 2;

            .banner-content {
                height: 100%;

                .body-ab {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
            }
        }


        .video-bg {
            position: static;
            z-index: 1;
        }

        .title {
            text-align: center;

        }

        .name {
            padding-bottom: 26px;

        }

        .quickly {
            text-align: center;
        }

        .step {
            text-align: center;
        }

        .video-bg-cover {
            display: none;
        }

    }
}

@media screen and(min-width: 720px) {
    .connector-banner {
        position: relative;
        width: 100%;
        height: 900px;
        overflow: hidden;

        .banner-body {
            position: absolute;
            width: 100%;
            height: 100%;
            background: transparent;
            z-index: 2;

            .banner-content {
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                .body-ab {
                    display: flex;
                    flex-direction: column;
                    align-items: start;
                }
            }
        }


        .video-bg {
            position: absolute;
            top: -2%;
            left: 26%;
            width: 1648px;
            height: 900px;
            z-index: 1;
        }

        .title {

        }

        .name {

        }

        .quickly {

        }

        .step {

        }
    }
}

@media screen and(min-width: 920px) {

}

@media screen and(min-width: 1080px) {

}

@media screen and(min-width: 1220px) {

}

@media screen and(min-width: 1440px) {

}
</style>
