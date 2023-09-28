<template>
    <div class="__container" id="guilder-wrap">
        <div class="guilder">
            <div class="left">
                <a-title-name
                    :contentClass="'contentClass'"
                    :bottom="'Lego Box'"
                    :top="'Designer\'s'">

                </a-title-name>

                <a-body-content content="Modularized GameFi infrastructure platform"></a-body-content>
                <p class="find Poppins-SemiBold  animate__animated animate__bounceInLeft">
                    Find the most suitable building blocks for your game
                </p>
                <div class="mobile-video">
                    <guilder-video :id="'guilder-video'"></guilder-video>
                </div>

                <div class="data">
                    <guilder-item :data="list[0]"></guilder-item>
                    <guilder-item :data="list[1]"></guilder-item>
                </div>
                <div class="data pd-tp">
                    <guilder-item :data="list[2]"></guilder-item>
                    <guilder-item :data="list[3]"></guilder-item>
                </div>
                <div class="button">
                    <a-dashboard-button @click="pathPage" :content="'ENTER Guilder'"></a-dashboard-button>
                </div>
            </div>
            <div class="right animate__animated animate__backInRight">
                <guilder-video :id="'video-right'" style="transform: translateX(220px) scale(1.8);"></guilder-video>
            </div>

        </div>
    </div>

</template>

<script>
import {mapState} from 'vuex';
import {WOW} from 'wowjs';
import guilderVideo from './components/guilder-video';
import guilderItem from './components/guilder-item';

export default {
    name: "guilder",
    components: {
        guilderItem,
        guilderVideo
    },
    data() {
        return {

            list: [
                {
                    title: 'Launchpad',
                    content: 'Offer in-game assets through IDO and INO',
                    isLink: true
                },
                {
                    title: 'Trading',
                    content: 'Obtain the best liquidity through AMM, order-making, and auctions'
                },
                {
                    title: 'DeFi',
                    content: 'Assemble a portfolio of tools based on your needs, including staking, lending, and liquidity mining'
                },
                {
                    title: 'DAO',
                    content: 'Propose and vote. A game can never be successful without the participation of its gamers.'
                }

            ]
        }
    },
    computed: {
        ...mapState(['theme']),

    },
    mounted() {

    },
    methods: {
        pathPage() {

        }
    }
}
</script>
<style scoped lang="less">
.guilder {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 139px 0 174px 0;
    overflow: hidden;

    .left {
        flex: 1;
        padding-right: 60px;
        .find {
            color: var(--col-white67);
            font-size: 16px;
            line-height: 16px;
            letter-spacing: 0.02em;
            text-transform: uppercase;
            padding-bottom: 80px;
        }

        .mobile-video {
            display: none;
        }

        .data {
            width: 603px;
            display: flex;
            justify-content: space-between;
            flex-direction: row;

            &.pd-tp {
                padding-top: 70px;
            }
        }

        .button {
            padding-top: 62px;
            display: flex;
        }
    }

    .right {

    }
}


@media screen and(max-width: 720px) {
    .guilder {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        padding: 60px 0 94px 0;

        .left {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-right: 13px;


            .find {
                font-size: 12px;
                padding-bottom: 20px;
                text-align: center;
            }

            .mobile-video {
                display: block;
                padding: 27px 0 40px 0;
            }

            .data {
                width: 335px;
                display: flex;
                justify-content: space-between;
                flex-direction: column;

                &.pd-tp {
                    padding-top: 8px;
                }
            }

            .button {
                padding-top: 8px;
                display: flex;
            }
        }

        .right {
            display: none;
        }
    }
}

@media screen and(min-width: 720px) {
    .guilder {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        padding: 60px 0 94px 0;

        .left {
            flex: 1;
            padding-right: 13px;

            .find {
                font-size: 13px;
                padding-bottom: 30px;
            }

            .data {
                width: 380px;
                display: flex;
                justify-content: space-between;
                flex-direction: row;

                &.pd-tp {
                    padding-top: 8px;
                }
            }

            .button {
                padding-top: 8px;
                display: flex;
            }
        }

        .right {

        }
    }
}

@media screen and(min-width: 920px) {
    .guilder {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        padding: 80px 0 114px 0;

        .left {
            flex: 1;
            padding-right: 20px;


            .find {
                font-size: 14px;
                padding-bottom: 40px;
            }

            .data {
                width: 440px;
                display: flex;
                justify-content: space-between;
                flex-direction: row;

                &.pd-tp {
                    padding-top: 20px;
                }
            }

            .button {
                padding-top: 20px;
                display: flex;
            }
        }

        .right {

        }
    }
}

@media screen and(min-width: 1080px) {
    .guilder {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        padding: 100px 0 134px 0;

        .left {
            flex: 1;
            padding-right: 30px;


            .find {
                font-size: 14px;
                padding-bottom: 50px;
            }

            .data {
                width: 500px;
                display: flex;
                justify-content: space-between;
                flex-direction: row;

                &.pd-tp {
                    padding-top: 30px;
                }
            }

            .button {
                padding-top: 30px;
                display: flex;
            }
        }

        .right {

        }
    }
}

@media screen and(min-width: 1220px) {
    .guilder {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        padding: 129px 0 154px 0;

        .left {
            flex: 1;
            padding-right: 40px;



            .find {
                font-size: 14px;
                padding-bottom: 60px;
            }

            .data {
                width: 550px;
                display: flex;
                justify-content: space-between;
                flex-direction: row;

                &.pd-tp {
                    padding-top: 50px;
                }
            }

            .button {
                padding-top: 50px;
                display: flex;
            }
        }

        .right {

        }
    }
}

@media screen and(min-width: 1440px) {
    .guilder {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        padding: 139px 0 174px 0;

        .left {
            flex: 1;
            padding-right: 60px;


            .data {
                width: 603px;
                display: flex;
                justify-content: space-between;
                flex-direction: row;

                &.pd-tp {
                    padding-top: 70px;
                }
            }

            .button {
                padding-top: 62px;
                display: flex;
            }
        }

        .right {

        }
    }
}
</style>
