<template>
    <div class="wrap">
        <div class="__container game-list">
            <div class="these Poppins-Bold animate__animated animate__bounceInLeft">
                GAMES LAUNCHING ON Connexion
            </div>
            <div class="game-list-body">
                <div class="item game-item game-item-halo animate__animated animate__bounceInLeft pointer"
                     @click="view('https://monstercreator.games')">
                    <div class="link flex justify-content-right">
                        <img class="game-link"
                             src="https://d2svbor5ih31il.cloudfront.net/images/banner/eth.png">
                        <img class="game-link" style="margin-left: 14px;"
                             src="https://d2svbor5ih31il.cloudfront.net/images/banner/bsc.png">

                    </div>
                    <div class="title game-title BeatriceDisplay-Bold">Monster Creator</div>
                </div>
                <div class="item game-item game-item-starfield animate__animated animate__fadeInUp">
                    <div class="link flex justify-content-right">
                        <img class="game-link"
                             src="https://d2svbor5ih31il.cloudfront.net/images/banner/eth.png">
                    </div>
                    <div class="title game-title BeatriceDisplay-Bold">Starfield</div>
                </div>
                <div class="item game-item game-item-city animate__animated animate__bounceInRight">
                    <div class="link flex justify-content-right">
                        <img class="game-link"
                             src="https://d2svbor5ih31il.cloudfront.net/images/banner/eth.png">
                    </div>
                    <div class="title game-title BeatriceDisplay-Bold">City of Duty</div>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
import {WOW} from 'wowjs';

export default {
    name: "game-list",
    data() {
        return {}
    },
    mounted() {
        this.resize();
        this.$nextTick(() => {
            new WOW().init();
            window.addEventListener('resize', this.resize);
        })
    },
    methods: {
        calc(scree, max, min) {
            return max - (1290 - scree) / ((1290 - 375) / (max - min)) + 'px';
        },
        resize() {
            const these = document.getElementsByClassName('these');
            const dom = document.getElementsByClassName('game-item');
            const link = document.getElementsByClassName('game-link');
            const gameTitle = document.getElementsByClassName('game-title');
            const scree = document.body.clientWidth || document.body.scrollWidth;

            these[0].style.fontSize = this.calc(scree, 24, 14)
            const m = scree < 720;
            const m1 = scree < 425;
            if (scree <= 1290) {
                for (let i = 0; i < gameTitle.length; i++) {
                    gameTitle[i].style.fontSize = this.calc(scree, 28, 12)
                }
                for (let i = 0; i < link.length; i++) {
                    link[i].style.height = m ? '33px' : this.calc(scree, 40, 13);
                    link[i].style.width = m ? '33px' : this.calc(scree, 40, 13);
                }

                for (let i = 0; i < dom.length; i++) {
                    dom[i].style.height = m ? '168px' : scree * 0.13 + 'px';
                    dom[i].style.width = m ? '335px' : m1 ? '100%' : scree * 0.26 + 'px';
                    dom[i].style.padding = this.calc(scree, 10, 5);
                }
            } else {
                for (let i = 0; i < dom.length; i++) {
                    dom[i].style.height = 200 + 'px';
                    dom[i].style.width = 403 + 'px';
                }
            }
        },
        view(url) {
            window.open(url);
        }
    }
}
</script>

<style scoped lang="less">
.wrap {
    background: var(--col-body-bg-gradient);
}

.game-list {

    //padding-top: 40px;
    padding-bottom: 40px;

    .these {
        font-size: 24px;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: var(--col-white09);
        padding-bottom: 10px;
    }

    .game-list-body {
        display: flex;
        justify-content: space-between;

        .pointer{
            cursor: pointer;
        }

        .item {
            background-size: contain;
            background-repeat: no-repeat;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 10px;
            opacity: 1;

            border-radius: 10px;

            &.game-item-halo {
                background-image: url("https://d2svbor5ih31il.cloudfront.net/images/banner/game-1.png");
            }

            &.game-item-starfield {
                background-image: url("https://d2svbor5ih31il.cloudfront.net/images/banner/game-2.png");
            }

            &.game-item-city {
                background-image: url("https://d2svbor5ih31il.cloudfront.net/images/banner/game-3.png");
            }

            .link {

                img {
                    width: 40px;
                    height: 40px;
                }
            }

            .title {
                font-size: 32.275px;
                line-height: 100%;
                color: #ffffff;
                mix-blend-mode: normal;
            }
        }

    }
}


@media screen and(max-width: 720px) {
    .game-list {
        .these {
            text-align: center;
        }

        .game-list-body {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .item {
                background-size: 100% 100%;
                background-repeat: no-repeat;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding: 10px;
                opacity: 1;
                margin-top: 20px;
                //
                //&.game-item-halo {
                //    background-image: url("https://d2svbor5ih31il.cloudfront.net/images/banner/m-game-1.png");
                //}
                //
                //&.game-item-starfield {
                //    background-image: url("https://d2svbor5ih31il.cloudfront.net/images/banner/m-game-2.png");
                //}
                //
                //&.game-item-city {
                //    background-image: url("https://d2svbor5ih31il.cloudfront.net/images/banner/m-game-3.png");
                //}

                .link {

                    img {
                        width: 40px;
                        height: 40px;
                    }
                }

                .title {
                    font-size: 32.275px;
                    line-height: 100%;
                    mix-blend-mode: normal;
                }
            }
        }
    }
}

@media screen and(min-width: 720px) {
    .game-list {
        .these {

        }

        .game-list-body {
            display: flex;
            justify-content: space-between;

            .item {
                background-size: contain;
                background-repeat: no-repeat;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding: 10px;
                opacity: 1;

                .link {
                    img {
                        width: 40px;
                        height: 40px;
                    }
                }

                .title {
                    mix-blend-mode: normal;
                }
            }

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
