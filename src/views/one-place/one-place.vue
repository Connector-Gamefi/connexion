<template>
    <div class="one-place __container" id="one-place">
        <div class="one-wrap">
            <video :src="videoLink"
                   id="place-video"
                   class="place-video top-block"
                   autoplay="autoplay"
                   playsinline
                   muted
                   property="none"
                   preload=none
                   loop="loop">
            </video>
            <div class="right">
                <a-title-name :bottom="'Magic Mirror'" :top="'Players\''"
                              :tx-rg="'tx-rg'"
                              :contentClass="'one-plage-title'"></a-title-name>

                <a-body-content :right="true" content="A platform showing real-time on-chain data and player's details"></a-body-content>

                <video :src="videoLink"
                       class="place-video block"
                       autoplay="autoplay"
                       playsinline
                       muted
                       property="none"
                       preload=none
                       loop="loop">
                </video>

                <place-item></place-item>
                <div class="button">
                    <a-dashboard-button @click="pathPage" :content="'ENTER BIG DATA'"></a-dashboard-button>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import placeItem from './components/place-item';
import {mapState} from 'vuex';

export default {
    name: "one-place",
    components: {
        placeItem
    },
    computed: {
        ...mapState(['theme']),
        videoLink() {
            return this.$link + this.video[this.theme];
        },
    },
    data() {
        return {
            video: {
                dark: 'Connector_Part_B04.mp4',
                light: 'Connector_Part_W04.mp4'
            },

        }
    },
    mounted() {
        this.$nextTick(() => {
            let myVideo = document.getElementById('place-video');
            if (myVideo.paused) {
                myVideo.play();
            } else {
                myVideo.pause();
            }
        })
    },
    methods: {
        pathPage() {

        },

    },

}
</script>

<style scoped lang="less">
.one-place {
    margin-bottom: 200px;
    height: 800px;

    .one-wrap {
        height: 100%;
        width: 100%;
        position: relative;
        .top-block{
            display: block;
        }
    }


    .place-video {
        position: absolute;
        width: 630px;
        height: 800px;
        left: 0;
        top: 0;
        border-radius: 30px;
    }

    .right {
        display: flex;
        flex-direction: column;
        align-items: end;
        .block{
            display: none;
        }

        .button {
            padding: 95px 0 20px 0;
        }
    }
}

@media screen and(max-width: 720px) {
    .one-place {
        margin-bottom: 50px;
        position: relative;
        height: auto;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;

        .one-wrap {
            min-height: 800px;
            //height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column-reverse;
            align-items: center;
            position: relative;
            .top-block{
                display: none;
            }
        }


        .place-video {
            position: static;
            width: 100%;
            height: 400px;
        }

        .right {
            display: flex;
            flex-direction: column;
            align-items: center;
            .block{
                display: block;
            }
            .button {
                padding: 25px 0 20px 0;
            }
        }
    }
}

@media screen and(min-width: 720px) {
    .one-place {
        margin-bottom: 60px;
        //position: relative;
        height: 350px;

        .one-wrap {
            height: 100%;
            width: 100%;
            position: relative;
        }

        .place-video {
            position: absolute;
            width: 270px;
            height: 350px;
            left: 0;
            top: 0;
        }

        .right {
            display: flex;
            flex-direction: column;
            align-items: end;

            .button {
                padding: 25px 0 20px 0;
            }
        }
    }
}

@media screen and(min-width: 920px) {
    .one-place {
        margin-bottom: 100px;
        //position: relative;
        height: 450px;

        .one-wrap {
            height: 100%;
            width: 100%;
            position: relative;
        }

        .place-video {
            position: absolute;
            width: 370px;
            height: 450px;
            left: 0;
            top: 0;
        }

        .right {
            display: flex;
            flex-direction: column;
            align-items: end;
            .button {
                padding-top: 45px;
            }
        }
    }
}

@media screen and(min-width: 1080px) {
    .one-place {
        margin-bottom: 100px;
        //position: relative;
        height: 550px;

        .one-wrap {
            height: 100%;
            width: 100%;
            position: relative;
        }

        .place-video {
            position: absolute;
            width: 470px;
            height: 550px;
            left: 0;
            top: 0;
        }

        .right {
            display: flex;
            flex-direction: column;
            align-items: end;

            .button {
                padding-top: 65px;
            }
        }
    }
}

@media screen and(min-width: 1220px) {
    .one-place {
        margin-bottom: 150px;
        //position: relative;
        height: 650px;

        .one-wrap {
            height: 100%;
            width: 100%;
            position: relative;
        }

        .place-video {
            position: absolute;
            width: 570px;
            height: 650px;
            left: 0;
            top: 0;
        }

        .right {
            display: flex;
            flex-direction: column;
            align-items: end;

            .button {
                padding-top: 85px;
            }
        }
    }
}

@media screen and(min-width: 1440px) {
    .one-place {
        margin-bottom: 200px;
        //position: relative;
        height: 800px;

        .one-wrap {
            height: 100%;
            width: 100%;
            position: relative;
        }

        .place-video {
            position: absolute;
            width: 630px;
            height: 800px;
            left: 0;
            top: 0;
        }

        .right {
            display: flex;
            flex-direction: column;
            align-items: end;

            .button {
                padding-top: 95px;
            }
        }
    }
}
</style>
