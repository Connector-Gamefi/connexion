<template>
    <div :class="['dashboard-introduce', theme]" id="dashboard-introduce">
        <video :src="videoLink"
               :class="[isVideo ? 'block' : 'none', 'dash-video',
               isVideo ? 'animate__animated' : '', isVideo ? '': '']"
               autoplay="autoplay"
               id="dashboard-video"
               playsinline
               muted
               property="none"
               preload=none
               loop="loop">
        </video>
<!--        <div class="animate__fadeIn"></div>-->
        <div
            id="dashboard-swiper"
            :class="['swiper', !isVideo? 'filter':'',  !isVideo ? 'animate__animated' : '', !isVideo ? 'animate__fadeIn': '']">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="item">
                        <img v-if="theme==='light'" src="https://d2svbor5ih31il.cloudfront.net/images/dashboard/manage-users.png">
                        <img v-else src="https://d2svbor5ih31il.cloudfront.net/images/dashboard/dark-manage-users.png">

<!--                        <img v-if="theme==='light'" src="../../../assets/images/dashboard/manage-users.png">-->
<!--                        <img v-else src="../../../assets/images/dashboard/dark-manage-users.png">-->
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="item">
                        <img v-if="theme==='light'" src="https://d2svbor5ih31il.cloudfront.net/images/dashboard/separate-permissions.png">
                        <img v-else src="https://d2svbor5ih31il.cloudfront.net/images/dashboard/dark-separate-permissions.png">


<!--                        <img v-if="theme==='light'" src="../../../assets/images/dashboard/separate-permissions.png">-->
<!--                        <img v-else src="../../../assets/images/dashboard/dark-separate-permissions.png">-->
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="item">
                        <img v-if="theme==='light'" src="https://d2svbor5ih31il.cloudfront.net/images/dashboard/manage-assets.png">
                        <img v-else src="https://d2svbor5ih31il.cloudfront.net/images/dashboard/dark-manage-assets.png">

<!--                        <img v-if="theme==='light'" src="../../../assets/images/dashboard/manage-assets.png">-->
<!--                        <img v-else src="../../../assets/images/dashboard/dark-manage-assets.png">-->
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="item">
                        <img v-if="theme==='light'" src="https://d2svbor5ih31il.cloudfront.net/images/dashboard/data-visualization.png">
                        <img v-else src="https://d2svbor5ih31il.cloudfront.net/images/dashboard/dark-data-visualization.png">

<!--                        <img v-if="theme==='light'" src="../../../assets/images/dashboard/data-visualization.png">-->
<!--                        <img v-else src="../../../assets/images/dashboard/dark-data-visualization.png">-->
                    </div>
                </div>
            </div>
        </div>
        <div class="pagination" v-if="!isVideo">
            <a-icon v-for="(data,index) in data"
                    @click="paginationClick(index)"
                    :class="['icon-pagination', active === index ? 'active' : '']"
                    type="icon-pagination">
            </a-icon>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import dashboardButton from '../../../components/dashboard-button/dashboard-button';
import {mapState} from 'vuex';

export default {
    name: "dashboard-introduce",
    components: {
        dashboardButton
    },
    data() {
        return {
            mySwiper: {},
            isVideo: false,
            video: {
                dark: 'Connector_Part_B02.mp4',
                light: 'Connector_Part_W02.mp4'
            },
            count: 0,
            timer: null,
            data: [
                {}, {}, {}, {}
            ],
            active: 0
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
            let _this = this;
            this.mySwiper = new Swiper('#dashboard-introduce .swiper', {
                autoplay: true,
                loop: false,
                mousewheel: true,
                effect: 'cards',
                on: {
                    slideChangeTransitionEnd: function () {
                        _this.active = this.activeIndex;
                    },
                },
            });

            this.resize();
            window.addEventListener('resize', () => {
                this.resize();
            })

        })
    },
    methods: {
        paginationClick(index) {
            this.active = index;
            this.mySwiper.slideTo(index, 1000, false)
        },
        exchange(data) {
            this.isVideo = data;
            if (this.isVideo) {
                if (this.timer) {
                    this.count = 0;
                    clearInterval(this.timer);
                }
                this.timer = setInterval(() => {
                    this.count++
                    if (this.count === 3) {
                        this.count = 0;
                        clearInterval(this.timer);
                        this.isVideo = false;
                    }
                }, 1000)
            } else {
                this.count = 0;
                this.timer && clearInterval(this.timer);
            }
        },
        resize() {
            const wrap = document.getElementById('dashboard-introduce');
            const bullet = document.getElementsByClassName('swiper-pagination-bullet');
            const scree = document.body.clientWidth || document.body.scrollWidth;
            if (scree <= 1290) {
                if (scree <= 720) {
                    wrap.style.width = '100%';
                } else {
                    wrap.style.width = this.calc(scree, 1107, 365);
                }

                wrap.style.height = this.calc(scree, 787, 280);


                for (let i = 0; i < bullet.length; i++) {
                    bullet[i].style.fontSize = this.calc(scree, 16, 12);
                    bullet[i].style.paddingLeft = this.calc(scree, 20, 5);
                    bullet[i].style.paddingRight = this.calc(scree, 20, 5);
                    bullet[i].style.marginRight = this.calc(scree, 10, 3);
                    bullet[i].style.marginRight = this.calc(scree, 10, 3);
                }
            } else {
                wrap.style.width = '1107px';
                wrap.style.height = '787px'
            }
        },
        calc(scree, max, min) {
            return max - (1290 - scree) / ((1290 - 375) / (max - min)) + 'px';
        }
    },
    deactivated() {
        this.mySwiper.destroy();
    },
}
</script>

<style scoped lang="less">
.dashboard-introduce {
    width: 1107px;
    height: 787px;
    //overflow: hidden;

    .dash-video {
        width: 100%;
        height: 100%;
        display: none;

        &.block {
            display: block;
        }

        &.none {
            display: none;
        }
    }

    .swiper {
        width: 100%;
        height: 100%;
        border-radius: 25px;
        position: relative;
        overflow: hidden;
        opacity: 0;

        &.filter {
            opacity: 1;
        }
    }

    &.dark{
        .pagination {
            .icon-pagination {
                color: white;
            }
        }
    }
    &.light{
        .pagination {
            .icon-pagination {
                color: #000000;
            }
        }
    }
    .pagination {
        width: 100%;
        padding: 20px 0;
        display: flex;
        justify-content: center;
        align-items: center;

        .icon-pagination {
            cursor: pointer;
            font-size: 14px;
            margin: 0 5px;

            &.active {
                font-size: 22px;
                color: #0047FF;
            }

        }
    }

    .swiper-slide {
        overflow: hidden;
    }

    .item {
        width: 100%;
        height: 100%;
        border-radius: 30px;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
        }
    }

    //.swiper-pagination {
    //    transition: all 1s;
    //    opacity: 1;
    //}
}

@media screen and(max-width: 720px) {
    .dashboard-introduce {
        //.swiper-pagination {
        //    transition: all 1s;
        //    opacity: 0;
        //}
    }
}

@media screen and(min-width: 720px) {
    .dashboard-introduce {

    }
}

@media screen and(min-width: 920px) {
    .dashboard-introduce {

    }
}

@media screen and(min-width: 1080px) {
    .dashboard-introduce {

    }
}

@media screen and(min-width: 1220px) {
    .dashboard-introduce {

    }
}

@media screen and(min-width: 1440px) {
    .dashboard-introduce {

    }
}
</style>
