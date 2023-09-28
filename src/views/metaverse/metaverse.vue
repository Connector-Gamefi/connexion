<template>
    <div class="metaverse __container" id="metaverse">
        <div class="left">

            <metaverse-name></metaverse-name>
            <a-body-content content="Industrial-grade SDK module library"></a-body-content>
            <use-connector></use-connector>
            <div class="introduce-wrap">
                <div>
                    <content-wrap :data="list[0]" class="top  animate__animated animate__backInLeft"></content-wrap>
                    <content-wrap :data="list[2]" class=" animate__animated animate__backInLeft"></content-wrap>
                </div>
                <div class="assets">
                    <content-wrap :data="list[1]" class="top  animate__animated animate__backInLeft"></content-wrap>
                    <div class="height"></div>
                    <content-wrap :data="list[3]" class=" animate__animated animate__backInLeft"></content-wrap>
                </div>
            </div>

            <div class="sdk  animate__animated animate__backInLeft">
                <a-dashboard-button :id="'button-sdk'" @click="connectClick"
                                    :content="'connexion SDK'"></a-dashboard-button>
            </div>
        </div>
        <div class="right  animate__animated animate__backInRight">
            <video :src="videoLink"
                   id="mete-video"
                   class="mete-video"
                   autoplay="autoplay"
                   playsinline
                   muted
                   property="none"
                   preload=none
                   loop="loop">
            </video>
        </div>

    </div>
</template>

<script>
import {mapState} from 'vuex';
import metaverseName from './components/metaverse-name';

import metaverseModules from './components/metaverse-modules';
import contentWrap from '../../components/content-wrap/content-wrap';
import useConnector from './components/use-connector';
import {WOW} from 'wowjs';

export default {
    name: "metaverse",
    components: {
        metaverseModules,
        metaverseName,
        contentWrap,
        useConnector
    },
    computed: {
        ...mapState(['theme']),
        videoLink() {
            return this.$link + this.video[this.theme];
        }
    },
    data() {
        return {
            video: {
                dark: 'Connector_Part_B01.mp4',
                light: 'Connector_Part_W01.mp4'
            },
            list: [
                {
                    src: 'https://d2svbor5ih31il.cloudfront.net/images/metaverse/img1.png',
                    title: 'Security',
                    content: 'MPC, TEE',
                    isLink: true,
                },
                {
                    src: 'https://d2svbor5ih31il.cloudfront.net/images/metaverse/img2.png',
                    title: 'Fully packaged and plug-and-play',
                    content: ''
                },
                {
                    src: 'https://d2svbor5ih31il.cloudfront.net/images/metaverse/img3.png',
                    title: 'Multiple clients',
                    content: 'Web, Android, iOS'
                },
                {
                    src: 'https://d2svbor5ih31il.cloudfront.net/images/metaverse/img4.png',
                    title: 'Multiple blockchains',
                    content: 'ETH, BSC, SOL, etc.'
                }
            ]
        }
    },
    methods: {
        connectClick() {

        }
    },
    mounted() {
        this.$nextTick(() => {
            new WOW().init();
            let myVideo = document.getElementById('mete-video');
            if (myVideo.paused) {
                myVideo.play();
            } else {
                myVideo.pause();
            }
        })
    }
}
</script>

<style scoped lang="less">
.metaverse {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding-top: 120px;

    .left {
        flex: 1;

        .sdk {
            display: flex;
            padding-top: 70px;
        }

        .introduce-wrap {
            display: flex;
            padding-top: 61px;
            flex-direction: row;
            .height{height: 0}
            .top {
                padding-bottom: 70px;
            }

            .assets {
                margin: 40px 0 0 40px;
            }
        }
    }

    .right {
        max-height: 810px;

        .mete-video {
            width: 100%;
            height: 100%;
            border-radius: 30px;
        }
    }
}


@media screen and(max-width: 720px) {
    .metaverse {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-top: 50px;

        .left {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 80px;

            .sdk {
                padding-top: 20px;
            }

            .introduce-wrap {
                display: flex;
                flex-direction: column;
                padding-top: 33px;

                .height{height: 30px;}
                .top {
                    padding-bottom: 0px;
                }

                .assets {
                    margin: 0px 0 0 0;

                }
            }
        }
    }
}

@media screen and(min-width: 720px) {
    .metaverse {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        padding-top: 50px;

        .left {
            .sdk {
                padding-top: 20px;
            }

            .introduce-wrap {
                display: flex;
                padding-top: 33px;

                .top {
                    padding-bottom: 30px;
                }

                .assets {
                    margin: 10px 0 0 10px;
                }
            }
        }
    }
}

@media screen and(min-width: 920px) {
    .metaverse {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        padding-top: 60px;

        .left {
            .sdk {
                padding-top: 30px;
            }

            .introduce-wrap {
                display: flex;
                padding-top: 53px;

                .top {
                    padding-bottom: 40px;
                }

                .assets {
                    margin: 20px 0 0 20px;
                }
            }
        }
    }
}

@media screen and(min-width: 1080px) {
    .metaverse {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        padding-top: 80px;

        .left {
            .sdk {
                padding-top: 40px;
            }

            .introduce-wrap {
                display: flex;
                padding-top: 43px;

                .top {
                    padding-bottom: 40px;
                }

                .assets {
                    margin: 10px 0 0 10px;
                }
            }
        }
    }
}

@media screen and(min-width: 1220px) {
    .metaverse {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        padding-top: 100px;

        .left {
            .sdk {
                padding-top: 55px;
            }

            .introduce-wrap {
                display: flex;
                padding-top: 53px;

                .top {
                    padding-bottom: 70px;
                }

                .assets {
                    margin: 30px 0 0 30px;
                }
            }
        }
    }
}

@media screen and(min-width: 1440px) {
    .metaverse {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        padding-top: 120px;

        .left {
            .sdk {
                padding-top: 70px;
            }

            .introduce-wrap {
                display: flex;
                padding-top: 61px;

                .top {
                    padding-bottom: 70px;
                }

                .assets {
                    margin: 40px 0 0 40px;
                }
            }
        }
    }
}

</style>
